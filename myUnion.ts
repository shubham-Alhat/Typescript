let score: number | string = 674;

score = "shubham"; // No Error :)

// lets say we're building an application where user can be user or admin.

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  adminId: number;
};

// inially user was normal user
let shubham: User | Admin = {
  name: "Tom",
  id: 101,
};

// Now, it can be change into a admin

shubham = {
  username: "Shubh",
  adminId: 67,
};

// lets use it in function

// function getDataBaseId(id: string | number) {
//     id.toLowerCase()   // error...
// }

// correct use
function getDataBaseId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase(); // works good :)
  } else {
    id.toString();
  }
}

// Array with unions

const data1: number[] = [1, 2, 4]; // cannot add other types except number.

const data2: string[] = ["1", "3", "57"]; // cannot add other types except string

const data3: string[] | number[] = [5363, 774, 838]; // it will either number array or string array.(not both at same time)

const data4: (string | number | boolean)[] = [1, 2, 3, "shubham", true]; // this is possible only using this syntax.

let seatAllotement: "aisle" | "window" | "middle";

seatAllotement = "aisle"; // no error
seatAllotement = "middle"; // no error
seatAllotement = "window"; // no error
seatAllotement = "crew side"; // Throw error...
export {};
