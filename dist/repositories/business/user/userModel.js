"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema_1 = require("./UserSchema");
// const userSchema = new UserSchema({
//   collection: 'users',
//   toJSON: {
//     transform: (doc, ret) => {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//     },
//   },
//   toObject: {
//     transform: (doc, ret) => {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//     },
//   },
// });
const userCollection = 'users';
const userModel = mongoose_1.model(userCollection, new UserSchema_1.default());
exports.default = userModel;
//# sourceMappingURL=userModel.js.map