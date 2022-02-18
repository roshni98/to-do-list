import './App.css';
import {ListItem, ListItemText } from "@mui/material";

const ListItems = ({textValue}) => {
    console.log("in listItems "+ textValue);
    return(
        <>
        <ListItem className="listLine">
        <ListItemText
            primary={textValue}
        />
        </ListItem>
        <hr></hr>
        </>
    )
}

export default ListItems;