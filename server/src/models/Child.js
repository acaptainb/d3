import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChildSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    size: { type: Number, required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'Parent', required: true }, // Reference to Parent
    children: [{ type: Schema.Types.ObjectId, ref: 'Child' }] // Allow for nested children
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export const Child = mongoose.model('Child', ChildSchema);
