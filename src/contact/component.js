import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import "./css/contact.css"
import {SocialIcon} from 'react-social-icons';

class Contact extends Component {

    render() {
        return (
            <Card className="card">
                <SocialIcon className="social-icon" url="https://twitter.com/calvinnrnha"/>
                <SocialIcon className="social-icon" url="https://www.linkedin.com/in/calvin-noronha/"/>
                <SocialIcon className="social-icon" url="https://github.com/CalvinNor"/>
                <SocialIcon className="social-icon" url="https://medium.com/@calvin.nrnha"/>
            </Card>
        );
    }
}

export default Contact
