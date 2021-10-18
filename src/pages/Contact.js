import React, { Component } from "react";
import {
  Form,
  Header,
  Segment,
  Divider,
  // Item,
  // Button,
  // Container,
} from "semantic-ui-react";

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
  paddingBottom: "3.5em",
  paddingLeft: "10em",
  paddingRight: "10em",
};

class Contact extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", name: "" });

  render() {
    const { name, email, submit } = this.state;

    return (
      <div
      style = {style}
      >
        <Divider hidden />
        <Segment 
          style = {{padding: "1em 0em"}}
          basic textAlign="center">
          <Header as="h1">Contact Me</Header>
        </Segment>
        <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            widths="equal"
            action="mailto:stevenson.whiteii@gmail.com"
            method="post"
          >
            <Divider hidden />
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="firstName"
              value={name}
              width={8}
              onChange={this.handleChange}
            />
            <Divider hidden />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              value={name}
              width={8}
              onChange={this.handleChange}
            />
            <Divider hidden />
            <Form.Input
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Divider hidden />
            <Form.Field
            >
            <Form.TextArea
              label="Message"
              placeholder='Send me a message here...' />
            </Form.Field>
            <Form.Button
              content="Submit"
              name="submit"
              value={submit}
              // widths="equal"
              action="mailto:stevenson.whiteii@gmail.com"
              method="post"
            >Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default Contact;

// export default function Contact() {
//   return (
//     <Container >
//       <h1>Contact Me</h1>
//          <p>
//          You can reach me by placing your information in the boxes, and clicking the submit button. You can also click the links at the bottom of the page.
//          </p>

//          <Form onSubmit= {this.handleSubimt}>
//              {/* <!-- This will allow me to create a form for user input. --> */}
//              <Form class="my-form" action="mailto:stevenson.whiteii@gmail.com" method="post">
//                  <Item class="form-group">
//                      <label for="firstName">First Name: </label>
//                      <Input type="text" label="First" class="form-control" id="firstName" name="firstName" placeholder="First name here..">
//                  </Item>
//                  <Item class="form-group">
//                      <label for="lastName">Last Name: </label>
//                      <Input type="text" label="Last" class="form-control" id="lastName" name="lastName" placeholder="Last name here..">
//                  </Item>
//                  <Item class="form-group">
//                      <label for="email">Email: </label>
//                      <Input type="text" label="email" class="form-control" id="email" name="email" placeholder="Email here..">
//                  </Item>
//                  <Item class="form-group">
//                      <label for="message">Message: </label>
//                      <textarea name="message" name="message" placeholder="Write your message here.." rows="3" style="height: 150px;"></textarea>
//                  </Item>
//                  {/* <!-- This button class will submit the information entered into the boxes, to an email sent to me. --> */}
//                  <Button class="button" class="form-control" type="submit" value="Submit" name="submit"></Button>
//              </Form>
//          </Form>

//          <Segment>
//          {/* <!-- This section will have links to my social media. --> */}
//          <div class="social-media">
//          <a class="footer-link" href="https://www.linkedin.com/in/stevenson-white-ii-26974525" target="_blank">LinkedIn</a>
//          <a class="footer-link" href="https://www.ieee.org/" target="_blank">IEEE</a>
//          <a class="footer-link" href="https://github.com/sawhite110" target="_blank">Github</a>
//          {/* <!-- Add a Twitter account link upon opening a new one. --> */}
//          <a class="footer-link" href="#">Twitter</a>
//          </Segment>

//      </Container>
//    );
// }
