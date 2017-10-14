


var express = require('express');
var bodyParser = require('body-parser'); 
var jf = require('jsonfile');
var util = require('util');



var app = express();
 app.use(bodyParser());

 //app.use(express.static(__dirname + '/package1'));
 app.use('/boots',express.static(__dirname + '/package1/startbootstrap-heroic-features'));
 //app.use(express.static('/package1', { maxAge: 2 }));
 

 var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);

var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];


var teamquestionlist = {teama : 
[{
    id: 0,
    content: 'MQ is availble in cloud.',
    description: 'True or False ? ',
	options : [{option:1, name: 'True' }, {option:2, name: 'False' }],
	type: 'yesno',
    hint: 'http://www.ibm.com'
  }, {
    id: 1,
    content: 'MQ has a feature called managed file transfer, which is useful for banks.',
    description: 'select all the features of managed file transfer. ',
	options : [{option:1, name: 'Secure file transfer' }, {option:2, name: 'File transfer with REDACT feature' }, {option:3, name: 'Auto replication of files' }, {option:4, name: 'Auto reconnect is available' }],
	type: 'multiselect',
    hint: 'http://www.ibm.com'
  },{
    id: 2,
    content: 'CICS is availble on many platforms.',
    description: 'Select one on which CICS is not avilable. ',
    options : [{option:1, name: 'Sequent' }, {option:2, name: 'windows-xp' }, {option:3, name: 'Dos' }, {option:4, name: 'azure' }],
	type: 'multiselectone',
    hint: 'http://www.ibm.com'
}],
teamb :
 [{
    id: 0,
    content: 'MQ is availble in cloud.',
    description: 'True or False ? ',
	options : [{option:1, name: 'True' }, {option:2, name: 'False' }],
	type: 'yesno',
    hint: 'http://www.ibm.com'
  }, {
    id: 1,
    content: 'MQ has a feature called managed file transfer, which is useful for banks.',
    description: 'select all the features of managed file transfer. ',
	options : [{option:1, name: 'Secure file transfer' }, {option:2, name: 'File transfer with REDACT feature' }, {option:3, name: 'Auto replication of files' }, {option:4, name: 'Auto reconnect is available' }],
	type: 'multiselect',
    hint: 'http://www.ibm.com'
  },{
    id: 2,
    content: 'CICS is availble on many platforms.',
    description: 'Select one on which CICS is not avilable. ',
    options : [{option:1, name: 'Sequent' }, {option:2, name: 'windows-xp' }, {option:3, name: 'Dos' }, {option:4, name: 'azure' }],
	type: 'multiselectone',
    hint: 'http://www.ibm.com'
  }]
};

var teamusers = {teama : 
   [{
    id: 0,
    username: 'ramesh',
    emailid: 'rbelavad@in.ibm.com '
    
  }, {
	  id: 1,
    username: 'ramesh1',
    emailid: 'rbelavad@in.ibm.com '
	  }],
  teamb :
  [{
	  id: 0,
    username: 'ramesh',
    emailid: 'rbelavad@in.ibm.com '
    
  }, {
	  id: 1,
    username: 'ramesh1',
    emailid: 'rbelavad@in.ibm.com '
	  }]
};
	  

