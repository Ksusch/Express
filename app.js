// The express() function creates an Express application. Require Express
const express = require ("express");

// Creating a server named app
// Express server handling requests and responses
const app = express();

/*
// Creating a route. app: the express server, get; HTTP Verb to acces this page, "/"; route the user types into the URL bar, request: object containing information about the request such as the headers, response: object containing information about the response, such as headers and any information needs to be sent to the client, next: used to handle errors, send(): method of the response object controlling what is sent to the client as a string
app.get("/", (request, response, next) => {
  console.log(request);
  response.send("<h1>Welcome Ironhacker. :)</h1>");
})
*/

// Server Started. Comes at the end of the code
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

// Run the server with node in the terminal: node app.js 
// Stoping the server with CONTROL + C in the terminal
// Everytime changes are made, the program has to be stoped and re-run again. To reload automatically after saving, nodemon has to be installed: npm install nodemon --global and will be used instead of node: nodemon app.js

// Static files (images, CSS, client-side JS) are usually saved in a folder called public

// Make everything inside of public/ available (showed in the upper section) no need to include public in the route this way:
app.use(express.static('public'));

/* send() method with a realistic HTML structure
app.get("/cat", (request, response, next) => {
  response.send(`
    < !doctype html >
      <html>
        <head>
          <meta charset="utf-8">
            <title>Cat</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
          <body>
            <h1>Cat</h1>
            <p>This is my second route</p>
            <img src="/images/cool-cat.jpg" />
          </body>
    </html>
  `);
});
*/


// Routes referring to the separated HTML files using the method sendFile() allowing to respond with the contents of a file. !Two underscores before dirname, which refers to the folder in which app.js is located

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/cat", (request, response, next) => {
  response.sendFile(__dirname + "/views/cat-page.html");
});

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

// Telling Express app that HBS will be in charge of rendering the HTML:
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// referring to views files by calling res.render instead of res.send
app.get("/index", (req, res, next) => {
  // send views/index.hbs for displaying in the browser
  res.render("index");
});

app.get("/about", (req, res, next) => {
  res.render("about")
})

// res.rend() can take an additional parameter that will contain a JS object with information used in the view
app.get("/index", (req, res, next) => {
  let data = {
    name: 'Ironhacker',
    lastName: "Rocking it!"
    bootcamp: "<span>IronHack WebDev</span>"
  };
  res.render('index', data);
})