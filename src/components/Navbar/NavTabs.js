import React, { Component } from "react";
import { Menu, Segment, Visibility } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class NavTabs extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { activeItem, fixed } = this.state;

    return (
      <div>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            basic
            inverted
            textAlign="center"
            padded="very"
            style={{ minHeight: 100, padding: "2em 1em" }}
            vertical
          >
            <Menu
              stackable
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Menu.Item
                as={NavLink}
                to="/home"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/about"
                name="about"
                active={activeItem === "about"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/portfolio"
                name="portfolio"
                active={activeItem === "portfolio"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={NavLink}
                to="/contact"
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Segment>
        </Visibility>
      </div>
    );
  };
};