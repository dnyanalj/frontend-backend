const express = require('express');
var cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors());

app.get('/prnt', function (req, res) {
    const data = req.query.data;
    res.json({
        data:data
    });
})
app.listen(3000,()=>{
    console.log('server running')
})