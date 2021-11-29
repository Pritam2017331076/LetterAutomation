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
                        <li className="studentliststyle"><Link to='/leave' style={{ textDecoration: 'none' } }>Application for emergency leave</Link></li>
                        <li className="studentliststyle"><Link to='/cultural' style={{ textDecoration: 'none' } }>Application for organizing cultural program</Link></li>
                        <li className="studentliststyle"><Link to='/fundraising' style={{ textDecoration: 'none' } }>Application for fund raising program</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Studenttemplates
