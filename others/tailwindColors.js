async function getStyleForClass(classname) {
    const element = document.createElement("div");
    element.style.display = "none";
    element.classList.add(classname);

    const appended = document.body.appendChild(element);
    await new Promise((resolve) => setTimeout(resolve, .1));
    const style = window.getComputedStyle(appended);
    const styleObj = JSON.parse(JSON.stringify(style));
    appended.remove();
    return styleObj;
}

const defaultColors = ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
const defaultColorGrades = {};

async function getTailwindColors() {
    let running = 0;
    let fails = [];
    for (const color of defaultColors) {
        for (var i = 1; i < 10; i++) {
            const run = async() => {
                const cssString = color + "-" + (i * 100);
                const res = await getStyleForClass("bg-" + cssString);
                if (!res.backgroundColor || res.backgroundColor == "" || res.backgroundColor == "rgba(0, 0, 0, 0)") fails.push(cssString);
                else defaultColorGrades[cssString] = res.backgroundColor;
                running--;
            }
            run();
            running++;
        }
    }

    while (running > 0) {
        await new Promise((resolve) => setTimeout(resolve, .1));
    }

    if (fails.length > 0) console.info("%c[TWC] Failed to Import " + fails.length + " Colors from Tailwind CSS:\n" + fails.join("\n"), 'color: yellow');

    return defaultColorGrades;
}

function appendStyle(stylestr) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = stylestr;
    document.getElementsByTagName('head')[0].appendChild(style);
}

(async() => {
    try {
        var finalCSSString = "";
        finalCSSString += " html {"
        const colors = await getTailwindColors();
        if (Object.keys(colors).length < (defaultColors.length * 2)) throw new Error("Tailwind is probably not loaded");

        for (const [key, value] of Object.entries(colors)) {
            finalCSSString += "\n      --twc-" + key + ": " + value + ";";
        }
        finalCSSString += "\n}\n\n";

        for (const color of defaultColors) {
            let value = "";
            for (var i = 1; i < 10; i++) {
                value += "\n      --twc-current-" + (i * 100) + ": var(--twc-" + color + "-" + (i * 100) + ");";
            }
            finalCSSString += ".twc-" + color + " {" + value + "\n}\n\n";
        }

        appendStyle(finalCSSString);
        console.log("%c[TWC] Imported " + Object.keys(colors).length + " Colors from Tailwind CSS successfully", 'color: lime');
    } catch (err) {
        console.log("%c[TWC] Failed to Import Tailwind CSS Colors:\n\nStack:\n" + err.stack + "\n\n\n%cIs Tailwind CSS loaded and this Browser supported?\nIf this problem persists on a supported environment please contact us!", 'color: red', 'color: yellow');
    }

})();