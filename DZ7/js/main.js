let startBtn             = document.querySelector('#start'),
    resultValue          = document.querySelectorAll('.result-table [class$="-value"]'),
    expensesItem         = document.querySelectorAll('input.expenses-item'),
    optExpensesItem      = document.querySelectorAll('input.optionalexpenses-item'),
    expensesBtn          = document.querySelector('button.expenses-item-btn'),
    optExpensesBtn       = document.querySelector('button.optionalexpenses-btn'),
    countBudgetBtn       = document.querySelector('button.count-budget-btn'),
    optionalIncomMoney   = document.querySelector('#income'),
    savings              = document.querySelector('#savings'),
    sum                  = document.querySelector('#sum'),
    percent              = document.querySelector('#percent'),
    year                 = document.querySelector('.year-value'),
    month                = document.querySelector('.month-value'),
    day                  = document.querySelector('.day-value');

let money, time,
    expensesMoney = [],
    appData = {};

function start() {
    money = +prompt('Ваш бюджет на месяц?',  '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while( isNaN(money) || money == null || money == '' ) {
        money = +prompt('Ваш бюджет на месяц?',  '');
    }
    resultValue[0].innerHTML = money + ' у.е.';
    expensesItem.forEach(function(item) {
        item.removeAttribute('disabled');
    });
    appData.budget = money;
    
    appData.timeData = time;

    let timeOut = appData.timeData.split('-');
    year.value = timeOut[0];
    month.value = timeOut[1];
    day.value = timeOut[2];    
}


appData = {
    //budget : money,
    //timeData : time,
    expenses : {
        /* "eda" : "5000",
        "komunalka" : "8000" */
    },
    optionalExpenses : {},
    income : [],
    //savings : false,
    
    chooseExpenses: function() {
        let a, b,
            expensesName = [];
        expensesItem.forEach(function(item, i) {
            item.addEventListener('blur', function() {
                if ( (i % 2) == 0 ) {
                    a = item.value;
                    expensesName.push(a);
                } else {
                    b = item.value;
                    expensesMoney.push(b);

                    if (expensesMoney.length === expensesItem.length / 2) {
                        expensesBtn.removeAttribute('disabled');
                        appData.detectDayBudget();
                    }
                }
                appData.expenses[a] = b;
            });
        });

        expensesBtn.addEventListener('click', function() {
            resultValue[3].innerHTML = expensesName.join(', ');
            optExpensesItem.forEach(function(item) {
                item.removeAttribute('disabled');
            });
        });
    },
    detectDayBudget: function() {
        expensesMoney.forEach(function(item) {
            appData.budget = appData.budget - +item;
        });
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    },
    detectLevel: function() {
        countBudgetBtn.addEventListener('click', function() {           
            resultValue[1].innerHTML = appData.moneyPerDay + ' у.е.';

            if (appData.moneyPerDay < 100) {
                resultValue[2].innerHTML = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                resultValue[2].innerHTML = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                resultValue[2].innerHTML = 'Высокий уровень достатка';
            } else {
                resultValue[2].innerHTML = 'Произошла ошибка';
            }

            optionalIncomMoney.removeAttribute('disabled');
        });
    },
    checkSavings: function() {

        savings.addEventListener('click', function() {
            if (savings.checked) {
                sum.removeAttribute('disabled');
                percent.removeAttribute('disabled');
                percent.addEventListener('blur', function() {
                    let save = +sum.value;
                    let savePercent = +percent.value;
                    appData.yearIncome = (save/100*savePercent).toFixed();
                    appData.monthIncome = (appData.yearIncome/12).toFixed();
                    
                    resultValue[6].innerHTML = appData.monthIncome + ' у.е.';
                    resultValue[7].innerHTML = appData.yearIncome + ' у.е.';
                });
            } else {
                sum.setAttribute('disabled', 'disabled');
                percent.setAttribute('disabled', 'disabled');
            }
        });
    },
    chooseOptExpenses: function() {
        let a,
            optExpensesName = [];
        optExpensesItem.forEach(function(item, i) {
            item.addEventListener('blur', function() {
                a = item.value;
                if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' ) {
                    appData.optionalExpenses[i + 1] = a;
                    optExpensesName.push(a);
                    if (optExpensesName.length === optExpensesItem.length) {
                        optExpensesBtn.removeAttribute('disabled');
                        appData.detectDayBudget();
                    }
                }
            });
        });
        optExpensesBtn.addEventListener('click', function() {           
            resultValue[4].innerHTML = optExpensesName.join(', ');
            countBudgetBtn.removeAttribute('disabled');
        });
    },
    chooseIncome: function() {
        optionalIncomMoney.addEventListener('blur', function() {
            appData.income = optionalIncomMoney.value.split(',').sort();

            resultValue[5].innerHTML = appData.income.join(', ');
            
            savings.removeAttribute('disabled');
        });
    }
};

startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    start();
    this.setAttribute('disabled', 'disabled');
    appData.chooseExpenses();
    appData.chooseOptExpenses();
    appData.detectLevel();
    appData.chooseIncome();
    appData.checkSavings();
});


