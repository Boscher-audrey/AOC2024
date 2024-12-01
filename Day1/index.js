const fs = require("fs");

// Part 1
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const locationsID = input.split("\r\n");
  const leftArray = [],
    rightArray = [];

  for (var i = 0; i < locationsID.length; i++) {
    const IDs = locationsID[i].split("  ");
    leftArray.push(IDs[0]);
    rightArray.push(IDs[1]);
  }

  const leftIDs = leftArray.sort();
  const rightIDs = rightArray.sort();

  const distanceArray = leftIDs.map((id, index) =>
    Math.abs(id - rightIDs[index])
  );

  const distance = distanceArray.reduce(
    (previous, current) => previous + current
  );

  console.log({ distance });
});

// Part 2
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const input = data.toString();
  const locationsID = input.split("\r\n");
  const leftArray = [],
    rightArray = [];

  for (var i = 0; i < locationsID.length; i++) {
    const IDs = locationsID[i].split("  ");
    leftArray.push(parseInt(IDs[0]));
    rightArray.push(parseInt(IDs[1]));
  }

  const scoreArray = leftArray.map((id, index) => {
    let i = 0;
    rightArray.map((e) => {
      if (e == id) i++;
    });

    return id * i;
  });

  const score = scoreArray.reduce((previous, current) => previous + current);

  console.log({ score });
});
