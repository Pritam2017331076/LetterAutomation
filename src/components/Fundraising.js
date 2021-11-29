import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Fundraising = () => {
    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [year, setYear] = useState('[year]')
    const [place, setPlace] = useState('[place]')
    const [fund,setFund] = useState('[fund]')
    const [reason,setReason]=useState('[reason]')
    const [recipient,setRecipient] = useState('[recipient]')
    const [name, setName] = useState('[name]')
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

        if(!fund){
            alert('Please enter fund')
            return
        }

        if(!reason){
            alert('Please enter reason')
            return
        }

        if(!name){
            alert('Please enter name')
            return
        }

        

        
    }

    return (
        <div className="cultural">
            <h1 className="jojo"> This is template for fundraising</h1>
            <div className="flex-container">

                <div className="culturalbody">
                    <div className="letter">
                    {month} {date}, {year}<br></br>
 
                    To,<br></br>
                    {recipient},<br></br>
                    Shahjalal Univarsity of Science & Technology.<br></br> <br></br>
  
                    Subject: Application for raising fund for the victims of {reason} in {place}.
                    <br></br> <br></br>
  
                    Sir,<br></br>
  
                    I, on behalf of the students of university, beg to draw your
                    kind attention to the fact that we want to raise fund for the victims of recent {reason} in {place}. 
                    So many people has become homeless and some are passing days under open sky. 
                    Many childern are suffering from malnutrition and various diseases.
                    We want to collect fund for the affected people of natural calamity.
                     <br></br>
  
                    We, therefore, pray and hope that you would be  kind enough to permit 
                    us to collect fund for the victims of {reason} and oblige
                    thereby.<br></br>
                    <br></br>
  
                    Your most obedient pupil -<br></br>
                    {name}<br></br>
                    On behalf of the students of University<br></br>
                    Shahjalal University of Science & Technology<br></br>
                    </div>
                </div>
                <div className="options">
                <div className="back">
                    <Link to='/' style={{ textDecoration: 'none' } }>Go back to home</Link>
                </div>
                
                <form className='culturalform' onSubmit={onSubmit}>
                   <label>Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Date'
                     value={date}
                     onChange={(e)=>setDate(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Fund</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter fund'
                     value={fund}
                     onChange={(e)=>setFund(e.target.value)}

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

                    <label>Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Name'
                     value={name}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Reason</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Reason'
                     value={reason}
                     onChange={(e)=>setReason(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Fund</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter fund'
                     value={fund}
                     onChange={(e)=>setFund(e.target.value)}

                    ></input> <br></br> <br></br>

                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>
            </div>
        </div>
    )
}

export default Fundraising
