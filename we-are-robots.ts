export function countRobots(a: string[]) {
  //code here
  let functioning = 0;
  let dancing = 0;

  a.forEach((sentence) => {
    if (sentence.match(/functioning*/g)) {
      let counter = 0;
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "0") counter++;
      }
      functioning = counter / 2 >= 1 ? Math.floor(counter / 2) : 0;
    }
    if (sentence.match(/dancing*/g)) {
      let counter = 0;
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "0") counter++;
      }
      dancing = counter / 2 >= 1 ? Math.floor(counter / 2) : 0;
    }
  });

  console.log(functioning, dancing);
  return [
    `${functioning} robots functioning automatik`,
    `${dancing} robots dancing mechanik`,
  ];
}

console.log(
  countRobots([
    "d[(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b",
  ])
);
