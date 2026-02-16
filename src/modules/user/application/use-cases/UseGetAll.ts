import { User } from "../../domain/model/User";
import { UserRepository } from "../../domain/port/out/UserRepository";

export class UserGetAll {
    constructor(private readonly userRepository: UserRepository) {} 

    async execute(): Promise<User[]> {
        return await this.userRepository.findAll();
    }   
    
}