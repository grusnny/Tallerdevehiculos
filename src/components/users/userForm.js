import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserTable from './UserTable';
import { deleteUser } from '../../services/users';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function userForm(props) {
  const classes = useStyles();

  const deleteUSer = (value) => {
    console.log("Valor a borrar");
    console.log(value);
    deleteUser(JSON.stringify(value)).then(response => {
       window.location.reload();
    });
  }

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
                <UserTable callback={(value) => deleteUSer(value)} key={row.uId} data={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    
  );
  
}
