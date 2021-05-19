//Libraires Import
const express = require("express");
const app = express();


//Models Import
const models = require("./DataServices/model/models");
const port = 3000;

//#region BodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//#endregion

//#region Session
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require('./utils/database')

app.use(
	session({
	  secret: "keyboard cat",
	  store: new SequelizeStore({
		db: sequelize,
	  }),
	  resave: false, 
	  saveUninitialized: false
	})
  );
  
  app.use((req, res, next) => {
	  res.locals.isAuthenticated = req.session.isLoggedIn;
	  next();
	})
//#endregion


//#region Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
const userPersonalRoutes = require('./routes/userPersonal')


//app.use('/auth',authRoutes);
app.use(courseRoutes);
app.use(userPersonalRoutes);
//#endregion

//#region Sync
sequelize
  .sync({
	// force:true
  })
  .then(result=> {
      app.listen(port);
  })
  .catch((err) => console.log(err));
//#endregion