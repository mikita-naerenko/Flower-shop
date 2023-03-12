function getCoupeNumber(n) {
    if (typeof n === 'number' && Number.isInteger(n) && n >= 0) {
       n === 0 || n >1 || n > 36
       ? console.log ("Таких мест в вагоне не существует")
       : console.log(Math.ceil(n / 4));
    } else {
    return "Ошибка. Проверьте правильность введенного номера места"
    }
}
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));
