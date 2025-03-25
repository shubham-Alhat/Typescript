const myObject = {
  name: "shubham",
  age: 30,
  isPaid: true,
};

function createUser({ name: string, isPaid: boolean }) {
  return true;
}

createUser({ name: "shubhamAlhat", isPaid: false });

function createCourse(): {} {
  return { name: "hitesh", age: 21 };
}
