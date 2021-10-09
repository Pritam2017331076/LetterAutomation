import React from 'react'
import {Link} from 'react-router-dom'


const Studenttemplates = () => {
    return (
        <div>
            <div className="homefirst">
            <div className="home">
                <h1>Welcome to letter automation app</h1>
                <div className="homebody">
                    <ul className="studentul">
                        <li className="studentliststyle">Application for emergency leave</li>
                        <li className="studentliststyle"><Link to='/cultural' style={{ textDecoration: 'none' } }>Application for organizing cultural program</Link></li>
                        <li className="studentliststyle">Application for fund raising program</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Studenttemplates
