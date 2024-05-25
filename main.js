

// let _creator = "Виробник"
// let _model = "Модель"
// let _year = "Рік випуску"
// let _avgspd = "Середня швидкість"

let car = {
  Audi: "Виробник",
  R8: "Модель",
  2024: "Рік випуску",
  220: "Середня швидкість",
  distanse: prompt("Enter distanse: "),

}


// for (let i in car) {
//   document.write(`<h1>${car[i]} : ${i}</h1>`);
// }


// Object.keys(car)
//   .forEach(function eachKey(i) {
//     document.write(`<h1>${car[i]} : ${i}</h1>`);
//   });




let ckey = Object.keys(car);
for (let index = ckey.length - 2; index >= 0; index--) {
  const key = ckey[index];
  const value = car[key];
  document.write(`<h1>${value} : ${key}</h1>`);
}

let getTime = (d) => {
  console.log(d);
  let hours = Math.floor(d / 220)
  console.log(hours);

  let alltime = hours;
  while (hours > 4) {
    hours -= 4
    alltime += 1
  }
  return alltime;
}

document.write(`<h1>Необхідний час: ${getTime(car.distanse)}</h1>`);


class Fraction {
  constructor(numerator, denominator) {
    if (denominator === 0) {
      console.error("Знаменник не може бути нулем.")
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }


  // Метод для скорочення дробу
  reduce() {
    let gcd = Fraction.gcd(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
  }

  // Статичний метод для знаходження НСД
  static gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Додавання дробів
  add(other) {
    let newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    let newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Віднімання дробів
  subtract(other) {
    let newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
    let newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Множення дробів
  multiply(other) {
    let newNumerator = this.numerator * other.numerator;
    let newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Ділення дробів
  divide(other) {
    if (other.numerator === 0) {
      throw new Error("Дріб, який ділить, має чисельник, що дорівнює нулю.");
    }
    let newNumerator = this.numerator * other.denominator;
    let newDenominator = this.denominator * other.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Вивід дробу у вигляді рядка
  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

let frac = new Fraction(10, 45)
let frac1 = new Fraction(78, 45);
let operations = {};
operations.addition = frac.add(frac1);
operations.subtract = frac1.subtract(frac);
operations.mult = frac1.multiply(frac);
operations.divide = frac1.divide(frac);

console.log('Addition: ' + operations.addition.toString());
console.log('Subtraction: ' + operations.subtract.toString());
console.log('Multiplication: ' + operations.mult.toString());
console.log('Division: ' + operations.divide.toString());

class Time {
  constructor(hours, minutes, seconds) {
    if (hours < 0 || minutes < 0 || seconds < 0) {
      console.error("Час не може бути від'ємним.");
    }
    if (hours > 24 || minutes > 60 || seconds > 60) {
      console.error("Перевищення часової межі");
    }
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  toString() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  addHours(hours) {
    this.hours += hours
    if (this.hours > 24) {
      console.error("Неправильне значення хвилин");
    }
  }

  addMinutes(minutes) {
    this.minutes += minutes
    if (this.minutes > 60) {
      console.error("Неправильне значення хвилин");
    }
  }

  addSeconds(seconds) {
    this.seconds += seconds
    if (this.seconds > 60) {
      console.error("Неправильне значення хвилин");
    }
  }
}


let time = new Time(11, 22, 36);
time.addSeconds(-5)
console.log(time.toString())
time.addHours(1)
console.log(time.toString())
time.addMinutes(95)
console.log(time.toString())
let time1 = new Time(25, 22, 36)