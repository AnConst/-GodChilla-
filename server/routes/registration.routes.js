const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length < 6) {
    res.json({ isUser: false, message: 'Длина пароля должна быть больше 6 символов' });
  }
  let newUser;
  const sameUser = await User.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ],
    },
  });
  if (!sameUser) {
    const hashPassword = await bcrypt.hash(password, 10);
    newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
  } else {
    res.json({ isUser: false, message: 'Юзер с таким логином или имейлом уже существует' });
  }
  if (newUser) {
    res.json({ isUser: true, message: 'Регистрация прошла успешно!' });
  } else {
    res.json({ isUser: false, message: 'Регистрация не прошла!' });
  }
});

module.exports = router;

// router.route('/registration')
//   .post(async (req, res) => {
//     try {
//       const {
//         name,
//         password,
//         email,
//       } = req.body;
//       if (password.length < 6) {
//         res.json({ user: false, message: 'Длина пароля должна быть больше 6 символов' });
//       }
//       const user = await User.create({
//         where: {
//           [Op.or]: [
//             { name },
//             { email },
//           ],
//         },
//       });
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(400).json(error.message);
//     }
//   });
// User.create(req.body)
// .then((newUser) => res.status(201).json(newUser))
// .catch((error) => res.status(500).json(error));