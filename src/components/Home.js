import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="homefirst">
        <div className="home">
        <h1>Welcome to letter automation app</h1>
            <div className="homebody">
                <ul className="homeul">
                    <li className="homeliststyle"><Link to='/student' style={{ textDecoration: 'none' } }>Student</Link></li>
                    <li className="homeliststyle"><Link to='/teacher' style={{ textDecoration: 'none' } }>Teacher</Link></li>
                    <li className="homeliststyle">Officials</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Home
