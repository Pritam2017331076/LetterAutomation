import React from 'react'
import {Link} from 'react-router-dom'


const Officialtemplates = () => {
    return (
        <div>
            <div className="homefirst">
            <div className="home">
                <h1>Welcome to letter automation app</h1>
                <div className="homebody">
                    <ul className="studentul">
                        <li className="studentliststyle"><Link to='/examdeclaration' style={{ textDecoration: 'none' } }>Exam Declaration</Link></li>
                        <li className="studentliststyle"><Link to='/holiday' style={{ textDecoration: 'none' } }>Holiday Declaration</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Officialtemplates
