
console.log(String.raw`Привет\u000A!`);
// 'Привет\u000A!', а здесь мы получим символы
//  \, u, 0, 0, 0, A, всего 6 символов.
// Экранирующие символы не имеют особого значения и
// обратные слеши будут присутствовать в выходной строке.
// Вы можете убедиться в этом, проверив свойство .length строки.

let name = 'Боб';
String.raw`Привет\n${name}!`;
// 'Привет\nБоб!', сработала подстановка.

// Обычно вам не нужно вызывать метод String.raw() как функцию,
// но никто не запрещает вам делать это:
console.log(String.raw({ raw: 'тест' }, 0, 1, 2));
// 'т0е1с2т'