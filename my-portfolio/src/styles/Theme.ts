const isDark = false;

export const theme = {
    colors: {
        primaryBg: isDark ? "#191919" : "#FFFFFF",
        accent: "#13B0F5",
        placeholderBg: isDark ? "#252527" : "#f4f4f4",

        //gradient: "-webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%)",
        gradient: "180deg, #E70FAA -2.06%, #13B0F5 100%",

        font: isDark ? "#CCCCCC" : "#42446E",
        secondFont: isDark ? "#A7A7A7" : "#666666",
        placeholderColor: "#495057",

        borderColor: "#4A4A4A",
    },

    media: {
        tablet: "screen and (max-width: 750px)",
        mobile: "screen and (max-width: 576px)",
        desktop: "screen and (min-width: 1220px)",
    },

    animations: {
        transition: ".2s ease-in-out",
    },
}

export const lightTheme = {
    colors: {
        primaryBg: "#FFFFFF",

        placeholderBg: "#f4f4f4",

        font: "#42446E",
        secondFont: "#666666",

        testColor: "red"
    },
};

export const darkTheme = {
    colors: {
        primaryBg: "#191919",

        placeholderBg: "#252527",

        font: "#CCCCCC",
        secondFont: "#A7A7A7",

        testColor: "green"
    },
};        
