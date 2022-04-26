exports.error = (req,res)=>{
    res.status(404).render("error404",{pageTitle:"Error 404"})
}