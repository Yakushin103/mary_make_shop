import NextLink from 'next/link'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout
      title="Главная страница"
      description=""
    >
      <Grid className="main" container>
        <Grid
          item
          sx={{ width: '50%', height: '100%' }}
        >
          <Box></Box>
          <Typography
            variant="h2"
            component="h2"
          >
            Ваш поиск моды начинается здесь
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card>
                <NextLink href={`/product/1`} passHref>
                  <CardActionArea>
                    <CardMedia
                      title="Name"
                      component="img"
                      image="/images/pexels-dima-valkov-3266700.jpg"
                    />

                    <CardContent>
                      <Typography>
                        название
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card>
                <NextLink href={`/product/1`} passHref>
                  <CardActionArea>
                    <CardMedia
                      title="Name"
                      component="img"
                      image="/images/pexels-leah-kelley-1449657.jpg"
                    />

                    <CardContent>
                      <Typography>
                        название
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Button color="primary" variant="outlined">
                <Typography >
                  посмотреть коллекцию
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{ width: '50%', height: '100%' }}
        >

        </Grid>
      </Grid>
    </Layout>
  )
}
