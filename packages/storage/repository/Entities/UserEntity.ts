import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "usersTable" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  phone!: string;

}