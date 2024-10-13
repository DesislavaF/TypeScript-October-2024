function calorieObject(input: string[]): void {
    const result: { [key: string]: number } = {};  // Инициализираме празен обект

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i];  // Храната (на четен индекс)
        const calories = Number(input[i + 1]);  // Калориите (на нечетен индекс, преобразуваме в число)

        result[food] = calories;  // Добавяме храната и калориите в обекта
    }

    console.log(result);  // Отпечатваме резултата
}

// Пример за използване:
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// Output: { Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// Output: { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
