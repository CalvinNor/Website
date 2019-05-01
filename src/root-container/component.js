import React, {Component} from "react";
import CenteredTabs from "../tabs/centered-tabs";
import {TAB_ABOUT, TAB_CONTACT, TAB_CONTRIBUTIONS, TAB_NAMES} from "../tabs/tab-constants";
import About from "../about/component";
import Contributions from "../contributions/component";
import Contact from "../contact/component";
import Grid from "@material-ui/core/Grid";

class RootContainer extends Component {

    state = {
        currentTab: TAB_ABOUT
    };

    onTabSelected = (position) => {

        // Prevent reload
        if (this.state.currentTab === position) return;

        if (![TAB_ABOUT, TAB_CONTRIBUTIONS, TAB_CONTACT].includes(position)) {
            throw new Error("Invalid Tab Position: " + position)
        }

        this.setState({
            currentTab: position
        })
    };

    getTabComponent = (position) => {
        switch (position) {
            case TAB_ABOUT:
                return <About/>;

            case TAB_CONTRIBUTIONS:
                return <Contributions/>;

            case TAB_CONTACT:
                return <Contact/>;

            default:
                throw new Error("Invalid Tab Position: " + position)
        }
    };

    componentDidMount() {
        document.title = "Calvin Noronha - Android Developer"
    }

    render() {

        return (
            <div>
                <CenteredTabs
                    tabNames={TAB_NAMES}
                    currentTab={this.state.currentTab}
                    onTabSelected={this.onTabSelected}
                />
                <Grid container justify="center" alignItems="center">
                    {this.getTabComponent(this.state.currentTab)}
                </Grid>
            </div>
        );
    }
}

export default RootContainer;
