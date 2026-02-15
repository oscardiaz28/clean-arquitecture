import { User } from "./User";
import { UserId } from "./vo/UserId";

export interface UserRepository {
    save(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: UserId): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}

