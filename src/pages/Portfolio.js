import React from "react";
import {
  Header,
  Segment,
  Divider,
  Item,
  Button,
  Container,
} from "semantic-ui-react";
import image1 from "../images/digital-marketing-meeting.jpg";
import image2 from "../images/screenshot1.png";
import image3 from "../images/screenshot4.png";
import image4 from "../images/screenshot6.png";

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
          <Item>
            <Item.Image src={image1} />
            <Item.Content>
              <Item.Header>Code Refactor</Item.Header>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://sawhite110.github.io/Horiseon-SSS-Inc/"
                  target="_blank"
                >
                  Click Me
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={image2} />
            <Item.Content>
              <Item.Header>My Personal Portfolio</Item.Header>
              <Item.Description>
                This is my first portfolio project, from the beginning of the
                coding bootcamp.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://sawhite110.github.io/My-Personal-Portfolio/"
                  target="_blank"
                >
                  Click Me
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={image3} />
            <Item.Content>
              <Item.Header>Anime of the Day</Item.Header>
              <Item.Description>
                This is the first team project, that allows users to search for
                fun anime.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  inverted
                  as="a"
                  href="https://sawhite110.github.io/Anime-of-the-Day/"
                  target="_blank"
                >
                  Click Me
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={image4} />
            <Item.Content>
              <Item.Header
                  primary
                  inverted
                  as="a"
                  href="https://sawhite110.github.io/Code-Quiz-Challenge/"
                  target="_blank">Code Quiz Challenge</Item.Header>
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
        </Item.Group>
      </Container>
    </div>
  );
}
