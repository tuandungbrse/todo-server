import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Todo', Todo);
