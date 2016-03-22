var express = require('express');

var router = express.Router();


var todoItems = [
            {id:1, desc:'goo'},
            {id:2, desc:'loo'},
            {id:3, desc:'moo'},
        ];

router.get('/',function(req,res){
    res.render('index',{
        title : 'sid da app',
        items: todoItems
    });
});

router.post('/add',function(req,res){
   var newItem = req.body.newItem;
    
    todoItems.push({
       id: todoItems.length + 1,
       desc: newItem
    });
    
    res.redirect('/');
});


module.exports = router;