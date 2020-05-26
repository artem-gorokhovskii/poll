const DATA = {
    question: 'Выберите вариант ответа',
    variants: [
        {
            answer: 'Вариант А',
            question: 'Что после варианта А делаем?',
            variants: [
                {
                    answer: 'Ничего, выводим контент',
                    content: 'JSON контент'
                },
                {
                    answer: 'Ещё 1 углубление',
                    question: 'Да или нет?',
                    variants: [
                        {
                            answer: 'Да',
                            content: 'Отлично'
                        },
                        {
                            answer: 'Нет',
                            content: 'Не очень хорошо'
                        }
                    ]
                }
            ]
        },
        {
            answer: 'Вариант Б (короткий)',
            content: 'Закончилось'
        },
        {
            answer: 'Вариант С (выбор и контент)',
            content: '<img src="./files/images/dog.jpg" /><div>Пёс красивый</div>',
            question: 'Понравилось?',
            variants: [
                {
                    answer: 'Да',
                    content: 'Отлично'
                },
                {
                    answer: 'Нет',
                    content: 'Жаль'
                }
            ]
        }
    ]
};