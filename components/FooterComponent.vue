<template>
    <footer>
        <div class="container">
            <div class="footer-inner">
                <div class="logotype">
                    <NuxtLink to="/">
                        <LogotypeComponent :themeClass="themeClass"></LogotypeComponent>
                    </NuxtLink>
                </div>
                <div class="right-side">
                    <div class="row">
                        <div class="row__left-side">
                            <p><a href="javascript:void(0)">support@mail.ru</a></p>
                            <p>Поддержка в телеграм-бот</p>
                            <p>Мы предоставляем услуги профессионального консультирования! <br>Остались вопросы, оставьте свои данные и мы обязательно с Вами свяжемся!</p>
                        </div>
                        <div class="row__right-side">
                            <ul>
                                <li><a href="javascript:void(0)">Консультантам</a></li>
                                <li><a href="javascript:void(0)">Тесты</a></li>
                                <li><a href="javascript:void(0)">О нас</a></li>
                                <li><a href="javascript:void(0)">Каталог консультантов</a></li>
                            </ul>
                            <ul>
                                <li><a href="javascript:void(0)">Контакты</a></li>
                                <li><a href="javascript:void(0)">Сотрудничество</a></li>
                                <li><a href="javascript:void(0)">Блог</a></li>
                                <li><a href="javascript:void(0)">Войти</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row__left-side">
                            <button>Заказать консультацию</button>
                        </div>
                        <div class="privacy_links">
                            <ul>
                                <li><a href="javascript:void(0)">Политика конфиденциальности и Правила</a></li>
                                <li><a href="javascript:void(0)">Обработка персональных данных</a></li>
                                <li><a href="javascript:void(0)">Пользовательское соглашение</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    data () {
        return {
            themeClass: 'light'
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    padding: 50px 0;
    background-color: #fff;

    .footer-inner {
        display: flex;
        width: 100%;
    }

    .logotype {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .right-side {
        margin-left: 30px;
        display: block;
        flex: 1;
        .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;

            &:last-child {
                margin-bottom: 0;
            }

            .row__left-side {
                button {
                    padding: 15px 30px;
                    color: #fff;
                    background-color: #222;
                    border: 1px solid #222;
                    border-radius: 30px;
                    font-size: 20px;
                    transition: 400ms ease;
                    &:hover {
                        color: #222;
                        background-color: #fff;
                    }
                }
                p {
                    font-size: 18px;
                    margin-bottom: 15px;
                    line-height: 21.6px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
            .row__right-side {
                display: flex;
                ul {
                    margin-right: 30px;
                    li {
                        margin-bottom: 10px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .privacy_links {
                display: flex;
                ul {
                    margin: auto 0;
                    display: flex;
                    flex-direction: row;
                    li {
                        margin-right: 30px;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1700px) {
    footer {
        .right-side {
            .row {
                .row__left-side {
                    p {
                        font-size: 18px;
                    }
                    button {
                        padding: 12px 18px;
                        font-size: 16px;
                    }
                }

                .privacy_links {
                    ul {
                        li {
                            margin-right: 15px;
                            a {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1420px) {
    footer {
        .logotype {
            margin-bottom: 30px;
        }
        .footer-inner {
            flex-direction: column
        }

        .right-side {
            margin-left: 0;
            .row {
                &:first-child {
                    margin-bottom: 40px;
                }
                &:last-child {
                    flex-direction: column;
                    .row__left-side {
                        order: 2
                    }
                    .privacy_links {
                        order: 1;
                        margin-bottom: 20px;
                        ul {
                            li {
                                a {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    footer {
        .right-side {
            .row {

                &:first-child {
                    flex-direction: column;
                    .row__left-side {
                        margin-bottom: 30px;
                        p {
                            &:last-child {
                                line-height: 28px
                            }
                        }
                    }
                }
                &:last-child {
                    // flex-direction: row;
                    .row__left-side {
                        margin-bottom: 30px;
                        button {
                            font-size: 18px;
                            padding: 15px 30px;
                        }
                    }
                    .privacy_links {
                        order: 3;
                        ul {
                            flex-direction: column;
                            li {
                                margin-bottom: 10px;
                                a {
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>