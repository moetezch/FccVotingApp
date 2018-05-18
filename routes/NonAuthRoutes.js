module.exports=app=>{

  app.get('/',(req,res)=>{
    res.send('Homepage')
  })

  app.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
  })
}