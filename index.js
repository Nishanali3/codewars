function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}
// sumStr("4","5")

function hello(name) {
  if (name == null || !name.length) {
    return "Hello, World!";
  } else {
    let arr = name.toLowerCase().split("");
    let first = arr[0][0].toUpperCase();
    arr.splice(0, 1);

    let newName = first.split("").concat(arr).join("");

    return !name.length ? "Hello, World!" : `Hello, ${newName}!`;
  }
}

// hello();

function isDivideBy(num, a, b) {
  return num % a == 0 && num % b == 0 ? true : false;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((a) => a.replace("T", "U"))
    .join("");
}

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

function removeEveryOther(arr) {
  return arr.filter((a, i) => i % 2 == 0);
}

function pipeFix(num) {
  let arr = [];
  let stop = num.pop();

  if (num == false) {
    return [2];
  } else {
    for (let i = num[0]; i <= stop; i++) {
      arr.push(i);
    }
    return arr;
  }
}

// pipeFix([1, 7]);

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
// mouthSize("alligator");

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  }
}

// getRealFloor(1);

function unusualFive() {
  return ["a", "a", "a", "a", "a"].length;
}
//   unusualFive()

function setAlarm(emp, vac) {
  return emp == true && vac == false ? true : false;
}

function shorter_reverse_longer(a, b) {

  return (a.length >= b.length) ?
    `${b}${a.split('').reverse().join('')}${b}`
    :
    `${a}${b.split('').reverse().join('')}${a}`
}

var replaceDots = function(str) {
  let cut = str.split('');
  return cut.map(a => a.replace('.','-')).join('')

}
// replaceDots("one.two.three")

const grow = (x) => x.reduce((acc, cv)=> acc * cv)

function findMultiples(int, limit) {

  let arr = [];
  
    for (let i=int; i<=limit; i+=int){
      arr.push(i)
    }

  return arr
  
}

const quarterOf = (month) => {
  return Math.ceil(month/3)
 }

 function typeOfSum(a, b) {
  return (typeof (a+b))
}

function findDifference(a, b) {

  let getA = a.reduce((a,b)=> a*b)
  let getB = b.reduce((a,b)=> a*b)

  return Math.abs(getA - getB)

}

function datingRange(age){
  let over14 = `${Math.floor((age/2)+7) }-${Math.floor((age-7)*2) }`
  let at14under = `${Math.floor(Math.abs( (age*.10)-age))}-${Math.floor((age*.10)+age)}`
  
  return(age<=14)? at14under : over14

}

function warnTheSheep(queue) {

  let get = queue.indexOf("wolf") 
  let l = queue.length
  let ans = (l-get)-1
  
  
 return (queue.pop() === "wolf") ?"Pls go away and stop eating my sheep" 
  :`Oi! Sheep number ${ans}! You are about to be eaten by a wolf!`
  
}

var summation = function (num) {
  let arr = []

    while(num >= 1){
      arr.push(num)
      num--
    }

  return arr.reduce((a,b)=> a+b)
    
}

function whatday(num) { 
  switch(num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return 'Wrong, please enter a number between 1 and 7';
  }
}

function finalGrade (exam, proj) {

  return (exam > 90 || proj > 10) ? 100 
    : (exam > 75 && proj >= 5) ? 90 
    : (exam > 50 && proj >= 2) ? 75
    : 0

}

function weatherInfo (temp) {

  var cel = (temp - 32) * (5/9)
  
  return (cel <= 0)? `${cel} is freezing temperature` : `${cel} is above freezing temperature`
  
  }

  function testEven(n) {
    return (n%2 == 0)? true : false
 }
//  testEven(1)

function isOpposite(s1,s2){

  if(!s1.length || s1.length !== s2.length){
    return false
  }else{
    
    let lo = s1.split('').map(a => a == a.toLowerCase())
    let up = s2.split('').map(a => a == a.toUpperCase())
  
    return lo.every((a,i)=> a === up[i])
  
  
  }
}

function solution(a, b){
  return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}

function move (pos, roll) {
  return pos + roll * 2 
}

function checkForFactor (base, factor) {
  return (base % factor === 0) ? true : false
}

// checkForFactor(653,7)

function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
