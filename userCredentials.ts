interface userCredentials {
  userId: number | string;
  name: string;
  dateOfBirth: number | string;
  email: string;
  status: 'active' | 'inactive';
}

// collect information from database

export const userCredentials: userCredentials = {
  userId: 1,
  name: 'Bobby',
  dateOfBirth: '1999-02-12',
  email: 'bobbysworld@example.com',
  status: 'active',
};
