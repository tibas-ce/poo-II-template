import { TAccountDB } from "../types";
import { BaseDataBase } from "./BaseDataBase";


export class AccountDataBase extends BaseDataBase {

    public static TABLE_ACCOUNT = "accounts"

    public async findAccounts(): Promise<TAccountDB[]> {
        const accountsDB: TAccountDB[] = await AccountDataBase.connection(AccountDataBase.TABLE_ACCOUNT)

        return accountsDB
    }

    public async findAccountById(id: string | undefined): Promise<TAccountDB | undefined> {
        const [ accountDB ]: TAccountDB[] | undefined[] = await AccountDataBase.connection(AccountDataBase.TABLE_ACCOUNT).where({ id })

        return accountDB
    }

    public async insertAccount (newAccountDB: TAccountDB): Promise<void> {
        await AccountDataBase.connection(AccountDataBase.TABLE_ACCOUNT).insert(newAccountDB)
    }

    public async updateAccount (newBalance: number, id: string): Promise<void>  {
        await AccountDataBase.connection(AccountDataBase.TABLE_ACCOUNT).update({ balance: newBalance }).where({ id })
    }
}