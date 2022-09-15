import { Msg } from '../../interfaces';
import { User } from "../repository/Entities/UserEntity";
import { myDataSource } from "../app-data-source"

export interface EmptyObj {
}

export async function getUsers(request: Msg<EmptyObj>) {
  try {
    let users = await myDataSource.getRepository(User).find()
    if(users.length===0){
      const newUser = new User();
      newUser.fullname = "Иванов Иван";
      newUser.phone = "79998877665";
      await myDataSource.getRepository(User).save(newUser);
      users = await myDataSource.getRepository(User).find()
    }
    return JSON.stringify(users);
  } catch (error) {
    console.error(error);
  }
}
