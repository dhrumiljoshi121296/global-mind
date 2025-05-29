import mongoose, { Document, Schema } from 'mongoose';

interface ITeam extends Document {
  problem: mongoose.Types.ObjectId;
  members: Array<{ user: mongoose.Types.ObjectId; role: string }>;
  collaborationData: {
    chatLogs: Array<{ sender: string; message: string; timestamp: Date }>;
    whiteboardData: string;
  };
  solutions: Array<{ idea: string; progress: number }>;
}

const TeamSchema: Schema = new Schema({
  problem: { type: Schema.Types.ObjectId, ref: 'Problem', required: true },
  members: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      role: { type: String, required: true },
    },
  ],
  collaborationData: {
    chatLogs: [
      {
        sender: { type: String, required: true },
        message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    whiteboardData: { type: String, default: '' },
  },
  solutions: [
    {
      idea: { type: String, required: true },
      progress: { type: Number, default: 0 },
    },
  ],
});

export default mongoose.model<ITeam>('Team', TeamSchema);
