import React, { useEffect, useState } from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new
import image1 from './../../../pages/Signin/o.images/0004.gif'
import Modifier from "../Modifier"
// import SignUp from '../SignUp'
// import './index.style.css'




function Index() {
 

  const columns = React.useMemo(() => [
    { Header: "Photo",
      Cell: AvatarCell,
      imgAccessor: 'pic',
      
    },
    {
      Header: "Model",
      accessor: 'model',
    },
    
    {
      Header: "Numéro de Série",
      accessor: 'serie',
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Kilométrage",
      accessor: 'mileage',
    },
    {
      Header: "Date Assurance",
      accessor: 'assuranceDate',
    },
    {
      Header: "Date Visite Technique",
      accessor: 'technicVisitDate',
    },

    {
      Header: "État",
      accessor: 'service',
      Filter: SelectColumnFilter,  // new
      Cell: StatusPill,
      filter: 'includes',
    },
  ], [])
  
  return (
    <div className="min-h-screen">
      <div className="firstdiv" >
            
            
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            
              <div className="mt-6">
                <Table columns={columns} data={carsData} setData1={setData1} />
              </div>
            </main>   
      </div>
    </div>
  );
}

export default Index;