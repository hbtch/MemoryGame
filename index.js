function shuffle(a) {
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
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
  }

function compare(id1,id2){
    const f_id = document.getElementById(id1);
    const s_id = document.getElementById(id2);
    let flag = false;
    if (f_id.src == s_id.src){
        flag = true;
    }
    return flag;
}


function hideCard() {
    // console.log("СРАБОТАЛ");
    console.log("HC", click);
    if ((click.length == 2)&&((!openCards.includes(click[0]))&&(!openCards.includes(click[1])))){

        if(compare(click[0],click[1]) && (click[0] != click[1])){
            console.log("оставляем");
            const img1 = document.getElementById(click[0]);
            const img2 = document.getElementById(click[1]);
            img1.style.background = 'green';
            img2.style.background = 'green';
            openCards.push(click[0]);
            openCards.push(click[1]);
        }
        else{
            sleep(700)
            hideCardDown();
        }
        



        const counter = document.getElementById("counter");
        counter.innerHTML++;
        click = [];
    }
    return 1;
    }


function hideCardDown () {

        const def_img = "/assets/images/default-card.svg";
        console.log("for -- ", click);
        for(let i = click.length-1; i>=0; i--){
            img1 = document.getElementById(click[i]);
            img1.src = def_img;
        }
        return 1;
}

function myFunction (id) {
    //global_id = id;
    const img = document.getElementById(id);
    img.src = pack[id];
    
    click.push(id);

    console.log(click);
    console.log("MF - ", click.length);
    return 1;
}




let click = [];
let openCards = [];

const myFirstEvent = document.getElementById("plate");

// myFirstEvent.addEventListener('transitionend', function() {hideCard(click)}, true);
//myFirstEvent.addEventListener('click', function() {hideCard()}, false);


const start_pack = ["/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg", "/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg"];

const pack = shuffle(start_pack);

console.log(start_pack.length);

setInterval(hideCard,400);