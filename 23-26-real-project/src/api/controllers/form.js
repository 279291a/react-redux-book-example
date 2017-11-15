export default app => {
  app.post('./forms',(req,res) => {
    const body = req.body;
    body.submitTime = new Date;
    setTimeout(function() {
      if(Math.random() < 0.33){
        res.staus(500).end();
      }else{
        res.json(body);
      }
    }, 1000);
  })
}