import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  skills: Array<{ domain: string; level: string; verified: boolean }>;
  availability: {
    timezone: string;
    hours: number;
    preferences: string[];
  };
  personalityTraits: string[];
  projectHistory: Array<{ title: string; role: string; rating: number }>;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  skills: [
    {
      domain: { type: String, required: true },
      level: { type: String, required: true },
      verified: { type: Boolean, default: false },
    },
  ],
  availability: {
    timezone: { type: String, required: true },
    hours: { type: Number, required: true },
    preferences: [{ type: String }],
  },
  personalityTraits: [{ type: String }],
  projectHistory: [
    {
      title: { type: String, required: true },
      role: { type: String, required: true },
      rating: { type: Number, default: 0 },
    },
  ],
});

export default mongoose.model<IUser>('User', UserSchema);
