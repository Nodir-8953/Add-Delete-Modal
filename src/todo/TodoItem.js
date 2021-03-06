import React, {useContext} from 'react'
import { render } from 'react-dom/cjs/react-dom.production.min';
import Context from '../context'
const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'

    },
    input: {
        marginRight: '1rem'
    }
}
function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context);
    console.log('todo', todo);
    const classes = []
    if(todo.completed){
        classes.push(' done')
    }
    return(
        <li style={style.li}>
            <span className={classes}>
                <input 
                    type="checkbox" 
                    style={style.input} 
                    onChange={()=>onChange(todo.id)}
                />
                <strong> 
                    {index+1}
                </strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    );

    
}
export default TodoItem