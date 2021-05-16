import './App.css';
import Menu from "./components/menu"
import {Typography, Box, Container} from "@material-ui/core"

class AboutUs extends Component{
    render() {
        return (
            <div className="App">
            <Menu />
            <header className="App-header">
                <Container fixed>
                <Box m={8}>
                    <Typography variant="h3">
                    About Us
                    </Typography>
                </Box>
                <Box m={8}>
                <Typography variant="h5">
                    Game Crtic was conveived on April 7th, 2021 by Anthony Pavlovski, Ryne Kolessar, Kinji Ridley, Parth Rana, Pedro Ferrer, and Jia Feng Ling. This group of people came together and decided to create a site that allows 
                    users to give heartfelt reviews for all their favorite games. Utilizing RAWG API and the Material-UI library, we were able to create this site in only two weeks, eager to give our users 
                    a product they would be happy with. We hope our hard work is satisfactory for all your needs, and we welcome you to the Game Crtic family! 
                </Typography>
                </Box>
                </Container>
            </header>
            </div>
  );
}
}

export default AboutUs;