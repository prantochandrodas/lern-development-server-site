const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors=require('cors')
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const posts=require('./data/Post.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('News API Running');
});
app.get('/category',(req,res)=>{
    res.send(categories);
});
app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    const selectedCourse=posts.find(post=>post.category_id===id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log('Learn development Server running on port', port);
});
