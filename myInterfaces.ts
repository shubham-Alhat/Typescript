interface User {
  readonly passcode: number;
  email: string;
  userID: string;
  googleID?: number;
  // startTrial: () => string;    // first method
  startTrial(): string; // it is method and it is going to return string.
  getDiscount(name: string, discount: number): number;
}

// adding github login feature...
// ie. reopening of interface.
interface User {
  githubID: number;
}

interface Admin extends User {
  role: string;
}

let shubham: Admin = {
  passcode: 354,
  role: "Admin or Big Boss", // due to inheretence
  email: "s@s.com",
  userID: "shubhamAI",
  startTrial: () => {
    return "Started..";
  },
  getDiscount: (name: "dhamaka", discount: 46) => {
    return 4783;
  },
  githubID: 54647, // added githubID in interface
};
