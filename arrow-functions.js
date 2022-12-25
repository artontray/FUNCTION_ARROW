/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){

    return a + b;
    }
    
    let sum = addTwoNumbers(3,5);
    console.log(sum);
// Arrow Function With Parameters

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines
const ReturnMultipleLines = () => (
    `
    <p>
    this is a multiple string example
    </p>
    `
    
    );
    console.log(ReturnMultipleLines());


let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);

let arr3 = [3, 4, 5];
let arr4 = [...arr3];
arr4.push(7);
console.log(arr4);


let obj1 = {a : 1, b : 2, c: 3};
let obj2 = {...obj1, d: 4}
let obj3 = {...obj1, b: 5}
console.log('First object : ', obj1);
console.log('sec object : ', obj2);
console.log('third object : ', obj3);


let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];


let subjects = [... students[0].subjects];
const update = (item, val) => [...item, val];
//subjects est un tableau , called by item donc item est un tableau , on prend les valeurs de item ...item et on ajoute
//la variable val juste apres.
let updatedSubjects = update(subjects, "Electronics");
console.log(updatedSubjects);
console.log(subjects);


const sumAll = (a, b, c) => a + b + c;
let sum3 = sumAll(1,2,3);
console.log(sum3);

let sum2 = sumAll(1,2,3,4,5,6);
console.log(sum2);


const sumRest = (a, b, c, ...rest) => {
let sum4 = a + b + c;
for (let i of rest){
sum4 += i
}
return sum4;


}
let sum5 = sumRest(1,2,3,4,5,6,7,8,9,10,11,12);
console.log(sum5);



let jobs = {
	mike: "designer",
	jill : "devl",
	alicia: "accounter",
};
let {mike,jill,alicia} = jobs;
console.log(mike,jill, alicia);


let languages = ["english","french","spanish","german","japanese"];
//let [first, second] = languages;
//console.log(first,second);


let [, , first, second] = languages;
console.log(first,second);

let fruits = ["apple","orange","banana","peach","cherry"];
let [favorite, secondFav, ...others] = fruits;

console.log(others);


let favoritefoods = {
    brian : "pizza",
    anna : "pasta",
    sarah : "Vegetarian",
    andrea: "steak"
    };
    
    let {brian, anna, ...rest} = favoritefoods;
    console.log(brian);
    console.log(anna);
    console.log(rest);

    let nums = [1,2,3,4,5,6];
    let evens = nums.filter(n => n % 2 === 0);
    console.log(evens); 


    let names = ['nikki','momo','ffff','addf','miki','mike'];
let mNames = names.filter(name => name.charAt(0)==='m');
console.log(mNames);


const nums0 = [0,1,2,3,4,5];
let sum0 = nums0.reduce((acc, curr) => acc + curr, 0);
console.log(sum0);

const multByTwo = function (num) {
    return num *2;
    }
    
    const mapResults = nums.map(num => num *2);
    console.log(mapResults);


    const students1 = [
        {
        id : 1,
        name : 'Markgreg',
        profession: 'mac',
        skills : 'Java'
        
        },
        {
        id : 2,
        name : 'Markfrg',
        profession: 'Dev',
        skills : 'python'
        
        },
        {
        id : 3,
        name : 'Markjg',
        profession: 'Dev',
        skills : 'html'
        
        },
        
        ];
        
        const studentsWithIds = students1.map(student['ages'] => [student.name,student.id]);
        console.log(studentsWithIds);

