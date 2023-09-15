import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Details from './Components/Details/Details'

function App() {

  const [details,setDetails]=useState([])

  const handelPostDetails=cardDetails=>{
    const newDetails=[...details,cardDetails]
    setDetails(newDetails)
  }
 
  return (
    <>
      <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center my-6'>Course Registration</h1>
        <main>
          <div className='lg:flex  justify-between gap-5'>
              <Cards handelPostDetails={handelPostDetails}/>
             <Details details={details} />
          </div>
        </main>
       
      </div>
    </>
  )
}

export default App
