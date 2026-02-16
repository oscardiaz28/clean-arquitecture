import { User } from "../../domain/model/User";
import { Name } from "../../domain/model/vo/Name";
import { UserId } from "../../domain/model/vo/UserId";
import { UserRepository } from "../../domain/port/out/UserRepository";

export class UserCreate{
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: number, name: string, email: string, createdAt: Date): Promise<void> {
        const user = new User(new UserId(id), new Name(name), email, createdAt);

        await this.userRepository.save(user);
    }

    

}