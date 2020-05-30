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

const DATA_THREAD_SEALING_METAL_METAL = {
    answer: 'металл - металл',
    content: 'PERMABOND A1044, PERMABOND A129, PERMABOND A131, PERMABOND MH052, PERMABOND A1058',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'PERMABOND A131, PERMABOND A1058',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'PERMABOND A131, PERMABOND A1058',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'PERMABOND A131, PERMABOND A1058'
                        },
                        {
                            answer: 'KIWA',
                            content: 'PERMABOND A131'
                        },
                        {
                            answer: 'без допуска',
                            content: 'PERMABOND A131, PERMABOND A1058'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058'
                        },
                        {
                            answer: 'KIWA',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058'
                        }
                    ]
                }
            ]
        },
        {
            answer: 'средняя',
            content: 'PERMABOND MH052, PERMABOND A129',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'PERMABOND MH052, PERMABOND A129',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'кислород',
                            content: 'PERMABOND MH052'
                        },
                        {
                            answer: 'без допуска',
                            content: 'PERMABOND MH052, PERMABOND A129'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND MH052, PERMABOND A129',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'кислород',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH052'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH052, PERMABOND A129'
                        }
                    ]
                }
            ]
        },
        {
            answer: 'высокая',
            content: 'PERMABOND A1044',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'PERMABOND A1044',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [                        
                        {
                            answer: 'WRAS',
                            content: 'PERMABOND A1044'
                        },
                        {
                            answer: 'без допуска',
                            content: 'PERMABOND A1044'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND A1044',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1044'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1044'
                        }
                    ]
                }
            ]
        }
    ]
};

const DATA_THREAD_SEALING_METAL_PLASTIC = {
    answer: 'металл - пластик',
    content: 'PERMABOND A1044, PERMABOND A129, PERMABOND A131, PERMABOND MH052, PERMABOND A1058',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'Активатор PERMABOND A905 +PERMABOND A131, PERMABOND A1058',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'Активатор PERMABOND A905 +PERMABOND A131, PERMABOND A1058',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 +PERMABOND A131, PERMABOND A1058'
                        },
                        {
                            answer: 'KIWA',
                            content: 'Активатор PERMABOND A905 +PERMABOND A131'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 +PERMABOND A131, PERMABOND A1058'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058'
                        },
                        {
                            answer: 'KIWA',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND A131, PERMABOND A1058'
                        }
                    ]
                }
            ]
        },
        {
            answer: 'средняя',
            content: 'Активатор PERMABOND A905 +PERMABOND MH052, PERMABOND A129',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'Активатор PERMABOND A905 +PERMABOND MH052, PERMABOND A129',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'кислород',
                            content: 'Активатор PERMABOND A905 +PERMABOND MH052'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 +PERMABOND MH052, PERMABOND A129'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND MH052, PERMABOND A129',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'кислород',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH052'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH052, PERMABOND A129'
                        }
                    ]
                }
            ]
        },
        {
            answer: 'высокая',
            content: 'Активатор PERMABOND A905 +PERMABOND A1044',
            question: 'Какой максимальный диаметр резьбового соединения?',
            variants: [
                {
                    answer: 'до M80',
                    content: 'Активатор PERMABOND A905 +PERMABOND A1044',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [                        
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 +PERMABOND A1044'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 +PERMABOND A1044'
                        }
                    ]
                },
                {
                    answer: 'более M80',
                    content: 'Активатор PERMABOND A905 + PERMABOND A1044',
                    question: 'Есть ли необходимость в допусках?',
                    variants: [
                        {
                            answer: 'WRAS',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1044'
                        },
                        {
                            answer: 'без допуска',
                            content: 'Активатор PERMABOND A905 + PERMABOND A1044'
                        }
                    ]
                }
            ]
        }
    ]
};

