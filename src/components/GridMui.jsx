import { Container, Grid, Typography } from "@mui/material"

export const GridMui = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={12}
          >
            <Typography
              p={1}
              textAlign={'center'}
              variant="h4">Grid MUI</Typography>

          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={4}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed iste, dignissimos eum consequatur dicta magnam quasi quia ad sunt delectus, quas dolorem.</p>
          </Grid>
          <Grid
            item
            sm={12}
            md={8}
            lg={4}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed iste, dignissimos eum consequatur dicta magnam quasi quia ad sunt delectus, quas dolorem.</p>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={4}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed iste, dignissimos eum consequatur dicta magnam quasi quia ad sunt delectus, quas dolorem.</p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

