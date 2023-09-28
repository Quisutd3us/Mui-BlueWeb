import { ReadMore } from "@mui/icons-material"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"

export const CardItem = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid
          item
          sm={12}
          md={5}
          lg={8}
        >
          <Card
            sx={{
              mt:5,
              transition: '0.2s',
              "&:hover": {
                transform: "scale(0.98)"
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component={'img'}
                image="https://via.placeholder.com/1000x200"
                height={200}
                alt='This is a Description'
              >

              </CardMedia>
              <CardContent>
                <Typography variant="h3">Card Title</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsa voluptas? Quo nobis numquam dolor rem minima beatae sit, totam quasi ut saepe.</Typography>
              </CardContent>
            </CardActionArea>


            <CardActions>
              <Button>Share</Button>
              <Button
                variant="outlined"
                startIcon={<ReadMore />}
              >Learn More</Button>

            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}
