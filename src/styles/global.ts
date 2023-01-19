import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --Background-color: #F2F2F2;
        --Color-1: #fff;
        --Color-2: #656565;
        --Color-3: #D1DCE3;
        --Color-4: #3D75BB;
        --Color-5: #5D9CEC;
    }

    html, body, div, main, section, p, h1, h2, ul, li, form, input, span, i, b {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
    }

    body {
        background-color: var(--Background-color);
        width: 100%;
        height: 100vh;
        font-family: 'Source Sans Pro', sans-serif;
    }

    #root {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
    }
`;
