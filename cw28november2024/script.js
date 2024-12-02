/*
1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.
*/
{
let arr = [];
let citiesOfBelarus = [];
function addCities(city) {
    if (!city) {
        let promptCity = prompt("Введите город");
        arr.push(promptCity);
    } else if (city.includes(", ")) {
        let cityArr = city.split(", ");
        for (let i = 0; i < cityArr.length; i++) {
            arr.push(cityArr[i]);
        }
    } else {
        arr.push(city);
    }
    return arr.sort();
}

console.log(addCities("Минск, Брест, Гродно, Хойники, Наровля, Червень"));
console.log(addCities());

}

/*
2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.
*/
{

let arr =  [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

let personCityArr = [];

for (let i = 0; i < arr[0].length; i++) {
    let personCity = "";
    for(let j = 0; j < arr.length; j++) {
        personCity = (personCity.length == 0) ? personCity.concat(arr[j][i]) : personCity.concat(" из ").concat(arr[j][i]);
    }
    personCityArr.push(personCity);
}

console.log(personCityArr);

let distanceArr = [0, 348, 278, 198];

function calculateDistance(primaryPerson, secondaryPerson) {
    let primaryCity = getCity(primaryPerson);
    let secondaryCity = getCity(secondaryPerson);
    let primaryIndex = getCityIndex(primaryCity);
    let secondaryIndex = getCityIndex(secondaryCity);
    let primaryDistance = distanceArr[primaryIndex];
    let secondaryDistance = distanceArr[secondaryIndex]; 
    let distance = primaryDistance + secondaryDistance;
    console.log(`Расстояние между ${primaryPerson} из города ${primaryCity} и ${secondaryPerson} из города ${secondaryCity} составляет ${distance} км`);
}

function getCity(person) {
    let personFromCity = personCityArr.filter(personCity => personCity.startsWith(person))[0].split(" ");
    return personFromCity[personFromCity.length - 1];
}

function getCityIndex(city) {
    for(let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == city) {
                return j;
            }
        }
    }
}

calculateDistance("Иван", "Максим");  
}

/*
3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).
*/
{
function diffBetweenDays(startDate, endDate) {
    let primaryDate = new Date(startDate);
    let secondaryDate = new Date(endDate);

    if (primaryDate == secondaryDate) {
        return `Даты совпадают. Разницы нет.`;
    }

    let datesDiff = secondaryDate - primaryDate;

    if (datesDiff < 0) {
        return `Даты перепутаны (начальная дата ${startDate}, конечная дата ${endDate}). Поменяйте их местами.`;
    }
    
    let datesDiffInDays = datesDiff / 1000 / 60 / 60 / 24;
    
    let message;
    switch (true) {
        case datesDiffInDays < 3:
            message = "Дата уже близко";
        break;

        case datesDiffInDays >= 3 && datesDiffInDays <= 7:
            message = "Еще есть время";
        break;

        case datesDiffInDays > 7:
            message = "Далековато еще";
        break;

        default: 
            message = `Некорректные даты. Стартовая дата ${primaryDate}, конечная ${secondaryDate} `;
        break;
    }
    return `Дней между датами: ${datesDiffInDays}. ${message}`
}
console.log(diffBetweenDays("2025.04.10", "2025.04.12"));
console.log(diffBetweenDays("2025.04.09", "2025.04.12"));
console.log(diffBetweenDays("2025.04.01", "2025.04.12"));
}

/*
4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).
*/
{
function celsiusToFahrenheit(celsius) {
    let result = Math.round((celsius * 9/5 + 32), 2);
    let message = `${result}°F.`;

    if (result <= 10 && result >= 5) {
        message = message.concat(` Сегодня прохладнее, чем обычно`);
    } else if (result >= 0 && result < 5) {
        message = message.concat(` Одевайтесь теплее`);
    } else if (result < 0 && result >= -5) {
        message = message.concat(` Сегодня очень холодно`);
    } else if (result < -5) {
        message = message.concat(` Оставайтесь дома`);
    }
        return message;
}

console.log(celsiusToFahrenheit(-19));
}

