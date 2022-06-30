// switch
const exprestion = 'Paypal';



// switch (exprestion) {
//     case 'Paypasl':
//         console.log('Windows are the best system to use')
//         break;    // not adding a break is not good
//     default:
//         console.log('Sorry , we are out of funds')
//     case 'PayStack':
//         console.log('it about payment')
//         break;
//     // default:
//     //     console.log('Sorry , we are out of funds')

// }
// var Animal = 'Giraffe';
// switch (Animal) {
//   case 'Cow':
//     case 'Giraffe':
//         console.log('Giraffe is here')
//         break;
//   case 'Dog':
//   case 'Pig':
//     console.log('This animal is not extinct.');
//     break;
//   case 'Dinosaur':
//   default:
//     console.log('This animal is extinct.');
// }

// let foo = 1;
// let output = 'Output is  ';
// let num = 1;

// switch (foo) {
//     case 1:
//         num += 1
//         console.log(`the nnumber is ${num}`)
//         break;
    
// }

const acticon = 'say_Hello';
switch (acticon) {
    case 'say_Hello': {
        let messages = 'hello';
        console.log(messages)
        break;
    }
    case 'say': {
        let messages = 'hello is here' ;
        console.log(messages)
        break;
    }
    
    default:
        console.log('nothing works ')
}

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 5:
        console.log('1');
        break;
}


// if (condition) {
//     statement1
//  } else {
//     statement2
//  }
 
// if (condition1)
//   statement1
// else if (condition2)
//   statement2
// else if (condition3)
//   statement3
// ...
// else
//   statementN
// if (x > 50) {
//     /* do something */
//   } else if (x > 5) {
//     /* do something */
//   } else {
//     /* do something */
//   }
  

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }