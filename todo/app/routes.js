var Todo = require('./models/todo');

module.exports = function (app){


	//creating new ToDo
	app.post('/api/todo', function (req, res){
			
		Todo.create({text: req.body.text, done: false}, function (err, todo){
			if (err)
				res.json(err);
			else
				res.send('saved');
		});
	});

	app.get('/api/todo', function (req, res){

		Todo.find(function (err, todo){
			if (err)
				res.send(err);
			
			res.json(todo);
		});
	});

	app.get('*', function (req, res){
		res.sendfile('./public/index.html');
	});
};