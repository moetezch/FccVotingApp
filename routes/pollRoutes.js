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

app.get('/api/polls',async (req,res)=>{
  const polls=await Poll.find({
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
  res.sendStatus(200);
});
})

  app.post('/api/polls/vote/:id',  (req, res) => {
    const query = { "options._id": req.params.id }

    Poll.updateOne(query, { $inc: { "options.$.votes": 1 } }, (err, result) => {
      if (err) {
        return console.log(err);
      }
      res.sendStatus(200);
    })
   
  });
  app.put('/api/polls/edit/:id',  (req, res) => {
    const optionName = req.body.option
    Poll.findOne({_id:req.params.id}, function(err, poll) {
      if (err) {
        throw err;
      }
      poll.options.push({name: optionName});
  
      poll.save(function(err, poll) {
        if (err) {
            res.status(400).json({msg: 'Failed to add option to poll'});
        } else {
          res.json({poll: poll, msg: 'Successfully updated poll', success: true});
        }
      });
    });
  });
  
}

