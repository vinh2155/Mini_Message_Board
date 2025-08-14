# Mini Message Board

## How to Run the Project

### For Technical Users
1. **Clone the repository** and navigate to the project folder
2. **Install dependencies**: Run `npm install` to install Express, EJS, and other required packages
3. **Start the server**: Run `npm start`
4. **Access the application**: Open your browser and go to `http://localhost:3000`

### For Non-Technical Users
1. **Download the project** files to your computer
2. **Install Node.js** from [nodejs.org](https://nodejs.org) if you don't have it
3. **Open a terminal/command prompt** in the project folder
4. **Type these commands** one by one:
   - `npm install` (downloads required files)
   - `npm start` (starts the application)
5. **Open your web browser** and visit `http://localhost:3000`

## Some Questions I Asked Myself

### 2. How is the data saved? Even when I refresh, the messages are still the same.

We don't use any database (MongoDB, PostgreSQL - Structured data like tables for user profiles, messages) or cloud storage (Firebase, AWS - unstructured data like profile pictures, file attachments), but the data persits thanks to the server's memory. It's in the ram of my computer.

### 5. Is EJS the frontend here? 

EJS is our template engine, it's how we create dynamic HTML on the server-side. It's not really the frontend since it does not follow the traditional path: Browser downloads HTML/CSS/JS -> Runs JS in browser. Instead, it is: Browser -> Requests page -> Server runs EJS -> Server sends finished HTML. We call this **server-side templating**.

### 6. Why build this project?

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