import React from 'react'
import { useState } from 'react'
import logo from './logo.png';
import Coloredline from './Coloredline';
import {Link} from 'react-router-dom'



const Studyleave = () => {

    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [year, setYear] = useState('[year]')
    const [institution,setInstitution]=useState('[institution]')
    const [recipient,setRecipient] = useState('[recipient]')
    const [department,setDepartment]=useState('[department]')
    const [position,setPosition]=useState('[position]')
    const [name, setName] = useState('[name]')
    const [duration, setDuration] = useState('[duration]')

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

        if(!position){
            alert('Please enter position')
            return
        }

        if(!institution){
            alert('Please enter institution')
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

        if(!duration){
            alert('Please enter duration')
            return
        }

        

        
    }
    return (
        <div>
            <div className="cultural">
            <h1 className="jojo"> This is template for study leave</h1>
            <div className="flex-container">
                
                
                <div className="culturalbody">
                    <div className="letter">
                        <div className="flex-containerr">
                            <div className="university">
                                Shahjalal University of Science & Technology<br></br>
                                Sylhet 3114, Bangladesh.<br></br>
                                PABX : 880-821-728741,714479,713850,<br></br>
                                717850,716123,715393.<br></br>
                                FAX : 880-821-715257,725050<br></br>
                                Website : www.sust.edu<br></br>
                                e-mail : registrar@sust.edu<br></br>
                            </div>
                            <div className="pic">
                                 <img src={logo} width="100" height="100" />

                            </div>
                        </div>
                        <Coloredline color="black"/>
                        
                       {month} {date}, {year}<br></br>
                       To,<br></br>
                       {recipient},<br></br>
                       Shahjalal University of Science & Technology<br></br>
                       <br></br>

                       Subject: Application for study leave<br></br>

                       Sir,<br></br>
  
                       I am a {position} of the department of the {department} of Shahjalal University of
                       Science & Technology. I have got an offer to persue my post graduation in the {institution}.
                       So I want a leave of {duration} years for my study.
                        <br></br>
  
                       I, therefore, pray and hope that you would be  kind enough to permit 
                       me to take a leave of {duration} years for my post graduation.<br></br>
                       <br></br>
                        
                        Sincerely,<br></br>
                        {name},<br></br>
                    </div>
                </div>

                <div className="optionss">
                <div className="back">
                    <Link to='/' style={{ textDecoration: 'none' } }>Go back to home</Link>
                </div>
                
                <form className='culturalform'>
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

                   <label>Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Name'
                     value={name}
                     onChange={(e)=>setName(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Recipient</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Recipient'
                     value={recipient}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Position</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Position'
                     value={position}
                     onChange={(e)=>setPosition(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Department</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter department'
                     value={department}
                     onChange={(e)=>setPosition(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Duration</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Duration'
                     value={duration}
                     onChange={(e)=>setDuration(e.target.value)}

                    ></input> <br></br> <br></br>

                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>
              

            </div>

            </div>
        </div>
    )
}

export default Studyleave
