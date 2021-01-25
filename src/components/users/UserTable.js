import React, {useState }  from 'react';
import { Button } from 'react-bootstrap';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddNewUser from './addNewUser';
import DeleteAsk from '../DeleteAsk';

export default function UserTable(props) {

    const [isOpenEdit, setIsOpenEdit] = new useState(false);
    const [isOpenDelete, setIsOpenDelete] = new useState(false);

    const deleteUser = () => {
        setIsOpenDelete(false);
        props.callback(props.data);
    }

    return (
        <TableRow key={props.data.name}>
            <TableCell component="th" scope="row">
                {props.data.name} {props.data.lastName}
            </TableCell>
            <TableCell align="right">{props.data.id}</TableCell>
            <TableCell align="right">{props.data.email}</TableCell>
            <TableCell align="right">{props.data.telephone}</TableCell>
            <TableCell align="right">{props.data.creationDate}</TableCell>
            <TableCell align="right"> 
                <Button onClick={()=>setIsOpenEdit(true)} variant="primary" style={{marginRight: '10px'}} size="sm" >Edit</Button>
                <Button onClick={()=>setIsOpenDelete(true)} variant="danger" size="sm" >Delete</Button>
            </TableCell>
            <DeleteAsk delete={()=> deleteUser()} show={isOpenDelete} onHide={()=> setIsOpenDelete(false)} />
            <AddNewUser data = {props.data} show ={isOpenEdit} onHide={()=> setIsOpenEdit(false)}/>
        </TableRow>
    );
}