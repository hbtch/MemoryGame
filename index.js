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




function myFunction (id) {
    const test_img = "/assets/images/default-cardLight.svg";
    const img = document.getElementById(id);
    img.src = test_img;
    return 1;

}


const start_pack = ["assets/style/bicycle.svg", "assets/style/flight-mode.svg", "assets/style/happy-house.svg", "assets/style/paper-ship.svg", "assets/style/rabbit.svg", "assets/style/rubber-duck.svg", "assets/style/teddy-bear.svg", "assets/style/truck.svg", "assets/style/bicycle.svg", "assets/style/flight-mode.svg", "assets/style/happy-house.svg", "assets/style/paper-ship.svg", "assets/style/rabbit.svg", "assets/style/rubber-duck.svg", "assets/style/teddy-bear.svg", "assets/style/truck.svg"];

console.log(start_pack.length);
