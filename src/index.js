import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import themeObj from './theme/theme.js'

render(
<ThemeProvider theme={themeObj}>
    <App /> 
</ThemeProvider>,
document.getElementById("root")
);
