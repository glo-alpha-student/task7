'use strict';

const appData = {

    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: Math.random() * 99,

    asking: function () {
        appData.title = prompt('Как называется ваш проект?');
        appData.screens = prompt('Какие типы экранов нужно разработать?');
        appData.screenPrice = +prompt('Сколько будет стоить данная работа?');

        while (!appData.isNumber(appData.screenPrice)) {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');


    },

    getTitle: function (str) {
        return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },
    getAllServicePrices: function () {

        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let servicePrice = 0;

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            servicePrice = +prompt('Сколько это будет стоить?');
            while (!appData.isNumber(servicePrice)) {
                servicePrice = +prompt('Сколько это будет стоить?');
            }

            sum += servicePrice;

        }
        return sum;
    },
    getFullPrice: function (variableone, variabletwo) {
        return variableone + variabletwo;
    },
    getServicePercentPrices: function (variableone, variabletwo) {
        return variableone - Math.ceil((variableone * (variabletwo / 100)));
    },
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (price > 15000) {
            return 'Даем скидку в 5%';
        } else if (price > 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }
    },
    logger: function () {
        for (let cry in appData) {
            console.log(cry + appData[cry]);
        }
    },
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.logger();
    }

};

appData.start();


