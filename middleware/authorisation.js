const authorisation = (permitted)=>{
    return ((req, res, next)=>{
        if(req.body.role.includes(permitted)){
            next()
        }else{
            res.status(403).send("unauthorized")
        }
    })
}

module.exports = {
    authorisation
}