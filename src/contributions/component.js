import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import './css/contributions.css'
import Post from "./post/component"

class Contributions extends Component {

    static buildPost(title, imageUrl, publishedOn, articleLink) {
        return <Post className="post"
                     title={title}
                     imageUrl={imageUrl}
                     publishedOn={publishedOn}
                     link={articleLink}/>
    }

    render() {
        return (
            <div className="container">
                <Typography variant="h4" className="title">
                    Medium
                </Typography>

                {Contributions.buildPost(
                    "Synchronisation 101 with Java",
                    "https://cdn-images-1.medium.com/max/1287/1*G_D3IlX92dgbRxAxRvMnfA.png",
                    "20 April, 2019",
                    "https://medium.com/mindorks/synchronisation-101-with-java-bb11a7d651da"
                )}

                {Contributions.buildPost(
                    "Bug Smashing — A Guide To Debug Your App",
                    "https://cdn-images-1.medium.com/max/781/1*tkXnZVtffjwzPC9zWNFBAg.jpeg",
                    "09 February, 2019",
                    "https://medium.com/mindorks/bug-smashing-a-guide-to-debug-your-app-11278d832e13")}

            </div>
        );
    }
}

export default Contributions
