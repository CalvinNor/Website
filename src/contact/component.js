import React, {Component} from "react";
import "./css/contact.css"
import { SocialCard } from './socialcard';
import LinkedinLogo from "./resources/linkedin.svg";
import TwitterLogo from "./resources/twitter.svg";
import GithubLogo from "./resources/github.svg";
import MediumLogo from "./resources/medium.svg";

class Contact extends Component {

    render() {
        return (
            <div className="ContactContainer">
                <SocialCard image={TwitterLogo} title="@CalvinNrnha" link="https://twitter.com/calvinnrnha/" />
                <SocialCard image={LinkedinLogo} title="Calvin Noronha" link="https://www.linkedin.com/in/calvin-noronha/" />
                <SocialCard image={GithubLogo} title="CalvinNor" link="https://github.com/CalvinNor/" />
                <SocialCard image={MediumLogo} title="@calvin.nrnha" link="https://medium.com/@calvin.nrnha/" />
            </div>
        );
    }
}

export default Contact
