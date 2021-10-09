import React from 'react'
import { useState } from 'react'

const Culturalletter = (props) => {

    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [year, setYear] = useState('[year]')
    const [place, setPlace] = useState('[place]')
    const [recipient,setRecipient] = useState('[recipient]')
    const [department,setDepartment]=useState('[department]')
    const [batch, setBatch] = useState('[batch]')

    
    /*const {info} = props.location.state;
    console.log(info)
    console.log(info.date)
    console.log(info.month)
    console.log(info.year)
    console.log(info.place)
    console.log(info.recipient)
    console.log(info.department)
    console.log(info.batch)*/

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

        

        
    }

    return (
        <div className="cultural">
            <h1 className="jojo"> This is template for cultural program</h1>
            <div className="flex-container">
                <div className="options">
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

                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>

                <div className="culturalbody">
                    <div className="letter">
                    {month} {date}, {year}<br></br>
 
                    To,<br></br>
                    {recipient},<br></br>
                    Shahjalal Univarsity of Science & Technology.<br></br> <br></br>
  
                    Subject: Application for permission to celebrate a cultural function 
                    in the {place}.
                    <br></br> <br></br>
  
                    Sir,<br></br>
  
                    I, on behalf of the students of CSE' 17, beg to draw you
                     kind attention to the fact that we are interested to celebrate a cultural
                     function in our {place}. This is the last year of 
                     our university life. Therefore, we want to do something memorable. The students
                     of our batch will perform many interesting cultural events such as, singing, 
                     dancing, recitation, acting etc. We will manage the fund collecting 
                     subscription from each student of our class. Your permission is necessary 
                     to celebrate our cultural function in the {place}.<br></br>
                     <br></br>
  
                    We, therefore, pray and hope that you would be  kind enough to permit 
                    us to celebrate the cultural function in the {place} and oblige
                    thereby.<br></br>
                    <br></br>
  
                    Your most obedient pupil -<br></br>
                    Pritam Das<br></br>
                    On behalf of the students of {department}' {batch}<br></br>
                    Shahjalal Univarsity of Science & Technology<br></br>
                    </div>
              

                </div>

            </div>
        </div>
    )
}

export default Culturalletter
