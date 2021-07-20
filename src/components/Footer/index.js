import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Container,
  List,
  Grid,
  Header,
  Button,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  const history = useHistory();
  return (
    <Segment inverted vertical style={{ padding: "2em 0em", color: "#2589BD" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header
                inverted
                as="h4"
                content="Navigation"
                style={{ color: "#FFFFFF" }}
              />
              <List style={{ color: "#2589BD" }} link inverted>
                <List.Item style={{ color: "#2589BD" }} as={Link} to="/">
                  Home
                </List.Item>
                <List.Item style={{ color: "#2589BD" }} as={Link} to="/about">
                  About
                </List.Item>
                <List.Item
                  style={{ color: "#2589BD" }}
                  as={Link}
                  to="/portfolio"
                >
                  Portfolio
                </List.Item>
                <List.Item style={{ color: "#2589BD" }} as={Link} to="/contact">
                  Contact
                </List.Item>
                <Button
                  //   color="#FFFFFF"
                  inverted
                  style={{ marginTop: "0.5em" }}
                  content="Go Back"
                  onClick={() => history.goBack()}
                ></Button>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                style={{ color: "#FFFFFF" }}
                inverted
                as="h4"
                content="Contributors"
              />
              <List link inverted>
                <List.Icon
                  style={{ color: "#2589BD" }}
                  name="github"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Item
                  style={{ color: "#2589BD" }}
                  as="a"
                  href="https://github.com/sawhite110"
                  target="blank"
                >
                  Stevenson White II
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header style={{ color: "#FFFFFF" }} as="h1" inverted>
                Personal Portfolio
              </Header>
              <p>&copy; 2021 Designed and Created by Stevenson White II</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
