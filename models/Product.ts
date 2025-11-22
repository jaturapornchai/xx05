import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  embedding: number[];
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  embedding: {
    type: [Number],
    required: true,
    // Note: The 'index' property here is for standard indexes.
    // Vector search indexes are typically managed in MongoDB Atlas UI or via Atlas Search API.
  },
});

// Prevent overwriting the model if it's already compiled
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
