import { UserRepository } from '../repository/User';
import { Msg } from '../../interfaces';

export interface GetByUserId {
  userId: string;
}

export async function getByUserId(request: Msg<GetByUserId>) {
  try {
    console.log('trying')
    const userRepository = new UserRepository();
    const userId = request.userId;
    const users = await userRepository.getByUserId(userId);
    return users;

  } catch (error) {
    console.error(error);
    (this as any).createError(error);
  }
}
