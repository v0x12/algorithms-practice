export class G964 {
  public static race = (v1: number, v2: number, g: number) => {
    if (v1 > v2) return null;

    const difference = v2 - v1;
    const approach = (v2 / difference) * g;
    const time = approach / v2;
    console.log(time);
    console.log("CAR1 FT/S: ", v1);
    console.log("CAR2 FT/S: ", v2);
    console.log("THE CAR1 LEAD IS: ", g);
    console.log("THE FT DIFFERENCE BETWEEN THE 2 CAR:", difference);
    console.log(`THE CAR2 NEED TO TRAVEL ${approach}FT, TO APPROACH CAR 1.`);
    console.log("THE TIME WHICH DELAYING UNTIL THE APPROACH: ", time);
    console.log(time * 60 * 60 * 10000);
    const date = new Date(0, 0, 0, 0, 0, 0, Math.round(time * 60 * 60 * 1000));

    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());

    return [date.getHours(), date.getMinutes(), date.getSeconds()];
  };
}

console.log(G964.race(720, 850, 37));
// Another solution
// export class G964 {

//   public static race = (v1, v2, g) => {
//       if (v1 >= v2) return null;

//       let timeInSecond : number = g / (v2-v1) * 3600 ;
//       let hour = Math.floor(timeInSecond / 3600);
//       let minute = Math.floor((timeInSecond / 60) % 60);
//       let second = Math.floor(timeInSecond % 60);

//       return [hour, minute, second];
//   }
// }