var teamnews = {teama : 
   [{
    id: 0,
    content: 'MQ is availble in cloud.',
    description: 'MQ is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 1,
    content: 'MQ has a feature called managed transfer, which is useful for banks.',
    description: 'managed file transfer is useful for effecient, secure transfer of files in banking industry. ',
    reference: 'http://www.ibm.com'
  },{
    id: 2,
    content: 'CICS is availble in cloud.',
    description: 'CICS is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 3,
    content: 'Message broker is availble in cloud.',
    description: 'Message broker is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 4,
    content: 'MQlight is an offering on cloud.',
    description: 'MQlight is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }],
  teamb :
  [{
    id: 0,
    content: 'MQ is availble in cloud.',
    description: 'MQ is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 1,
    content: 'MQ has a feature called managed transfer, which is useful for banks.',
    description: 'managed file transfer is useful for effecient, secure transfer of files in banking industry. ',
    reference: 'http://www.ibm.com'
  },{
    id: 2,
    content: 'CICS is availble in cloud.',
    description: 'CICS is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 3,
    content: 'Message broker is availble in cloud.',
    description: 'Message broker is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }, {
    id: 4,
    content: 'MQlight is an offering on cloud.',
    description: 'MQlight is available in azure, amazon and other cloud environment. ',
    reference: 'http://www.ibm.com'
  }]
};
  ;
  
  
var answerlist = {teama : 
	[{
    studentid: 0,
    studentname: 'ramesh',
    answers: [{questionid: 2, selections:[1]}],
	},
	{
    studentid: 20,
    studentname: 'ramesh',
    answers: [{questionid: 2, selections:[1]}],
	}
	]
};

	


app.get('/', function(req, res) {
  res.json(quotes);
});

app.get('/quote/random', function(req, res) {
  var id = Math.floor(Math.random() * quotes.length);
  var q = quotes[id];
  res.json(q);
});

app.get('/readyapp/echo/:what', function(req, res) {

 if(req.params.what == 'news')
 {
	 res.json(teamnews);
 }
 else {
	res.json(true); 
 }
	
});

app.get('/readyapp/load', function(req, res) {

	var file = 'questionlist.json';
jf.readFile(file, function(err, obj) {
  console.log(util.inspect(obj));
  teamquestionlist = obj;
})

  // res.json(teamquestionlist); 

  var file = 'teamnews.json';
jf.readFile(file, function(err, obj) {
  console.log(util.inspect(obj));
  teamnews = obj;
})

  res.json(teamnews); 
  
  });

app.get('/readyapp/unload', function(req, res) {

var file = 'questionlist.json';
var obj = teamquestionlist;
 
jf.writeFile(file, obj, function(err) {
  console.log(err)
})
  
  res.json(obj);
  
  
  var file = 'teamnews.json';
var obj = teamnews;
 
jf.writeFile(file, obj, function(err) {
  console.log(err)
})
  res.json(obj);
  
  var file = 'answerlist.json';
var obj = answerlist;
 
jf.writeFile(file, obj, function(err) {
  console.log(err)
})

  res.json(obj);
  
  
});

app.get('/readyapp/question/:teamname/:user', function(req, res) {
  /*if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  */
  if(req.params.teamname == 'teama')
  {
	  q = teamquestionlist.teama[1];
	res.json(q);  
  }
  else {
	  q = teamquestionlist.teama[2];
	res.json(q);
  }

  
});

app.post('/readyapp/question/:teamname/:user', function(req, res) {
  if(!req.body.hasOwnProperty('questionid') || 
     !req.body.hasOwnProperty('selections')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var answerobj = {
    questionid : req.body.questionid,
    selections : req.body.selections
  }; 
  var studentid;
  
   studentid = 20;
  
for (var i=0; i < answerlist.teama.length; i++)  
{
	if (answerlist.teama[i].studentid == studentid)
	{
		answerlist.teama[i].answers.push(answerobj);
		break;
	}
}

  res.json(true);

}
);

app.post('/readyapp/register', function(req, res) {
  if(!req.body.hasOwnProperty('teamname') || 
     !req.body.hasOwnProperty('emailid')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var registerobj = {
    teamname : req.body.teamname,
    emailid : req.body.emailid
  };
  
  /*
  var studentid;
  
   studentid = 20;
  
for (var i=0; i < answerlist.teama.length; i++)  
{
	if (answerlist.teama[i].studentid == studentid)
	{
		answerlist.teama[i].answers.push(answerobj);
		break;
	}
}
*/
  res.json(true);

}
);

app.post('/readyapp/sendnews', function(req, res) {
	
  if(!req.body.hasOwnProperty('teamname') || 
     !req.body.hasOwnProperty('content') ||
	 !req.body.hasOwnProperty('description')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 var t1 = req.body.teamname;
var sentobj = {
    
    content : req.body.content,
	description : req.body.description
	
  };
  
  if(req.body.teamname == 'teama')
  {
	  sentobj.id = teamnews.teama.length;
	  teamnews.teama.push(sentobj);
	res.json(teamnews.teama);  
  }
  else {
	  teamnews[t1] = new Array();
	  sentobj.id = teamnews[t1].length;
	  teamnews[t1].push(sentobj);
	res.json(teamnews[t1]);
  }
  
  
  

}
);

app.post('/readyapp/senduser', function(req, res) {
	/*
  if(!req.body.hasOwnProperty('teamname') || 
     !req.body.hasOwnProperty('emailid')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var registerobj = {
    teamname : req.body.teamname,
    emailid : req.body.emailid
  };
  
  */
  res.json(true);

}
);

app.post('/readyapp/sendquestion', function(req, res) {
	/*
  if(!req.body.hasOwnProperty('teamname') || 
     !req.body.hasOwnProperty('emailid')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var registerobj = {
    teamname : req.body.teamname,
    emailid : req.body.emailid
  };
  
  */
  res.json(true);

}
);



app.get('/readyapp/questions/:teamname', function(req, res) {
  /*if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  */
  if(req.params.teamname == 'teama')
  {
	  q = teamquestionlist.teama;
	res.json(q);  
  }
  else {
	  q = teamquestionlist.teamb;
	res.json(q);
  }

  
});

app.get('/readyapp/news/:teamname', function(req, res) {
  /*if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  */
  if(req.params.teamname == 'teama')
  {
	  q = teamnews.teama;
	res.json(q);  
  }
  else {
	  q = teamnews.teamb;
	res.json(q);
  }

  
});

app.get('/readyapp/users/:teamname', function(req, res) {
  /*if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  */
  if(req.params.teamname == 'teama')
  {
	  q = teamusers.teama;
	res.json(q);  
  }
  else {
	  q = teamusers.teamb;
	res.json(q);
  }

  
});




app.get('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  
var q = quotes[req.params.id];
  res.json(q);
});


app.post('/quote', function(req, res) {
  if(!req.body.hasOwnProperty('author') || 
     !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
var newQuote = {
    author : req.body.author,
    text : req.body.text
  }; 
 
quotes.push(newQuote);
  res.json(true);
});

app.delete('/quote/:id', function(req, res) {
  if(quotes.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }  

quotes.splice(req.params.id, 1);
  res.json(true);
});

app.listen(process.env.PORT || 4730);



var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});

mongoose.connect('mongodb://localhost/test');

var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);


var thor = new Movie({
  title: 'Thor'
, rating: 'PG-13'
, releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
, hasCreditCookie: true
});

thor.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});


console.log("Now findone \n");

// Find a single movie by name.
Movie.findOne({ title: 'Thor' }, function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});

console.log("Now find \n");
// Find all movies.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

console.log("Now find that have cookies \n");
// Find all movies that have a credit cookie.
Movie.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

