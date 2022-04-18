import React, { useState,useContext } from 'react'
import UserContext from '../../../UserContext'
import Layout from '../../layout/Layout'
import './Profile.css'
import Button from '../../../styles/Button.styled'
// import Modal from './Modal/Modal'
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
export default function Profile() {
  const {userAuth} = useContext(UserContext)
  const [open, setOpen] = React.useState(false);
  const [document, setAge] = React.useState('');
  const [value, setValue] = React.useState([null, null]);

  const [openModal,setOpenModal] = useState(false)
  console.log('Profile')
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
      <div className="profile">
      <div className="wrapper">
        <div className='modifierProfileContainer'>
          <Button onClick={handleClickOpen}>Modifier</Button>
        {/* <button className='modifierProfile' onClick={toggleModal}>Modifier</button> */}

        </div>
        <div className='personalProfile'>
            <div className='leftPersonelInfo'>
              <h2 className='titlePersonel titleItem'>Informations personnelles</h2>
                <p>Nom : <span className='labelProfile'>{userAuth.nom}</span></p>
                <p>Prenom : <span className='labelProfile'>{userAuth.prenom} </span></p>
                <div className="containDateSexe">
                  <p>Date de naissance : <span className='labelProfile'>{userAuth.dateNaissance}</span></p>
                  <p>sexe : <span className='labelProfile'>{userAuth.sexe}</span></p>
                </div>
              <p> Telephone : <span className='labelProfile'>{userAuth.telephone}</span></p>
              <p>email : <span className='labelProfile'>{userAuth.email}</span></p>
              <p> Adress personnel : <span className='labelProfile'>{userAuth.adressePerso}</span></p>
              <p> Persone a contacter en cas d'urgence : <span className='labelProfile'>{userAuth.telephoneCasUrgence}</span></p>
              <p> Horaire de travail : <span className='labelProfile'>{userAuth.horaireTravail}</span></p>
            </div>
          <div className='rightImageName'>
            <div className='imageContainer'>
            {/* https://pps.whatsapp.net/v/t61.24694-24/189891416_1570485613319965_2340578760910233492_n.jpg?ccb=11-4&oh=a86df581c23fc29ffad0f2c607a4c031&oe=6248CE20 */}
            <img className='imageprofile' src={userAuth.img} alt="" />
            </div>  
            <p className='rightNameProfile'>{userAuth.nom}</p>
          </div>
        </div>
        <div className='professionelProfile'>
        <h2 className='titleProfessionneles titleItem'>Informations professionnelles</h2>

          <p> Departement : <span className='labelProfile'>{userAuth.departement}</span></p>
          <p> Fonction : <span className='labelProfile'></span></p>
          <p> Manager : <span className='labelProfile'></span></p>
        </div>
      </div>
      {/* {openModal ?<Modal toggleModal={toggleModal}/>: ''} */}


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Absence</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* efuihefuh */}
          </DialogContentText>
          <table>
            <tbody>
              <tr>
                <td className='labelModalAbsenceD'>Telephone</td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                  <TextField id="outlined-basic" label="Telephone" variant="outlined" />
                  </FormControl>

                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Email</td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" />
                  </FormControl>

                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Adresse personnelle</td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                  <TextField id="outlined-basic" label="adresse personnelle" variant="outlined" />
                  </FormControl>

                </td>
              </tr>
              <tr>
                <td className='labelModalAbsenceD'>Personne a contacter en cas d'urgence</td>
                <td className='inputModalAbsenceD'>
                  <FormControl sx={{ m: 1, width:'100%' }}>
                  <TextField id="outlined-basic" label="urgence contact" variant="outlined" />
                  </FormControl>

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
