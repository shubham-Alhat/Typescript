type User = {
  readonly _id: [];
  name: string;
  age: number;
  email: string;
  creditCard?: boolean;
};

// here we create a variable
let u: User = {
  _id: [],
  name: "hiests",
  age: 46,
  email: "gs@.com",
};

u._id;

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: number;
};

// merge two type into one
type cardDetails = cardDate & cardNumber & { cvv: number };
