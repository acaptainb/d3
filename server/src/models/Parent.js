import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ParentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    size: { type: Number, required: true },
    children: [{ type: Schema.Types.ObjectId, ref: 'Child' }] // Array of references to Child
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export const Parent = mongoose.model('Parent', ParentSchema);
