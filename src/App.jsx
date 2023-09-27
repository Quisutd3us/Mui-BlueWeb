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
              my:3,
              p: 5,
              borderColor: "peru",
              borderRadius:2,
              bgcolor: "#333",
              color: 'white'
            }}
            variant="body1">Que hermoso es MUI</Typography>
        </Box>
      </Container>
    </>
  );
};
