import { EmailAddress } from "./email-address";

export class Customer {
    constructor(public id?: number, public firstName?: string, public lastName?:string, public emailAdress?:EmailAddress)
    {
    }
}
