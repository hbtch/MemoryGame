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


let click = [];


function hideCard (array) {
    sleep(1000)
    for(let i = 1; i >= 0; i--){ 
        const def_img = "/assets/images/default-card.svg";
        const img = document.getElementById(array[i]);
        img.src = def_img;
    }
}


function hideCard(click_func) {
    if (click_func.length == 2){
        console.log("СТИРАЕМ");
        click = [];
    }
}


function myFunction (id) {
    const img = document.getElementById(id);
    img.src = pack[id];
    click.push(id);
    if (click.length == 2) {
        const counter = document.getElementById("counter");
        counter.innerHTML++;

      }
    console.log(click);
    return 1;
}

// const counter_main = document.getElementById("counter");
// counter_main.addEventListener("change", myScript);


const myFirstEvent = document.getElementById("plate");
myFirstEvent.addEventListener('click', function() {hideCard(click)});



const start_pack = ["/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg", "/assets/images/bicycle.svg", "/assets/images/flight-mode.svg", "/assets/images/happy-house.svg", "/assets/images/paper-ship.svg", "/assets/images/rabbit.svg", "/assets/images/rubber-duck.svg", "/assets/images/teddy-bear.svg", "/assets/images/truck.svg"];

const pack = shuffle(start_pack);

console.log(start_pack.length);


