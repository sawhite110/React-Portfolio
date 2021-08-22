import React from "react";
import {
  Header,
  Segment,
  Divider,
  Item,
  Button,
  Container,
} from "semantic-ui-react";
import image1 from "../images/screenshot1.png";
import image2 from "../images/screenshot4.png";
import image3 from "../images/screenshot6.png";
import image4 from "../images/screenshot7.png";
import image5 from "../images/screenshot5.png";
import image6 from "../images/screenshot2.png";
import image7 from "../images/screenshot8.png";

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

export default function Portfolio() {
  return (
    <div>
      <Divider hidden />
      <Segment basic textAlign="center">
        <Header as="h1">Portfolio</Header>
      </Segment>
      <Divider hidden />
      <Segment basic margin="4em 2em" padding="2em 2em">
        <p>
          Below you will see some of the projects that I have been working,
          during my coding journey. Feel free to click on the links provided to
          checkout the application.
        </p>
      </Segment>
      <Divider hidden />
      <Header as="h2" content="Projects" style={style.h2} textAlign="center" />
      <Container>
        <Item.Group divided>
          <Divider hidden />
          <Item>
            <Item.Image src={image1} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href="https://sawhite110.github.io/My-Personal-Portfolio/"
                target="_blank">My Personal Portfolio
              </Item.Header>
              <Item.Description>
                My first portfolio project, from the beginning of the
                coding bootcamp.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/sawhite110/My-Personal-Portfolio.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image2} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href="https://sawhite110.github.io/Anime-of-the-Day/"
                target="_blank">Anime of the Day
              </Item.Header>
              <Item.Description>
                This is the first team project, that allows users to search for
                fun anime.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/sawhite110/Anime-of-the-Day.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image3} />
            <Item.Content>
              <Item.Header
                  primary
                  inverted
                  as="a"
                  href="https://sawhite110.github.io/Code-Quiz-Challenge/"
                  target="_blank">Code Quiz Challenge
              </Item.Header>
              <Item.Description>
                A DOM application that allows the user to answer a series of
                questions and receive their score at the end.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/sawhite110/Code-Quiz-Challenge.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image4} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href="https://grogrogro.herokuapp.com/"
                target="_blank">GroGroGro
              </Item.Header>
              <Item.Description>
                A team project that will ease the minds of family households with an interactive grocery list.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/vegaryanneil/grogrogro"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image5} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href="https://github.com/sawhite110/Fitness-Tracker.git"
                target="_blank">Fitness Tracker
              </Item.Header>
              <Item.Description>
                An app for you to keep track of your daily workouts and get your workout results.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/sawhite110/Fitness-Tracker.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image6} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href="https://stevenson-budget-tracker.herokuapp.com/"
                target="_blank">Budget Tracker
              </Item.Header>
              <Item.Description>
                This is an easy and quick way to track your daily spending, while also allowing offline functionality.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/sawhite110/Online-Offline-Budget-Tracker.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
          <Item>
            <Item.Image src={image7} />
            <Item.Content>
              <Item.Header
                primary
                inverted
                as="a"
                href=" https://magic-school-bus-tracker.herokuapp.com/"
                target="_blank">Bus Tracker
              </Item.Header>
              <Item.Description>
                This team project web application that tracks the status of buses.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://github.com/mikeyhauser/Bus-Tracker.git"
                  target="_blank"
                >
                  Code
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider hidden />
        </Item.Group>
      </Container>
    </div>
  );
}
