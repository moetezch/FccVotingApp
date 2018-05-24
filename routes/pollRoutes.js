const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const Poll=mongoose.model('polls')

module.exports=app=>{

app.get('/api/mypolls',requireLogin,async (req,res)=>{
  const polls=await Poll.find({
    _user:req.user.id
  })
  res.send(polls)
})

app.post('/api/mypolls',requireLogin,async (req,res)=>{
  const {title,options}=req.body

  const poll= new Poll ({
    title,
    options,
    _user:req.user.id
  })
  await poll.save()
  
})

app.delete('/api/polls/delete/:id',requireLogin,async (req,res)=>{


  const query ={_id:req.params.id}
  await Poll.deleteOne(query,(err,response)=>{
  if(err){
      return console.log(err);
      
  }
  res.send(200);
});
})

app.post('/api/polls/edit/:id',(req,res,next)=>{
  const query ={_id:req.params.id}
  const poll={
  "options.vote":req.body.vote,
  
  }
  
  Poll.updateOne(query,{$set:poll},(err,result)=>{
  if(err){
      return console.log(err);
  }
  console.log('Todo Updated....');
 
  });
  
  });

}