import React from 'react'

const Coloredline = ({color}) => {
    return (
        <div>
            <hr
              style={{
              color: color,
              backgroundColor: color,
              height: 2
           }}
          />
        </div>
    )
}

export default Coloredline
