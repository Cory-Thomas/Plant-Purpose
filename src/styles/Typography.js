import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    :root {
        --primary: #397D54;
        --secondary: #E4D5C7;
        --darktone : #186049;
        --background: #F8F6F5;
        --font-primary: #212429;
        --font-secondary: #495057;
        --font-white: #ffffff;
        --highlight: #73C088;
    }

    html {
        font-family: Helvetica, Arial, sans-serif;
        color: var(--font-primary);
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    a:visited {
        color: var(--font);
    }

    a:hover {
        color: var(--highlight);
    }
`;

export default Typography;
