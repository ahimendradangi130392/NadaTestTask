import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Maincontainer,
  Tvshow,
  TvshowContent
} from 'styles/views/LandingPage/Home/index'
import { SCHEDULE } from 'constants/api'
import useMetaDataProvider from 'context/metadata'
import { Grid } from '@mui/material'
import ShowItems from './ShowItems'
import useGet from 'hooks/useGet'
import { Link } from 'react-router-dom'

const Home = (): ReactElement => {
  const { mutateAsync } = useGet()
  const { schedule, setSchedule } = useMetaDataProvider()

  useEffect(() => {
    getSchedule()
  }, [])

  const getSchedule = async () => {

    await mutateAsync({
      url: SCHEDULE,
    })
      .then((response: any) => {
        setSchedule(response)
        console.log(response, ">>>>>>>>>>>>>>>>>>>>>>>>>")

      })
      .catch((err: any) => {
        console.log(err, ">>>>>>>>>>>>>>>>>>>")
      })
  }

  return (
    <>
      <Maincontainer>
        <Tvshow>
          <div className='headTitle'>
            <Link to='/' className="btn btn-primary"><h3>Tv Bland</h3> </Link>
            <p>TV Show and web series database.</p>
            <p className='headsTitle'>Create personalised schedules. Episode guide, cast, crew and  character information.</p>
            <p></p>
          </div>
          <div className='dtailsitems-add'>
            <div className='dtailsitems'>
              <TvshowContent>
                <h2>Last Added Shows</h2>
              </TvshowContent>
              <Grid container spacing={5}>
                {schedule.map(show => {
                  return <Grid item lg={2} md={3} xs={6}>
                    <ShowItems show={show} />
                  </Grid>
                })}
              </Grid>
            </div>
          </div>
        </Tvshow>
      </Maincontainer>
      {/* <ItemsDtails /> */}
    </>
  )
}

export default Home
