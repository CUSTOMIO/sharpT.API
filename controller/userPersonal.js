const bcrypt = require("bcryptjs");

const {
  UserPersonalEntity,
  UserEntity,
} = require("../DataServices/model/models");

exports.postUser = async (req, res, next) => {
  const firstName = req.body.firstName;
  const middleName = req.body.middleName;
  const lastName = req.body.lastName;
  const institute = req.body.institute;
  const studentPN = req.body.studentPN;
  const email = req.body.email;
  const password = req.body.password;
  const parentPN = req.body.parentPN;
  const standardId = 1;
  const check = false;
  const user_id = 0;

 
    await UserEntity.findOne({ where: { email: email } }).then(async (userDoc) => {
      if (userDoc) {
        return console.log("USER ALREASY EXIST");
      }
      let user = {};
      await UserEntity.create({
        email: email,
        username: firstName,
        password: password,
        phoneNumber: studentPN,
      }).then(result => {
        user = result;
        console.log(user.id);
      });

      await UserPersonalEntity.create({
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          institute: institute,
          studentPN: studentPN,
          parentPN: parentPN,
          isVerified: false,
          standardId: null,
          userId : parseInt(user.id)
        })
    })
    .then(result => {
      console.log(`THIS IS RESULT ${result}`);
    })

};

