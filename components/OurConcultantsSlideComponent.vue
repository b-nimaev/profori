<template>
    <div class="slide">
        <div class="user-avatar">
            <img src="~/assets/svg/user-avatar-for-slider.png" alt="user-avatar">
        </div>
        <div class="user-data">
            <div class="user-name">
                <h4>Новикова Мария</h4>
                <div class="status">Pro</div>
            </div>
            <div class="user-meta">
                <div class="user-nickname"><span>@marianovikova</span></div>
                <div class="user-exp"><span>5 лет на сервисе</span></div>
            </div>
            <div class="user-position">
                <p>Профориентолог</p>
            </div>
        </div>
        <button>Перейти</button>
    </div>
</template>

<style lang="scss" scoped>
.slide {
    padding: 30px;
    text-align: center;
    display: inline-block;
    width: fit-content;
    box-shadow: 1px 5px 20px rgba(213, 213, 213, 0.25);
    border-radius: 5px;
    position: relative;
    top: 0;
    margin: 15px 0;
    width: fit-content;
    cursor: pointer;

    transition: 400ms ease-in;
    &:hover {
        top: -5px;
        button {
            background-color: #0A0E10;
            color: #fff;
            border-color: #fff;
        }
    }
    .user-avatar {
        margin-bottom: 15px;
    }

    .user-data {
        display: flex;
        flex-direction: column;
        .user-name {
            display: flex;

            h4 {
                font-size: 20px;
                color: #0A0E10E5;
                margin-right: 10px
            }

            .status {
                padding: 1px 8px;
                border-radius: 3px;
                background-color: #FF6610;
                color: #fff;
                margin: auto 0;
            }
        }

        .user-meta {
            margin: 0 auto 15px;
            display: flex;
            font-size: 12px;

            .user-nickname {
                margin-right: 10px;

                span {
                    color: #1d0f0fb5
                }
            }

            .user-exp {
                span {
                    color: #1d0f0fb5;
                }
            }
        }

        .user-position {
            p {
                font-size: 16px;
            }
        }
    }

    button {
        margin-top: 15px;
        padding: 8px 40px;
        color: #0A0E10;
        border: 1px solid #0A0E10;
        background-color: #fff;
        border-radius: 50px;
        transition: 400ms ease;
    }
}
@media screen and (max-width: 760px) {
    .slide {
        margin: auto;
        width: 100%;
        .user-data {
            .user-name {
                margin: auto;
            }
        }
    }
}
</style>