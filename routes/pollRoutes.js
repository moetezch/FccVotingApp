const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const Poll=mongoose.model('polls')

module.exports=app=>{
app.post('/api/polls',requireLogin,async (req,res)=>{
  const {title,options}=req.body

  const poll= new Poll ({
    title,
    options,
    _user:req.user.id
  })
  await poll.save()
  
})

}