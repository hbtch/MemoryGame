function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function sleep(ms) {
    var start = new Date().getTime(),
        expire = start + ms;
    while (new Date().getTime() < expire) {}
    return 1;
}

function compare(id1, id2) {
    let flag = false;

    if (document.getElementById(id1).src == document.getElementById(id2).src) {
        flag = true;
    }

    return flag;
}

function checkWin() {
    // for finish game on 2 opened cards change down 16 to 2 or 4
    if (openCards.length == 16) {
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.congratulations').style.display = 'flex';
    }
    return 1;
}

function addScore(tabel1, tabel2) {
    let tabels = [tabel1, tabel2];
    for (let i = 1; i >= 0; i--) {
        let counter = document.getElementById(tabels[i]);
        counter.innerHTML++;
    }
    return 1;
}

function game() {

    checkWin();

    if ((click.length == 2) && ((!openCards.includes(click[0])) && (!openCards.includes(click[1])))) {

        if (compare(click[0], click[1]) && (click[0] != click[1])) {

            for (let i = click.length - 1; i >= 0; i--) {
                img1 = document.getElementById(click[i]);
                img1.style.background = 'green';
                openCards.push(click[i]);
            }
        } else {

            hideCardDown();
        }
        addScore("counter", "counter_grad_steps")
        click = [];
    }
    return 1;
}

function hideCardDown() {
    sleep(700);
    for (let i = click.length - 1; i >= 0; i--) {
        img1 = document.getElementById(click[i]);
        img1.src = "/assets/images/default-card.svg";
    }
    return 1;
}

function webClick(id) {
    const img = document.getElementById(id);
    img.src = pack[id];

    if (!openCards.includes(id)) {
        click.push(id);
    }

    return 1;
}

let click = [];
let openCards = [];

const start_pack = ["/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg", "/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg"];

const pack = shuffleArray(start_pack);

setInterval(game, 400);