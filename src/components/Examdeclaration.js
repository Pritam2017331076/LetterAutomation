import React from 'react'
import { useState } from 'react'
import logo from './logo.png';
import Coloredline from './Coloredline';

const Examdeclaration = () => {
    const [ startDate, setStartDate] = useState('[start date]')
    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [year, setYear] = useState('[year]')
    const [department,setDepartment] = useState('[department]')
    const [semester, setSemester] = useState('[semester]')
    return (
        <div>
            <div className="cultural">
            <h1 className="jojo"> This is template for cultural program</h1>
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
                        All the exams of {semester} of the department of {department} will be held from {startDate}.<br></br>
                        Final schedule will be published very soon.<br></br>Students are requested to collect their admit card from office after paying credit fee of {semester}.

                        <br></br>
                        <br></br>
                        By order of,<br></br>
                        Department of {department}.
                    </div>
                </div>

                <div className="optionss">
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

                   <label>Start Date</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Start Date'
                     value={startDate}
                     onChange={(e)=>setStartDate(e.target.value)}

                    ></input> <br></br> <br></br>

                     <label>Department</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter department'
                     value={department}
                     onChange={(e)=>setDepartment(e.target.value)}

                    ></input> <br></br> <br></br>

                    <label>Semester</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Semester'
                     value={semester}
                     onChange={(e)=>setSemester(e.target.value)}

                    ></input> <br></br> <br></br>



                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>
              

            </div>

            </div>
        </div>
    )
}

export default Examdeclaration
