<template>
    <NavbarComponent />
    <main>
        <div class="wrapper">
            <div class="items">
                <div class="left-side" v-if="status === 'login'">
                    <div class="heading">
                        <span>Войти в Profori</span>
                    </div>
                    <ul class="socials">
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="39" height="37" viewBox="0 0 39 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.25" y="0.109375" width="38" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5633)">
                                        <path
                                            d="M27.2812 13.7875C27.3969 13.3969 27.2812 13.1094 26.725 13.1094H24.8844C24.4156 13.1094 24.2 13.3562 24.0844 13.6312C24.0844 13.6312 23.1469 15.9156 21.8219 17.3969C21.3937 17.825 21.1969 17.9625 20.9625 17.9625C20.8469 17.9625 20.6687 17.825 20.6687 17.4344V13.7875C20.6687 13.3187 20.5375 13.1094 20.15 13.1094H17.2562C16.9625 13.1094 16.7875 13.3281 16.7875 13.5312C16.7875 13.975 17.45 14.0781 17.5187 15.3281V18.0406C17.5187 18.6344 17.4125 18.7437 17.1781 18.7437C16.5531 18.7437 15.0344 16.45 14.1344 13.825C13.9531 13.3156 13.775 13.1094 13.3031 13.1094H11.4625C10.9375 13.1094 10.8312 13.3562 10.8312 13.6312C10.8312 14.1187 11.4562 16.5406 13.7406 19.7406C15.2625 21.925 17.4062 23.1094 19.3562 23.1094C20.5281 23.1094 20.6719 22.8469 20.6719 22.3938C20.6719 20.3063 20.5656 20.1094 21.1531 20.1094C21.425 20.1094 21.8937 20.2469 22.9875 21.3C24.2375 22.55 24.4437 23.1094 25.1437 23.1094H26.9844C27.5094 23.1094 27.775 22.8469 27.6219 22.3281C27.2719 21.2375 24.9062 18.9938 24.8 18.8438C24.5281 18.4938 24.6062 18.3375 24.8 18.025C24.8031 18.0219 27.05 14.8594 27.2812 13.7875Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5633">
                                            <rect width="18" height="16" fill="white"
                                                transform="translate(10.25 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.25" y="0.109375" width="35.5" height="36" rx="17.75" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5638)">
                                        <path
                                            d="M18 10.3594C13.7188 10.3594 10.25 13.8281 10.25 18.1094C10.25 22.3906 13.7188 25.8594 18 25.8594C22.2812 25.8594 25.75 22.3906 25.75 18.1094C25.75 13.8281 22.2812 10.3594 18 10.3594ZM21.8062 15.6687L20.5344 21.6625C20.4406 22.0875 20.1875 22.1906 19.8344 21.9906L17.8969 20.5625L16.9625 21.4625C16.8594 21.5656 16.7719 21.6531 16.5719 21.6531L16.7094 19.6812L20.3 16.4375C20.4563 16.3 20.2656 16.2219 20.0594 16.3594L15.6219 19.1531L13.7094 18.5562C13.2937 18.425 13.2844 18.1406 13.7969 17.9406L21.2688 15.0594C21.6156 14.9344 21.9187 15.1437 21.8062 15.6687Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5638">
                                            <rect width="15.5" height="16" fill="white"
                                                transform="translate(10.25 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                        <li><a href="javascript:void(0)">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.109375" width="36" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5645)">
                                        <path
                                            d="M19.5344 19.3613L16.8031 25.1094H14.8125L17.8125 18.9629C16.4031 18.292 15.4625 17.0762 15.4625 14.8291C15.4594 11.6826 17.5875 10.1094 20.1156 10.1094H22.6875V25.1094H20.9656V19.3613H19.5344ZM20.9656 11.4717H20.0469C18.6594 11.4717 17.3156 12.333 17.3156 14.8291C17.3156 17.2402 18.5469 18.0166 20.0469 18.0166H20.9656V11.4717Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5645">
                                            <rect width="8" height="16" fill="white" transform="translate(14.75 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a></li>
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.109375" width="36" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5652)">
                                        <path
                                            d="M26.375 18.2906C26.375 22.7125 23.3469 25.8594 18.875 25.8594C14.5875 25.8594 11.125 22.3969 11.125 18.1094C11.125 13.8219 14.5875 10.3594 18.875 10.3594C20.9625 10.3594 22.7188 11.125 24.0719 12.3875L21.9625 14.4156C19.2031 11.7531 14.0719 13.7531 14.0719 18.1094C14.0719 20.8125 16.2312 23.0031 18.875 23.0031C21.9438 23.0031 23.0938 20.8031 23.275 19.6625H18.875V16.9969H26.2531C26.325 17.3937 26.375 17.775 26.375 18.2906Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5652">
                                            <rect width="15.25" height="16" fill="white"
                                                transform="translate(11.125 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                    </ul>
                    <form action="">
                        <p>или используйте email адрес</p>
                        <div class="input-group">
                            <div class="icon"><svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.875 3H3.125C2.50391 3 2 3.50391 2 4.125V10.875C2 11.4961 2.50391 12 3.125 12H12.875C13.4961 12 14 11.4961 14 10.875V4.125C14 3.50391 13.4961 3 12.875 3ZM3.125 3.75H12.875C13.0813 3.75 13.25 3.91875 13.25 4.125V5.09531C12.7367 5.52891 12.0031 6.12656 9.72031 7.93828C9.32422 8.25234 8.54375 9.00938 8 9C7.45625 9.00938 6.67344 8.25234 6.27969 7.93828C3.99688 6.12656 3.26328 5.52891 2.75 5.09531V4.125C2.75 3.91875 2.91875 3.75 3.125 3.75ZM12.875 11.25H3.125C2.91875 11.25 2.75 11.0813 2.75 10.875V6.07031C3.28437 6.50859 4.12812 7.18594 5.81328 8.52422C6.29375 8.90859 7.14219 9.75469 8 9.75C8.85313 9.75703 9.69453 8.91797 10.1867 8.52422C11.8719 7.18594 12.7156 6.50859 13.25 6.07031V10.875C13.25 11.0813 13.0813 11.25 12.875 11.25Z"
                                        fill="black" fill-opacity="0.58" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="input-group">
                            <div class="icon">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_30_5677)">
                                        <path
                                            d="M12.125 5.25002H11.75V3.78518C11.75 1.7133 10.0836 0.00705317 8.01172 2.19235e-05C5.9375 -0.00700933 4.25 1.67815 4.25 3.75002V5.25002H3.875C3.25391 5.25002 2.75 5.75393 2.75 6.37502V10.875C2.75 11.4961 3.25391 12 3.875 12H12.125C12.7461 12 13.25 11.4961 13.25 10.875V6.37502C13.25 5.75393 12.7461 5.25002 12.125 5.25002ZM5 3.75002C5 2.09533 6.34531 0.750022 8 0.750022C9.65469 0.750022 11 2.09533 11 3.75002V5.25002H5V3.75002ZM12.125 11.25H3.875C3.66875 11.25 3.5 11.0813 3.5 10.875V6.37502C3.5 6.16877 3.66875 6.00002 3.875 6.00002H12.125C12.3313 6.00002 12.5 6.16877 12.5 6.37502V10.875C12.5 11.0813 12.3313 11.25 12.125 11.25Z"
                                            fill="black" fill-opacity="0.58" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5677">
                                            <rect width="16" height="12" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <input type="password" placeholder="Password">
                        </div>
                        <a href="javascript:void(0)">Забыли пароль?</a>
                        <input type="submit" value="Войти">
                    </form>
                </div>
                <div class="right-side" v-if="status === 'login'">
                    <h3>Приветствуем!</h3>
                    <p>Создайте аккаунт и присоединяйтесь <br>к нам, и получите консультацию</p>
                    <button @click="register()">Создать аккаунт</button>
                </div>
                <div class="right-side" v-if="status === 'register'" :class="status">
                    <h3>Добро пожаловать!</h3>
                    <p>Создай аккаунт и присоединяйтесь к нам, <br>и получите консультацию</p>
                    <button @click="login()">Войти</button>
                </div>
                <div class="left-side" v-if="status === 'register'" :class="status">
                    <div class="heading">
                        <span>Создание аккаунта</span>
                    </div>
                    <ul class="socials">
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="39" height="37" viewBox="0 0 39 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.25" y="0.109375" width="38" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5633)">
                                        <path
                                            d="M27.2812 13.7875C27.3969 13.3969 27.2812 13.1094 26.725 13.1094H24.8844C24.4156 13.1094 24.2 13.3562 24.0844 13.6312C24.0844 13.6312 23.1469 15.9156 21.8219 17.3969C21.3937 17.825 21.1969 17.9625 20.9625 17.9625C20.8469 17.9625 20.6687 17.825 20.6687 17.4344V13.7875C20.6687 13.3187 20.5375 13.1094 20.15 13.1094H17.2562C16.9625 13.1094 16.7875 13.3281 16.7875 13.5312C16.7875 13.975 17.45 14.0781 17.5187 15.3281V18.0406C17.5187 18.6344 17.4125 18.7437 17.1781 18.7437C16.5531 18.7437 15.0344 16.45 14.1344 13.825C13.9531 13.3156 13.775 13.1094 13.3031 13.1094H11.4625C10.9375 13.1094 10.8312 13.3562 10.8312 13.6312C10.8312 14.1187 11.4562 16.5406 13.7406 19.7406C15.2625 21.925 17.4062 23.1094 19.3562 23.1094C20.5281 23.1094 20.6719 22.8469 20.6719 22.3938C20.6719 20.3063 20.5656 20.1094 21.1531 20.1094C21.425 20.1094 21.8937 20.2469 22.9875 21.3C24.2375 22.55 24.4437 23.1094 25.1437 23.1094H26.9844C27.5094 23.1094 27.775 22.8469 27.6219 22.3281C27.2719 21.2375 24.9062 18.9938 24.8 18.8438C24.5281 18.4938 24.6062 18.3375 24.8 18.025C24.8031 18.0219 27.05 14.8594 27.2812 13.7875Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5633">
                                            <rect width="18" height="16" fill="white"
                                                transform="translate(10.25 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.25" y="0.109375" width="35.5" height="36" rx="17.75" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5638)">
                                        <path
                                            d="M18 10.3594C13.7188 10.3594 10.25 13.8281 10.25 18.1094C10.25 22.3906 13.7188 25.8594 18 25.8594C22.2812 25.8594 25.75 22.3906 25.75 18.1094C25.75 13.8281 22.2812 10.3594 18 10.3594ZM21.8062 15.6687L20.5344 21.6625C20.4406 22.0875 20.1875 22.1906 19.8344 21.9906L17.8969 20.5625L16.9625 21.4625C16.8594 21.5656 16.7719 21.6531 16.5719 21.6531L16.7094 19.6812L20.3 16.4375C20.4563 16.3 20.2656 16.2219 20.0594 16.3594L15.6219 19.1531L13.7094 18.5562C13.2937 18.425 13.2844 18.1406 13.7969 17.9406L21.2688 15.0594C21.6156 14.9344 21.9187 15.1437 21.8062 15.6687Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5638">
                                            <rect width="15.5" height="16" fill="white"
                                                transform="translate(10.25 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                        <li><a href="javascript:void(0)">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.109375" width="36" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5645)">
                                        <path
                                            d="M19.5344 19.3613L16.8031 25.1094H14.8125L17.8125 18.9629C16.4031 18.292 15.4625 17.0762 15.4625 14.8291C15.4594 11.6826 17.5875 10.1094 20.1156 10.1094H22.6875V25.1094H20.9656V19.3613H19.5344ZM20.9656 11.4717H20.0469C18.6594 11.4717 17.3156 12.333 17.3156 14.8291C17.3156 17.2402 18.5469 18.0166 20.0469 18.0166H20.9656V11.4717Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5645">
                                            <rect width="8" height="16" fill="white" transform="translate(14.75 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a></li>
                        <li>
                            <a href="javascript:void(0)">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.109375" width="36" height="36" rx="18" fill="black"
                                        fill-opacity="0.58" />
                                    <g clip-path="url(#clip0_30_5652)">
                                        <path
                                            d="M26.375 18.2906C26.375 22.7125 23.3469 25.8594 18.875 25.8594C14.5875 25.8594 11.125 22.3969 11.125 18.1094C11.125 13.8219 14.5875 10.3594 18.875 10.3594C20.9625 10.3594 22.7188 11.125 24.0719 12.3875L21.9625 14.4156C19.2031 11.7531 14.0719 13.7531 14.0719 18.1094C14.0719 20.8125 16.2312 23.0031 18.875 23.0031C21.9438 23.0031 23.0938 20.8031 23.275 19.6625H18.875V16.9969H26.2531C26.325 17.3937 26.375 17.775 26.375 18.2906Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_30_5652">
                                            <rect width="15.25" height="16" fill="white"
                                                transform="translate(11.125 10.1094)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </li>
                    </ul>
                    <AuthRegistrationForm />
                </div>
            </div>
        </div>
    </main>
    <FooterComponent />
