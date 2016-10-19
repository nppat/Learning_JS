// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // Routes
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
     //  Get CSS file
    else if (request.url === "/stylesheets/style.css") {
         fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents); 
             response.end();
         });
    }
    // Get images
    else if (request.url === "/images/challenger.jpg") {
         fs.readFile('./images/challenger.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/cheezburger.jpg") {
         fs.readFile('./images/cheezburger.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/lowrider.jpg") {
         fs.readFile('./images/lowrider.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/margarita.jpg") {
         fs.readFile('./images/margarita.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/pickle.jpg") {
         fs.readFile('./images/pickle.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/street_racer.jpg") {
         fs.readFile('./images/street_racer.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/tesla.jpg") {
         fs.readFile('./images/tesla.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/want.jpeg") {
         fs.readFile('./images/want.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpeg'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else {
        fs.readFile('./views/error.html', 'utf8', function (errors, contents){
             response.writeHead(404, {'Content-type': 'text/html'});
             response.write(contents); 
             // response.end("File not found!");
         });
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");