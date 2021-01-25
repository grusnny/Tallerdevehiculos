import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AddNewUser from './addNewUser';
import UserTable from './UserTable';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function userForm(props) {
  const classes = useStyles();
  const [isOpenEdit, setIsOpenEdit] = new useState(false);


  return (
      <div>
        <h3>{props.user}</h3>
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell width="20%" >Full name</TableCell>
                <TableCell width="17%" align="right">ID</TableCell>
                <TableCell width="17%" align="right">Email</TableCell>
                <TableCell width="15%" align="right">Telephone</TableCell>
                <TableCell width="15%" align="right">Creation Date</TableCell>
                <TableCell width="15%" align="right"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.data.map((row) => (
                <UserTable key={row.uId} data={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    
  );
}
