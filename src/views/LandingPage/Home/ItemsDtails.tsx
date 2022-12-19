import React from 'react'
import { Link } from 'react-router-dom'
import { Maincontainer, Tvshow } from 'styles/views/LandingPage/Home'
import Dtails from './dtails'


function ItemsDtails() {
  return (

    <Maincontainer>

      <Tvshow>
        <div className='headTitle'>
          <Link to='/' className="btn btn-primary"><h3>Tv Bland</h3> </Link>
        </div>
        <div className='dtailsitems'>

          <Dtails />
        </div>
      </Tvshow>
    </Maincontainer>

  )
}

export default ItemsDtails