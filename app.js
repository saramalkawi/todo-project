'use strict' ; 



// ask for name 
let userName = prompt('Please enter your name');
console.log(userName);


// ask for gender 
let userGender = prompt('Please enter your gender');
if (userGender == 'male' || userGender == 'female')
{
    console.log(userGender);
}
else
 {
    console.log('invalid');
}


// ask for age
let userAge = prompt('Please enter your age');
if (userAge <= 0) {
  alert('Invalid age!');

  console.log('invalid');
} else {
    console.log(userAge);
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

let answers = [];
let arr = ['yes','no','invalid'];
function askQuestion(question) {
   
    let answer = prompt(question);
    
    

    
      if (answer == arr[0]) {
        answers.push(answer);
      
    } 
    
    else if(answer == arr[1]) {
        answers.push(answer);
        
    }
    
    else {
         answers.push('invalid');
    
    }
    
}


askQuestion('Do you like reading books? (Yes/No)');
askQuestion('Do you like pasta? (Yes/No)');
askQuestion('Have you traveled befor? (Yes/No)');

console.log(answers);

