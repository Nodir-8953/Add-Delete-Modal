import React, {useState} from 'react'

function useInputValue(defaulValue=''){
   const [value, setValue] = useState(defaulValue) 
   return {
    bind: {
        value,
        onChange: event=>setValue(event.target.value)
    },
    clear: ()=>setValue(''),
    value: ()=>value  
    }
}
function AddTodo({onCreate}){
    const input = useInputValue('')
    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
         
    }
    return(
        <form style={{marginBottom: '20px'}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type='submit'>Ad todo</button>
        </form>
    )
}

export default AddTodo