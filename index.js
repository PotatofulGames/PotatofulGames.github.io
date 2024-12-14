// index.js //
// Potatoful Games Website //

let gamesNavMenu = document.getElementById("GamesNavMenu");
let linksNavMenu = document.getElementById("LinksNavMenu");

let gamesNavMenuVisible = false;
let linksNavMenuVisible = false;

function toggleGamesNavMenu(toggleOn = true) {
    if (toggleOn && !gamesNavMenuVisible) {
        gamesNavMenu.style.display = "flex";
        gamesNavMenuVisible = true;
    }

    else if (!toggleOn) {
        gamesNavMenu.style.display = "none";
        gamesNavMenuVisible = false;
    }
}

function toggleLinksNavMenu(toggleOn = true) {
    if (toggleOn && !linksNavMenuVisible) {
        linksNavMenu.style.display = "flex";
        linksNavMenuVisible = true;
    }

    else if (!toggleOn) {
        linksNavMenu.style.display = "none";
        linksNavMenuVisible = false;
    }
}


let mobileNavMenu = document.getElementsByClassName("MobileNavMenu")[0];
let mobileNavMenuVisible = false;

let mobileGamesNavMenu = document.getElementById("MobileGamesNavMenu");
let mobileLinksNavMenu = document.getElementById("MobileLinksNavMenu");

let mobileGamesNavMenuVisible = false;
let mobileLinksNavMenuVisible = false;

function toggleMobileNavMenu(toggleOn = !mobileNavMenuVisible) {
    if (toggleOn && !mobileNavMenuVisible) {
        mobileNavMenu.style.display = "block";
        mobileNavMenuVisible = true;
    }

    else if (!toggleOn) {
        mobileNavMenu.style.display = "none";
        mobileNavMenuVisible = false;
    }
}

function toggleMobileGamesNavMenu(toggleOn = !mobileGamesNavMenuVisible) {
    if (toggleOn && !mobileGamesNavMenuVisible) {
        mobileGamesNavMenu.style.display = "flex";
        mobileGamesNavMenuVisible = true;
    }

    else if (!toggleOn) {
        mobileGamesNavMenu.style.display = "none";
        mobileGamesNavMenuVisible = false;
    }
}

function toggleMobileLinksNavMenu(toggleOn = !mobileLinksNavMenuVisible) {
    if (toggleOn && !mobileLinksNavMenuVisible) {
        mobileLinksNavMenu.style.display = "flex";
        mobileLinksNavMenuVisible = true;
    }

    else if (!toggleOn) {
        mobileLinksNavMenu.style.display = "none";
        mobileLinksNavMenuVisible = false;
    }
}


let gameEmbed = document.getElementById("HoopsAheadItchIoEmbed");

if (gameEmbed == null) {
    gameEmbed = document.getElementById("ScaleSearcherItchIoEmbed");
}

if (gameEmbed != null) {
    window.onresize = () => {
        if (window.innerWidth <= 635) {
            gameEmbed.width = 276;
        }

        else {
            gameEmbed.width = 552;
        }
    };

    window.onresize();
}
