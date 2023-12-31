import React, {useEffect} from "react";
import{v4 as uuidv4} from "uuid";

const TodoInput = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {


    const updateTodo =(title, id, completed) =>{
      const newTodo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
      )
      setTodos(newTodo);
      setEditTodo("");
    };
    useEffect(() => {
      if(editTodo){
        setInput(editTodo.title);
      }else{
        setInput("");
      }
    }, [setInput, editTodo]);

    const onInputChangeHandler = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(editTodo){
          setTodos([...todos, {id:uuidv4(), title: input, completed: false}]);
        setInput("")
        } else{
          updateTodo(input, editTodo.id, editTodo.complete)
        }
        
    };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Creat New Todo"
        className="task-input"
        value={input}
        required
        onChange={onInputChangeHandler}
      />
      <button className="button-add" type="submit">
        {editTodo? "Add" : "Ok"}
      </button>
    </form>
  );
};
export default TodoInput;
