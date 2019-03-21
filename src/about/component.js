import React, {Component} from "react";
import image from './images/profile-picture.jpg'
import './css/about.css'
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import styles from '../core/styles'

const about_styles = {

    name: {
        margin: 5
    },

    heading: {
        textAlign: "center"
    },

    description: {
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20
    }
};

class About extends Component {

    render() {
        const bullet = <span style={styles.bullet}>•</span>;

        return (
            <Grid container justify={"center"} alignItems={"center"} direction={"column"} style={styles.page_content}>
                <img src={image} class="profile-picture" alt="Calvin Noronha"/>
                <Typography variant="display1" style={about_styles.name} color={"textPrimary"}>
                    Calvin Noronha
                </Typography>
                <Typography variant="Title" style={about_styles.heading} color={"textSecondary"}>Android
                    Developer {bullet}
                    Software Engineer {bullet}
                    Tech Enthusiast</Typography>
                <Typography variant="body1" style={about_styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nibh in nisl efficitur rhoncus
                    in vel eros. Integer sed hendrerit risus. Maecenas faucibus felis ac egestas viverra. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultricies laoreet nunc, sed luctus
                    mauris feugiat id. Fusce a velit ornare, mattis sem dignissim, ornare lacus. Sed dictum sapien eget
                    purus tempor euismod. Duis eu metus ut odio euismod commodo ac non nisi.

                    Nullam pulvinar mauris pulvinar, mattis erat et, maximus massa. Maecenas lorem magna, vehicula eget
                    posuere at, gravida sit amet velit. In eu erat sapien. Integer dictum leo quis sapien blandit
                    iaculis. Aenean purus nisl, molestie at porta a, ornare ut leo. Maecenas sit amet purus consectetur,
                    volutpat enim sit amet, dignissim magna. Phasellus vehicula, enim at viverra feugiat, nulla odio
                    interdum felis, id consequat elit lacus eu est. Nam sapien nisi, ultrices a viverra scelerisque,
                    sodales ac urna. Phasellus ac quam vel nisi scelerisque tincidunt at a eros.

                    Quisque venenatis non urna id pretium. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Vestibulum vitae justo id libero pulvinar vestibulum vel vitae
                    magna. Aenean id ipsum rutrum, hendrerit odio in, tempor neque. Etiam faucibus purus commodo
                    ullamcorper vulputate. Nam at finibus justo. Integer rhoncus vestibulum sodales. Vivamus porttitor,
                    sapien id bibendum imperdiet, ligula erat porta quam, sed pretium ipsum velit quis justo. Cras
                    volutpat velit et ex volutpat, vitae mollis risus sagittis. Cras varius ultricies sagittis. Praesent
                    in ante a felis vulputate faucibus non eget massa. Quisque interdum nisl malesuada purus ornare,
                    tempor varius elit porta. Cras vestibulum nunc orci, a lobortis velit consectetur at. Morbi dictum
                    consequat consectetur.

                    Etiam ut felis eu mauris malesuada posuere fringilla in turpis. Mauris leo felis, lacinia non
                    ullamcorper a, porttitor et felis. Etiam faucibus nisl semper urna consectetur hendrerit. Vivamus
                    bibendum dolor porta, pharetra eros nec, tincidunt eros. Mauris non sapien mauris. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Proin gravida pretium ipsum, quis pretium sem.
                    Pellentesque eu vulputate risus, vel ullamcorper nulla. Donec pulvinar quam vel lorem ullamcorper,
                    nec fermentum purus molestie. Praesent ut dolor semper, auctor elit a, tincidunt sem.
                </Typography>
            </Grid>
        );
    }
}

export default About
