let user: (number | string)[] = [1, 2, "s"]; // here order dont matter at all..

// but when we say like

let apiData: [string, number, boolean];
apiData = ["", 657, true];
// all correct

apiData = [757, "sh", true]; // throws error.
