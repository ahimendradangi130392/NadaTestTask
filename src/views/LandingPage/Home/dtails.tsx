import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Rate } from 'antd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useParams } from 'react-router-dom';
import { SHOW } from 'constants/api';
import useMetaDataProvider from 'context/metadata'
import useGet from 'hooks/useGet';

// import ImageIcon from '@mui/icons-material/Image';

const desc = ['1/5', '2/5', '3/5', '4/5', '5/5'];


function Dtails() {
  const { showDetail, setShowDetail } = useMetaDataProvider()

  const [value, setValue] = useState(2);
  const { mutateAsync } = useGet()
  const { id } = useParams()
  useEffect(() => {
    getShowDetail()
  }, [])

  const getShowDetail = async () => {

    await mutateAsync({
      url: `${SHOW}/${id}?embed=cast`,
    })
      .then((response: any) => {
        setShowDetail(response)
        console.log(response, ">>>>>>>>>>>>>>>>>>>>>>>>>")

      })
      .catch((err: any) => {
        console.log(err, ">>>>>>>>>>>>>>>>>>>")
      })
  }

  return (
    <>
      <div className='imgItems'>
        <div className='bg-color-dtails'></div>
        <div className='dtailsitems-bg-color'>
          <div className='dtailsitems-add'>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div className='imgBox'><img src={showDetail?.image?.medium} /></div>

              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12}>
                <div className='showrating'>
                  {showDetail?.rating?.average && <span >
                    <Rate allowHalf disabled value={showDetail?.rating?.average / 2} />
                    {value ? <span className="ant-rate-text">{showDetail?.rating?.average}/10</span> : ''}
                  </span>}
                  <h3>{showDetail?.name}</h3>
                  <div className='dtails-data' dangerouslySetInnerHTML={{ __html: showDetail?.summary }} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid container spacing={2} >
          <Grid item lg={6} md={6} xs={12}>
            <div className='dtails-show'>
              <h3>Show Info</h3>
              <div className='Showinfos-itmes'>
                <div className='Showinfos'><h4>streamed on</h4><p>{showDetail?.network?.name}</p></div>
                <div className='Showinfos'><h4>Schedule</h4><p>{showDetail?.schedule?.days.map((day: any) => <span>{day}</span>)}</p></div>
                <div className='Showinfos'><h4>Status</h4><p>{showDetail?.status}</p></div>
                <div className='Showinfos'><h4>Genres</h4><p>{showDetail?.genres?.map((genre: any) => <span>{genre}</span>)}</p></div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className='dtails-show'>
              <h3>Starring</h3>
              <div className='dtails-show-list'>
                {showDetail?._embedded?.['cast'].map((cast: any) => {
                  return (
                    <div className='Showinfos'>

                      <div className="dtails-items">
                        <div className='candidate-img'>
                          {cast.person?.image?.medium ? <img src={cast.person?.image?.medium} width='50px' /> :
                            <AccountCircleIcon />}
                        </div>  <div className="dtails-items-on"><h4>{cast.person?.name}</h4><p>{cast.character?.name}</p></div></div>
                    </div>

                  )
                })}
              </div>
            </div>

          </Grid>
        </Grid>


      </div>

    </>
  )
}

export default Dtails