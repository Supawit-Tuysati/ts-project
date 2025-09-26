interface User {
  id: number;
  name: string;
}

class UserService {
  private users: User[] = [{ id: 1, name: "Alice" }];

  getAll() {
    return this.users;
  }

  create(data: { name: string }) {
    const newUser = { id: Date.now(), name: data.name };
    this.users.push(newUser);
    return newUser;
  }
}

export default new UserService();
