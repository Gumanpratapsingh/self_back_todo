const mongoose =  require('mongoose')


//mongodb+srv://gumanpratap:2htFOS0MF8Nf1rkX@cluster0.3p0zle2.mongodb.net/


mongoose.connect("mongodb+srv://gumanpratap:2htFOS0MF8Nf1rkX@cluster0.3p0zle2.mongodb.net/todos")
const todoSchema  =  mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false 

    }
})


const todo = mongoose.model('todos', todoSchema);
module.exports={
    todo
}