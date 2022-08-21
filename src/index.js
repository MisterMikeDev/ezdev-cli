console.clear();
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.greenBright(",------.       ,------.                   ,-----.,--.,--. "))
console.log(chalk.greenBright("|  .---',-----.|  .-.  \\  ,---.,--.  ,--.'  .--./|  |`--' "))
console.log(chalk.greenBright("|  `--, `-.  / |  |  \\  :| .-. :   `'  / |  |    |  |,--. "))
console.log(chalk.greenBright("|  `---. /  `-.|  '--'  /\\  --. \\     /  '  '--'\\\|  ||  | "))
console.log(chalk.greenBright("`------'`-----'`-------'  `----' `---'    `-----'`--'`--' "))

console.log(chalk.yellowBright.bold("⚠ NO SE RECOMIENDA EL USO DE ESTE CLI YA QUE SE ENCUENTRA EN DESARROLLO ⚠"))

let DATA_PROJECT = {
    name_project: "",
    type_project: "",
    options_project: []
}

inquirer.prompt(
    [
        {
            type: "input",
            name: "name_project",
            message: "¿Cual es el nombre del proyecto?",
            prefix: "💡",
            validate: (value) => {
                if (!value.length) {
                    return "Por favor ingrese un nombre para el proyecto.";
                } else if (value !== value.toLowerCase()) {
                    return "Por favor ingrese un nombre para el proyecto en minusculas.";
                } else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "type_project",
            message: "¿Que tipo de proyecto quieres empezar?",
            prefix: "🔥",
            choices: [
                "Pagina Web",
                "Bot para Discord",
                "API Rest"
            ],
        }
    ]
)
    .then((a) => selectOption(a))
    .catch((err) => console.log(err));

// Answers
function getAnswers(type, options) {
    DATA_PROJECT.type_project = type;
    options[Object.keys(options)[0]].forEach((item) => DATA_PROJECT.options_project.push(item));
    console.log(chalk.redBright("COMO BIEN SE TE AVISO ANTES EZDEV CLI AUN NO ESTA DISPONIBLE ASI QUE EL INTENTAR CREAR UN PROYECTO NO FUNCIONARA."))
    // console.log(DATA_PROJECT);
}

// Select Content
function selectOption(a) {
    a.name_project ? DATA_PROJECT.name_project = a.name_project : null;
    switch (a.type_project) {
        case "Pagina Web":
            displayWebSitePrompt()
            break;
        case "Bot para Discord":
            displayDiscordBotPrompt()
            break;
        case "API Rest":
            displayApiPrompt()
            break;
    }
    switch (a.type_web_site) {
        case "Vanilla":
            displayVanillaPrompt()
            break;
        case "Vite":
            displayVitePrompt()
            break;
    }
    switch (a.vite_options) {
        case "React":
            displayViteReactPrompt()
            break;
        case "Vue":
            displayViteVuePrompt()
            break;
    }
    switch (a.discord_bot_lang) {
        case "Discord Bot con JavaScript":
            displayDiscordBotJsPrompt()
            break;
        case "Discord Bot con TypeScript":
            displayDiscordBotTsPrompt()
            break;
    }
    switch (a.api) {
        case "Express":
            displayExpressPrompt()
            break;
    }
}

// Web Section
function displayWebSitePrompt() {
    inquirer.prompt({
        type: "list",
        name: "type_web_site",
        message: "¿Con que quieres hacer la pagina web?",
        prefix: "☢",
        choices: [
            "Vanilla",
            "Vite",
        ]
    }).then((a) => selectOption(a));
}
function displayVanillaPrompt() {
    inquirer.prompt({
        type: "checkbox",
        name: "vanilla_options",
        message: "¿Que cosas quieres que tenga?",
        prefix: "🌈",
        choices: [
            "TypeScript",
            "Boostrap"
        ]
    }).then((a) => getAnswers("website-vanilla", a));
}
function displayVitePrompt() {
    inquirer.prompt({
        type: "list",
        name: "vite_options",
        message: "¿Que frameworks quieres usar?",
        prefix: "⚜",
        choices: [
            "React",
            "Vue",
        ]
    }).then((a) => selectOption(a));
}
function displayViteReactPrompt() {
    inquirer.prompt({
        type: "checkbox",
        name: "vite_react_options",
        message: "¿Que quieres que tenga?",
        prefix: "🌀",
        choices: [
            "TypeScript",
            "Boostrap",
            "React Router Dom",
            "Sass",
            "TailWind"
        ]
    }).then((a) => getAnswers("website-vite-react", a));
}
function displayViteVuePrompt() {
    inquirer.prompt({
        type: "checkbox",
        name: "vite_vue_options",
        message: "¿Que quieres que tenga?",
        prefix: "💻",
        choices: [
            "TypeScript",
            "Boostrap",
            "Sass",
            "TailWind"
        ]
    }).then((a) => getAnswers("website-vite-vue", a));
}

// Discord Bot Section
function displayDiscordBotPrompt() {
    inquirer.prompt({
        type: "list",
        name: "discord_bot_lang",
        message: "¿Con que lenguaje quieres hacer el bot?",
        prefix: "🤖",
        choices: [
            "Discord Bot con JavaScript",
            "Discord Bot con TypeScript"
        ]
    }).then((a) => selectOption(a));
}
function displayDiscordBotJsPrompt() {
    console.log(chalk.magentaBright.bold("El bot posee las siguientes características:"));
    console.log(chalk.magenta("   · Soporte a SlashCommands.\n   · Presencia actualizable.\n   · Event Handler.\n   · Variables de entorno."));
    inquirer.prompt({
        type: "checkbox",
        name: "discord_bot_js_options",
        message: "¿Que quieres que tenga?",
        prefix: "🟨",
        choices: [
            "Conexión a MongoDB",
            "Api Rest",
            "Soporte a comandos con prefix. (Deprecated)"
        ]
    }).then((a) => getAnswers("discord-bot-javascript", a));
}
function displayDiscordBotTsPrompt() {
    console.log(chalk.magentaBright.bold("El bot posee las siguientes características:"));
    console.log(chalk.magenta("   · Estructura base con clases e interfaces.\n   · Soporte a SlashCommands.\n   · Presencia actualizable.\n   · Event Handler.\n   · Variables de entorno."));
    inquirer.prompt({
        type: "checkbox",
        name: "discord_bot_ts_options",
        message: "¿Que quieres que tenga?",
        prefix: "🟦",
        choices: [
            "Conexión a MongoDB",
            "Api Rest",
            "Soporte a comandos con prefix. (Deprecated)"
        ]
    }).then((a) => getAnswers("discord-bot-typescript", a));
}

// API Section
function displayApiPrompt() {
    inquirer.prompt({
        type: "list",
        name: "api",
        message: "¿Con libreria quieres hacer la API?",
        prefix: "📱",
        choices: [
            "Express"
        ]
    }).then((a) => selectOption(a));
}
function displayExpressPrompt() {
    inquirer.prompt({
        type: "checkbox",
        name: "express_options",
        message: "¿Que quieres que tenga?",
        prefix: "🖥",
        choices: [
            "TypeScript",
            "Conexión a MongoDB",
        ]
    }).then((a) => getAnswers("api-express", a));

}