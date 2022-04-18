import React, { useState } from 'react'
import './DocumentD.css'
import Layout from '../../layout/Layout'
import Button from '../../../styles/Button.styled'
import ModalDocumentD from './ModalDocumentD/ModalDocumentD'
import MaterialTable from '@material-table/core'


import TextField from '@mui/material/TextField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function DocumentD() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState([null, null]);
  const [showModal,setShowModal] = useState(false)
  const [documentD,setDocumentD] =useState([])
  function toggleModal(){
    setShowModal(prev=>!prev)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log('DocumentD')

  const columns = [
    { title: 'Type document', field: 'typeDocument',
      // render: rowData => <img src={ rowData.id? users[rowData.id-1].img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC'} style={{width: 40,height:40,objectFit:'cover', borderRadius: '50%'}}/>
    },
    { title: 'Date de demande', field: 'dateDemande' },
    { title: 'Commentaire', field: 'commentaire' },
  ]
  return (
    <div className="documentD">
          <div className='wrapper'>
              {/* <button className='btnAddDocumentModule'>Ajouter Demande</button> */}
          <div className='titleProfileWrapper'>

          <Button onClick={handleClickOpen}>Ajouter un document</Button>
          </div>
          
              <MaterialTable className="documentDTable" style={{width:'100%'}}
                  title="Document demandé"
                  columns={columns}
                  data={documentD}
                  // editable={{
                  //   onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
                  //     const updateRows=[...users,newRow];
                  //     setUsers(updateRows)
                  //     resolve()
                  //   }),
                  //   onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
                      
                  //   })
                  // }}

                  options={{
                    actionsColumnIndex:-1,addRowPosition:"first",
                    selection: true,
                    padding: "dense",
                    // cellStyle: {textAlign:'center'},
                    // headerStyle: {textAlign:'center'}
                  }}
                />
                        {/* {showModal ? (<ModalDocumentD toggleModal={toggleModal}/>): ''} */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Absence</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* efuihefuh */}
          </DialogContentText>
          <table>
            <tbody>
              <tr>
                <td className='labelModalAbsenceD'>Document </td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                    <InputLabel  id="demo-simple-select-helper-label">Select document :</InputLabel>
                    <Select 
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="typeAbsence"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                      <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Attestation du travail</MenuItem>
                      <MenuItem value={20}>Bulletin de paie</MenuItem>
                      <MenuItem value={30}>Domiciliation irrevocable</MenuItem>
                    </Select>
                  </FormControl>

                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Commentaire</td>
                <td className='inputModalAbsenceD'>
                <TextareaAutosize className='textAreaAbsencD'
                    aria-label="minimum height"
                    minRows={2}
                    placeholder="Commentaire ..."
                    style={{ width: "100%",padding:"8px 10px",margin:"1px" }}
                  />
                </td>
              </tr>
              
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ajouter</Button>
        </DialogActions>
      </Dialog>




          </div>
    </div>
  )
}
