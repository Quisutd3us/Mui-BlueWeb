import { AgricultureOutlined, HtmlRounded } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";

export const App = () => {
  return (
    <>
      <Container maxWidth={"sm"} sx={{ boxShadow: 4, pb: 2, m: 1 }}>
        <h1>Hi World</h1>
        <Typography variant="h2">App H1 con componente</Typography>
        <Typography
          my={2}
          textAlign={'center'}
          component={'div'}
          variant="body1">App H1 con componente</Typography>
        <Button variant="contained">MY first Buttom</Button>
      </Container>
      <Container maxWidth={"sm"} sx={{ boxShadow: 4, pb: 2, m: 1 }}>
        <Typography
          variant="h3"
        >Box</Typography>
        <Box>
          <Typography
            sx={{
              border: 2,
              my: 3,
              p: 5,
              borderColor: "peru",
              borderRadius: 2,
              bgcolor: "#333",
              color: 'white'
            }}
            variant="body1">Que hermoso es MUI</Typography>
        </Box>
      </Container>
      <Container
        maxWidth={'sm'}
        sx={{
          boxShadow: 3,
          pb: 4,
          m: 1
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ py: 2 }} >App</Typography>
          <Typography variant="h5" >Theme</Typography>
        </Box>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          gap={3}
          sx={{
            my: 2
          }}
        >
          <Button
            color="buttons"
            variant="contained">MY first Buttom
          </Button>
          <Button
            color="success"
            variant="contained">MY first Buttom
          </Button>
          <Button
            color="error"
            variant="contained">MY first Buttom
          </Button>
          <Button
            variant="text">MY first Buttom
          </Button>
          <Button
            color='secondary'
            variant="outlined">MY first Buttom
          </Button>
        </Box>

        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          gap={3}
          sx={{
            my: 2
          }}
        >

          <Button
            variant={"contained"}
            startIcon={<AgricultureOutlined />}
          >
            Agriculture
          </Button>
          <Button
            variant={"outlined"}
            endIcon={<HtmlRounded />}
          >
            Geek
          </Button>
        </Box>
      </Container >
    </>
  );
};
