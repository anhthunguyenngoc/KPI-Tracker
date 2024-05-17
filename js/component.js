function oneTask() {
    const template = document.createElement("template");
    template.innerHTML = `
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="../css/app-style-guide.css" />
    <link rel="stylesheet" href="../css/lap_ke_hoach.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Paytone One:wght@400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto Flex:wght@400;600&display=swap"
    />
    </head>
    <ul class="list-task">
        <li class="color-task">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="#9CB2D7"/>
        </svg>
        </li>
        <li class="name-task">Phát triển hệ thống</li>
    </ul>

    `;
    return template.content.firstElementChild;
}