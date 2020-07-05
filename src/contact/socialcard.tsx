import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import "./css/contact.css"
import CardActionArea from '@material-ui/core/CardActionArea';

interface CardProps {
    image: string;
    title: string;
    link: string;
}

/**
 * Builds a social card given a URL.
 */
export class SocialCard extends Component<CardProps> {

    render() {
        const { image, title, link } = this.props;
        return (
            <div className="SocialCardContainer">
                <a href={link}>
                    <Card className="Card">
                        <CardActionArea>
                            <div className="CardContent">
                                <img className="CardImage"
                                    src={image} />
                                <span className="CardText">{title}</span>
                            </div>
                        </CardActionArea>
                    </Card>
                </a>
            </div>
        );
    }
}
