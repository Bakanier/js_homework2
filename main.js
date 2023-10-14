const age = 21; 

if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}

const isStudent = true;

if (isStudent) {
    console.log("Студент");
} else {
    console.log("Не студент");
}

const num1 = 7;
const num2 = 6;

const сумма = num1 + num2
console.log('Сумма', сумма)

const day = 6;

switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;    
    default:
        console.log("Недействительный день недели");
}

const temperature = 25;

if (temperature > 30) {
    console.log("Горячо");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Тепло");
} else {
    console.log("Холодно");
}

const score = 60; 

const результат = score >= 60 ? "Сдал" : "Не сдал";

console.log(результат);

const num = 72;
if (num % 2===0) {
    console.log("Четное");
}else {
    console.log("Не четное");
}

const language = "JavaScript"

if (language === "JavaScript") {
    console.log("поддерживается")
}else {
    console.log("не поддерживается")
}

const userRole = 'admin'

if (userRole === "admin") {
    console.log("Доступ разрешен");
} else if (userRole === "editor") {
    console.log("Доступ ограничен");
} else {
    console.log("Доступ запрещен");
}


const a = 1
const b = 3
const c = 6

if (a >= b && a >= c) {
    console.log("Наибольшее значение: " + a)
} else if (b >= a && b >= c) {
    console.log("Наибольшее значение: " + b)
} else {
    console.log("Наибольшее значение: " + c)
}

const fruit = "яблоко";

if (fruit === "яблоко") {
    console.log("красное")
} else if (fruit === "банан") {
    console.log("желтое")
} else if (fruit === "апельсин") {
    console.log("оранжевый")
} else {
    console.log("другой цвет")
}

const income = 69000;

const message = (income > 50000) ? "Высокий доход" :
              (income > 20000) ? "Средний доход" :
              "Низкий доход";

console.log(message);

const grade = "A";

switch (grade) {
    case "A":
        console.log("Отлично");
        break;
    case "B":
        console.log("Очень хорошо");
        break;
    case "C":
        console.log("Хорошо");
        break;
    case "D":
        console.log("Не совсем хорошо");
        break;
    case "F":
        console.log("Очень плохо");
        break;
    default:
        console.log("Такой оценки нет!")
}

const password = "12345678";

if (password.length >= 8) {
    console.log("Надежный пароль")
} else {
    console.log("Пароль слишком короткий")
}

const x = 2;
const y = 1;

const message1 = (x > y) ? "x больше y" :
                (y > x) ? "y больше x" :
                "x и y равны";

console.log(message1);


const isRaining = true;

if (isRaining === true) {
    console.log("Идет дождь")
}else {
    console.log("Дождя нет")
}

const isLeapYear = true;

if (isLeapYear === true) {
    console.log("Год високосный")
} else {
    console.log("Год не високосный")
}

const userinput = ":3";

if (userinput === "") {
    console.log("Пустая строка")
} else {
    console.log("Строка не пуста")
}

const num3 = 1;

if (num3 > 0) {
    console.log("Положительное");
} else if (num3 < 0) {
    console.log("Отрицательное");
} else {
    console.log("Ноль");
}

const dayOfWeek = "сб"; 

switch (dayOfWeek) {
    case "пн":
    case "вт":
    case "ср":
    case "чт":
    case "пт":
        console.log("Рабочий день");
        break;
    case "сб":
    case "вс":
        console.log("Выходной");
        break;
    default:
        console.log("Неверный день недели");
}

function isPrime(number) {
    if (number <= 1) {
        return false; 
    } for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

const numberToCheck = 73; 
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " - это простое число.");
} else {
    console.log(numberToCheck + " - это не простое число.");
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const inputString = "Лёша на полке клопа нашёл"; 
if (isPalindrome(inputString)) {
    console.log(inputString + " - это палиндром.");
} else {
    console.log(inputString + " - это не палиндром.");
}

const examScore = 50;
const homeworkScore = 50; 


const totalScore = examScore + homeworkScore;

if (totalScore > 90) {
    console.log("A");
} else if (totalScore >= 80 && totalScore <= 89) {
    console.log("B");
} else if (totalScore >= 70 && totalScore <= 79) {
    console.log("C");
} else if (totalScore >= 60 && totalScore <= 69) {
    console.log("D");
} else {
    console.log("F");
}

const balance = 75000;
const withdrawal = 25000; 

if (balance >= withdrawal) {
    console.log("Средств достаточно");
} else {
    console.log("Недостаточно средств");
}

const month = 10;
const year = 2023; 

function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Лето";
        case 9:
        case 10:
        case 11:
            return "Осень";
        default:
            return "Неверный месяц";
    }
}

const season = getSeason(month);

console.log("Сезон: " + season);