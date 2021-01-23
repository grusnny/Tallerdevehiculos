import React, { Component }  from 'react';
import { Button } from 'react-bootstrap';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function UserTable(props) {

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
                <Button variant="primary" style={{marginRight: '10px'}} size="sm" >Edit</Button>
                <Button variant="danger" size="sm" >Delete</Button>
            </TableCell>
        </TableRow>
    );
}