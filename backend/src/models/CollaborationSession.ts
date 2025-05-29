import mongoose, { Document, Schema } from 'mongoose';

interface ICollaborationSession extends Document {
  team: mongoose.Types.ObjectId;
  sessionData: {
    chatLogs: Array<{ sender: string; message: string; timestamp: Date }>;
    whiteboardData: string;
  };
  aiInsights: Array<{ insight: string; timestamp: Date }>;
  breakthroughMoments: Array<{ description: string; timestamp: Date }>;
}

const CollaborationSessionSchema: Schema = new Schema({
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  sessionData: {
    chatLogs: [
      {
        sender: { type: String, required: true },
        message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    whiteboardData: { type: String, default: '' },
  },
  aiInsights: [
    {
      insight: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  breakthroughMoments: [
    {
      description: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model<ICollaborationSession>('CollaborationSession', CollaborationSessionSchema);
