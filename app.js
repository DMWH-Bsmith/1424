const rollsLeftEl = document.querySelector('.rollsLeft');
const rollBtn = document.querySelector('.rollBtn');
const boardRoll = document.querySelector('.boardRolls');
const boardDiv = document.querySelector('.rollBoard');
const scoreBoard = document.querySelector('.scoreBoard');

const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.querySelector('.submitBtn');
const refreshBtn = document.getElementById('refreshBtn');
const totalPointsEl = document.querySelector('.totalPoints');


refreshBtn.hidden = true;

let diceArray = [];
let dice2Array = [];
let die = 7;

// let DieDiv;




function submitDice() {
    if (dice2Array.length < 6){
        console.log('Roll all the dice my boy');
    } else {
    console.log('Dice submitted');
    console.log(dice2Array.indexOf('1'))
    console.log(dice2Array.indexOf('4'))
        if (dice2Array.indexOf('1') >= 0 && dice2Array.indexOf('4') >= 0){
            console.log('Valid score');
            dice2Array.splice(dice2Array.indexOf('1'), 1);
            dice2Array.splice(dice2Array.indexOf('4'), 1);
            console.log(dice2Array);
            let points = dice2Array.map(str => +str);
            let score = points.reduce((acc, num) => acc + num, 0);
            totalPointsEl.innerHTML = 'You scored: ' + score + ' points!!!!';

        } else {
            console.log('You did not bank a 4 AND a 1... no points...');
        }

    }
    


    
}

// submitBtn.hidden = true;


function rollDice() {
    rollBtn.hidden = true;
    for (let i = 1; i < die; i++) {
        const ranNumber = Math.floor(Math.random() * 6) + 1;
        const DieDiv = document.createElement("div");
        // DieDiv.innerHTML = `/images/dice${ranNumber}.png`;
        DieDiv.innerHTML = ranNumber
        diceArray.push(DieDiv.textContent);
        DieDiv.setAttribute("class", `dice`);
        DieDiv.setAttribute("id", `${i}`);
        // // DieDiv.textContent = `/images/dice${ranNumber}.png`;
        // const img = document.createElement("img");
        // img.src = `/images/dice${ranNumber}.png`;
        // // DieDiv.appendChild(img);
        boardDiv.appendChild(DieDiv);
        // console.log('----------------')
        // console.log(diceArray.length);
        // console.log(rollsLeftEl.innerHTML);
        // console.log('----------------');

        
        
        if (diceArray.length == rollsLeftEl.innerHTML){
            console.log('Pick at least one die a turn');
            nextBtn.hidden = true;
        }

        
        DieDiv.addEventListener('dblclick', (e) => {
            nextBtn.hidden = false;
            const activeDieId = (event.target.id);
            const selectedDie = (event.target.textContent);
            const element = document.getElementById(`${activeDieId}`);
            element.remove();

            console.log(selectedDie);
            dice2Array.push(selectedDie);
            const scoreDiv = document.createElement("div");
            scoreDiv.innerHTML = selectedDie;
            scoreDiv.setAttribute("class", `dice`);
                // need to remove el from dice2Array here...i think
            scoreBoard.appendChild(scoreDiv);
            const indexRem = (diceArray.indexOf(selectedDie));
            diceArray.splice(indexRem, 1);
            // console.log(diceArray);
            rollsLeftEl.innerHTML = diceArray.length;
            
            die = diceArray.length + 1;
            nextBtn.addEventListener('click', () => {
                boardDiv.replaceChildren ();
                diceArray = [];
                rollDice();                
            });

            if(rollsLeftEl.innerHTML < 1){
                rollsLeftEl.innerHTML = '';
                submitDice();
                refreshBtn.hidden = false;
                submitBtn.hidden = true;
                nextBtn.hidden = true;
            }
        });

    }
        // submitBtn.addEventListener('click', submitDice);    
}

    
console.log(diceArray);

// function randomRoll() {
//     let diceRoll = Math.floor(Math.random() * 6) + 1
//     console.log(diceRoll)
//      = diceRoll;
// }

rollBtn.addEventListener('click', rollDice);


