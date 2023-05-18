'use strict' ; 
let answers = [];


// ask for name 
let userName = prompt('Please enter your name');
answers.push(userName);


// ask for gender 
let userGender = prompt('Please enter your gender');
if (userGender == 'male' || userGender == 'female')
{
    answers.push(userGender);
}
else
 {
    answers.push('invalid');
}


// ask for age
let userAge = prompt('Please enter your age');
if (userAge <= 0) {
  alert('Invalid age!');

  answers.push('invalid');
} else {
    answers.push(userAge);
}





// ask for welcoming message
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

 

// ask yes/no question
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

