const router = require('express').Router();
let Blog = require('../models/blog.model');


router.route('/').get((req, res) => {
    Blog.find()
    .then(users=>res.json(users))
    .catch(err => res.status(400).json('Error'+err));
})

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const category = req.body.category;
    const date = Date.parse(req.body.date);
  
    const newBlog = new Blog({
      title: title,
      content: content,
      author: author,
      category: category,
      date: date
    });
  
    newBlog
      .save()
      .then(() => res.json('New blog added'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res)=>{
    Blog.findById(req.params.id)
    .then(blog=>res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
  })

  router.route('/:id').get((req, res)=>{
    Blog.findById(req.params.id)
    .then(blog=>res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
  })

  router.route('/:id').delete((req, res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Blog deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
  })

  router.route('/update/:id').post((req, res)=>{
    Blog.findById(req.params.id)
    .then(blog=>{
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.author = req.body.author;
        blog.date = Date.parse(req.body.date);
    
        blog.save()
        .then(() => res.json('blog updated'))
      .catch(err => res.status(400).json('Error: ' + err));
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
  })


  

  

module.exports = router;