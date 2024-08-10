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

var replaceDots = function (str) {
  let cut = str.split('');
  return cut.map(a => a.replace('.', '-')).join('')

}
// replaceDots("one.two.three")

const grow = (x) => x.reduce((acc, cv) => acc * cv)

function findMultiples(int, limit) {

  let arr = [];

  for (let i = int; i <= limit; i += int) {
    arr.push(i)
  }

  return arr

}

const quarterOf = (month) => {
  return Math.ceil(month / 3)
}

function typeOfSum(a, b) {
  return (typeof (a + b))
}

function findDifference(a, b) {

  let getA = a.reduce((a, b) => a * b)
  let getB = b.reduce((a, b) => a * b)

  return Math.abs(getA - getB)

}

function datingRange(age) {
  let over14 = `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) * 2)}`
  let at14under = `${Math.floor(Math.abs((age * .10) - age))}-${Math.floor((age * .10) + age)}`

  return (age <= 14) ? at14under : over14

}

function warnTheSheep(queue) {

  let get = queue.indexOf("wolf")
  let l = queue.length
  let ans = (l - get) - 1


  return (queue.pop() === "wolf") ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${ans}! You are about to be eaten by a wolf!`

}

var summation = function (num) {
  let arr = []

  while (num >= 1) {
    arr.push(num)
    num--
  }

  return arr.reduce((a, b) => a + b)

}

function whatday(num) {
  switch (num) {
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

function finalGrade(exam, proj) {

  return (exam > 90 || proj > 10) ? 100
    : (exam > 75 && proj >= 5) ? 90
      : (exam > 50 && proj >= 2) ? 75
        : 0

}

function weatherInfo(temp) {

  var cel = (temp - 32) * (5 / 9)

  return (cel <= 0) ? `${cel} is freezing temperature` : `${cel} is above freezing temperature`

}

function testEven(n) {
  return (n % 2 == 0) ? true : false
}
//  testEven(1)

function isOpposite(s1, s2) {

  if (!s1.length || s1.length !== s2.length) {
    return false
  } else {

    let lo = s1.split('').map(a => a == a.toLowerCase())
    let up = s2.split('').map(a => a == a.toUpperCase())

    return lo.every((a, i) => a === up[i])


  }
}

function solution(a, b) {
  return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}

function move(pos, roll) {
  return pos + roll * 2
}

function checkForFactor(base, factor) {
  return (base % factor === 0) ? true : false
}

// checkForFactor(653,7)

function powersOfTwo(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

function summy(nums) {
  return nums.split(' ').map(a => parseInt(a)).reduce((a, b) => a + b)
}

function fizzbuzz(n) {

  let arr = []

  for (var i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 == 0) {
      arr.push('Fizz')
    } else if (i % 5 == 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }

  return arr

}

function moveTen(s) {
  return s.split('').map((a) => a.charCodeAt()).map((a) => (a + 10 <= 122) ? a + 10 : a + 9 - 25).map(a => String.fromCharCode(a)).join('')
}


function findSum(n) {

  let arr = [];

  for (i = n; i > 0; i--) {
    if (i % 5 == 0 || i % 3 == 0) {
      arr.push(i)
    }
  }

  return arr.reduce((a, b) => a + b)
}


var isAnagram = function (test, original) {

  const testS = test.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()

  const originalS = original.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()

  return (testS == originalS) ? true : false
};

var converter = {
	"m": 1,
	"cm": 1e-2,
	"mm": 1e-3,
	"μm": 1e-6,
	"ft": 0.3048,
	"kg": 1,
	"g": 1e-3,
	"mg": 1e-6,
	"μg": 1e-9,
	"lb": 0.453592,
	"G": 6.67e-11,
};

function solution ([a1, b1, r1], [a2, b2, r2]){
	return converter["G"] * 
		a1 * converter[a2] * 
		b1 * converter[b2] / 
		(r1 * converter[r2])**2;
};


function symmetricPoint(p, q){
	return [q[0] * 2 - p[0], q[1] * 2 - p[1]];
}


function rentalCarCost(d) {
	if (d < 3){
		return 40 * d;
	} else if (d >= 3 && d < 7){
		return 40 * d - 20;
	} else if (d >= 7){
		return 40 * d - 50;
	}
}


function invert(lst){
	var arr = [];
	if (lst == arr){
		return arr;
	} else {
		lst.forEach(l => {
			arr.push(-l);
		})
		return arr;
	}
}


function differenceInAges(ages){
	let minAge = Math.min(...ages);
	let maxAge = Math.max(...ages);
	let ageGap = maxAge - minAge;
	return [minAge, maxAge, ageGap];
}


function nearestSq(n){
	var sqBefore = parseInt(Math.sqrt(n))**2;
	var sqAfter = (parseInt(Math.sqrt(n)) + 1)**2;
	if (Math.abs(n - sqBefore) < Math.abs(n - sqAfter)){
		return sqBefore;
	} else {
		return sqAfter;
	}
}

// or

function nearestSq(n){
	return Math.round(n**0.5)**2;
}


function mergeArrays(arr1, arr2) {
	let arr3 = arr1.concat(arr2);
	let arr3Sorted = arr3.sort((a, b) => a - b);
	return Array.from(new Set(arr3Sorted));
}


function multiply(a, b){
	return(a * b);
}


function abbrevName(name){
	var arr = name.split(" ");
	var abbrev = (arr[0][0] + "." + arr[1][0]).toUpperCase();
	return abbrev;
}


function find_average(arr){
	var sum_n = 0
	if (arr.length == 0){
		return 0;
	} else {
		let sum_n = arr.reduce((a, b) => a + b) / arr.length
		return sum_n
	}
}


function sumMix(x){
	return x.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}


function fakeBin(x){
	var binstr = '';
	var fakebin = x.split('');
	fakebin.forEach(f => {
		if (parseInt(f) < 5){
			binstr = binstr + '0';
		} else {
			binstr = binstr + '1';
		}
	})
	return binstr;
}


function countSheep(n){
	if (n == 0){
		return("")
	} else{
		var p = 1;
		var sheep = "";
		while(p <= n){
			sheep = sheep + p.toString() + " sheep...";
			p += 1;
		}
		return(sheep)
	}
}


function toCsvText(array) {
	return array.join('\n');
};


function smash (words) {
	return words.join(" ");
};



function basicOp(operation, value1, value2){
	if (operation == "/" && value2 == 0.0){
		return 0;
	}
	switch(operation){
		case ("+"): return (value1 + value2);
		case ("-"): return (value1 - value2);
		case ("*"): return (value1 * value2);
		case ("/"): return (value1 / value2);
		default: return 0;
	}
}


function drawStairs(n) {
	var answer = [];
	for (let i = 0; i < n; i++){
		answer[i] = `${' '.repeat(i)}I`;
	}
	return answer.join('\n');
}



function arrayPlusArray(arr1, arr2) {
	var sum_a = 0;
	for (var n = 0; n < arr1.length; n++){
		sum_a += arr1[n]
	}
	for (var p = 0; p < arr2.length; p++){
		sum_a += arr2[p]
	}
	return sum_a;
}


function paperwork(n, m) {
	if (m < 0 || n < 0){
		return 0;
	} else {
		return m * n;
	}
}


function changeMe(moneyIn){
	switch (moneyIn){
		case "20p": return "10p 10p";
		case "50p": return "20p 20p 10p";
		case "£1": return "20p ".repeat(5).trim();
		case "£2": return "20p ".repeat(10).trim();
		case "£5": return "20p ".repeat(25).trim();
		default: return moneyIn;
	}
}


function oddCount(n){
	return (Math.floor(n / 2));
}


function flickSwitch(arr){
	i = true;
	let answer = [];
	for (let j = 0; j < arr.length; j++){
		if (arr[j] !== "flick"){
			answer.push(i);
		} else {
			i = !i;
			answer.push(i);
		}
	}
	return answer;
}



const rps = (p1, p2) => {
	var cases = ['rock', 'paper', 'scissors'];
	if (p1 == p2){
		return "Draw!";
	} else if (p1 == cases[0] && p2 == cases[1]){
		return "Player 2 won!";
	} else if (p1 == cases[0] && p2 == cases[2]){
		return "Player 1 won!";
	} else if (p1 == cases[1] && p2 == cases[2]){
		return "Player 2 won!";
	} else if (p1 == cases[1] && p2 == cases[0]){
		return "Player 1 won!";
	} else if (p1 == cases[2] && p2 == cases[0]){
		return "Player 2 won!";
	} else if (p1 == cases[2] && p2 == cases[1]){
		return "Player 1 won!";
	} 
};


function well(x){
	var ideas = x.reduce((a, b) => a + (b == 'good'), 0);
	if (ideas > 2){
		return 'I smell a series!';
	} else if (ideas >= 1){
		return 'Publish!';
	} else {
		return 'Fail!';
	}
}


function isValid(formula){
	if (formula.includes(1) && formula.includes(2)) return false;
	if (formula.includes(3) && formula.includes(4)) return false;
	if (formula.includes(5) && !formula.includes(6)) return false;
	if (formula.includes(6) && !formula.includes(5)) return false;
	if (!formula.includes(7) && !formula.includes(8)) return false;
	return true;
}



function cockroachSpeed(s) {
	return Math.floor(s * 10000 / 360);
}



function replace(s){
	return s.replace(/[aeiouAEIOU]/g, "!");
}



function removeExclamationMarks(s) {
	return s.replace(/!/g, "");
}


function add(a,b){
	return a + b;
};

function divide(a,b){
	return a / b;
};

function multiply(a,b){
	return a * b;
};

function mod(a,b){
	return a % b;
};
   
function exponent(a,b){
	return a**b;
};
	
function subt(a,b){
	return a - b;
};



function points(games) {
	var score = 0;
	games.forEach(g => {
		if (g[0] > g[2]){
			score = score + 3;
		} else if (g[0] < g[2]){
			score = score +0;
		} else if (g[0] == g[2]){
			score = score +1
		}
	});
	return score;
}




function multiply(number){
	var number_length = Math.abs(number)
	var new_number = number * (5 ** (number_length.toString().length));
	return(new_number);
}



function logs(x, a, b){
	return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x));
};



function pillars(numPill, dist, width) {
	if (numPill == 1){
		return 0;
	} else {
		return (numPill - 1) * (dist * 100) + (numPill - 2) * width;
	}
}



class God{
	static create(){
		return [new Man("Adam"), new Woman("Eva")];
	}
}

class Human{
	true;
}

class Man extends Human{}

class Woman extends Human{}




function sumArray(array) {
	if (array && array.length > 1){
		var arr = array.sort((a,b) => a - b).slice(1, -1);
		return arr.reduce((x, y) => x + y, 0);
	} else {
		return 0;
	}
}



function yearDays(year){
	var daysInYear = 365;
	if (year % 400 == 0 || (year % 4 == 0 && year % 100)){
		daysInYear = 366;
	}
	return `${year} has ${daysInYear} days`;
}



const combineNames = (...args) => args.join(" ");



function divisibleBy(numbers, divisor){
	var answer = [];
	for (let i = 0; i < numbers.length; i++){
		if (numbers[i] % divisor == 0){
			answer.push(numbers[i]);
		}
	}
	return answer;
}



var cubeChecker = function(volume, side){
	return 0 < volume && volume == side**3;
}



function fixTheMeerkat(arr) {
	return arr.reverse((a, b) => a - b);
}

// or

function fixTheMeerkat(arr) {
	return arr.reverse();
}


const stringToNumber = function(str){
	return parseInt(str, 10);
}



function numberToString(num) {
	return num.toString();
}



function howMuchILoveYou(nbPetals) {
	if (nbPetals == 1 || (nbPetals % 6) == 1) return "I love you";
	if (nbPetals == 2 || (nbPetals % 6) == 2) return "a little";
	if (nbPetals == 3 || (nbPetals % 6) == 3) return "a lot";
	if (nbPetals == 4 || (nbPetals % 6) == 4) return "passionately";
	if (nbPetals == 5 || (nbPetals % 6) == 5) return "madly";
	if (nbPetals == 6 || (nbPetals % 6) == 0) return "not at all";
}



function maps(x){
	var arr = []
	x.forEach(i => {
		arr.push(i * 2);
	});
	return arr;
}


function monkeyCount(n) {
	let monkeys = new Array();
	for (let i = 1; i <= n; i++){
		monkeys.push(i);
	}
	return monkeys;
}



function countSheeps(arrayOfSheep) {
	var answer = 0;
	for(var s = 0; s < arrayOfSheep.length; s++){
		if (arrayOfSheep[s] == true){
			answer += 1;
			}
		}
	return answer;
}



function feast(beast, dish) {
	return beast[beast.length -1] == dish[dish.length -1] && beast[0] == dish[0];
}



var countSquares = function(cuts){
	return cuts == 0 ? 1 : cuts**2 * 6 + 2;
}



function makeNegative(num){
    if (num > 0){
        return (-num);
    } else {
        return num;
    }
}

// or

function makeNegative(num){
  return num > 0 ? (- num) : num;
}



function repeatStr (n, s) {
	return s.repeat(n);
}



function positiveSum(arr){
	var pos = 0;
	arr.forEach(a => {
		if (a > 0){
			pos += a;
		}
	});
	return pos;
}



function myLanguages(results) {
	var arr = [];
	for (let i in results){
		if (results[i] >= 60){
			arr.push(i);
		}
	}
	return arr.sort((a, b) => results[b] - results[a]);
}



function highAndLow(numbers){
    let nArr = numbers.split(" ");
    let arr = [];
    for (let n = 0; n < nArr.length; n++){
      arr.push(parseInt(nArr[n]));
    }
    return `${Math.max.apply(null, arr)} ${Math.min.apply(null, arr)}`;
  }
  
  // or
  
  function highAndLow(numbers){
    let nArr = numbers.split(" ").map(Number);
    return `${Math.max.apply(null, nArr)} ${Math.min.apply(null, nArr)}`;
  }

  


  function factorialDivision(n, d){
    var answer = 1n;
    for (let i = n; i > d; i--){
        answer *= i;
    }
    return answer;
}




function getCount(str){
	let vovels = ["a", "e", "i", "o", "u"];
	let answer = 0;
	str = str.split("")
	for (let i = 0; i < str.length; i++){
		if (vovels.includes(str[i].toLowerCase())) answer ++;
	}
	return answer;
}

// or

function getCount(str){
	str = str.split("");
	return str.filter(i => "aeiouAEIOU".includes(i)).length;
}

// or

function getCount(str){
	return (str.match(/[aeiouAEIOU]/g) || []).length;
}



function disemvowel(str) {
    let newstring = (str.replace(/a|A|e|E|i|I|o|O|u|U/g, ''));
    return newstring;
}


function opposite(number) {
	return(0 - number);
}


function boolToWord(boolian){
    if (boolian == true){
        return('Yes');
    } else if (boolian == false){
        return('No');
    }
}

// or

function boolToWord(bool){
  return bool === false ? 'No' : 'Yes';
}


function squareDigits(num){
	var numbers = num.toString().split('').map(n => n * n).join('');
	return parseInt(numbers);
}

function removeChar(s){
	var answer = s.slice(1, -1);
	return answer;
};


function filter_list(l) {
	let arr = new Array();
	for (let i = 0; i < l.length; i++){
		if (Number.isInteger(l[i])){
			arr.push(l[i]);
		}
	}
	return arr;
}


function descendingOrder(n){
    let new_n = n.toString().split('').sort().reverse().join('');
    let output = Number(new_n);
    return output;
}


var isSquare = function(n){
	if (n < 0){return false};
	if (n == 0){return true};
	let n1 = 1, n2 = n;
	while (n1 + 1 < n2){
		let n3 = Math.floor((n1 + n2) / 2);
		if (n3**2 < n){
			n1 = n3;
		} else {
			n2 = n3;
		}
	}
	let answer = (n == n1**2 || n == (n1 + 1)**2);
	return answer;
}


function getMiddle(s){
	let midd = Math.floor(s.length / 2);
	if (s.length % 2 == 0){
		return s.slice(midd - 1, midd + 1);
	} else {
		return s.slice(midd, midd + 1);
	}
}



function isIsogram(str) {
	if (str.length == 0) {
		return true;
	} else {
		var s = str.toLowerCase();
	} 
	var arr = s.split('');
	var sortarr = arr.slice().sort();
	for (let i = 0; i < arr.length; i++) {
		if (sortarr[i + 1] == sortarr[i]) {
			return false;
		}
	}
	return true;
}



function noSpace(x){
	return x.replace(/ /g, '');
}




function XO(str) {
    let s = str.toLowerCase();
    return s.split("o").length-1 == s.split("x").length-1;
}



function greet(){
	return "hello world!";
}



function doubleInteger(i) {
	return i*2;
}



function squareSum(numbers){
	var sums = 0;
	for (let i = 0; i < numbers.length; i++){
		var num = numbers[i] * numbers[i];
		sums = sums + num;
	}
	return sums;
}



function greet(name){
	var greet = "Hello, " + name + " how are you doing today?";
	return(greet)
}
