/*Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
только собственных свойств. Данная функция не должна возвращать значение.
*/

function myFunc(obj) {
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}

/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у
переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function myFunc2(str, obj){
    if(str in obj){
        return true;
    }else{
        return false;
    }
}

const user = {
    name: "Inna",
    surname: "Ivanova",
    city: "Moscow"
}
console.log(myFunc2('surname', user));

/*Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.
*/


function createObj() {
    const obj = {};
    return obj;
}

/*Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах. Определите иерархию электроприборов. Включите некоторые в розетку.
 Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
 Выбрав прибор, подумайте, какими свойствами он обладает.
*/
{
    function Device(name, power) {
        this.name = name;
        this.power = power;
        this.enabled = false;
    }

    Device.prototype.enable = function () {
        this.enabled = true
    }

    Device.prototype.disable = function () {
        this.enabled = false
    }

    function LaptopDevice(name, power, screenSize) {
        this.name = name;
        this.power = power;
        this.screenSize = screenSize;
    }

    function LampDevice(name, power, color) {
        this.name = name;
        this.power = power;
        this.color = color;
    }

    function calculatePower(devices) {
        let totalPower = 0;
        for (let device of devices) {
            if (device.enabled === true) {
                totalPower = totalPower + device.power;
            }
        }
        return totalPower;
    }

    LaptopDevice.prototype = new Device();
    LampDevice.prototype = new Device();

    const laptop = new LaptopDevice("Lenovo Legion 5", 120, 15);
    const tableLamp = new LampDevice("Scarlett", 5, "yellowish");

    tableLamp.enable();
    console.log(tableLamp);
    console.log(laptop);
    console.log(calculatePower([laptop, tableLamp]))
}

/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
*/
{
    class Device {
        constructor(name, power) {
            this.name = name;
            this.power = power;
            this.enabled = false;
        }

        turnOn() {
            this.enabled = true;
        }

        turnOff() {
            this.enabled = false;
        }
    }

    class LaptopDevice extends Device {
        constructor(name, power, screenSize) {
            super(name, power);
            this.screenSize = screenSize;
        }
    }

    class LampDevice extends Device {
        constructor(name, power, color) {
            super(name, power);
            this.color = color;
        }
    }

    function calculatePower(devices) {
        let totalPower = 0;
        for (let device of devices) {
            if (device.enabled === true) {
                totalPower = totalPower + device.power;
            }
        }
        return totalPower;
    }

    const laptop = new LaptopDevice("Lenovo Legion 5", 120, 15);
    const tableLamp = new LampDevice("Scarlett", 5, "yellowish");

    tableLamp.turnOn();
    laptop.turnOn();
    console.log(tableLamp);
    console.log(laptop);
    console.log(calculatePower([laptop, tableLamp]))
}