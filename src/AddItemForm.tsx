import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}
export const AddItemForm = (props: AddItemFormPropsType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onKeyUHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'KeyUp') {
            addTask()
        }
    }
    const onChangeHandlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return <div>
        <input value={title}
               onChange={onChangeHandlerInput}
               onKeyUp={onKeyUHandler}
               className={error ? 'error' : ''}/>
        <button onClick={addTask}>+</button>
        {error && <div className='errorMessage'>{error}</div>}
    </div>
}
