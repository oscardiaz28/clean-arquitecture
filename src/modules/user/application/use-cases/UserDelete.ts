import { UserRepository } from "../../domain/port/out/UserRepository";

export class UserDelete {
    constructor(private userRepository: UserRepository) {}    

    async execute(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

}