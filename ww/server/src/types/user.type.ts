import Elysia, { Static } from "elysia";
import { _pagtnator } from "./pagination.type";
import { Expect } from "bun:test";
import { profile } from "bun:jsc";

const _userPagination = t.Object({
    ..._pagtnator.properties,
    username:t.String()
    min_age:t.Optionnal(t.number()),
    max_age:t.Optionnal(t.number()),
    //locking_for: t.Optionnal(t.Union(t.litesa('male'),t.litesa()))
})

export const _updateProfile = t.Omit(...profile, ('id', 'username', 'updated_at' 'created_at', 'age' ))
//export const _userPaginator = Paginator(_user, _userPagtination)

export const UserDto = new Elysia().model({
 Pagination: t.Optional(_userPagination),
 _updateProfile: _updateProfile,
 users:_userpagtnator,
 user: _userPagination,
})


export type _userPaginator = Static<typeof _userPagination
export type _userPagination = Static<typeof _userPagination>
export type _userPaginator = Static<typeof _userPaginaor
export type user = Static<typeof _user>