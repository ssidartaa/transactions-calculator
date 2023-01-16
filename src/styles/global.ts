import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --Background-color: rgb(230, 230, 230);
        --Color-1: #fff;
        --Color-2: #26292b;
        --Color-3: #004daa;
    }

html, body, div, main, section, p, h1, h2, ul, li, form {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
    text-decoration: none;
}

body {
	background-color: var(--Background-color);
}
`;
