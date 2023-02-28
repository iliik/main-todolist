import React from 'react';
import {AddItemForm} from "../AddItemForm";
import {ComponentMeta} from "@storybook/react";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Todolist/AddItemForm',
    component: AddItemForm,
} as ComponentMeta<typeof AddItemForm>

export const  AddItemFormExemple = () => {

}