import { User } from "../domain/model/User";
import { UserUseCase } from "../domain/port/in/UserUseCase";
import { UserRepository } from "../domain/port/out/UserRepository";

export class UserService implements UserUseCase {
    
    constructor(private userRepository: UserRepository) {}

    createUser(user: User): Promise<void> {
        return this.userRepository.save(user);
    }

    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    getUserById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

    getUserByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

    updateUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}