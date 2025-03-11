const themes = {
    warm: {
        "--bg-color": "#fdf7f5",
        "--primary-color": "#8b3d3d",
        "--secondary-color": "#ff8585",
        "--hover-color": "#ff6161",
        "--text-color": "#333",
        "--category-bg": "#ffe5e5",
        "--box-bg": "#faeaea",
        "--section-bg": "#faeaea",
        "--font-family": "'Poppins', sans-serif"
    },
    dark: {
        "--bg-color": "#222",
        "--primary-color": "#111",
        "--secondary-color": "#444",
        "--hover-color": "#666",
        "--text-color": "#eee",
        "--category-bg": "#333",
        "--box-bg": "#444",
        "--section-bg": "#333",
        "--font-family": "'Roboto', sans-serif"
    },
    pastel: {
        "--bg-color": "#f8f5ff",
        "--primary-color": "#6a5acd",
        "--secondary-color": "#ffb6c1",
        "--hover-color": "#ff69b4",
        "--text-color": "#222",
        "--category-bg": "#e6e6fa",
        "--box-bg": "#d8bfd8",
        "--section-bg": "#e6e6fa",
        "--font-family": "'Dancing Script', cursive"
    },
    minimalist: {
        "--bg-color": "#fff",
        "--primary-color": "#000",
        "--secondary-color": "#888",
        "--hover-color": "#555",
        "--text-color": "#222",
        "--category-bg": "#f7f7f7",
        "--box-bg": "#eee",
        "--section-bg": "#f7f7f7",
        "--font-family": "'Montserrat', sans-serif"
    },
    ocean: {
        "--bg-color": "#e0f7fa",
        "--primary-color": "#00796b",
        "--secondary-color": "#004d40",
        "--hover-color": "#26a69a",
        "--text-color": "#01579b",
        "--category-bg": "#80deea",
        "--box-bg": "#b2ebf2",
        "--section-bg": "#80deea",
        "--font-family": "'Lobster', cursive"
    },
    retro: {
        "--bg-color": "#f4e1c1",
        "--primary-color": "#a52a2a",
        "--secondary-color": "#ff8c00",
        "--hover-color": "#d2691e",
        "--text-color": "#4b0082",
        "--category-bg": "#ffdead",
        "--box-bg": "#f5deb3",
        "--section-bg": "#ffdead",
        "--font-family": "'Press Start 2P', cursive"
    },
    
    // ✨ Classic & Premium Themes ✨
    royalElegance: {
        "--bg-color": "#fdfaf6", // Soft ivory
        "--primary-color": "#5e3b2c", // Rich brown (luxury fabric feel)
        "--secondary-color": "#c69c72", // Champagne gold
        "--hover-color": "#b88a60", // Deeper gold
        "--text-color": "#3c2a1e", // Deep espresso
        "--category-bg": "#f8f0e5", // Light cream
        "--box-bg": "#f2e6d3", // Soft beige
        "--section-bg": "#f8f0e5",
        "--font-family": "'Playfair Display', serif"
    },
    modernMinimalist: {
        "--bg-color": "#fefefe", // Pure white
        "--primary-color": "#2c2c2c", // Matte black
        "--secondary-color": "#555", // Elegant grey
        "--hover-color": "#777", // Softer grey
        "--text-color": "#1a1a1a", // Deep black
        "--category-bg": "#f6f6f6", // Light grey
        "--box-bg": "#ececec", // Off-white
        "--section-bg": "#f6f6f6",
        "--font-family": "'Montserrat', sans-serif"
    },
    vintageLuxe: {
        "--bg-color": "#fbf3ef", // Powder blush
        "--primary-color": "#734f40", // Cocoa brown
        "--secondary-color": "#d9b08c", // Warm sand
        "--hover-color": "#b98a6f", // Muted rosewood
        "--text-color": "#51372b", // Deep brown
        "--category-bg": "#f3e0d1", // Creamy beige
        "--box-bg": "#e5ccbd", // Soft clay
        "--section-bg": "#f3e0d1",
        "--font-family": "'Cormorant Garamond', serif"
    },

    // 🌿 Earthy & Organic Themes 🌿
    artisanNatural: {
        "--bg-color": "#fdfaf4", // Cotton white
        "--primary-color": "#756c5b", // Olive brown
        "--secondary-color": "#b5a78b", // Linen beige
        "--hover-color": "#a08e72", // Soft caramel
        "--text-color": "#4b4237", // Earthy espresso
        "--category-bg": "#f6ede3", // Light wheat
        "--box-bg": "#ebddc6", // Soft hemp
        "--section-bg": "#f6ede3",
        "--font-family": "'Lora', serif"
    },
    herbalBreeze: {
        "--bg-color": "#f6f9f3", // Minty cream
        "--primary-color": "#436a2e", // Fresh green
        "--secondary-color": "#9cba7f", // Sage
        "--hover-color": "#85a066", // Moss green
        "--text-color": "#2a4421", // Forest green
        "--category-bg": "#e5f0dc", // Soft celery
        "--box-bg": "#d2e6b8", // Pale avocado
        "--section-bg": "#e5f0dc",
        "--font-family": "'Poppins', sans-serif"
    },

    // 💎 Luxury & High-Fashion Themes 💎
    coutureNoir: {
        "--bg-color": "#0f0f0f", // Deep black
        "--primary-color": "#b89172", // Rose gold
        "--secondary-color": "#ffd1a3", // Soft peach
        "--hover-color": "#e8b894", // Warmer peach
        "--text-color": "#f8f6f3", // Off-white
        "--category-bg": "#222", // Matte black
        "--box-bg": "#444", // Deep charcoal
        "--section-bg": "#222",
        "--font-family": "'Bodoni Moda', serif"
    },
    silkSerenity: {
        "--bg-color": "#fffaf5", // Warm off-white
        "--primary-color": "#d4a373", // Soft copper
        "--secondary-color": "#edc9a6", // Peach beige
        "--hover-color": "#d6a983", // Muted terracotta
        "--text-color": "#3d2b1f", // Dark chocolate
        "--category-bg": "#f5e5d1", // Soft blush
        "--box-bg": "#e8d5be", // Muted camel
        "--section-bg": "#f5e5d1",
        "--font-family": "'Libre Baskerville', serif"
    },

    // 🌸 Soft & Feminine Themes 🌸
    blushElegance: {
        "--bg-color": "#fff5f7", // Powder pink
        "--primary-color": "#af4d6c", // Plum rose
        "--secondary-color": "#f8a5b5", // Pastel blush
        "--hover-color": "#d88098", // Deeper blush
        "--text-color": "#662a45", // Wine berry
        "--category-bg": "#fde2e7", // Soft cotton candy
        "--box-bg": "#f5c4cf", // Warm blush
        "--section-bg": "#fde2e7",
        "--font-family": "'Dancing Script', cursive"
    },
    lavenderDream: {
        "--bg-color": "#fdf7ff", // Soft lavender
        "--primary-color": "#7e57c2", // Royal purple
        "--secondary-color": "#d1b3ff", // Light violet
        "--hover-color": "#b291e8", // Muted orchid
        "--text-color": "#422766", // Deep plum
        "--category-bg": "#ede2ff", // Faint lilac
        "--box-bg": "#cbb8ff", // Pastel violet
        "--section-bg": "#ede2ff",
        "--font-family": "'Josefin Sans', sans-serif"
    },

    // 🌊 Cool & Trendy Themes 🌊
    oceanBreeze: {
        "--bg-color": "#f0faff", // Icy blue
        "--primary-color": "#2b6777", // Deep teal
        "--secondary-color": "#52ab98", // Soft aqua
        "--hover-color": "#3e9287", // Muted teal
        "--text-color": "#1b3b4b", // Deep sea blue
        "--category-bg": "#d5f3f9", // Light aqua
        "--box-bg": "#bde4ef", // Pale sky blue
        "--section-bg": "#d5f3f9",
        "--font-family": "'Raleway', sans-serif"
    }
};

function changeTheme(themeName) {
    const theme = themes[themeName];
    Object.keys(theme).forEach(key => {
        document.documentElement.style.setProperty(key, theme[key]);
    });
}

// Example: Call `changeTheme('dark')` to apply dark mode
document.getElementById("theme-selector").addEventListener("change", function() {
    changeTheme(this.value);
});
