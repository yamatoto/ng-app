
interface User {
  'id': number;
  'email': string;
  'password': string;
  'auth': number;
}

export const USERS: User[] = [
  {
    id: 1,
    email: 'admin@example.com',
    password: 'test',
    auth: 0,
  },
  {
    id: 2,
    email: 'normal@example.com',
    password: 'test',
    auth: 1,
  },
  {
    id: 3,
    email: 'test3@example.com',
    password: 'test',
    auth: 2,
  },
];

export function authenticate(email: string, password: string): User | undefined {
  const user: User = Object.values(USERS)
    .find(user => user.email === email && user.password === password);
  return user ? user : undefined;
}
