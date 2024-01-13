// How to make a program that will choose random letters from my name
// First declare a variable of your name
nam='shadrickilunga';
// lets print it out
console.log('Our name is',nam)
//We need to know the length of the string nam
lennam=nam.length
// lets print it out
console.log('Our name',nam,'has',lennam,'letters')
//Use random to choose any number from 0 to 1 and multipy by lennam
rannam=Math.random()*lennam
// lets print it out
console.log('After we multipy our random number by the length of letters',rannam)
//use floor or trunc to remove all decimal places
remnam=Math.floor(rannam)
// lets print it out
console.log('After we remove all the decimal numbers',remnam)
//use charAt to choose any random letter
chonam=nam.charAt(remnam)
//lets print it out
console.log('Finally our random letter is',chonam)

