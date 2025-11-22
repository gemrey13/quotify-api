import { Schema, model, models, Document } from "mongoose";

export interface IFeedback extends Document {
  name: String;
  email: String;
  type: "feedback" | "quote-request";
  message: String;
}

const FeedbackSchema = new Schema<IFeedback>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    type: {
      type: String,
      enum: ["feedback", "quote-request"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedback || model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;