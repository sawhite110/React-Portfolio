import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavTabsStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: black;
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hoover{
                background-color: gray;
            }
        }
        a{
            dipslay: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 1rem;
            font-size: 2rem;
            color: light-gray;
            outline: none;
        }
        .active{
            color: white;
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        outline: none;
        * {
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px){
        padding: 0;
        .hide-item {
            transform: translateY(calc(-100 - var (--top)));
        }
        .mobile-menu-icon {
            display: block;
        }
        .navItems{
            --top: 1rem;
            transition: .3s ease transform;
            background-color: gray;
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }
    }
`;
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    //variable of showNav and function of SetShowNav to change the value of showNav
    const [showNav, SetShowNav] = useState(false);
    return (
        <NavTabsStyles>
            <div className="mobile-menu-icon"
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                onClick={()=> SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}>
                <MdMenu />
            </div>
            <ul className="nav nav-tabs" {...showNav ? "navItems hide-item" : "navItems"}>
                <div className="closeNavIcon"
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                    onClick={()=> SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
            <li className="nav-item">
                <NavLink
                href="#home"
                exact
                onClick={() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onClick={()=> SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                >
                Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onClick={()=> SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                >
                About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                href="#blog"
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onClick={()=> SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                >
                Portfolio
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                // Pressing tab while the icon is selected, pressing any key will run onKeyDown
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onClick={()=> SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                >
                Contact
                </NavLink>
            </li>
            </ul>
        </NavTabsStyles>
    );
}

export default NavTabs;
