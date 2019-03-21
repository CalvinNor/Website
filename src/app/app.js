import React, {Component} from 'react';
import RootContainer from "../root-container/component";
import theme from '../core/app-theme'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <RootContainer/>
            </MuiThemeProvider>
        );
    }
}

export default App;
