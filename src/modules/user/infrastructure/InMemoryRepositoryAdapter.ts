import { User } from "../domain/model/User";
import { Name } from "../domain/model/vo/Name";
import { UserId } from "../domain/model/vo/UserId";
import { UserRepository } from "../domain/port/out/UserRepository";

export class InMemoryRepositoryAdapter implements UserRepository {

    private users: User[] = [
        new User(new UserId(1), new Name("John Doe"), "john@gmail.com", new Date()),
    ];

    save(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }

    findAll(): Promise<User[]> {
        return Promise.resolve(this.users);
    }

    findById(id: number): Promise<User | null> {
        const user = this.users.find(user => user.id.value === id);
        return Promise.resolve(user || null);
    }

    findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        return Promise.resolve(user || null);
    }

    update(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id.value === user.id.value);
        if (index !== -1) {
            this.users[index] = user;
        }   
        return Promise.resolve();
    }

    delete(id: number): Promise<void> {
        this.users = this.users.filter(user => user.id.value !== id);
        return Promise.resolve();
    }

}