import React from 'react'
import './ModalDocumentD.css'
import Button from '../../../../styles/Button.styled'
export default function ModalDocumentD(props) {
  return (
    <div className="modal">

    <div className="modal-content">
        <span className="close" onClick={props.toggleModal}>&times;</span>
            <h2 className='titleModal'>Modifier Profile</h2>
        <form className='addProfile'>
            <div className='typeDocument inputProfile'>
                <label className='labelForm' htmlFor="">Document :</label>
                <select className='rightInput'>
                    <option disabled selected>Type de document</option>
                    <option>Attestation du travail</option>
                    <option>Attestation de salaire</option>
                    <option>Bulletin de paie</option>
                    <option>Domiciliation irrevocable</option>
                </select>
                    
            </div>
            <div className='comentaireDocumentD inputProfile'>
                <label className='labelForm' htmlFor="">Commentaire :</label>  
                <textarea placeholder='comentaire ...' className='rightInput' name="" id="" cols="10" rows="2"></textarea>
            </div>
            <div className="valider">
                <Button>Valider</Button>
            </div>
        </form>
    </div>
    </div>
  )
}
