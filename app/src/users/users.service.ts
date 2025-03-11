import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Luis', email: 'luis@example.com', age: 25 },
    { id: 2, name: 'Emmanuel', email: 'emmanuel@example.com', age: 30 },
    { id: 3, name: 'Ana', email: 'ana@example.com', age: 28 },
    { id: 4, name: 'Carlos', email: 'carlos@example.com', age: 35 },
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
