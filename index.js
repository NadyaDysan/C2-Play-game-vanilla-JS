function view_seasons() {
    document.getElementById("play1").style.display = "flex";
};

function view_words() {
    document.getElementById("play2").style.display = "flex";
};
function view_riddle() {
    document.getElementById("play3").style.display = "flex";
};


function seasons_game() {
    let month = +prompt("Enter month number");
    let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    if (!month || month > 12 || month <= 0) {
        alert("You entered an incorrect value");
        console.log("You entered an incorrect value");
    } else if (month === 12) {
        alert('Season: Winter');
        console.log('Season: Winter');
    } else {
        alert('Season: ' + seasons[Math.floor(month / 3)]);
        console.log('Season: ' + seasons[Math.floor(month / 3)]);
    }
}

function words_game() {
    let arr = ['Apple', 'Pear', 'Melon', 'Grape', 'Peach', 'Orange', 'Mandarin'];
    let arrMixed = (arr.sort(() => Math.random() - 0.5));
    alert(`Remember the position of each fruit: \n ${arrMixed.join(', ')}`)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    while (true) {
        let answer1 = prompt('What was the value of the first element of the array?').toLowerCase();
        if (answer1 == null) {
            break;
        }
        let answer2 = prompt('What was the value of the last element of the array?').toLowerCase();
        if (answer1 == arrMixed[0] && answer2 == arrMixed[arrMixed.length - 1]) {
            alert('Congratulations, you guessed both elements!');
            break;
        }
        else if (answer1 == arrMixed[0] || answer2 == arrMixed[arrMixed.length - 1]) {
            alert('You were close to win!')
        }
        else {
            alert('You answered incorrectly');
            break;
        }

    }
}

function riddle_game() {
    const question = 'There is an oak tree, there are twelve nests in it, in each nest there are four eggs, in each egg there are seven chickens';
    const answer = 'year';
    let guessCount = 0;
    do {
        let userAnswer = prompt(question).toLowerCase();
        guessCount++
        if (userAnswer === answer) {
            alert('Correctly!');
            break;
        }
        else if (userAnswer !== answer && guessCount === 1) {
            alert('Hint: look at the calendar');
            continue;
        }
        else if (userAnswer !== answer && guessCount === 2) {
            alert('Hint: Starts January 1st');
            continue;
        }
        else {
            alert('Sorry, you lost');
            break;
        }
    } while (guessCount < 3 || userAnswer !== answer)
}

