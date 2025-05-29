import mongoose, { Document, Schema } from 'mongoose';

interface IProblem extends Document {
  title: string;
  description: string;
  urgency: string;
  domain: string;
  decomposition: Array<{ challenge: string; requirements: string; timeline: string }>;
  associatedTeams: mongoose.Types.ObjectId[];
  progress: number;
  impactScore: number;
}

const ProblemSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  urgency: { type: String, required: true },
  domain: { type: String, required: true },
  decomposition: [
    {
      challenge: { type: String, required: true },
      requirements: { type: String, required: true },
      timeline: { type: String, required: true },
    },
  ],
  associatedTeams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  progress: { type: Number, default: 0 },
  impactScore: { type: Number, default: 0 },
});

export default mongoose.model<IProblem>('Problem', ProblemSchema);
