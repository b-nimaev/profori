// Подключение необходимых модулей и библиотек
const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config()
const fs = require("fs")

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: process.env.password_email
    }
});

// Создание экземпляра Express-приложения
const app = express();

// Добавление middleware для обработки запросов с телом в формате JSON и обработки запросов с других доменов (CORS)
app.use(bodyParser.json());
app.use(cors());

// URL для подключения к MongoDB и имя базы данных
const url = 'mongodb://localhost:27017/';


async function connectToDatabase() {
    const client = await MongoClient.connect(url);
    const db = client.db('profori');
    return db;
}

// Обработчик POST-запроса на адрес /api/check-email
app.post('/api/check-email', async (req, res) => {
    console.log(123);
    try {
        // Извлечение из запроса имени, адреса электронной почты и пароля пользователя
        const { name, email, password } = req.body;
        // использование
        let user = await connectToDatabase()
            .then(async (db) => {
                // Поиск пользователя в базе данных по его адресу электронной почты
                const user = await db.collection('users').findOne({ email });
                return user
            })
            .catch((err) => {
                console.error(err);
                process.exit(1);
            });


        
        // Если пользователь уже существует, отправляем ответ с флагом exists: true
        if (user) {
            res.json({ exists: true });
        } else {
            // Если пользователь не существует, добавляем его в базу данных
            const newUser = { name, email, password, emailConfirmed: false };
            let res = await connectToDatabase()
                .then(async (db) => {
                    // Поиск пользователя в базе данных по его адресу электронной почты
                    return await db.collection('users').insertOne(newUser);
                })
                .catch((err) => {
                    console.error(err);
                    process.exit(1);
                });

            // Создание ссылки для подтверждения адреса электронной почты пользователя
            const confirmLink = `http://localhost:3000/confirm/${res._id}`;
            
            const mailOptions = {
                from: process.env.email,
                to: email,
                subject: 'Confirm your email',
                text: `Please click on the following link to confirm your email: ${confirmLink}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    } catch (error) {
        console.log(error)
        // Обработка ошибок и отправка сообщения об ошибке в формате JSON
        res.status(500).json({ error: error.message });
    }
});

// Обработчик POST запроса на адрес /api/confirm для подтверждения email пользователя
app.post('/api/confirm', async (req, res) => {
    try {
        // Извлекаем идентификатор пользователя из параметров запроса
        const id = req.body.id;

        // Выполняем поиск пользователя в коллекции users базы данных с использованием метода findOne()
        // Поиск осуществляется по полю _id, которое должно быть равно переданному идентификатору
        const user = await db.collection('users').findOne({ _id: new ObjectId(id) });

        // Если пользователь найден, выполняем обновление документа в коллекции users с помощью метода updateOne()
        // Обновление происходит путем установки поля emailConfirmed в значение true
        if (user) {
            await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { emailConfirmed: true } });
            res.send('Email confirmed');
        } else {
            // Если пользователь не найден, возвращаем ошибку с кодом 404
            res.status(404).send('User not found');
        }
    } catch (error) {
        // Если при выполнении запроса возникла ошибка, возвращаем ошибку с кодом 500 и сообщением об ошибке
        res.status(500).json({ error: error.message });
    }
});
app.listen(1337, () => {
    console.log('Server listening on port 1337');
});