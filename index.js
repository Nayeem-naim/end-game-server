const  express = require('express')

const app = express()
  
app.get('/', (req,res) => {
            res.send('this is my port ')
})
app.listen(3000 ,() => console.log('hey what up'))