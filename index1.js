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
    return 1;
  }

function hideCard() {
    // console.log("СРАБОТАЛ");
    console.log("HC", click);
    if (click.length == 2){
        if(click[0] != click[1]){
        
        // console.log("СТИРАЕМ");
        sleep(700);
        hideCardDown();
        }else{
            click.pop();
            click.pop();
        }
        const counter = document.getElementById("counter");
        counter.innerHTML++;
    }
    return 1;
    }


function hideCardDown () {
        console.log(click);

        let img1 = document.getElementById(click[1]);
        let img2 = document.getElementById(click[0]);
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        click = [];
        return 1;
}

function myFunction (id) {

    // const img = document.getElementById(id);
    
    // img.style.opacity = (img.style.opacity - 1)*-1;
    const img = document.getElementById(id);
    img.src = pack[id];
    click.push(id);

    
    // console.log("MF - ", click.length);
    return 1;
}

// const counter_main = document.getElementById("counter");
// counter_main.addEventListener("change", myScript);



const myFirstEvent = document.getElementById("plate");

// myFirstEvent.addEventListener('transitionend', function() {hideCard()}, true);
// myFirstEvent.addEventListener('click', function() {hideCard()}, false);
let click = [];

const start_pack = ["/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg", "/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg"];

const pack = shuffle(start_pack);

// set random img to start
let img_first;
for(let i = 15; i>=0; i--){
    img_first = document.getElementById(i);
    img_first.src = pack [i];
    
}

setInterval(hideCard,200);