import React from 'react'
import './Modal.css'
import Button from '../../../../styles/Button.styled'
export default function Modal(props) {
  return (
    <div className="modal">

    <div className="modal-content">
        <span className="close" onClick={props.toggleModal}>&times;</span>
        <h2 className='titleModal'>Modifier Profile</h2>
        <form className='addProfile'>
            {/* <div className='dateNContainer inputProfile'>
                <label className='labelForm' htmlFor="">date naissance :</label>
                <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31"/>     
            </div> */}
            <div className='telephoneContainer inputProfile'>
                <label className='labelForm' htmlFor="">Telephone :</label>  
                <input placeholder='telephone ...' className='rightInput' type="text" />
            </div>
            <div className="emailContainer inputProfile">
                <label className='labelForm' htmlFor="">Email :</label>  
                <input placeholder='email ...' className='rightInput' type="email" />
            </div>
            <div className="addressContainer inputProfile">
                <label className='labelForm' htmlFor="">adresse personnelle :</label>  
                <input placeholder='address personnel ...' className='rightInput' type="text" />
            </div>
            <div className="urgenceContainer inputProfile">
                <label className='labelForm' htmlFor="">Personne a contacter en cas d'urgence :</label>  
                <input placeholder='personne à contacter ...' className='rightInput' type="text" />
            </div>
            <div className="buttonMpdifierProfile">
                <Button>valider</Button>
                {/* <button className='modalModifierProfile'>valider</button> */}
            </div>
        </form>
    </div>
    </div>
  )
}
