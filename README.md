# What is middleware?
Middleware is something in between the client and server, used to perform some kind of opertions and it some kind of attack.Request will not directly send from client to server the data
is going to validate in the middleware,if it get success it will goes to next page, if middleware not allowed it will go back to home page with some request

# What is next() ?
next() : It will run or execute the code after all the middleware function is finished.
Using next(): If you have any middleware function and below the next() you have some lines or function that you want to execute, 
then by using next() you can actually execute the lines or function because it runs the code below next() after all middleware function finished.
if we are using any login page we can use next(),if we use next() it will go to login page otherwise it will keep on loading the page.

# app.use() ?
The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. 
It is mostly used to set up middleware for your application.for example app.use(middleware2) we can access the middleware 2 as globally.

