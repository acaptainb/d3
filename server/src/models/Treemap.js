import { type } from 'express/lib/response'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TreemapSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    parents:{type: Schema.Types.ObjectId, ref: 'Treemap', required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'ClusteredTreemap', default: null }, // Reference to parent
    children: [{ type: Schema.Types.ObjectId, ref: 'ClusteredTreemap' }],
    size: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

TreemapSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
