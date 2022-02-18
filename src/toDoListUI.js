import {Card, Switch, Button, TextField } from "@mui/material";
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import './App.css';
import ListItems from './listItem';
import uuid from 'react-uuid';
import { getByDisplayValue } from "@testing-library/dom";
import Input from '@mui/material/Input';


const ToDoListUI = () => {
    const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("");


    const handleChange = () => {
        console.log("change");
        setToggle(!toggle)
        console.log(toggle);
        if(toggle===false){
            document.body.style.background = `#999`;
        }else{
            document.body.style.background = `white`;
        }
    }
    
    const handleOnChange = e => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        console.log("click");     
        console.log("val of text "+ value);
        resetInputField();
        setNewItem((prev)=>{
			return [...prev, value]
		});

    }
    const handleClickRemove = () => {
        return newItem.remove();
    }

    const resetInputField = () => {
        setValue("");
    };

    return(
        <div className="card">
             <div className="switch">
                <Switch onChange={handleChange} defaultChecked />
            </div>
            <div className="box">
                <Card sx={{ maxWidth: 400, maxHeight: 1000, margin:'auto'}}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        To Do List
                    </Typography>
                    <div className="listItems">
                        {
						newItem.map((item) => {
							return <ListItems textValue={item} key={uuid()}/>;
						})
					}
                    </div>
                    </CardContent>
                </Card>
            </div>
            <div className="inputs">
                
                <div className="btn">
                <Button variant="contained" onClick={handleClickRemove}>Delete</Button>
                <TextField 
                value={value}
                onChange={handleOnChange} 
                className="txt" margin="none" size="small" id="filled-basic" label="Type Here" variant="filled" />                
                <Button variant="contained" onClick={handleClick}>Add</Button>
                </div>
            </div>
        </div>
    );
}
export default ToDoListUI;