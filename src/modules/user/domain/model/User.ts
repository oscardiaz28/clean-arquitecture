import { Name } from "./vo/Name";
import { UserId } from "./vo/UserId";

export class User{
    id: UserId;
    name: Name;
    email: string;
    createdAt: Date

    constructor(id: UserId, name: Name, email: string, createdAt: Date){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public nameAndEmail(): string{  
        return `${this.name} <${this.email}>`;
    }
    

}