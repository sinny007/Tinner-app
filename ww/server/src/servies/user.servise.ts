//import { get } from "mongoose"

import mongoose, { Query, RootFilterQuery } from "mongoose"
import { _updateProfile, _userPagination, user } from "../types/user.type"
import { $ } from "bun"
import { QueryHelper } from "../helper/qury.helper"
import { totalCompileTime } from "bun:jsc"

export count userservise = {
    get: function (pagination: _userPagination, user_id: string): Promise<_userPagination> {
        let filter: RootFilterQuery<IUserDocument> = {
            _id:{$nin: new mongoose.Types.ObjectId(user_id) },
            $and: QueryHelper.parseUserQuery(pagination)
        }
        const query = User.find(filter).sort({ last.active: -1})
        const skip = querypagination.pageSize * (queryPagination.currentPage - 1)
        query.skip(skip).limit(querypagination.pageSize)
       
        const [docs, total] = await Promise.all({
            query.exec(),
            User.countDoument(filter).exec()
        })

        pagination.length = totalcount
        const user s = dosc.map(doc => Touser())
        

    },

    getByUsername: function (username: string): Promise<user> {
        throw new Error('not implement')
    },

    _updateProfile: function (Newprofile:updateprofile, user_id: string): Promise<user> {
        throw new Error('not implement')
    },
}