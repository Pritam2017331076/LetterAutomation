import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'



const Culturalform = () => {


    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [place, setPlace] = useState('')
    const [recipient,setRecipient] = useState('')
    const [department,setDepartment]=useState('')
    const [batch, setBatch] = useState('')

    var programDetails={
          date: date,
          month: month,
          year: year,
          place: place,
          recipient: recipient,
          department: department,
          batch: batch
     }
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!date){
            alert('Please enter date')
            return
        }

        if(!month){
            alert('Please enter month')
            return
        }

        if(!year){
            alert('Please enter year')
            return
        }

        if(!place){
            alert('Please enter place')
            return
        }
        
        if(!recipient){
            alert('Please enter recipient')
            return
        }

        if(!department){
            alert('Please enter department')
            return
        }

        if(!batch){
            alert('Please enter batch')
            return
        }

        programDetails = {
          date: date,
          month: month,
          year: year,
          place: place,
          recipient: recipient,
          department: department,
          batch: batch
        }
        console.log('show me programdetails')

        console.log(programDetails) ;        

        

        
    }

    return (
        <div className="home">
            <h1>This form is for cultural function</h1>
            <div className="homebody" >
               <form className='culturalform' onSubmit={onSubmit}>
                   <label>Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Date'
                     value={date}
                     onChange={(e)=>setDate(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Month</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Month'
                     value={month}
                     onChange={(e)=>setMonth(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Year</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Year'
                     value={year}
                     onChange={(e)=>setYear(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Place</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Place'
                     value={place}
                     onChange={(e)=>setPlace(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Recipient</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Recipient'
                     value={recipient}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Department</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Department'
                     value={department}
                     onChange={(e)=>setDepartment(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Batch</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Batch'
                     value={batch}
                     onChange={(e)=>setBatch(e.target.value)}

                    ></input> <br></br> <br></br>

                    <button onClick={onSubmit} ><Link to={{
                        pathname: '/cultural',
                        state:{
                           info : programDetails
                        }

                      }}
                       style={{ textDecoration: 'none' }}>submit</Link></button>

               </form>


            </div>
            
        </div>
    )
}

export default Culturalform
