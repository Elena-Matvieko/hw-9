// Реализуйте функцию filter, которая должна работать аналогично методу массива filter.
//  Возьмите за основу функцию  map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова  ruleFunction,
//  принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

// Функции-правила
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

// Реализация filter
const filter = (array, ruleFunction) => {
    const result = [];

    for (const item of array) {
        if (ruleFunction(item)) {
            result.push(item);
        }
    }

    return result;
};

// --- Тестирование ---

console.log(filter([3, -4, 1, 9], isPositive));
// Вывод: [3, 1, 9]

   // Проверяем, существует ли уже переменная "people" 
   if (typeof people === 'undefined') {
     const people = [ 
        {name: 'Глеб', gender: 'male'},
         {name: 'Анна', gender: 'female'}, 
         {name: 'Олег', gender: 'male'},
          {name: 'Оксана', gender: 'female'}
         ];
console.log(filter(people, isMale));
        }
/* Вывод:
[
  { name: 'Глеб', gender: 'male' },
  { name: 'Олег', gender: 'male' }
]
*/