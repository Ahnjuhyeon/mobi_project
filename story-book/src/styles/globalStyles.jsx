import { createGlobalStyle } from "styled-components";
import { FONT_SIZE } from "./fontSize";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;  
        font-weight: 200;
        font-size:${FONT_SIZE.sm};

        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    html {
        font-size: 62.5%;

        @media screen and (max-width:820px) {
            font-size: 50%;
        }
    }

    ul, li {
        list-style: none;
    }

    h1 {
        font-size:${FONT_SIZE.xl};
    }

    h2 {
        font-size:${FONT_SIZE.bg};
        font-weight: bold;
    }
    h3 {
        font-size:${FONT_SIZE.md};
        font-weight: bold;
    }

    h4 {
        font-size:${FONT_SIZE.sm};
        font-weight: bold;
    }

    button {
        border: none;
        outline: none;
    }

    input {
        outline: none;
    }

    textarea {
        font-size:${FONT_SIZE.sm};
    }

    p, div, span {
        font-size:${FONT_SIZE.sm};
    }
`;

// export const decorators = [
// 	withThemeFromJSXProvider({
// 		GlobalStyles,
// 	}),
// ]
