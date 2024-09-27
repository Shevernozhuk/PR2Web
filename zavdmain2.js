function formattedPhone(phone) {
    let digits = phone.replace(/\D/g, '');

    if (digits.length == 10 && digits.startsWith('0')) {
        digits = '38' + digits;
    } else if (digits.length == 11 && digits.startsWith('8')) {
        digits = '3' + digits;
    } else if (digits.length == 12 && digits.startsWith('380')) {
        digits = digits;
    } else {
        return 'Неправильний формат номера';
    }

    return `+${digits.slice(0, 2)} (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`;
}

console.log(formattedPhone('+80664567890'));

const inputPhone = prompt("Введіть номер телефону:");
alert(formattedPhone(inputPhone));