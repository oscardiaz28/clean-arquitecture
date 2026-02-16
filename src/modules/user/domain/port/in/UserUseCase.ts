import { User } from "../../model/User";

export interface UserUseCase {  
    createUser( user: User ): Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
}