/*
5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.
*/
{
function randomElement(arr) {
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    let randomIndex = Math.floor(minIndex + Math.random() * (maxIndex + 1 - minIndex));

    return arr[randomIndex];
}

console.log(randomElement([99, 98, 97, 96, 95]));
}

/*
6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.
*/

{
function encrypt(phrase, shift) {
    return executeEncryption(phrase, shift);
}

function decrypt(phrase, shift) {
    return executeEncryption(phrase, -shift);
}

function executeEncryption(phrase, shift) {
    let words = phrase.split(" ");
    let encryptedPhrase = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("");
        let encryptedWord = "";
        for (let j = 0; j < word.length; j++) {
            let encryptedCharCode = word[j].charCodeAt() + shift;
            let encryptedLetter = String.fromCharCode(encryptedCharCode);
            encryptedWord = encryptedWord.concat(encryptedLetter);
        }
        encryptedPhrase = encryptedPhrase.concat(encryptedWord).concat(" ");
    }
    return encryptedPhrase.trim();
}

console.log(encrypt("I like apples and oranges", 2));

console.log(decrypt("K nkmg crrngu cpf qtcpigu", 2));

}


/*
7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.
*/

{
function generatePassword(passwordLength) {
    let password = "x".repeat(passwordLength);
    let symbol = "qwertyuiopasdfghjklzxcvbnm1234567890_-,.&*^$#@+=!";
    let minIndex = 0;
    let maxIndex = symbol.length - 1;
    for (let i = 0; i <= password.length; i++) {
        let randomIndex = Math.floor(minIndex + Math.random() * (maxIndex + 1 - minIndex));
        password = password.replace("x", symbol[randomIndex]);
    }
    return password;
}

console.log(generatePassword(5));
}

/*
8. Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.
*/
{
function createFigure(width, height, radius, color) {
    if (!width && !height && !radius && !color) {
        let shapes = ["square", "rectangle", "circle", "oval"];
        let randomShapeIndex = Math.floor(Math.random() * shapes.length);
        let randomShape = shapes[randomShapeIndex];
        console.log(randomShape);
        let minPx = 20;
        let maxPx = 500;
        height = Math.floor(minPx + Math.random() * (maxPx + 1 - minPx));
        radius = 0;
        color = getRGB();
        switch(randomShape) {
            case "square":  
            width = height;
            break;
        case "rectangle": 
            width = getWidth(minPx, maxPx, height);
            break;
        case "circle":
                width = height;
                radius = height / 2;
                break;
         case "oval":
                width = getWidth(minPx, maxPx, height);
                radius = `50%`;
                break;
            default:
              console.log("Unknown shape");
          }
    }
    radius = (typeof radius === 'number') ? `${radius}px` : radius;
    return document.write(`<div style = "width: ${width}px; height: ${height}px; border-radius: ${radius}; background-color: ${color};"></div>`);
}

function getWidth(minPx, maxPx, height) {
    let isHeightSameAsWidth = true;
    while(isHeightSameAsWidth) {
        width = Math.floor(minPx + Math.random() * (maxPx + 1 - minPx));
        isHeightSameAsWidth = width == height;
    }
    return width;
}

function getRGB() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

console.log(createFigure());
// console.log(createFigure(200, 100, 5, "red"));

}

/*
9. [18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#". 

Пример текста: 

"В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."

Нецензурные слова: "нахрен", "черт", "бляха".

Предусмотрите возможность расширения проверяемых слов в тексте.
*/
{
let badWords = ["нахрен", "черт", "бляха"];
let text = "В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. 'Какая же нахрен жизнь!' – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. 'Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?' Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. 'Да нахрен с ним, может, стоит просто сбежать?' – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."

function censor(text, badWords) {
    for (let i = 0; i < badWords.length; i++) {
        let badWord = badWords[i];
        let uppercaseBadWord = badWord.charAt(0).toUpperCase() + badWord.slice(1);
        let replacement = "#".repeat(badWord.length);
        if (text.includes(badWord)) {
            text = text.replaceAll(badWord, replacement);
        } else if (text.includes(uppercaseBadWord)) {
            text = text.replaceAll(uppercaseBadWord, replacement);
        }
    }
    return text;
}

console.log(censor(text, badWords));
}
/*
10. Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций: включение, выключение, вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), покормить, спать. При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!
*/