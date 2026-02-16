import { User } from "../../domain/model/User";
import { Name } from "../../domain/model/vo/Name";
import { UserId } from "../../domain/model/vo/UserId";
import { UserRepository } from "../../domain/port/out/UserRepository";

export class UserEdit{
    constructor(private readonly userRRepository: UserRepository){}

    async execute( id: number, name: string, email: string ): Promise<void>{
        const user = new User(new UserId(id), new Name(name), email, new Date());
        return await this.userRRepository.update(user);
    }

    
    

}