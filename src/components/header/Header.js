import React from 'react';
import { Navbar } from 'react-bootstrap';


export default class Header extends React.Component {
    render(){
        return(
            <Navbar bg="light">
                <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
            </Navbar>
        );
    }
}