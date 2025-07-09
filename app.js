import express from 'express';
import dotenv from 'dotenv';
import {messageRouter} from './routes/message.js'; //C'est pour afficher tous les messages + publier les messages
import {detailsRouter} from './routes/details.js'; //C'est pour afficher plus en details les messages (en gros)

const app = express();

dotenv.config()
app.set("views","views")
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true})); //This transforms the HTML format of the form into a javascript object. Otherwise, req.body would be undefined.
app.use(express.static('public')); //Don't have to include the full path, more useful if we had multiple images

app.use('/', messageRouter)
app.use('/messages', detailsRouter)

app.use((req,res) =>{
    res.status(404).render('404')
}) //This has to be at the end. If a client go on an unkwown path, this will run automatically - error 404 mean page does not exist

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).render('404', {title:"Page not found"}); //error 500 mean internal server error. It's important to specify with res.status to let the browser know. It may try to retry.
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
})