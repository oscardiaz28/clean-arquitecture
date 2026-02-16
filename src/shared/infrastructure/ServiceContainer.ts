import { PostgreSqlRepositoryAdapter } from "../../modules/user/infrastructure/PostgreSqlRepositoryAdapter"

const userRepository = new PostgreSqlRepositoryAdapter();

export const ServiceContainer = {
    user: {
        
    }
}