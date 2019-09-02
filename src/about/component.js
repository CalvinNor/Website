import React, {Component} from "react";
import image from './images/profile-picture.jpg'
import './css/about.css'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import styles from '../core/styles'
import theme from '../core/app-theme'

const about_styles = {

    helloWorld: {
        margin: 5,
        textAlign: "center"
    },

    name: {
        marginTop: 10,
        textAlign: "center"
    },

    subtitle: {
        textAlign: "center",
        marginBottom: 12
    },

    heading: {
        textAlign: "center"
    },

    description: {
        marginTop: 12,
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

                <img src={image} class="profile-picture" alt="Calvin Noronha"/>

                <Typography variant="h5" style={about_styles.helloWorld}>
                    Hello World! <span role="img" aria-label="hand-wave">👋</span>
                </Typography>

                <Typography variant="h5" style={about_styles.name} color={"textPrimary"}>
                    I'm <b><font color={theme.palette.primary.main}>Calvin Noronha</font></b>
                </Typography>

                <Typography variant="subtitle1" style={about_styles.subtitle}>
                    Android Developer, Software Engineer & Tech Enthusiast. I write applications for Android.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I'm presently a Lead Android Engineer at <a href="https://www.cityflo.com//">Cityflo</a>, where I
                    actively improve and maintain our Customer Booking & Driver apps.<br/>
                    We're building the next generation of commute from Home to Work, one ride at a time.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    My work experience includes some big & small projects with world-class Software Design & Principes.
                    I've also written tons of applications from scratch, and see them through to release. I'm always
                    up-to-date with the Android SDK and popular libraries / frameworks.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    In my free time, I work and experiment on hobby projects like MovieMan & DailyCodingProblem.<br/>
                    Check out my <a href="https://github.com/CalvinNor">GitHub</a> for more on that.
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
                    curators!<br/>
                    Check out my <a href="https://medium.com/@calvin.nrnha">Medium</a> for more on that.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    I'm also an active member of the <a
                    href="https://madmeetup.com/">MAD</a> Meetup, <a
                    href="https://discordapp.com/invite/zBSfhwk">Fragmented Discord</a> Server & <a
                    href="https://mindorks.com/join-community">MindOrks Slack</a> Community.
                </Typography>

                <Typography variant="body1" style={about_styles.description}>
                    Feel free to reach out to me anytime, anywhere! I'm responsive on all my Social Profiles.
                </Typography>

            </Grid>
        );
    }
}

export default About
