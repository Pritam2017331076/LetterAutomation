import React from 'react'
import { useState } from 'react'
import logo from './logo.png';
import Coloredline from './Coloredline';
import {Link} from 'react-router-dom'


const Holiday = () => {
    const [ startDate, setStartDate] = useState('[start date]')
    const [endDate,setEndDate] = useState('[end date]')
    const [reason,setReason] = useState('[reason]')
    const [department,setDepartment] = useState('[department]')
    const [officeDate,setOfficeDate] = useState('[office date]')
    return (
        <div>
            <div className="cultural">
            <h1 className="jojo"> This is template for holiday declaration</h1>
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
                        
                        All the classes of the department of {department} will not be held from<br></br>
                        {startDate} to {endDate} due to {reason}. Official services will not be available.<br></br>
                        till {officeDate}.

                        <br></br>
                        <br></br>
                        By order of,<br></br>
                        Department of {department}.
                    </div>
                </div>

                <div className="optionss">
                <div className="back">
                    <Link to='/' style={{ textDecoration: 'none' } }>Go back to home</Link>
                </div>
                
                <form className='culturalform'>
                   <label>Start Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Start Date'
                     value={startDate}
                     onChange={(e)=>setStartDate(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>End Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter End Date'
                     value={endDate}
                     onChange={(e)=>setEndDate(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Reason</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Reason'
                     value={reason}
                     onChange={(e)=>setReason(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Office Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Office Date'
                     value={officeDate}
                     onChange={(e)=>setOfficeDate(e.target.value)}

                    ></input> <br></br> <br></br>

                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>
              

            </div>

            </div>
        </div>
    )
}

export default Holiday
