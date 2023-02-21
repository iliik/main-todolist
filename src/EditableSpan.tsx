import React, {ChangeEvent, useState} from "react";

type EditableType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = (props: EditableType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return editMode
        ? <input value={title} onChange={changeTitle} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}