import React,{useState} from 'react'
import './DocumentG.css'
import Layout from '../../layout/Layout'
import MaterialTable from '@material-table/core'

export default function DocumentG() {
  console.log('gestion Document')

    const [demandeurs,setDemandeur] = useState([
        { nom: "Mohammad", typeDocument: "Attestation du travail", commentaire:"" },
        { nom: "Hassan", typeDocument: "Attestation du salaire", commentaire:"" },
        { nom: "Omar", typeDocument: "Bulletin de paie", commentaire:"" },
        { nom: "Anas", typeDocument: "Domiciliation irrevocable", commentaire:"" },
      ]);

      const columns = [
        { title: 'Nom', field: 'nom',
          },
        { title: 'Type Document', field: 'typeDocument', },
        {
          title: 'Commentaire',
          field: 'commentaire',
        },
        
      ]
  return (
    <div className="documentG">
            <MaterialTable style={{width:'100%'}}
      title="List Documents"
      columns={columns}
      data={demandeurs}
      // editable={{
      //   onRowAdd:(newRow)=> new Promise((resolve,reject)=>{
      //     const updateRows=[...demandeurs,newRow];
      //     setDemandeur(updateRows)
      //     resolve()
      //   }),
      //   onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
          
      //   })
      // }}
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
    </div>
  )
}
