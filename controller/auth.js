const { UserEntity } = require('../DataServices/model/models')
const bcrypt = require('bcryptjs');

exports.postSignup = async (req,res,next) => {
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const username = 'admin';
    const password = req.body.password;
    await UserEntity.findOne({ where: { email: email } })
    .then(async userDoc=> {
        if(userDoc){
            return console.log('User is already there')
        }
        await bcrypt.hash(password, 12).then(async hashedPass => {
            await  UserEntity.create({ 
                        username: username,
                        email: email,
                        phoneNumber: phoneNumber,
                        password: hashedPass
                     })
                     .then(result => {
                         res.send('NEW USER ADDED!')
                     }) 
        })
    })
    .catch(err => console.log(err) )
}

exports.postLogin = async  (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    await UserEntity.findOne({ where: { email: email } })
    .then(async userDoc => {
        if(!userDoc){
            return console.log('No user found')
        }
        await bcrypt.compare(password, userDoc.password)
        .then(async doMatch => {
            if(!doMatch){
                return res.send('Invalid email or password')
            }
            req.session.isLoggedIn = true;
            req.session.user = userDoc;
            await req.session.save((err) => {
              res.send('logged in')
              console.log("user is logged in");
            });
        })
    })
    .catch(err => {
        console.log(err)
    })
}