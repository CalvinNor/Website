import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import "./post.css"

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

class Post extends Component {

    render() {
        const {title, link, imageUrl, publishedOn} = this.props;
        return (
            <div className="post-card">
                <a href={link}>
                    <Card className={styles.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={styles.media}
                                image={imageUrl}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {title}
                                </Typography>
                                <Typography component="p" className="published">
                                    Published on: {publishedOn}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    publishedOn: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Post
