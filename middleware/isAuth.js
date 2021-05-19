module.exports = (req, res, next) => {
    if(!req.session.isLoggedIn){
        return res.send('Failed at isAuth')
    }
    next();
}