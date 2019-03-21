import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class CenteredTabs extends React.Component {

    handleChange = (event, value) => {
        this.props.onTabSelected(value)
    };

    render() {
        return (
            <Paper>
                <Tabs
                    value={this.props.currentTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>

                    {this.props.tabNames.map(tabName => <Tab label={tabName}/>)}

                </Tabs>
            </Paper>
        );
    }
}

CenteredTabs.propTypes = {
    tabNames: PropTypes.array.isRequired,
    onTabSelected: PropTypes.func.isRequired,
    currentTab: PropTypes.number.isRequired
};

export default withStyles(styles)(CenteredTabs);
