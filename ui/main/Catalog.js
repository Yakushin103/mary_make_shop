import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Catalog() {
  return (
    <Grid className="main-catalog" justifyContent='space-between' container>
      <Grid item xs={12} md={5}>
        <Card className="main-catalog-card">
          <CardMedia
            component="img"
            alt="green iguana"
            // height="140"
            image="/images/pexels-ben-mack-6775289.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Для женщин
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">Смотреть каталог</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid className="main-catalog right" item xs={12} md={5}>
        <Card className="main-catalog-card">
          <CardMedia
            component="img"
            alt="green iguana"
            // height="140"
            image="/images/pexels-maria-orlova-4947752.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Для мужчин
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">Смотреть каталог</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
