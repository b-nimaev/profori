<template>
    <div class="slide">
        <div class="left-side">
            <h1>Экспертная помощь <br><span>в достижении</span> карьерных целей</h1>
            <p>Найдите идеальную профессию и достигните успеха в карьере с помощью наших <br> экспертов в
                профориентации и карьерном консультировании</p>
            <div class="buttons">
                <button>
                    <span>Пройти тест</span>
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_36_1735)">
                            <path
                                d="M9.66358 0.478837L9.34791 0.669019C9.13872 0.795071 9.13872 0.999456 9.34791 1.12554L17.3164 5.92699H0.535715C0.239866 5.92699 0 6.07152 0 6.24979V6.51879C0 6.69705 0.239866 6.84158 0.535715 6.84158H17.3164L9.34791 11.643C9.13872 11.7691 9.13872 11.9735 9.34791 12.0996L9.66358 12.2897C9.87278 12.4158 10.212 12.4158 10.4212 12.2897L19.8431 6.61253C20.0523 6.48648 20.0523 6.2821 19.8431 6.15602L10.4212 0.478837C10.212 0.352757 9.87278 0.352757 9.66358 0.478837Z"
                                fill="#222222" />
                        </g>
                        <defs>
                            <clipPath id="clip0_36_1735">
                                <rect width="20" height="12" fill="white" transform="translate(0 0.384277)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>

                <button class="choose" @click="chooseConsultant()">
                    <span>Выбрать консультанта</span>
                </button>
            </div>
        </div>
        <div class="right-side">
            <div class="users-grid">
                <div class="row">
                    <div class="user">
                        <img src="~/assets/images/realuser.jpg" alt="">
                    </div>
                    <div class="user">
                        <img src="~/assets/images/realuser2.jpg" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="user">
                        <img src="~/assets/images/realuser3.jpg" alt="">
                    </div>
                    <div class="user">
                        <img src="~/assets/images/realuser4.jpg" alt="">
                    </div>
                    <div class="user">
                        <img src="~/assets/images/realuser5.jpg" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="user">
                        <img src="~/assets/images/realuser6.jpg" alt="">
                    </div>
                    <div class="user">
                        <img src="~/assets/images/realuser7.jpg" alt="">
                    </div>
                </div>
            </div>
            <img src="~/assets/images/bgi.png" class="bgi" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        chooseConsultant() {
            const consultantsElement = document.getElementById("our-consultants");
            consultantsElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.slide {
    padding: 0 50px 0 150px;
    display: flex;
}

.left-side {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50px;
    z-index: 1;
    height: 100%;
}

header {
    border-radius: 5px;
    background-color: #f5fffe;
    padding-bottom: 160px;
}

.header {
    margin-top: 100px;
}


h1 {
    font-size: 48px;
    margin-bottom: 40px;

    span {
        color: $orange;
        margin-left: 50px;
    }
}

p {
    font-size: 20px;
    line-height: 26px;
}

.bgi {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}

.buttons {
    margin-top: 42px;
    display: flex;

    button {
        margin: 0 0 auto 0;
        padding: 12px 25px;
        display: flex;
        border: 1px solid #000;
        border-radius: 30px;
        transition: 400ms;

        svg,
        path {
            transition: 400ms;
            position: relative;
            right: 0;
        }

        &:first-child {
            span {
                font-weight: 500;
            }

            border: 1px solid #222222;

            &:hover {
                // background-color: #FF6610;
                // color: #fff;
                // border-color: #fff;
                padding: 12px 24px;

                svg {
                    right: -5px;

                    path {
                        // fill: #fff;
                    }
                }
            }
        }

        &:nth-child(2) {
            &:hover {
                color: #fff;
                border-color: #fff;
                padding: 16px 31px;
            }
        }

        span {
            margin: auto;
            margin-right: 10px;
        }

        svg {
            margin: auto;
        }

        &.choose {
            margin: 0 0 auto 30px;
            padding: 16px 32px;
            transition: 400ms;
            background-color: #FF6610;
            border-color: #FF6610;
            color: #fff;

            span {
                font-size: 24px;
                margin: 0;
            }
        }
    }
}

.right-side {
    position: relative;
    padding: 30px 0;
    margin-left: auto;

    .users-grid {

        .row {
            display: flex;
            justify-content: center;

            .user {
                margin: 15px;
                border-radius: 20px;
                overflow: hidden;
                width: 183px;
                height: 138px;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 0 -18px;
                }
            }
        }
    }
}

@media screen and (max-width: 1420px) {
    h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;

        br {
            display: none
        }
    }

    .right-side {
        img {
            width: 100%;
        }

        .users-grid {
            .row {
                .user {
                    width: 130px;
                    height: 100px;
                }
            }
        }
    }
    .slide {
        width: 980px;
        padding: 0 30px;
        margin: auto;
        flex-direction: column;
        .left-side {
            margin-right: 30px;
            position: relative;
            padding: 40px 0 20px 0;
            left: 0;
            p {
                width: 70%;

                br {
                    // display: inline-block;
                }
            }

            .buttons {
                margin-top: 30px;

                button {
                    &.choose {
                        margin: 0 0 auto 20px;
                        padding: 14px 30px;

                        span {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
        .right-side {
            margin: 0 auto;
        }
    }
}
@media screen and (max-width: 1100px) {
    .slide {
        width: 720px;
    }
}
@media screen and (max-width: 760px) {
    .slide {
        width: 560px
    }
    .slide {
        .left-side {
            padding: 20px 0;
            p {
                width: 100%;
            }
            .buttons {
                flex-direction: column;
                button {
                    &:first-child {
                        margin: 0 auto 20px 0;
                    }
                    &:last-child {
                        margin: 0 auto 0 0;
                    }
                }
            }
        }
    }
    h1 {
        font-size: 32px;
        span {
            margin-left: 15px;
        }
    }
}
@media screen and (max-width: 576px) {
    .slide {
        width: 100%;
    }
}
</style>
