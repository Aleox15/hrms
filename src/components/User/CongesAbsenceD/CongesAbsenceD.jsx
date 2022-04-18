import React,{useState} from 'react'
import Layout from '../../layout/Layout'
import './CongesAbsenceD.css'
import Button from '../../../styles/Button.styled'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
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
import Box from '@mui/material/Box';

import "react-datepicker/dist/react-datepicker.css";
export default function CongesAbsenceD() {
  const [open, setOpen] = React.useState(false);
  const [document, setAge] = React.useState('');
  const [value, setValue] = React.useState([null, null]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
 
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="congesAbsenceD">
      <div className="wrapper">
        <div className='titleAbsenceDWrapper'>
        <Button onClick={handleClickOpen}>Ajouter une absence</Button>
        
        </div>
        

      
      </div>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Absence</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* efuihefuh */}
          </DialogContentText>
          <table>
            <tbody>
              <tr>
                <td className='labelModalAbsenceD'>Type Absence</td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                    <InputLabel  id="demo-simple-select-helper-label">Type congé</InputLabel>
                    <Select 
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={document}
                      label="typeAbsence"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                      <em>Select</em>
                      </MenuItem>
                      <MenuItem value={10}>Absence maladie</MenuItem>
                    </Select>
                  </FormControl>

                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Durée</td>
                <td className='inputModalAbsenceD'>
                <LocalizationProvider   dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Durée"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Responsable</td>
                <td className='inputModalAbsenceD'><p  className='responsableAbsenceD'>Amin El Housni</p></td>
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
  )
}
