// 1-vazifa nazariy
// let n=+prompt(`n sonni kiriting`)
// let total=0;
// for(i=0; i<=n; i++) {
//     total=total+i;
//     console.log(i);
// }
// console.log(`total `+total);

// 2-vazifa nazariy
let n = +prompt(`n sonni kiriting`);
let total = 0;
let sum=0;
for (i = 0; i <= n; i++) {
  total = total + i;
  console.log(i);
}
let total1=total;
while(total>0)
{
  sum=sum+(total%10);
  total=(total-total%10)/10;
}

let sum1=0;
let summ2=sum;
while (sum > 0) {
  sum1 = sum1 + (sum % 10);
  sum = (sum - (sum % 10)) / 10;
}
console.log(`total1 ` + total1);
 console.log(`summ2 `+summ2);
console.log(`sum1 ` + sum1);
 
