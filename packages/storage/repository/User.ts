import { User } from '../../interfaces';

export class UserRepository {
  private db = 'mongodb';
  constructor() {}
  private users: User[] = [
    {
      id: '8d98d0f7-9b28-448a-9c5b-9bbc500727b2',
      name: 'Vasily'
    },
    {
      id: '1e033e8f-c88e-405d-8577-111a0496cb13',
      name: 'Jury'
    }
  ];

  public async getByUserId(userId: string): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.users), 300);
    });
  }
}
