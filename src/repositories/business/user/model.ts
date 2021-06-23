import { model } from 'mongoose';
import UserSchema from './Schema';

const userCollection = 'users';
const userModel = model(userCollection, new UserSchema());

export default userModel;
