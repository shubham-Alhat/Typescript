const heroes: string[] = [];

heroes.push("shubham");

// --------- OR ---------- //

const hero: number[] = [];

hero.push(65);

// array syntax for ml models

const mlModel: number[][] = [
  [535, 65, 879],
  [255, 758, 907],
];

// wrong way
// mlModel.push(464)

// correct way
mlModel.push([546, 879, 84]);
