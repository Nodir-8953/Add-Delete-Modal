import React from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/AddTodo'
import Loader from './Loader'
import Modal from './Modal/Modal'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Lorem ipsum lorem'},
    {id: 2, completed: false, title: 'Lorem ipsum lorem defag'},
    {id: 3, completed: false, title: 'Lorem ipsum lorem huber'},
  ])
  const [loading, setLoading] = React.useState(true);
  function toggleTodo(id) {
    setTodos(
      todos.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  
  return(
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        <AddTodo onCreate={addTodo}/>
        {!loading && <Loader/>} 
        {/* if you need Loader {!loading} change {loading}  */}
        {todos.length ? 
        <TodoList todos={todos} 
        onToggle={toggleTodo} 
        /> : 
        loading ? null : (<p>No todos</p>)
      }
        
      </div>
    </Context.Provider>
  );
}

export default App;
