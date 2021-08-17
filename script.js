const cds = document.querySelectorAll('.cd');
const cd3 = document.getElementById('cd3');

const users = document.querySelectorAll('.user');
// console.log('users length: '+users.length);

// var current_user = Math.floor(Math.random() * 4);
var current_user = 0;

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const btn = document.getElementById('start-btn');

const midd = document.querySelector('.midd');

const card_img = ['image/diamond.png', 'image/gold.png', 'image/platinum.png', 'image/silver.png'];

// var dev_img=[''];

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;

for ( var i=0; i < cds.length; i++) {

    const random_img = Math.floor(Math.random() * 4);
    switch(random_img){
        case 0: 
            num1++;
            if(num1 > 4) {
                i--;
            } else {
                const img = document.createElement('img');
                img.classList.add('random_img');
                img.src = `${card_img[random_img]}`;
                cds[i].appendChild(img);

                // dev_img = document.createElement('dev');
                // dev_img.classList.add('fill');
                // dev_img.draggable = 'true';
                // // dev_img.style.width = '100%';
                // // dev_img.style.height = '100%';
                // // dev_img.style.backgroundImage = "url('image/silver.png')";
                // const img = document.createElement('img');
                // dev_img.appendChild(img);
                // img.src = `${card_img[random_img]}`;
                // cds[i].appendChild(dev_img);
            }
            break;
        case 1: 
            num2++;
            if (num2 > 4) {
                i--;
            }else {
                const img = document.createElement('img');
                img.classList.add('random_img');
                img.src = `${card_img[random_img]}`;
                cds[i].appendChild(img);
            }
            break;
            case 2: 
            num3++;
            if(num3 > 4) {
                i--;
            }
            else {
                const img = document.createElement('img');
                img.classList.add('random_img');
                img.src = `${card_img[random_img]}`;
                cds[i].appendChild(img);
            }
            break;
        case 3: 
            num4++;
            if (num4 > 4) {
                i--;
            }
            else {
                const img = document.createElement('img');
                img.classList.add('random_img');
                img.src = `${card_img[random_img]}`;
                cds[i].appendChild(img);
            }
            break;
        default:
            console.log("Enjoye the game...");
    }
}

var current_card_id;

function passCard (id) {
    if (id > 0 && id < 5 || id == 70){
        current_card_id = id;
        var recivedDive = document.getElementById(id);
        recivedDive.id = '71';
        // cd5.style.backgroundColor = 'rgb(194, 194, 238)';
        // cd5.style.width = '25%';
        // cd5.style.height = '85%';
        // cd5.style.borderRadius = '1rem';
        // cd5.style.border = 'tomato';
        // cd5.style.marginLeft = '3px';
        // cd5.style.cursor = 'pointer';
        // // myDiv.addEventListener('click', sendCard)
        users[2].appendChild(recivedDive);
        current_user = 2;
        // randomUserFunction();

        console.log("User Red Trun... >>> Current card id: "+current_card_id);
    } else if (id > 4 && id < 9 || id == 73) {
        current_card_id = id;
        var recivedDive = document.getElementById(id);
        recivedDive.id = '70';
        users[0].appendChild(recivedDive);
        current_user = 0;
        // randomUserFunction();

        console.log("User Yellow Trun... >>> Current card id: "+current_card_id);
    } else if (id > 8 && id < 13 || id == 71) {
        current_card_id = id;
        var recivedDive = document.getElementById(id);
        recivedDive.id = '72';
        users[3].appendChild(recivedDive);
        current_user = 3;
        // randomUserFunction();

        console.log("User Green Trun...>>> Current card id: "+current_card_id);
    } else if ( id > 12 && id < 17 || id == 72) {
        current_card_id = id;
        var recivedDive = document.getElementById(id);
        recivedDive.id = '73';
        users[1].appendChild(recivedDive);
        current_user = 1;
        // randomUserFunction();

        console.log("User Blue Trun...>>> Current card id: "+current_card_id);
    } else {
        console.log('Something going wrong...');
    }
}

var same_card = 1;
function randomUserFunction (){
    // var current_card;
    var card_length = users[current_user].getElementsByClassName('cd').length;

    // users.forEach(cds.forEach(cd.getElementsByClassName(1).equal()))
    // for (var i = 0;  i < card_length; i++) {
    //     if (users[current_user].getElementsByClassName('cd'[0]).getelementByTag(img) == users[current_user].getElementsByClassName('cd'[i]).getelementByTag(img)) {
    //         same_card++;
    //     } else if (same_card == 4) {
    //         console.log('User ' + current_user + ' is winner! & Same cards are '+same_card)
    //     }
        console.log('Random user function is called...');
    // }
}

var counter_card = 0;
function myDefaultFunction () {
    var card_length = users[current_user].getElementsByClassName('cd').length;
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j <= card_length; j++) {
            // var card1 = users[i].getElementsByClassName('cd'[i]);
            // var card2 = users[i].getElementsByClassName('cd'[j]);
            // var img_src1 = card1.document.getElementsByClassName('random_img')[i].id;
            // var img_src2 = card2.document.getElementsByClassName('random_img')[j].id;
            if(users[i].getElementsByClassName('cd'[i]) == users[i].getElementsByClassName('cd'[j])) {
                counter_card++;
            } else if (counter_card == 4) {
                console.log('User ' + i + 'is winner...');
            } else {
                console.log('Next user turn');
            }
        }
    }
}

// cds[3].addEventListener('onClick', passCard(this.id));

function eventHandler () {
    switch (current_user) {
        case 0:
            console.log ('Red User Trun...');
            for (var i = 4; i < cds.length; i++){
                cds[i].removeEventListener();
            }
            break;
    
        default:
            break;
    }
}