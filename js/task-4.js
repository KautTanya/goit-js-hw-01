// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
// •	Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// •	В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// •	Проверяет сможет ли пользователь оплатить заказ:
// o	если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// o	в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const countPerDroid  = prompt('Сколько дроидов хотите приобрести?');
if ( countPerDroid === null){
    console.log('Отменено пользователем!');
} else {
    totalPrice = countPerDroid * pricePerDroid;
    if (totalPrice > credits){
        console.log('Недостаточно средств на счету!')
    } else{
        credits = credits-totalPrice;
        console.log(`Вы купили ${countPerDroid} дроидов, на счету осталось ${credits} кредитов.`)
    }

}