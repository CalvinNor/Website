import React, {Component} from "react";
import "./css/contact.css"
import { SocialCard } from './socialcard';
import LinkedinLogo from "./resources/linkedin.svg";
import TwitterLogo from "./resources/twitter.svg";
import GithubLogo from "./resources/github.svg";
import MediumLogo from "./resources/medium.svg";
import {SOCIAL_LINKS} from "./constants";

class Contact extends Component {

    render() {
        return (
            <div className="ContactContainer">
                <SocialCard image={TwitterLogo} title="@CalvinNrnha" link={SOCIAL_LINKS.twitter} />
                <SocialCard image={LinkedinLogo} title="Calvin Noronha" link={SOCIAL_LINKS.linkedin} />
                <SocialCard image={GithubLogo} title="CalvinNor" link={SOCIAL_LINKS.github} />
                <SocialCard image={MediumLogo} title="@calvin.nrnha" link={SOCIAL_LINKS.medium} />
            </div>
        );
    }
}

export default Contact
