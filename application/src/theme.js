const palette = {
    primary: {
        main: '#7685D6',
        dark: '#4e61ca',
        light: '#9da7e2',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#C0DBEA',
        dark: '#9fc9df',
        light: '#d9e9f2',
        contrastText: '#ffffff',
    },
    grey: {
        main: '#81929B',
        dark: '#70848f'
    },
    white: {
        main: '#ffffff',
        dark: 'e6e6e6',
        contrastText: 'black',
    },
    error: {
        main: '#ff8080',
        dark: '#ff4d4d',
        light: '#ffb3b3',
        contrastText: '#ffffff',
    },
    button: {
        primary: '#7685D6',
        secondary: '#ffffff'
    },
    link: {
        primary: '#162FBA'
    },
    conclusion: {
        case1: {
            bg: '#FFE9E9',
        },
        case2: {
            bg: '#FFEED6',
        },
        case3: {
            bg:'#D6E8DB',
        },

    },
}

const typography =  {
    fontFamily: 'Inter',
    fontWeightRegular: 400,
    h1: {
        fontFamily: 'Inter',
        fontSize: '70px',
    },
    h2: {
        fontFamily: 'Inter',
        fontSize: '60px',
    },
    h3: {
        fontFamily: 'Inter',
        fontSize: '1.6em',
    },
    h4: {
        fontFamily: 'Inter',
        fontSize: '1.3em',
    },
    subtitle: {
        fontFamily: 'Inter',
        fontSize: '1.1rem',
        fontWeight: '50px',
    },
    body: {
        fontFamily: 'Inter',
        fontSize: '1.1rem',
        fontWeight: 400,
    },
}

module.exports = {palette, typography}