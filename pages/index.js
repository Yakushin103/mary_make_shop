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
import Catalog from '../ui/main/Catalog'

export default function Home() {
  return (
    <Layout
      title="Главная страница"
      description=""
    >
      <Grid className="main" container>
        <Grid
          className="main-right"
          item
          sx={{ height: '100%' }}
          md={6}
          xs={12}
        >
          <Box></Box>
          <Typography
            variant="h2"
            component="h2"
          >
            Ваш поиск моды начинается здесь
          </Typography>

          <Grid sx={{ margin: '2rem 0' }} justifyContent='space-between' container>
            <Grid item xs={3} md={3}>
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

            <Grid item xs={3} md={3}>
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

            <Grid item xs={3} md={3}>
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
          sx={{ height: '100%', position: 'relative' }}
          md={6}
          xs={12}
          className="main-left"
        >
          <CardMedia
            className="image-absolute"
            title="Name"
            component="img"
            image="/images/pexels-marko-klaric-6408285.jpg"
          />
          <CardMedia
            title="Name"
            component="img"
            image="/images/pexels-darina-belonogova-8722181.jpg"
          />
          <div>
            <span className="line"></span>
            <Typography>
              Эксклюзивные товары с широким ассортиментом изделий и аксуссуаров
              созданные своими руками только для Вас
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Catalog />
    </Layout>
  )
}
