import {Router} from 'express';

const messageRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }, 
  {
    text: "Great Message Board",
    user: "Mohamed",
    added: new Date()
  }
];

messageRouter.get('/',(req,res)=>{
    res.render('index',{title: "Mini Message Board", messages: messages})
})

messageRouter.get('/new', (req,res) => {
    res.render('form',{title: "Mini Message Board"})
})

messageRouter.post('/new', (req,res) =>{
    const data = req.body;
    const user = data.user;
    const text = data.text;

    messages.push({text: text, user: user, added: new Date()})
    res.redirect('/')
})

export {messageRouter,messages};