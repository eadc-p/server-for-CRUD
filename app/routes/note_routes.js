var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db){

	app.get('/notes/:id', (req,res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		db.collection('notes').findOne(details, (err,result)=>{
			if(err){
				res.send({'error': 'An error has occurred'});
			}else{
			res.send(result);
			}
		});

	});

	app.delete('/notes/:id', (req,res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		db.collection('notes').remove(details, (err,result)=>{
			if(err){
				res.send({'error': 'An error has occurred'});					
			}else{
				res.send(result);
			}
		});
	});

	app.put('/notes/:id', (req,res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const notes = {title: 'added crap', text: 'old replaced', updated: true};
		db.collection('notes').update(details, notes, (err, result)=>{
			if(err){
				res.send({'error': 'error occured'});
			}else{
				res.send(result);
			}
		})
	})

	app.post('/notes', (req,res)=>{
		// console.log(req.body);
		// res.send('Hello');
		const note = {text: req.body.text, title: req.body.title};
		db.collection('notes').insert(note, (err, result)=>{
			if(err){
				res.send({ 'error': 'An error has occurred' });
			}
			res.send(result.ops[0]);
		});
	});
}