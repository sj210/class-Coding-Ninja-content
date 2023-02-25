import todo from "../models/todo.js";

export const addToDo = async (req, res)=>{
    try{
        const newTodo = await todo.create({
            data: req.body.data,
            createdAt: Date.now()
        });
        await newTodo.save();

        return res.status(200).json(newTodo);
    }
    catch(err){
        return res.status(500).json(err.message);

    }
}