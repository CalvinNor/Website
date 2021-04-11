import React, { Component } from "react";
import image from './images/profile-picture.jpg'
import './css/about.css'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import styles from '../core/styles'
import theme from '../core/app-theme'
import { SOCIAL_LINKS } from "../contact/constants";

const about_styles = {

    helloWorld: {
        margin: 5,
        textAlign: "center"
    },

    name: {
        marginTop: 4,
        textAlign: "center"
    },

    subtitle: {
        textAlign: "center",
        marginTop: 6,
        marginBottom: 12
    },

    heading: {
        textAlign: "center"
    },

    description: {
        marginTop: 18,
        marginLeft: 5,
        marginRight: 5,
        fontsize: 100
    },

    podcastList: {
        margin: 5,
        paddingLeft: 15,
        listStyleType: "circle"
    }
};

class About extends Component {

    render() {
        return (
            <Grid container justify={"center"} alignItems={"center"} direction={"column"} style={styles.page_content}>

                <img src={image} class="profile-picture" alt="Calvin Noronha" />

                <Typography variant="h5" style={about_styles.helloWorld}>
                    Hello World <span role="img" aria-label="hand-wave">👋</span>
                </Typography>

                <Typography variant="h5" style={about_styles.name} color={"textPrimary"}>
                    I'm <b><font color={theme.palette.primary.main}>Calvin Noronha</font></b>
                </Typography>

                <Typography variant="subtitle1" style={about_styles.subtitle}>
                    Software Engineer &amp; Tech Enthusiast<br /> I write Android &amp; Web apps
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I'm presently a <b>UX Engineer</b> at <a href="https://www.google.com">Google</a> where I
                    improve and maintain the Google Workspace Admin Console.<br />
                    Previously, I was the <b>Lead Android Engineer</b> at <a href="https://www.cityflo.com/">Cityflo</a>, where I
                    architected the Bookings Android app rewrite, and maintained the Driver Android app.
                    <p>
                        Check out my <a href={SOCIAL_LINKS.linkedin}>LinkedIn</a> for more on my work experience.
                    </p>
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    In my free time, I work and experiment on hobby projects like <b>MovieMan</b> &amp; <b>DailyCodingProblem.</b><br />
                    <p>
                        Check out my <a href="https://github.com/CalvinNor">GitHub</a> for more on that.
                    </p>
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I like to keep up with Technology & Engineering, and also listen to a bunch of Tech Podcasts. To
                    name a few:
                    <ul style={about_styles.podcastList}>
                        <li><a href="https://fragmentedpodcast.com/">Fragmented</a></li>
                        <li><a href="https://www.techmeme.com/">Techmeme</a></li>
                        <li><a href="https://darknetdiaries.com/">Darknet Diaries</a></li>
                        <li><a href="https://www.redhat.com/en/command-line-heroes">Commandline Heroes</a></li>
                    </ul>

                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I've written some articles about Bug Fixing & Synchronisation, which got featured by professional
                    curators!<br />
                    <p>
                        Check out my <a href="https://medium.com/@calvin.nrnha">Medium</a> for more on that.
                    </p>
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I'm also an active member of the <a
                        href="https://gdgmad.com/">GDG MAD</a> Meetup, <a
                            href="https://discordapp.com/invite/zBSfhwk">Fragmented Discord</a> Server & <a
                                href="https://mindorks.com/join-community">MindOrks Slack</a> Community.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    Feel free to reach out to me anytime, anywhere! I'm responsive on all my Social Profiles.
                </Typography>

            </Grid >
        );
    }
}

export default About
