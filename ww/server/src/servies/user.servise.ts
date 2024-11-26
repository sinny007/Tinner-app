//import { get } from "mongoose"

import mongoose, { Query, RootFilterQuery } from "mongoose"
import { _updateProfile, _userPagination, user } from "../types/user.type"
import { $ } from "bun"
import { QueryHelper } from "../helper/qury.helper"

export count userservise = {
    get: function (pagination: _userPagination, user_id: string): Promise<_userPagination> {
        let filter: RootFilterQuery<IUserDocument> = {
            _id:{$nin: new mongoose.Types.ObjectId(user_id) },
            $and: QueryHelper.parseUserQuery(pagination)
        }
        //-- to be continue
    },

    getByUsername: function (username: string): Promise<user> {
        throw new Error('not implement')
    },

    _updateProfile: function (Newprofile:updateprofile, user_id: string): Promise<user> {
        throw new Error('not implement')
    },
}