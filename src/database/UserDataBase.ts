import { BaseDataBase } from "./BaseDataBase";
import { TUserDB } from "../types";

export class UserDataBase extends BaseDataBase {

    //ATRIBUTO
    public static TABLE_USERS = "users"

    public async findUser (q: string | undefined) : Promise<TUserDB[]> {
        let usersDB

        if (q) {
            const result: TUserDB[] = await UserDataBase.connection(UserDataBase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await UserDataBase.connection(UserDataBase.TABLE_USERS)
            usersDB = result
        }

        return usersDB
    }

    public async findUserById (id: string | undefined) : Promise<TUserDB | undefined> {
        const [ userDBExists ]: TUserDB[] | undefined[] = await UserDataBase.connection(UserDataBase.TABLE_USERS).where({ id })

        return userDBExists
    }

    public async insertUser (newUserDB: TUserDB) : Promise<void> {
        await UserDataBase.connection(UserDataBase.TABLE_USERS).insert(newUserDB)
    }
}