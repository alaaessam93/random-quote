
function random(){
    var x = Math.random();
    var y = Math.floor((x * 10) + 1);
    console.log(y);
    switch(y){
        case 1: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">Be yourself; everyone else is already taken.
        </h3>
        <h4 class="py-2"> Oscar Wilde
        </h4>`
        break;
        case 2: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
        </h3>
        <h4 class="py-2">Marilyn Monroe
        </h4>`
        break;
        case 3: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
        </h3>
        <h4 class="py-2">Albert Einstein
        </h4>`
        break;
        case 4: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.
        </h3>
        <h4 class="py-2">Bernard M. Baruch
        </h4>`
        break;
        case 5: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
        case 6: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
        case 7: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
        case 8: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
        case 9: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
        case 10: document.getElementById('quote').innerHTML = `
        <h3 class="py-3 ">“Be yourself; everyone else is already taken.”
        </h3>
        <h4 class="py-2">― Oscar Wilde
        </h4>`
        break;
    }
}