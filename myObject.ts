const myObject = {
  name: "shubham",
  age: 30,
  isPaid: true,
};

function createUser({ name: string, isPaid: boolean }) {
  return true;
}

const newUser = { name: "shubham", isPaid: true, email: "swayam@mail.com" };

createUser(newUser);

export {};
