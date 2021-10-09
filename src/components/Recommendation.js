import React from 'react'
import { useState } from 'react'
import logo from './logo.png';
import Coloredline from './Coloredline';



const Recommendation = () => {

    const [date, setDate] = useState('[date]')
    const [month, setMonth] = useState('[month]')
    const [post, setPost] = useState('[post]')
    const [year, setYear] = useState('[year]')
    const [recipient,setRecipient] = useState('[recipient]')
    const [writerName,setWriterName] = useState('[writer name]')
    const [writerPhone,setWriterPhone] = useState('[writer phone]')
    const [writerEmail,setWriterEmail] = useState('[writer email]')
    const [writerPosition,setWriterPosition] = useState('[writer position]')
    const [writerSchool,setWriterSchool] = useState('[writer school]')
    const [studentfstName,setStudentfstName] = useState('[student first name]')
    const [studentlstName,setStudentlstName] = useState('[student last name]')
    return (
        <div>
            <div className="cultural">
            <h1 className="jojo"> This is template for cultural program</h1>
            <div className="flex-container">
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

                   <label>Writer Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Writer Name'
                     value={writerName}
                     onChange={(e)=>setWriterName(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Writer Email</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Writer Email'
                     value={writerEmail}
                     onChange={(e)=>setWriterEmail(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Writer Phone</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Writer Phone'
                     value={writerPhone}
                     onChange={(e)=>setWriterPhone(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Writer Position</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Writer Position'
                     value={writerPosition}
                     onChange={(e)=>setWriterPosition(e.target.value)}

                    ></input> <br></br> <br></br>


                   <label>Writer School</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Writer School'
                     value={writerSchool}
                     onChange={(e)=>setWriterSchool(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Recipient</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Recipient'
                     value={recipient}
                     onChange={(e)=>setRecipient(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Student First Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Student Name'
                     value={studentfstName}
                     onChange={(e)=>setStudentfstName(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Student Last Name</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Student Name'
                     value={studentlstName}
                     onChange={(e)=>setStudentlstName(e.target.value)}

                    ></input> <br></br> <br></br>

                   <label>Post</label> {' '}
                   <input

                     type='text'
                     placeholder='Enter Post'
                     value={post}
                     onChange={(e)=>setPost(e.target.value)}

                    ></input> <br></br> <br></br>

                    <button onClick={window.print}>submit</button>
                 

               </form>
                </div>

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

                       Subject: Recommendation letter for an exemplary person.<br></br>

                       <p>It is with great pleasure that I am recommending {studentfstName} {studentlstName}for 
                       employment with your 
                        organization.I have been constantly impressed with {studentfstName}'s attitude 
                        and productivity during the time his/her stay.
                        </p>
                        <p>{studentfstName} is both bright and quite motivated.{studentfstName} is a 
                        quick learner and shown the ability to digest large volumes of 
                        information.{studentfstName} has demonstrated the ability to articulate 
                        information and ideas in both the verbal and written forms</p>
                    
                        <p>I believe that {studentfstName} will be an excellent fit for the post of {post}
                        program.{studentfstName} has been nothing short of an exemplary student.If you 
                        have any further quesitons,feel free to contact
                        me and I'll be happy to answer any questions you have.</p>
                        
                        Sincerely,<br></br>
                        {writerName},<br></br>
                        {writerPosition},<br></br>
                        {writerSchool},<br></br>
                        {writerEmail},<br></br>
                        {writerPhone}
                    </div>
                </div>
              

            </div>

            </div>
        </div>
    )
}

export default Recommendation
