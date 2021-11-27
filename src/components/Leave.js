import React from 'react'
import { useState } from 'react'


const Leave = () => {
    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [year, setYear] = useState('[year]')
    const [reason,setReason]=useState('[reason]')
    const [recipient,setRecipient] = useState('[recipient]')
    const [department,setDepartment]=useState('[department]')
    const [name, setName] = useState('[name]')
    const [numberofdays, setNumberofdays] = useState('[numberofdays]')


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
        
        if(!recipient){
            alert('Please enter recipient')
            return
        }

        if(!reason){
            alert('Please enter reason')
            return
        }

        if(!department){
            alert('Please enter department')
            return
        }

        if(!name){
            alert('Please enter name')
            return
        }

        if(!numberofdays){
            alert('Please enter name')
            return
        }

        

        
    }

    return (
        <div className="cultural">
            <h1 className="jojo"> This is template for cultural program</h1>
            <div className="flex-container">

                <div className="culturalbody">
                    <div className="letter">
                    {month} {date}, {year}<br></br>
 
                    To,<br></br>
                    {recipient},<br></br>
                    Shahjalal Univarsity of Science & Technology.<br></br> <br></br>
  
                    Subject: Application for emergency leave.
                    <br></br> <br></br>
  
                    Sir,<br></br>
  
                    I am a student of the department of the {department} of Shahjalal University of
                    Science & Technology. I am a regular student and have always been responsive in the class.
                    I want to take a leave due to {reason}.
                     <br></br>
  
                    I, therefore, pray and hope that you would be  kind enough to permit 
                    me to take a leave of {numberofdays} due to {reason}.<br></br>
                    <br></br>
  
                    Your most obedient pupil -<br></br>
                    {name}<br></br>
                    On behalf of the students of University<br></br>
                    Shahjalal University of Science & Technology<br></br>
                    </div>
                </div>
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


                   <label>Recipient</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Recipient'
                     value={recipient}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Name'
                     value={name}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Department</label> {' '}
                    <input

                     type='text'
                     placeholder='Enter Department'
                     value={department}
                     onChange={(e)=>setDepartment(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Reason</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Reason'
                     value={reason}
                     onChange={(e)=>setReason(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Number of days</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Numberofdays'
                     value={numberofdays}
                     onChange={(e)=>setReason(e.target.value)}

                    ></input> <br></br> <br></br>


                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>
            </div>
        </div>
    )
}

export default Leave
