function authMiddleware(req,res,next){
    
    if(req.session.userLogged){
        console.log("authMiddleware redirecting to profile")
        res.redirect('/profile')
       
    } else {    
    next();
    }
}

module.exports = authMiddleware;