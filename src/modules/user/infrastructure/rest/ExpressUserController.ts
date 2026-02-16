import { Request, Response } from "express";
import { UserCreate } from "../../application/use-cases/UseCreate";
import { UserGetAll } from "../../application/use-cases/UseGetAll";

export class ExpressUserController {

    constructor(
        private useCreate: UserCreate,
        private useGetAll: UserGetAll
    ) {}    

    public async create(req: Request, res: Response) {
        const { name, email, createdAt } = req.body
        try {
            await this.useCreate.execute( 1, name, email, new Date(createdAt) );
            res.status(201).json({ message: "User created successfully" });

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Error creating user"});
        }
    }

    getAll = async (req: Request, res: Response)  => {
        try {
            const users = await this.useGetAll.execute();
            res.status(200).json(users);

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Error fetching users"});
        }
    }

}