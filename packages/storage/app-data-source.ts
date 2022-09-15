import { DataSource } from "typeorm"
import { User } from './repository/Entities/UserEntity';
import "reflect-metadata"

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "yourpassword",
  database: "users",
  entities: [User],
  logging: true,
  synchronize: true,
})
