const themes = {
    candyfloss: {
        "--body-bg": "#c0eff1",
        "--text-color": "#000609",

        "--header-bg": "linear-gradient(to bottom right, #cffffe, #9af5f4, #059ced)",
        "--header-text": "#ffffff",
        
        "--hero-bg-url": "url('../images/bg/hero-image-1.jpg')",

        "--btn-color": "#5ab4f0",
        "--btn-text": "#000609",
        "--btn-hover": "#199bf2",

        "--section-bg": "#ffffff",
        "--section-h2-color": "#000609",

        "--card-bg": "#fdcce4",
        "--card-title-color": "#000609",
        "--card-content-color": "#000609",

        "--contact-a-color": "#000609",
        "--contact-a-hover-color": "#097bac",

        "--footer-bg": "#fdcce4",
    },
    pastel: {
        "--body-bg": "#f8f5ff",
        "--text-color": "#222",
    
        "--header-bg": "#6a5acd",
        "--header-text": "#ffffff",
        
        "--hero-bg-url": "url('../images/bg/hero-image-2.jpg')",
    
        "--btn-color": "#ffb6c1",
        "--btn-text": "#222",
        "--btn-hover": "#ff69b4",
    
        "--section-bg": "#e6e6fa",
        "--section-h2-color": "#222",
    
        "--card-bg": "#d8bfd8",
        "--card-title-color": "#222",
        "--card-content-color": "#222",
    
        "--contact-a-color": "#222",
        "--contact-a-hover-color": "#ff69b4",
    
        "--footer-bg": "#6a5acd"
    },
    coutureNoir: {
        "--body-bg": "#0f0f0f",
        "--text-color": "#f8f6f3",
    
        "--header-bg": "#1c1c1c",
        "--header-text": "#d4af37",
        
        "--hero-bg-url": "url('../images/bg/hero-image-3.jpg')",
    
        "--btn-color": "#d4af37",
        "--btn-text": "#f8f6f3",
        "--btn-hover": "#d4af37",
    
        "--section-bg": "#222",
        "--section-h2-color": "#d4af37",
    
        "--card-bg": "#444",
        "--card-title-color": "#d4af37",
        "--card-content-color": "#f8f6f3",
    
        "--contact-a-color": "#f8f6f3",
        "--contact-a-hover-color": "#d4af37",
    
        "--footer-bg": "#d4af37"
    },
    lavenderDream: {
        "--body-bg": "#fdf7ff",
        "--text-color": "#422766",
    
        "--header-bg": "#7e57c2",
        "--header-text": "#ffffff",
        
        "--hero-bg-url": "url('../images/bg/hero-image-4.jpg')",
    
        "--btn-color": "#d1b3ff",
        "--btn-text": "#422766",
        "--btn-hover": "#b291e8",
    
        "--section-bg": "#ede2ff",
        "--section-h2-color": "#422766",
    
        "--card-bg": "#cbb8ff",
        "--card-title-color": "#422766",
        "--card-content-color": "#422766",
    
        "--contact-a-color": "#422766",
        "--contact-a-hover-color": "#b291e8",
    
        "--footer-bg": "#7e57c2"
    },
};

const fonts = {
    poppins: {
        "--font-family": "'Poppins'"
    },
    dancingScript: {
        "--font-family": "'Dancing Script'"
    },
    bodoniModa: {
        "--font-family": "'Bodoni Moda'"
    },
    josefinSans: {
        "--font-family": "'Josefin Sans'"
    },
}

function applyStyles(styleObj, styleName) {
    const selectedStyle = styleObj[styleName];
    if (!selectedStyle) {
        console.warn(`Style "${styleName}" not found.`);
        return;
    }

    Object.keys(selectedStyle).forEach(key => {
        document.documentElement.style.setProperty(key, selectedStyle[key]);
    });
}

document.getElementById("theme-selector").addEventListener("change", function() {
    applyStyles(themes, this.value);
});
document.getElementById("font-selector").addEventListener("change", function() {
    applyStyles(fonts, this.value);
});
