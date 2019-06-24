const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT || 5000;
var app=express();


hbs.registerPartials(__dirname+'/views/partials');   //advance features FOOTER
app.set('view engine','hbs');                        // hbs dynamic
app.use(express.static(__dirname+'/public'));        //static any html pages


hbs.registerHelper('getCurrentYear',()=>
{
  return new Date().getFullYear()
});

hbs.registerHelper('NewTitle',(text)=>
{
//  return text.toUpperCase();
});

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`)
  next();
});

//app.set('view engine', 'hbs');
app.get('/',(request, response)=>{                     //static html

  //  response.send('<h1>Hello Express!</h1>');
    /*  response.send(
        {
          names:'Chetana',
          likes:[
            'Biking',
            'Cities'
          ]
        }
      );*/

      response.render('home.hbs',{
        Title:'NODEJS Title',
      //  CurrentYear: new Date().getFullYear()  this is replaced by registerHelper()
      });

});

app.get('/about',(req,res)=>
{
  res.render('about.hbs',{
    Title:'NODEJS Title',
  //  CurrentYear: new Date().getFullYear()
  });

});


app.listen(port);
