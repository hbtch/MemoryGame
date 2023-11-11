// functions for shuffling deck
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

//сюда можено просто юрлпоставить
var start_pack = ["first","first1", "second", "second1", "third", "third1", "fourth", "fourth1", "fifth", "fifth1", "sixth", "sixth1", "seventh", "seventh1", "eighth", "eighth1"];


var cards = shuffle(start_pack);






console.log(cards );
