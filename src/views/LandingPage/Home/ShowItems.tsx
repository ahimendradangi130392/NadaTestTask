import React, { useState } from 'react'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import { Interface } from 'readline';
// import ImageIcon from '@mui/icons-material/Image';
// import ImageIcon from 'https://picsum.photos/id/237/200/300';
interface props {
  show?: any
}
const ShowItems = (props: props) => {
  // console.log(show)
  const { show } = props
  const [value, setValue] = useState(2);
  return (
    <>
      <div className='imgItems'>
        <Link to={`/dtails/${show.show.id}`} className="btn btn-primary"> <div className='imgBox'><img src={show.show.image?.medium} /></div></Link>

        <div className='showrating'>
          <span className='showrating-items'>
            {show?.rating?.average && <span >
              <Rate allowHalf disabled value={show?.rating?.average / 2} />
              {value ? <span className="ant-rate-text">{show?.rating?.average}/10</span> : ''}
            </span>}
            {/* <Rate onChange={setValue} value={value} /> */}
          </span>
          <p className='name-items'> {show.name}</p>
        </div>
      </div>


    </>
  )
}

export default ShowItems