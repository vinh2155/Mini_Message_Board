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