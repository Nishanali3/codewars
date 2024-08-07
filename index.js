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
