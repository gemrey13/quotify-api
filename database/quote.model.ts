import { Schema, model, models, Document } from "mongoose";

export interface IQuote extends Document {
  text: string;
  author: string;
  category: string;
}

const QuoteSchema = new Schema<IQuote>(
  {
    text: {
      type: String,
      required: [true, "Quote text is required"],
      trim: true,
      maxlength: [1000, "Quote text cannot exceed 1000 characters"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
      maxlength: [200, "Author name cannot exceed 200 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Quote = models.Quote || model<IQuote>("Quote", QuoteSchema);

export default Quote;