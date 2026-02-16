import { User } from "../../model/User";

export interface UserRepository {
    save(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
}

