import styled from "@emotion/styled"
import { ShoppingCart } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material"

export const ProductItem = () => {

  const Img = styled('img')({
    width: 200,
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  });

  return (
    <Container>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          overflow: 'hidden',
          mt: 5
        }}
      >
        <Img
          src="https://via.placeholder.com/200"
          alt="using Styled img"
        />
        {/* product description */}
        <Box
        maxWidth={'sm'}
          sx={{
            // border: 2,
            flexGrow: 1,
            display:"grid",
            gridColumn:1,
            gridRow:1,
            justifyContent:'left',
            gap:2
          }}
        >
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="body1">Product Description</Typography>
          <Button
            variant="contained"
            endIcon={<ShoppingCart />}
          >ADD CART</Button>

        </Box>
        <Box
          textAlign={'right'}
          component={'div'}
          sx={{
            // border: 2,
            mr: 2
          }}
        >
          <Typography
            variant="h5"
          >$19.99</Typography>
        </Box>
      </Paper>
    </Container>
  )
}
