## Some Questions that I asked to myself
1. How to run this project?
Download this repo and open the folder on vscode -> Install Node.js dependencies (npm init -y): this creates a package.json file -> Install the required depencies (npm install express ejs dotenv): this creates node_modules (all the actual package files) and package-lock.json (locks specific versions) and updates package.json (adds dependencies section - think of it as a shopping list of what packages you need) 
-> finally run the server (npm start)

2. How is the data saved? Even when I refresh, the messages are still the same.

We don't use any database (MongoDB, PostgreSQL - Structured data like tables for user profiles, messages) or cloud storage (Firebase, AWS - unstructured data like profile pictures, file attachments), but the data persits thanks to the server's memory. It's in the ram of my computer.

3. Why is there comments in the code?

When I created this project, I did not understand perfectly what I was writing. The parts where I needed clarification, I wrote comments for me to understand the next day, making me more efficient in building the project.

4. How to publish on Github

Git init -> git add . -> git commit -m "Initial commit" -> Create a new repo -> git remote add origin {the clone web URL} -> git branch -M main (rename the current branch main, historical it was master, but the new default branch nameis main now. GitHub pages looks for main by default) -> git push origin main

5. Is EJS the frontend here? 

EJS is our template engine, it's how we create dynamic HTML on the server-side. It's not really the frontend since it does not follow the traditional path: Browser downloads HTML/CSS/JS -> Runs JS in browser. Instead, it is: Browser -> Requests page -> Server runs EJS -> Server sends finished HTML. We call this **server-side templating**.

6. Why build this project?

I wanted to create a backend for the first time with the Express framework. I want to get used to the technologies and concepts like:

**Middlewares:** Functions that execute during the request-response cycle. Different types in this project:

*Application-level middleware (runs for all requests):*
- `app.use(express.urlencoded({extended: true}))` - parses form data from HTML forms
- `app.use(express.static('public'))` - serves static files like CSS from the public folder

*Router-level middleware (runs for specific route groups):*
- `app.use('/', messageRouter)` - all routes starting with / go through messageRouter
- `app.use('/messages', detailsRouter)` - all routes starting with /messages go through detailsRouter

*Error-handling middleware (4 parameters - err, req, res, next):*
- `app.use((err, req, res, next) => { res.status(500).render('404') })` - handles server errors

*Catch-all middleware (runs when no routes match):*
- `app.use((req,res) => { res.status(404).render('404') })` - 404 error handler

**Routing:** Defining how the application responds to different URL paths. Examples:
- `messageRouter.get('/', (req,res) => {...})` - handles GET requests to the home page
- `messageRouter.post('/new', (req,res) => {...})` - handles POST requests when submitting the form
- `detailsRouter.get("/:id", (req,res) => {...})` - handles dynamic routes with parameters like /messages/1

**Template Engines:** Using EJS to generate dynamic HTML by embedding JavaScript in HTML templates with `<%= %>` and `<% %>` syntax

**HTTP Methods:** Understanding GET (retrieve data) vs POST (send data) requests and how forms use different methods

**Request/Response Objects:** Learning to use `req.body` to access form data, `req.params` to get URL parameters, and `res.render()` to send back HTML pages