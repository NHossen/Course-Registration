import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Details from './Components/Details/Details'

function App() {

  const [details,setDetails]=useState([])
  // new
  const [totalHours,setTotalHours]=useState(0)
  const [remaingHours,setRemaingHours]=useState(20)
  const [price,setPrice]=useState(0)


  const handelPostDetails=cardDetails=>{
    const isExist=details.find(item=>item.id===cardDetails.id)
    let count=cardDetails.Credit_hours;
    let balance=cardDetails.Course_price
    if (isExist){
      return alert("Already selected")
    }else{
        details.forEach(item=>{
          count=count+ item.Credit_hours;
        });

        
         if(count >20){
           return  alert("Sorry , You Exceded Hours")

         }else{

                 setTotalHours(count);//need
        const totalRemainigHours=20-count;

        if(totalRemainigHours < 0){
         return alert("You do not have remaining Hours")
        }

       setRemaingHours(totalRemainigHours);//need
       const newDetails=[...details,cardDetails]
       setDetails(newDetails)
        
  
         }
  
   details.forEach(course=>{
    balance=balance+course.Course_price
   })
   setPrice(balance);
    }

   
    //console.log("this is card details",cardDetails)
  }

  
 
  return (
    <>
      <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center my-6'>Course Registration</h1>
        <main>
          <div className='lg:flex  justify-between gap-5'>
              <Cards handelPostDetails={handelPostDetails}/>
             <Details details={details} totalHours={totalHours} remaingHours={remaingHours} price={price} />  
          </div>
        </main>
       
      </div>
    </>
  )
}

export default App
