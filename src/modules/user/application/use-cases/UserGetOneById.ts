import { User } from "../../domain/model/User";
import { UserRepository } from "../../domain/port/out/UserRepository";
import { UserNotFound } from "../../domain/UserNotFound";

export class UserGetOneById {
    constructor(private userRepository: UserRepository) {}

    async execute(id: number): Promise<User> {
        const user = await this.userRepository.findById(id);
        if(!user) {
            throw new UserNotFound("User not found"); // return 404
        }
        return user;
    }

}