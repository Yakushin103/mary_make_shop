import { useState } from 'react'
import Head from 'next/head'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import UseSwitchesCustom from './UseSwitchesCustom'

import { pages } from '../utils/constants'

export default function Layout({ title, description, children }) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0'
      },
      h2: {
        fontSize: '3.5rem',
        margin: '1rem 0'
      },
      body1: {
        fontWeight: 'normal',
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#fff' : '#3a3a3a'
      },
      secondary: {
        main: '#ccc'
      }
    }
  })

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const darkHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Mary make-shope` : "Mary make-shope"}
        </title>
        {
          description &&
          <meta name="description" content={description}></meta>
        }
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: darkMode ? 'black' : 'white' }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              <Grid
                direction="column"
                container
              >
                <Grid sx={{ maxHeight: '35px' }} item>
                  <Grid
                    sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                    container
                  >
                    <Grid item xs={4}>
                      <UseSwitchesCustom
                        checked={darkMode}
                        darkHandler={darkHandler}
                      />

                    </Grid>

                    <Grid
                      item
                      style={{ textAlign: 'center' }}
                      xs={4}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        component="h6"
                        color="primary"
                      >
                        LOGO
                      </Typography>
                    </Grid>

                    <Grid
                      sx={{ textAlign: 'end' }}
                      item
                      xs={4}
                    >
                      <Button>
                        <FavoriteBorderIcon color="primary" />
                      </Button>

                      <Button>
                        <AccountCircleIcon color="primary" />
                      </Button>

                      <Button>
                        <ShoppingCartIcon color="primary" />
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid
                    sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
                    container
                  >
                    <Grid
                      sx={{ textAlign: 'start' }}
                      xs={4}
                    >
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        {pages.map((page) => (
                          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.value}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>

                      <Button>
                        <FavoriteBorderIcon color="primary" />
                      </Button>
                    </Grid>

                    <Grid
                      sx={{ textAlign: 'center' }}
                      xs={4}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        component="h6"
                        color="primary"
                      >
                        LOGO
                      </Typography>
                    </Grid>

                    <Grid
                      sx={{ textAlign: 'end' }}
                      xs={4}
                    >
                      <Button>
                        <AccountCircleIcon color="primary" />
                      </Button>

                      <Button>
                        <ShoppingCartIcon color="primary" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}
                  item
                >
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      color="primary"
                      sx={{ my: 2, display: 'block' }}
                    >
                      {page.value}
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>

        <Container>
          {children}
        </Container>

        <footer>
          <Typography sx={{ textAlign: 'center' }} color="primary">
            Design by Nastya Kornyushina. Created by Vasso Yakushin
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
