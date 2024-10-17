/*
1. Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8, 
true, «true», соответственно. При помощи оператора определения типа (typeof) 
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в 
консоль (console.log()) типы операторов.
*/

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

/*
2. Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9, 
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль 
результат выражений: 
5 % 3; 
3 % 5; 
5 + '3'; 
'5' – 3; 
75 + 'кг'; 
785 * 653; 
100 / 25; 
0 * 0; 
0 / 2; 
89 / 0; 
98 + 2; 
5 – 98; 
(8 + 56 * 4) / 5; 
(9 - 12) * 7 / (5 + 2); 
+"123"; 
1 || 0; 
false || true; 
true > 0. 
Проверьте (выведите в консоль) каким типам принадлежат переменные. 
*/

let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653; 
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2; 
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5; 
let a14 = (9 - 12) * 7 / (5 + 2); 
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true; 
let a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

/*
3. Напишите скрипт, который находит площадь прямоугольника высотой 23см и 
шириной 10см, значение высоты и ширины должны хранится в width и height, 
соответственно, а значение площади должно хранится в числовой переменной SPryam.
*/

let width = 10;
let height = 23;
let sPryam = width * height;

console.log(sPryam);

/*
4. Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром 
основания равным значению переменной a7 из задания 2, результат поместите в 
переменную VCilindra. 
*/

let heightCylinder = 10;
let diameter = 4;
const pi = 3.14;

let vCilindra = (pi * diameter * diameter) / 4 * heightCylinder;

console.log(vCilindra);

/*
5. Найдите площадь круга (SKruga) с радиусом 5см (r). 
*/
const PI = 3.14;
let r = 5;
let sKruga = PI * Math.pow(r, 2);
console.log(sKruga);


/*
6. Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см 
(h).
*/
let a = 5;
let b = 7;
let h = 10;
let sTrap = (a + b) * h / 2;
console.log(sTrap);


/*
7. Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%), 
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно 
содержаться в переменной Pereplata.
*/

let s = 2;
let p = 0.1;
let years = 5;
let pereplata = s * years * p;
console.log(`Переплата ${pereplata} млн.руб`);




/*
8. Решите уравнения (найдите неизвестный x), где a = 8, b = 3: 
a+2(x-b)=16; 
b(x+15)=a+6x; 
x+2x+ax+bx=23780.
*/

let aU = 8;
let bU = 3;
let x1 = 8 - aU / 2 + bU;
let x2 = (aU - 15 * bU) / (bU - 6);
let x3 = 23780 / (3 + aU + bU);
console.log(x1, x2, x3);


/*
9. Выведите в консоль стихотворение (соблюдайте все переносы и абзацы): 
Бывало, спит у ног собака, 
костер занявшийся гудит, 
и женщина из полумрака 
глазами зыбкими глядит. 
Потом под пихтою приляжет 
на куртку рыжую мою 
и мне, задумчивая, скажет: 
"А ну-ка, спой!.."- и я пою.
*/
let string1 = 'Бывало, спит у ног собака,';
let string2 = 'костер занявшийся гудит,';
let string3 = 'и женщина из полумрака';
let string4 = 'глазами зыбкими глядит.';
let string5 = 'Потом под пихтою приляжет';
let string6 = 'на куртку рыжую мою';
let string7 = 'и мне, задумчивая, скажет:';
let string8 = '"А ну-ка, спой!.."- и я пою.';

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);
console.log(string6);
console.log(string7);
console.log(string8);


/*
10. Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по 
смыслу предложения (1 абзац, переменная text): 
1. «индо земля зашаталась под ногами-и вырос,»; 
2. «и заревел он голосом диким…»; 
3. «блеснула молния и ударил гром,»; 
4. «а так какое-то чудище, страшное и мохнатое,»; 
5. «как будто из-под земли, перед купцом:»; 
6. «Он подошёл и сорвал аленький цветочек.»; 
7. «зверь не зверь, человек не человек,»; 
8. «В ту же минуту, безо всяких туч,». 
*/

let str1 = "индо земля зашаталась под ногами-и вырос,";
let str2 = "и заревел он голосом диким…";
let str3 = "блеснула молния и ударил гром,";
let str4 = "а так какое-то чудище, страшное и мохнатое,";
let str5 = "как будто из-под земли, перед купцом:";
let str6 = "Он подошёл и сорвал аленький цветочек.";
let str7 = "зверь не зверь, человек не человек,";
let str8 = "В ту же минуту, безо всяких туч,";

let text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;
console.log(text);
