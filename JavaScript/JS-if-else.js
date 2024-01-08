let accessAllowed;
let age = prompt("How old are you?", "");
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
//Conditional Operator 
// let result = condition ? value1 : value2;
let accessAllowed2 = (age > 18) ? true : false;
// In the example above, you can avoid using the question mark operator because the
// comparison itself returns true/false :
let age2 = prompt("How old are you?", "");
let accessAllowed3 = age2 > 18;
age2 = (age2<=3) ? 'Hey cutie': (age2<15) ? 'Hey baby What\'s up': (age2<100) ? 'Hey there': 'OMG! Welcome Sir/Madam';
alert(age2)

