import { Pool } from "pg";
import { User } from "../domain/model/User";
import { UserRepository } from "../domain/port/out/UserRepository";
import { env } from "../../../config/env";
import { Name } from "../domain/model/vo/Name";
import { UserId } from "../domain/model/vo/UserId";
import { text } from "express";
import { UserNotFound } from "../domain/UserNotFound";

type PostgreUser ={
    id: number,
    name: string,
    email: string,
    created_at: Date
}

export class PostgreSqlRepositoryAdapter implements UserRepository {
    client: Pool

    constructor() {
        this.client = new Pool({
            user: env.DB_USER,
            host: env.DB_HOST,
            database: env.DB_NAME,      
            password: env.DB_PASSWORD,
            port: parseInt(env.DB_PORT),
        });
    }

    async save(user: User): Promise<void> {
        const query = {
            text: "INSERT INTO users (id, name, email, created_at) VALUES ($1, $2, $3, $4)",
            values: [user.id.value, user.name.value, user.email, user.createdAt],
        }
        await this.client.query(query);
    }

    async findAll(): Promise<User[]> {
        const query = "SELECT * FROM users";
        const result = await this.client.query(query);
        return result.rows.map( row => new User(
            new UserId(row.id),
            new Name(row.name),
            row.email,
            row.created_at
        ));
    }
    
    async findById(id: number): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id],
        }
        const result = await this.client.query(query);
        if( result.rows.length === 0) return null;

        const row = result.rows[0];
        return new User(
            new UserId(row.id),
            new Name(row.name),
            row.email,
            row.created_at
        );
    }

    async findByEmail(email: string): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE email = $1",
            values: [email],
        }
        const result = await this.client.query(query);
        if(result.rows.length === 0) return null;
        const row = result.rows[0];
        return new User(
            new UserId(row.id),
            new Name(row.name),
            row.email,
            row.created_at
        );
    }

    async update(user: User): Promise<void> {
        const query = {
            text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            values: [user.name.value, user.email, user.id.value],
        }
        await this.client.query(query);
    }

    async delete(id: number): Promise<void> {
        const user = await this.findById(id);
        if(!user) throw new UserNotFound(`User with id ${id} not found`);
        const query = {
            text: "DELETE FROM users WHERE id = $1",
            values: [id],
        }
        
        await this.client.query(query);
    }

}