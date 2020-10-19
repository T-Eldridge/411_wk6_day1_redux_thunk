import React, {useState} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button,
    Container,
    Menu,
    MenuItem,
} from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'
import { MoreVert } from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = useState(null)
    const [idNum, setIdNum] = useState(null)
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setIdNum(e.currentTarget.id)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    return (
       <Container>
           <Button 
           onClick={props.fetchMakes}
           variant="contained"
           color="primary"
           style={{ marginTop: 25}}>
               IMPORT
           </Button>
           <h2>COUNT: {props.makes.length}</h2>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Make</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((item, id) => {
                            return (
                                <TableRow key={item.MakeName}>
                                    <TableCell>{item.MakeId}</TableCell>
                                    <TableCell align="left">
                                        <Button id={id} onClick={handleClick}>
                                            <MoreVert />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
               </Table>
               <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleClose}
               >
                   <MenuItem onClick={handleClose}>
                       <Button onClick={() => props.removeEntry(idNum)}>
                           <DeleteIcon/>
                           Delete
                       </Button>
                   </MenuItem>

               </Menu>
           </TableContainer>
       </Container>
    )
}

export default Import