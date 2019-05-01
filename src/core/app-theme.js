import 'typeface-roboto'
import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4CAF50" // Material Green
        }
    },

    typography: {
        useNextVariants: true
    }
});

export default theme
