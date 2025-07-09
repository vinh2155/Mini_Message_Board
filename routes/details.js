import {Router} from "express";
import {messages} from '../routes/message.js';

const detailsRouter = Router()

detailsRouter.get("/:id", (req,res) =>{
    const {id} = req.params
    const message = messages[id]
    if (message !== undefined) {
        res.render('details', {message, title:"Mini Message Board"})
    } else {
        res.status(404).render('404',{title: "Error Page"})
    }

})

export {detailsRouter};