</template>

<script lang="ts">
export default {
    data() {
        return {
            status: 'login'
        }
    },
    methods: {
        register() {
            this.status = 'register'
        },
        login() {
            this.status = 'login'
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    // background-color: #fbfbfb;
    border-radius: 5px;
    padding: 80px 100px;
    margin: 100px auto;
    width: 970px;

    .items {
        display: flex;

        .left-side {
            padding: 50px;
            border-radius: 5px;
            box-shadow: -13px 10px 15px 0px #f3f3f3b5;
            background-color: #fff;
            // background-image: linear-gradient(276deg, rgb(129 255 226 / 9%), rgb(0 0 0 / 3%));

            &.register {
                margin: auto auto auto 0;
                box-shadow: 20px 4px 15px 0px rgba(243, 243, 243, 0.7098039216);
            }

            .heading {
                text-align: center;

                span {
                    font-weight: 700;
                    font-size: 28px;
                    color: rgb(255 107 107);
                    text-align: center;
                    margin-bottom: 20px;
                    display: block;
                }
            }

            .socials {
                display: flex;
                margin: 15px auto;
                justify-content: center;

                a {
                    display: block;
                }

                li {
                    margin: 0 5px;
                }

                svg {
                    height: 34px
                }

                rect {
                    fill: #f00;
                }
            }

            form {
                p {
                    margin-bottom: 10px;
                    text-align: center;
                    font-size: 12px;
                }

                a {
                    display: block;
                    margin: auto;
                    width: fit-content;
                    font-size: 12px;
                    color: #000000E5;
                    text-decoration: underline;
                }
            }

            .input-group {
                padding: 10px;
                background-color: #0000000F;
                width: 255px;
                display: flex;
                margin-bottom: 10px;

                input {
                    font-size: 12px;
                    width: 100%;
                    color: #00000094;
                    margin: auto 0;
                }

                .icon {
                    margin: auto 5px auto 0;
                }
            }

            input[type="submit"] {
                display: block;
                background-color: rgb(63 221 192);
                padding: 10px 28px;
                color: #fff;
                font-size: 16px;
                margin: 20px auto 0;
                border-radius: 30px;
            }
        }
    }
}

.right-side {
    // background-image: linear-gradient(244.45deg, rgba(0, 0, 0, 0.8) 3.03%, rgba(0, 0, 0, 0.8) 99.9%);
    background-image: linear-gradient(244.45deg, rgb(63 221 192) 3.03%, rgb(101 195 195 / 87%) 99.9%);
    height: 360px;
    margin: auto;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 0 30px;
    text-align: center;
    margin-right: auto;
    margin-left: 0;

    &.register {
        margin: auto 0;
        padding: 0 15px;
    }

    h3 {
        font-size: 24px;
    }

    p {
        margin: 30px 0;
    }

    button {
        margin: 0 auto;
        padding: 10px 28px;
        border-radius: 30px;
        font-size: 16px;
        border: 1px solid #fff;
    }
}</style>