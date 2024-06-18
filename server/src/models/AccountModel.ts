import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  profile: {
    type: Schema.Types.String,
    required: true,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  number: {
    type: Schema.Types.Number,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const accountModel = model("account", accountSchema);

export default accountModel;
