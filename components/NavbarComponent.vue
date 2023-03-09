<template>
    <nav>
        <div class="container">
            <NuxtLink to="/"><LogotypeComponent></LogotypeComponent></NuxtLink>
            <div class="right-side">
                <NuxtLink class="my-profori" to="/my-profori">MyProfori</NuxtLink>
                <ul>
                   <li><NuxtLink to="/tests">Тесты</NuxtLink></li> 
                   <li><NuxtLink to="/proforientation">Профориентация</NuxtLink></li> 
                   <li><NuxtLink to="/career">Карьера</NuxtLink></li> 
                   <li><NuxtLink to="/for-consultants">Консультантам</NuxtLink></li> 
                </ul>
                <NuxtLink class="navbar-login" to="/login">
                    <span>Вход</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.03125 2.2832L9.5293 6.76758C9.65781 6.89609 9.65781 7.10391 9.5293 7.23242L5.03125 11.7168C4.90273 11.8453 4.69492 11.8453 4.56641 11.7168L4.37227 11.5227C4.24375 11.3941 4.24375 11.1863 4.37227 11.0578L7.98164 7.46484H0.328125C0.147656 7.46484 0 7.31719 0 7.13672V6.86328C0 6.68281 0.147656 6.53516 0.328125 6.53516H7.98164L4.375 2.94219C4.24648 2.81367 4.24648 2.60586 4.375 2.47734L4.56914 2.2832C4.69492 2.15469 4.90273 2.15469 5.03125 2.2832ZM14 10.9375V3.0625C14 2.33789 13.4121 1.75 12.6875 1.75H9.07812C8.89766 1.75 8.75 1.89766 8.75 2.07812V2.29688C8.75 2.47734 8.89766 2.625 9.07812 2.625H12.6875C12.9281 2.625 13.125 2.82187 13.125 3.0625V10.9375C13.125 11.1781 12.9281 11.375 12.6875 11.375H9.07812C8.89766 11.375 8.75 11.5227 8.75 11.7031V11.9219C8.75 12.1023 8.89766 12.25 9.07812 12.25H12.6875C13.4121 12.25 14 11.6621 14 10.9375Z" fill="white" fill-opacity="0.9"/>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script></script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
$paddings: 10px 20px;
nav {
    padding: 20px 0;
}
nav .container {
    display: flex;
    .right-side {
        display: flex;
        margin-left: auto;
        .my-profori {
            margin: auto 0;
            padding: $paddings;
            // background-color: $primary;
            color: #000;
            border: 1px solid #000;
            font-size: 14px;
            border-radius: 30px;
            margin-right: 30px;
        }
        ul {
            display: flex;
            margin: auto -15px;
            li {
                margin: 0 15px;
                a {
                    color: #111;
                    font-size: 16px;
                }
            }
        }
        .navbar-login {
            margin: auto 0 auto 30px;
            border-radius: 30px;
            padding: $paddings;
            // background-color: $primary;
            color: #000;
            border: 1px solid #000;
            display: flex;
            span {
                font-size: 14px;
            }
            svg {
                margin: auto 0 auto 5px;
                path {
                    fill: #000;
                    fill-opacity: 1;
                }
            }
        }
    }
}
</style>