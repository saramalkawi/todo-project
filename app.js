'use strict' ; 
let userName = prompt('Please enter your name');
console.log(userName);
let userGender = prompt('Please enter your gender');
if (userGender == 'male' || userGender == 'female')
{
    console.log(userGender);
}
else
 {
    console.log('invalid');
}



let userAge = prompt('Please enter your age');
if (userAge > 0 && userAge < 90 ){

    console.log(userAge);
}

else 
{
    alert ('invalid');
    console.log('invalid');
}
   






function welcomingMessage() {
    let text = "Do You want to skip the welcoming message.\n Press a button!\nEither OK (yes) or Cancel (No).";
    
    if (window.confirm(text) == false) 
    {
        if ( userGender == 'male'){
            alert ('Hi Mr '+ userName );}

       else if ( userGender == 'female'){
       alert ('Hi Ms '+ userName );}

      else{
       alert('Hi '+ userName );
      }
    }
    else {}
}
welcomingMessage(); 

let answers = []; 

function askQuestion(question) {
    let answer = prompt(question);
    if (answer === null || answer.trim() === '') {
        answer = 'invalid';
    }
    answers.push(answer);
}

askQuestion('Do you like reading books? (Yes/No)');
askQuestion('Do you like pasta? (Yes/No)');
askQuestion('Have you traveled befor? (Yes/No)');


console.log(answers);

