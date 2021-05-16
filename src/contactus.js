import './App.css';
import Menu from "./components/menu"
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Container, TextField, Button, Card, CardContent} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 515,
    marginLeft: 345,
  },
});

function ContactUs() {
  const classes = useStyles();

  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Container fixed>
          <Box m={8}>
            <Typography variant="h3">
              Having Issues? Contact Us!
            </Typography>
          </Box>
          <Card className={classes.root} raised variant="outlined">
            <CardContent>
              <Box m={8}>
                <TextField id="firstname" label="First Name" variant="outlined"/>
              <Box m={2}>
                <TextField id="lastname" label="Last Name" variant="outlined"/>
              </Box>
              <Box m={2}>
                <TextField id="email" label="Email" variant="outlined"/>
              </Box>
              <Box m={3}>
                <TextField id="issues" multiline fullWidth label="What seems to be the issue?" variant="outlined"/>
              </Box> 
              <Box m={3}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
              </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </header>
    </div>
  );
}

export default ContactUs;