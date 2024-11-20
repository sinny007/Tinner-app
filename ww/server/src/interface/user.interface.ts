import mongoose from "mongoose";
import { register, user } from "../types/accout.type"

type userWithOutID = Omit<user, 'id'>
