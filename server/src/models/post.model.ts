import mongoose, { Model, Schema } from "mongoose";
import { IPost } from "../types/post";

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: String, required: true }, // ou mongoose.Schema.Types.ObjectId si tu veux faire un ref
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: () => new Date(), immutable: true },
    updatedAt: { type: Date, default: () => new Date() },
    imageUrl: { type: String, default: "" },
  },
  { versionKey: false }
);

// Met à jour updatedAt automatiquement
PostSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const PostModel: Model<IPost> = mongoose.model("Post", PostSchema, "posts");

export default PostModel;
