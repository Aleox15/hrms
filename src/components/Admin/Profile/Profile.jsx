import React, { useState,useContext } from 'react'
import UserContext from '../../../UserContext'
import Layout from '../../layout/Layout'
import './Profile.css'
import Modal from '../Modal/Modal'
export default function Profile() {
  const {username} = useContext(UserContext)
  const [openModal,setOpenModal] = useState(false)
  const  toggleModal=()=>{
          setOpenModal(prev=>!prev)
  }
  return (
      <Layout className="profile">
      <div className="wrapper">
        <div className='modifierProfileContainer'>
        <button className='modifierProfile' onClick={toggleModal}>Modifier</button>

        </div>
        <div className='personalProfile'>
            <div className='leftPersonelInfo'>
              <h2 className='titlePersonel titleItem'>Informations personels</h2>
              
                <p><span className='labelNom'>Nom : {username}</span></p>
                <p><span className='labelPrenom'>Prenom : </span></p>
                <div className="containDateSexe">
                  <p><span className='labelProfile'>Date de naissance : </span></p>
                  <p><span className='labelProfile'>sexe : Masculin</span></p>
                </div>
              <p> <span className='labelProfile'>Telephone :</span></p>
              <p><span className='labelProfile'>adress Electronique : </span></p>
              <p> <span className='labelProfile'>Adress personnel :</span></p>
              <p><span className='labelProfile'>email : </span></p>
              <p> <span className='labelProfile'>Persone a contacter en cas d'urgence :</span></p>
              <p> <span className='labelProfile'>Horaire de travail :</span></p>
            </div>
          <div className='rightImageName'>
            <div className='imageContainer'>
            {/* https://pps.whatsapp.net/v/t61.24694-24/189891416_1570485613319965_2340578760910233492_n.jpg?ccb=11-4&oh=a86df581c23fc29ffad0f2c607a4c031&oe=6248CE20 */}
            <img className='imageprofile' src="https://scontent.fcmn3-1.fna.fbcdn.net/v/t1.18169-9/1545998_282460048624408_3325124023049981416_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=NLzauOgNb3sAX-PEAFc&_nc_ht=scontent.fcmn3-1.fna&oh=00_AT_20RdkDpuLZ2ZN2C-TlorZLwxVFQTIJXa8v4UcOGF0Kg&oe=6263921E" alt="" />
            </div>  
            <p className='rightNameProfile'>{username}</p>
          </div>
        </div>
        <div className='professionelProfile'>
        <h2 className='titleProfessionneles titleItem'>Informations professionnelles</h2>

          <p> <span className='labelProfile'>Departement :</span></p>
          <p> <span className='labelProfile'>Fonction :</span></p>
          <p> <span className='labelProfile'>Manager :</span></p>
        </div>
      </div>
      {openModal ?<Modal toggleModal={toggleModal}/>: ''}
      </Layout>
  )
}
