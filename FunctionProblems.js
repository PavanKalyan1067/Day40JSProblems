// program to check if the Number is palindrome or not

var number1 = prompt("Enter a number to check whether it's Palindrome or not -> ");
        var reversedNumber=0,remender,number2;
        number2 = number1;
        while(number1 != 0){
            remender = Math.floor(number1%10);
            reversedNumber = reversedNumber*10 + remender;
            number1 = Math.floor(number1 /= 10);
        }

        if(reversedNumber == number2){
            alert("Number is Palindromic !!!");
        }
        else{
            alert("Number is not Palindromic !!!");
        }

// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);

// Prime or not
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  const Number = prompt('Enter a string: ');