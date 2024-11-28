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