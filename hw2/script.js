/*
1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».
*/

// let name = prompt("Введите имя");
// let age = prompt("Введите возраст");
// let city = prompt("Введите город");
// let company = prompt("Введите телефон");
// let phone = prompt("Введите эл. почту");
// let email = prompt("Введите название компании");

// console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в
// городе ${city} и работаю в компании ${company}. Мои контактные данные:
// ${phone}, ${email}.`);

/*
2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».
*/

// let currentYear = 2024;
// let birthYear = currentYear - age;

// console.log(`${name} родился в ${birthYear} году.`);


/*
3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
*/

// let numbers = "123123";
// let sum1 = Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2]);
// let sum2 = Number(numbers[3]) + Number(numbers[4]) + Number(numbers[5]);

// if (sum1 === sum2) {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }

/*
4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.
*/

// a = -3;

// if (a > 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }


/*
5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.
*/

// let a = 10;
// let b = 2;
// let sum = a + b;
// let sub = a - b;
// let mult = a * b;
// let div = a / b;
// if (sum > 1) {
//     console.log(sum ** 2);
// }

// console.log(`Сумма ${sum}, разность ${sub}, произведение ${mult},
// частное ${div}`);


/*
6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.
*/

// let a = 10;
// let b = 2;

// if ( (a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     console.log("Верно");
// } else {
//     console.log("Верно");
// }


/*
7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую).
*/

// let n = 5;
// switch (true) {
//     case n >= 0 && n <= 15:
//         console.log(`${n} в первой четверти часа`);
//     break;
//     case n > 15 && n <= 30:
//         console.log(`${n} во второй четверти часа`);
//     break;
//     case n > 30 && n <= 45:
//         console.log(`${n} в третьей четверти часа`);
//     break;
//     case n > 45 && n <= 59:
//      console.log(`${n} в четвертой четверти часа`);
//     break;
//     default:
//         console.log(`${n} Некорректное число`);
// }


/*
8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).
*/

// let day = 28;

// switch (true) {
//     case day >= 1 && day <= 10:
//         console.log(`${day} в первой декаде`);
//     break;
//     case day > 10 && day <= 20:
//         console.log(`${day} во второй декаде`);
//     break;
//     case day > 20 && day <= 31:
//         console.log(`${day} в третьей декаде`);
//     break;
//     default:
//         console.log(`${day} Некорректный день`);
// }


/*
9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.
*/

// let days = 365;
// let years = days / 365;
// let months = days / 31;
// let weeks = days / 7;
// let hours = days * 24;
// let minutes = hours * 60;
// let seconds = minutes * 60;

// if (years < 1 && months < 1 && weeks < 1) {
//     console.log(`${days} - меньше года, меньше месяца, и меньше недели, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// } else if (years < 1 && months < 1) {
//     console.log(`${days} - меньше года, меньше месяца, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// } else if (years < 1) {
//     console.log(`${days} - меньше года, ${months} месяцев, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// } else {
//     console.log(`${years} - лет, ${months} месяцев, ${weeks} недель, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// }



/*
10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch..
*/

// let day = 256;
// let month;
// let season;

// if (day >=1 && day <= 31) {
//     month = "Январь";
// } else if (day > 31 && day <= 59) {
//     month = "Февраль";
// } else if (day > 59 && day <= 90) {
//     month = "Март";
// } else if (day > 90 && day <= 120) {
//     month = "Апрель";
// } else if (day > 120 && day <= 151) {
//     month = "Май";
// } else if (day > 151 && day <= 181) {
//     month = "Июнь";
// } else if (day > 181 && day <= 212) {
//     month = "Июль";
// } else if (day > 212 && day <= 243) {
//     month = "Август";
// } else if (day > 243 && day <= 273) {
//     month = "Сентябрь";
// } else if (day > 273 && day <= 304) {
//     month = "Октябрь";
// } else if (day > 304 && day <= 334) {
//     month = "Ноябрь";
// } else if (day > 334 && day <= 365) {
//     month = "Декабрь";
// } else {
//     console.log("Число не входит в календарный год.")
// }

// switch(month) {
//     case "Декабрь":
//     case "Январь":
//     case "Февраль": 
//         season = "Зима";
//         break;
//     case "Март":
//     case "Апрель":
//     case "Май":
//         season = "Весна";
//         break;
//     case "Июнь":
//     case "Июль":
//     case "Август":
//         season = "Лето";
//         break;
//     case "Сентябрь":
//     case "Октябрь":
//     case "Ноябрь":
//         season = "Осень";
//         break;
// }

// console.log(`${day} - ${month} - ${season}`);


/*
Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert)
*/

// let number1 = Number(prompt("Введите первое число"));
// let number2 = Number(prompt("Введите второе число"));
// let guess = Number(prompt("Введите результат умножения"));
// let result = number1 * number2;

// if (guess === result) {
//     alert(`Правильно. Результат ${result}`)
// } else {
//     alert(`Вы не угадали`);
// }


/*
Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’
*/

// let string = "abcde";
// if (string[0] === "a") {
//     console.log("Да");
// } else {
//     console.log("Нет");
// }


/*
У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится.
Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.
*/

// let a = prompt("Введите первую сторону треугольника");
// let b = prompt("Введите вторую сторону треугольника");
// let c = prompt("Введите третью сторону треугольника");

// if ( a + b > c || a + c > b || b + c > a) {
//     console.log("Такой треугольник может существовать");
// } else {
//     console.log("Такой треугольник не существует");
// }