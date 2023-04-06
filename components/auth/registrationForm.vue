<template>
    <form @submit="registration">
        <p>или используйте email адрес</p>
        <div class="input-group">
            <div class="icon"><svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.6 6.75C9.92734 6.75 9.60391 7.125 8.5 7.125C7.39609 7.125 7.075 6.75 6.4 6.75C4.66094 6.75 3.25 8.16094 3.25 9.9V10.875C3.25 11.4961 3.75391 12 4.375 12H12.625C13.2461 12 13.75 11.4961 13.75 10.875V9.9C13.75 8.16094 12.3391 6.75 10.6 6.75ZM13 10.875C13 11.0813 12.8313 11.25 12.625 11.25H4.375C4.16875 11.25 4 11.0813 4 10.875V9.9C4 8.57578 5.07578 7.5 6.4 7.5C6.85937 7.5 7.31641 7.875 8.5 7.875C9.68125 7.875 10.1406 7.5 10.6 7.5C11.9242 7.5 13 8.57578 13 9.9V10.875ZM8.5 6C10.157 6 11.5 4.65703 11.5 3C11.5 1.34297 10.157 0 8.5 0C6.84297 0 5.5 1.34297 5.5 3C5.5 4.65703 6.84297 6 8.5 6ZM8.5 0.75C9.73984 0.75 10.75 1.76016 10.75 3C10.75 4.23984 9.73984 5.25 8.5 5.25C7.26016 5.25 6.25 4.23984 6.25 3C6.25 1.76016 7.26016 0.75 8.5 0.75Z"
                        fill="black" fill-opacity="0.58" />
                </svg>
            </div>
            <input type="text" placeholder="Имя" v-model="name">
        </div>
        <div class="input-group">
            <div class="icon"><svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.875 3H3.125C2.50391 3 2 3.50391 2 4.125V10.875C2 11.4961 2.50391 12 3.125 12H12.875C13.4961 12 14 11.4961 14 10.875V4.125C14 3.50391 13.4961 3 12.875 3ZM3.125 3.75H12.875C13.0813 3.75 13.25 3.91875 13.25 4.125V5.09531C12.7367 5.52891 12.0031 6.12656 9.72031 7.93828C9.32422 8.25234 8.54375 9.00938 8 9C7.45625 9.00938 6.67344 8.25234 6.27969 7.93828C3.99688 6.12656 3.26328 5.52891 2.75 5.09531V4.125C2.75 3.91875 2.91875 3.75 3.125 3.75ZM12.875 11.25H3.125C2.91875 11.25 2.75 11.0813 2.75 10.875V6.07031C3.28437 6.50859 4.12812 7.18594 5.81328 8.52422C6.29375 8.90859 7.14219 9.75469 8 9.75C8.85313 9.75703 9.69453 8.91797 10.1867 8.52422C11.8719 7.18594 12.7156 6.50859 13.25 6.07031V10.875C13.25 11.0813 13.0813 11.25 12.875 11.25Z"
                        fill="black" fill-opacity="0.58" />
                </svg>
            </div>
            <input type="text" placeholder="Email" v-model="email">
        </div>
        <div class="input-group">
            <div class="icon">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <input type="password" v-model="password" placeholder="Password">
        </div>
        <input type="submit" value="Зарегистрироваться">
    </form>
</template>

<style lang="scss" scoped>
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
</style>

<script lang="ts">
export default {
    data() {
        return {
            password: '',
            email: '',
            name: ''
        }
    },
    methods: {
        async registration(e: any) {
            
            e.preventDefault()

            let data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            try {
                let response = await fetch('http://localhost:1337/api/check-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: data.email })
                });
                let result = await response.json();
                if (result.exists) {
                    console.log('пользователь с таким email уже существует')
                } else {
                    console.log('пользователь с таким email не существует')
                }
            } catch (error) {
                alert('error')
                console.log(error)
            }

        },
    }
}
</script>