const DATA_GASKETING_METAL_METAL = {
    answer: 'металл - металл',
    content: 'PERMABOND A136, PERMABOND MH196, PERMABOND MH199, PERMABOND LH197',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'PERMABOND LH197',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'до 0.3мм',
                    content: 'PERMABOND LH197',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND LH197',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND LH197'
                                }
                            ]
                        }
                    ]
                }                
            ]
        },
        {
            answer: 'средняя',
            content: 'PERMABOND A136, PERMABOND MH199',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'до 0.5мм',
                    content: 'PERMABOND A136, PERMABOND MH199',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'PERMABOND A136, PERMABOND MH199',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'PERMABOND A136'
                                },
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND A136, PERMABOND MH199'
                                }
                            ]
                        },
                        {
                            answer: 'до 200 &deg;C',
                            content: 'PERMABOND MH199',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND MH199'
                                }
                            ]
                        }
                    ]
                }                
            ]
        },
        {
            answer: 'высокая',
            content: 'PERMABOND MH196',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'выше 0.5мм',
                    content: 'PERMABOND MH196, Активатор PERMABOND A905 + PERMABOND A136, PERMABOND MH199, PERMABOND LH197',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 200 &deg;C',
                            content: 'PERMABOND MH196',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'PERMABOND MH196'
                                }
                            ]
                        }
                    ]
                }                
            ]
        }
    ]
};

const DATA_GASKETING_METAL_PLASTIC = {
    answer: 'металл - пластик',
    content: 'PERMABOND A136, PERMABOND MH196, PERMABOND MH199, PERMABOND LH197',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая',
            content: 'Активатор PERMABOND A905 + PERMABOND LH197',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'до 0.3мм',
                    content: 'Активатор PERMABOND A905 + PERMABOND LH197',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND LH197',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND LH197'
                                }
                            ]
                        }
                    ]
                }                
            ]
        },
        {
            answer: 'средняя',
            content: 'Активатор PERMABOND A905 + PERMABOND A136, PERMABOND MH199',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'до 0.5мм',
                    content: 'Активатор PERMABOND A905 + PERMABOND A136, PERMABOND MH199',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 150 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND A136, PERMABOND MH199',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'да',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A136'
                                },
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND A136, PERMABOND MH199'
                                }
                            ]
                        },
                        {
                            answer: 'до 200 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH199',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND MH199'
                                }
                            ]
                        }
                    ]
                }                
            ]
        },
        {
            answer: 'высокая',
            content: 'Активатор PERMABOND A905 + PERMABOND MH196',
            question: 'Какой максимальный зазор между склеиваемыми поверхностями?',
            variants: [
                {
                    answer: 'выше 0.5мм',
                    content: 'Активатор PERMABOND A905 + PERMABOND MH196, PERMABOND A136, PERMABOND MH199, PERMABOND LH197',
                    question: 'Какова максимальная температура эксплуатации?',
                    variants: [
                        {
                            answer: 'до 200 &deg;C',
                            content: 'Активатор PERMABOND A905 + PERMABOND MH196',
                            question: 'Есть ли необходимость в допуске WRAS?',
                            variants: [
                                {
                                    answer: 'нет',
                                    content: 'Активатор PERMABOND A905 + PERMABOND MH196'
                                }
                            ]
                        }
                    ]
                }                
            ]
        }
    ]
};

const DATA_FIXATOR_SHAFT_SLEEVE_METALL_METALL = {
    answer: 'металл - металл',
    content: 'A025...',
    question: 'Какая необходима прочность?',
    variants: [
        {
            answer: 'низкая'
        },
        {
            answer: 'средняя'
        },
        {
            answer: 'высокая'
        }        
    ]
};

const DATA_FIXATOR_SHAFT_SLEEVE_METALL_PLASTIC = {

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
            answer: 'Резьбовая герметизация',
            question: 'Какой тип материалов необходимо загерметизировать?',
            variants: [
                DATA_THREAD_SEALING_METAL_METAL,
                DATA_THREAD_SEALING_METAL_PLASTIC
            ]
        },
        {
            answer: 'Фиксация "вал-втулка"',
            question: 'Какие материалы необходимо зафиксировать?',
            variants: [
                DATA_FIXATOR_SHAFT_SLEEVE_METALL_METALL,
                DATA_FIXATOR_SHAFT_SLEEVE_METALL_PLASTIC
            ]
        },
        {
            answer: 'Формирование жидкого уплотнения',
            question: 'Между какими поверхностями необходим уплотнитель?',
            variants: [
                DATA_GASKETING_METAL_METAL,
                DATA_GASKETING_METAL_PLASTIC
            ]
        }
    ]
};