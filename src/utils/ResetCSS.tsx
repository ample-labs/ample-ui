import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // Fix font resize problem in iOS
        -webkit-text-size-adjust: 100%;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        line-height: 1;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input, button {
        appearance: none;
        border: initial;
        background-color: initial;
        font: inherit;
    }
    hr {
        margin: 0;
    }
    :focus {
        outline: 0;
    }
`;

export default ResetCSS;
