const DATA_FIXATION_METAL_METAL = {
    answer: 'металл - металл',
    content: 'PERMABOND A011, PERMABOND A1042, PERMABOND A113, PERMABOND A130, PERMABOND HM129, PERMABOND HH131',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'PERMABOND A011',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M20',
                    content: 'PERMABOND A011',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND A011',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'PERMABOND A011'
                                },
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND A011'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            answer: 'средняя',
            content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M20',
                    content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                },
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                }
                            ]
                        }
                    ]
                },
                {
                    answer: 'более M20',
                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                },
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            answer: 'высокая',
            content: 'PERMABOND HM129, PERMABOND HH131',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M36',
                    content: 'PERMABOND HM129',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND HM129',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND HM129'
                                }
                            ]
                        },
                        {
                            answer: 'свыше 150 &deg;C',
                            content: 'PERMABOND HH131',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND HH131'
                                }
                            ]
                        }
                    ]
                },
                {
                    answer: 'более M36',
                    content: 'PERMABOND HH131',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'свыше 150 &deg;C',
                            content: 'PERMABOND HH131',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND HH131'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const DATA_FIXATION_METAL_PLASTIC = {
    answer: 'металл - пластик, керамика, полимеры',
    content: 'PERMABOND A011, PERMABOND A1042, PERMABOND A113, PERMABOND A130, PERMABOND HM129, PERMABOND HH131, PERMABOND A905',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'Активатор PERMABOND A905 + PERMABOND A011',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M20',
                    content: 'Активатор PERMABOND A905 + PERMABOND A011',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND A011',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A011'
                                },
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A011'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            answer: 'средняя',
            content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M20',
                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                },
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                }
                            ]
                        }
                    ]
                },
                {
                    answer: 'более M20',
                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                },
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A1042, PERMABOND A113, PERMABOND A130'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            answer: 'высокая',
            content: 'Активатор PERMABOND A905 + PERMABOND HM129, PERMABOND HH131',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M36',
                    content: 'Активатор PERMABOND A905 + PERMABOND HM129',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND HM129',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND HM129'
                                }
                            ]
                        },
                        {
                            answer: 'свыше 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND HH131',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND HH131'
                                }
                            ]
                        }
                    ]
                },
                {
                    answer: 'более M36',
                    content: 'Активатор PERMABOND A905 + PERMABOND HH131',
                    question: 'Какая максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'свыше 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND HH131',
                            question: 'Есть ли необходимость в пищевом допуске?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND HH131'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const DATA = {
    question: 'Какую операцию необходимо выполнить?',
    variants: [
        {
            answer: 'Резьбовая фиксация',
            question: 'Какой тип материалов необходимо зафиксировать?',
            variants: [
                DATA_FIXATION_METAL_METAL,
                DATA_FIXATION_METAL_PLASTIC
            ]
        },
        {
            answer: 'Резьбовая герметизация'
        },
        {
            answer: 'Фиксация "вал-втулка"'
        },
        {
            answer: 'Формирование жидкой прокладки'
        }
    ]
};

// {
//     answer: 'Вариант А',
//     question: 'Что после варианта А делаем?',
//     variants: [
//         {
//             answer: 'Ничего, выводим контент',
//             content: 'JSON контент'
//         },
//         {
//             answer: 'Ещё 1 углубление',
//             question: 'Да или нет?',
//             variants: [
//                 {
//                     answer: 'Да',
//                     content: 'Отлично'
//                 },
//                 {
//                     answer: 'Нет',
//                     content: 'Не очень хорошо'
//                 }
//             ]
//         }
//     ]
// },
// {
//     answer: 'Вариант Б (короткий)',
//     content: 'Закончилось'
// },
// {
//     answer: 'Вариант С (выбор и контент)',
//     content: '<img src="./files/images/dog.jpg" /><div>Пёс красивый</div>',
//     question: 'Понравилось?',
//     variants: [
//         {
//             answer: 'Да',
//             content: 'Отлично'
//         },
//         {
//             answer: 'Нет',
//             content: 'Жаль'
//         }
//     ]
// }