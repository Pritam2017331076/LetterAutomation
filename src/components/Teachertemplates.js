import React from 'react'
import {Link} from 'react-router-dom'


const Teachertemplates = () => {
    return (
        <div>
            <div className="homefirst">
            <div className="home">
                <h1>Welcome to letter automation app</h1>
                <div className="homebody">
                    <ul className="studentul">
                        <li className="studentliststyle"><Link to='/studyleave' style={{ textDecoration: 'none' } }>Application for study leave</Link></li>
                        <li className="studentliststyle"><Link to='/recommend' style={{ textDecoration: 'none' } }>Recommendation Letter</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Teachertemplates
