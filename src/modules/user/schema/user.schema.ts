/*
import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true },
}, {
  timestamps: true,
});

UserSchema.index({ username: 1}, { unique: true });
UserSchema.index({ email: 1}, { unique: true });*/

import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  username: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);