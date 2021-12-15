import React from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export default function Collection() {
  return (
    <Grid
      alignItems="center"
      direction="column"
      container
    >
      <Grid item>
        <Typography
          component="h6"
          variant="h6"
        >
          Новая коллекция
        </Typography>
      </Grid>

      <Grid item>
        <Grid
        sx={{ margin: '2rem 0' }}
          container
          spacing={2}
        >
          <Grid xs={6} md={3} item>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/pexels-dima-valkov-3266700.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={6} md={3} item>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/pexels-dima-valkov-3266700.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={6} md={3} item>
            <Card >
              <CardMedia
                component="img"
                height="140"
                image="/images/pexels-dima-valkov-3266700.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={6} md={3} item>
            <Card >
              <CardMedia
                component="img"
                height="140"
                image="/images/pexels-dima-valkov-3266700.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button color="primary">
          Загрузить еще
        </Button>
      </Grid>
    </Grid>
  )
}
