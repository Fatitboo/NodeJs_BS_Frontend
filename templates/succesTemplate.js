const successTemplate = (res, title, pageName, session, message, data)=>{
    res.render(pageName, {title:title, session:session, message:message, data:data})
}
module.exports=successTemplate