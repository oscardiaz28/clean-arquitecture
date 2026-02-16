import express from "express";
import { InMemoryRepositoryAdapter } from "../modules/user/infrastructure/InMemoryRepositoryAdapter";
import { UserCreate } from "../modules/user/application/use-cases/UseCreate";
import { ExpressUserController } from "../modules/user/infrastructure/rest/ExpressUserController";
import { UserGetAll } from "../modules/user/application/use-cases/UseGetAll";

// repository adapter
const userRepository = new InMemoryRepositoryAdapter()

// use cases
const createUserUseCase = new UserCreate(userRepository)
const getAllUsersUseCase = new UserGetAll(userRepository)

// rest controller
const userController = new ExpressUserController(createUserUseCase, getAllUsersUseCase);

export const userRoutes = express.Router();
userRoutes.post("/", (req, res) => userController.create(req, res) );
userRoutes.get("/",  userController.getAll);
