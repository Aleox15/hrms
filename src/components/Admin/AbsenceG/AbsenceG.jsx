import React,{useState} from 'react'
import Layout from '../../layout/Layout'
import './Absence.css'
import MaterialTable from '@material-table/core'
import { FaThumbsUp,FaRegTimesCircle } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';

export default function AbsenceG() {
  console.log('gestion Absence')
  const [demandeurs,setDemandeur] = useState([
    { nom: "Mohammad", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"5 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Houssam", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"5 days" },
    { nom: "Anas", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
    { nom: "Nayeem Raihan", dateDebut: "07/02/2022 05:00:00", dateFin:"02/06/2022 00:00:00",durée:"1 days" },
  ]);
    const columns = [
        { title: 'Nom de demandeur', field: 'nom',
      // render: rowData => <div style={{display:'flex',gridGap:'5px'}}><img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC'} style={{width: 25,height:25,objectFit:'cover', borderRadius: '50%'}}/><span>Mohamed salem</span></div>

          },
        { title: 'Date de debut', field: 'dateDebut', },
        {
          title: 'Date de fin',
          field: 'dateFin',
          // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        {
          title: 'Durée',
          field: 'durée',
        },
        {
          title: 'Etat',
          field: 'etat',
          render: rowData=> <div style={{width:"130px",backgroundColor:"orange",borderRadius:"10px",textAlign:"center"}}>A approuver</div>
        },
        {
          title: '',
          field: 'actionAorR',
          render:  rowData=> <div className='validerAbsence'> <div className='icon'><FaThumbsUp/> Approuver</div><div className='icon'> <FaRegTimesCircle/> Refuser</div></div>
        }
      ]

  return (
    <div className="abscenceG">
        <MaterialTable style={{width:'100%'}}
      title="List Absences  "
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
        tableLayout: "auto",
        filtering: true

        // cellStyle: {textAlign:'center'},
        // headerStyle: {textAlign:'center'}
      }}
      />
    </div>
  )
}
