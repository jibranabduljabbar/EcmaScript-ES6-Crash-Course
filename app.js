// EcmaScript6 = 2015;

// Varianles var,let,const!

// Function Kia Ha Bhai Ye As a Global Scop Ha Yani Hum Isse Bhar Use Nhi Kar Sakte OK!

function Example(){
    namef = 'Jibran';  // Function Ke Culri braket Ke Aander Jitni Bhi Space Ha Wo Kehlati Ha Function Scop Yani Hum Isse Function Ke Bhar Get Nhi Kar Sakte OK! Function Ke Aander Ki Space Hum Function Ke Bhar Acces Nhi Kar sakte Han Hum Function Ke Bhar Ki Space Hum Function Ke Aander Access Kar Sakte Hain OK!
}

console.log(namef)

Example()

if (true){
    var namef = "Jibran" //  Ye Console Kara Dega Is Varible Ko OK!
}
console.log(namef)

// let Is Block Scop! Yani Ke Hum Isse Khali Culri {} Breket Ki Space Ke Aander Hi Acces Kar Sakte Hain Culri Breket Ke Bhar Access Nhi Kar Sakte IsKo Ab Bhale Wo Function Ke Culri Breket Hon Ye If Condition Ke Ya For Loop Ke Ya Object Ke let Ko Khali Culri Breket Ke Aander Hi Access Kar Sakte Hain Culri Breket Ke Bhar Nhi Jis Culri Breket Ke Aander Ap Ne Is Ko Likha Ha let Ko ! OK For Example!

if (true){
    let namef = "Jibran"; //  Ye Console Nhi Karega Is Varible Ko Q Ke Ye Let ha Hum Ne Apko Bataya Tha Ke let Block Scop Ha Yani IsKo Hum Culri Breket Ke Bhar Access Nhi Kar Sakte OK!
} 
console.log(namef) // Abhi Ye Error Dega namef Is not defined Q Ke Ye let Ko Access Hi Nhi Kar Para 

var namel = "Jibran";
var namel = "Hayyan";

console.log?(namel) // Hamaroko Ab Lake Dega Hayyan Q Wo Updated Value Ha 

let namel = "Jibran";
let namel = "Hayyan";

console.log(namel) // Hamaroko Ab Error Lake Dega Q Ke Wo let Value Ko Updated Nhi Karta  Value Ha 

// Hum JavaScript Ke Aander Ek Hi Name Ke Multiples Variables Bana Sakte Hain Q Ke Wo Global Variable Ha Wo Values Ko Update Kar Deta Ha OK!
// let Se Hum Ek Hi Name Ke Multiples Variable Nhi Bana Sakte Q Ke Wo Block Scop Ha yani Ke Wo Value Ko Update Nhi Karta Balke Error Dedeta Ha namel variable has been already declered Yani Ke namel Ka Variable Pehle Se Hi declered Ha OK!
// Ya Tha InDono Ka Defference OK! let & var 

// let Ko Hum Ek Martaba Declered Karenge To Haein Vo Let Ki Value Ladega OK!
// Baki Jese var me hum kaam karte hain wo kaam hum let me bhi kar sakte hain ok for example edit delete And XYZ Kaam OK!

let namel; 
namel = 'Jibran'; // Yani Ke Hum let me value update Kara Sakte hain OK! Our Agr Ye Function Ya Kesi Condition Ya Culri{} Breket ke Aander let hoga to hum Culri {} breket ke bhar hum isko Update Nhi Kara Sakte OK!

console.log(namel)

// const Ke Aander Naa hi Hum Value Ko Update Kara Sakte Hain Our naa hi Delete Kara Sakte Hain Our Naa Hi Edit Kara Sakte Hain Hum Is Me Khali Ek Bar Value Assign Karenge Isme Hum Bar Bar Value Assign Nhi Kar Sakte Isme Hum Ek Hi Name Ki Multiples Value Bhi Nhi De Sakte Ye Error Dedega let Vala Error namec Has Already been declered OK  

const School = "JaJ Digital...!";

var Student = {
    SchoolName: School
}

console.log(Student)

// const Ke Aander Naa hi Hum Value Ko Update Kara Sakte Hain Our naa hi Delete Kara Sakte Hain Our Naa Hi Edit Kara Sakte Hain Hum Is Me Khali Ek Bar Value Assign Karenge Isme Hum Bar Bar Value Assign Nhi Kar Sakte Isme Hum Ek Hi Name Ki Multiples Value Bhi Nhi De Sakte Ye Error Dedega let Vala Error namec Has Already been declered OK  

const namec = "Jibran";
const namec = "Hayyan";

console.log(namec)

const namec; 
namec = "Hayyan"; // const ke Aander Hum Value Ko Update Bhi Nhi Kara Sakte OK! // Const Ki As a Constant Value Hoti Ha! // Const Ke Aander Ham Koi Bhi Changes Nhi Kar Sakte OK! Const Ko Hum redeclered Nhi Kar Sakte OK!
console.log(namec)

// var = Global Scoped; 
// let = Block Scoped;
// Const = Block Scoped;

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Template Literals!

// Agr Hamaroko Koi Table Print Karwana Hoto Kis Tarike Se Karte Hain!

document.write('2' + 'x' + '1' + '=' + 2*1) To Is Tarike Se Ham Table Print Karwwa Raha Tha Ab Ap Gor Karen Ke Is Me Kitne + Ke Sign Aa Raha Hain!

// For Example:

let firstName = "Jibran";
let lastName = "Abdul Jabbar"
// Agr Hamein InDono Ko + Karwana Hoto Kis Tarike Se Karte Hain! 
document.write(firstName + " " + lastName + " " + "!") // Ab Ap Khod Gor Karen ke Is Me + Ki Sign Kitni Bar Aarahi Ha Is Se Bacne Ke Liyen Hamein JavaScript Ne `` Ka Sign Diya Ha Is Ko Use Kis Tarike Se Karte Hain For Example!

////////////////////////////////////////////////////////////////////////////////////////////////////

// Is Code Ko Short Karne Ke Liyen JavaScript Ne Hamein Ek Tarika Diya Ha `${}` Wo Kia Ha For Example: 
// This Is Short Code 

let firstName = "Jibran";
let lastName = "Abdul Jabbar"
// Agr Hamein InDono Ko + Karwana Hoto Kis Tarike Se Karte Hain Short Tarike Se! 
document.write(`My Name Is: ${firstName} ${lastName} !`) // `` Ye Kehlata Ha Bactic Ka Sign Is Me Hamne Text Diya Our Agr Hamne Koi Variable Ki Value Deni Ha to Ham Is Varible Ka Name ${} Dollar Ka Sign Our Us Ke Aage {} Calri Breket Ke Aander Ham Variable Ka Name Denge OK Our Hamein Is Me Koi + Ki Sign Lagane Ki Zarorat Nhi Ha Isme Agr Ham Space Denge To Ye Browser Pe Bhi Space Hi Lake Dega OK!    

// Ye Kehlata Ha Template Literals!

// Spread Operators!

// Concat() Ka Function Kia Karta Ha Bhai Ye As a Ek Array Ko Dosri Array Me Add Kara Deta Ha Yani Ke Ek Array Ko Dosri Array Me Marge Kar Deta Ha OK! 

var student1 = ["Jibran","Hayyan"];
var student2 = ["Ali","Osama"];

console.log(student2.concat(student1))

///////////////////////////////////////////////////////////////////////////////////////////////////

// Hum Variable Ko Bhi Apas Me Merge Kar Sakte Hain OK!

var fname = "Jibran";
var lname = "Hayyan";
console.log(fname.concat(lname))

var arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10];

    var arrays = [3,6,8];
    console.log(arrays.concat(arr))

//////////////////////////////////////////////////////////////////////////////////////////////////

// Same Example But This Code Is Easy

// IsMe Ho Kia Raha Ha Bhai Ye Same Kaam Kar Raha Ha Bs Code Shot Ha // ...student1 // 

var student1 = ["Jibran","Hayyan"];
var student2 = [...student1,"Ali","Osama"]; // Isme // ...student1 // Ye Kia Hain Bhai Ye Spread Operators Hain Yani Ke Ye Tin Dots Dene Ke Baad Humein Jis Array Ko Marge Karwana Ha Us Array Ka Name Denge Phir JavaScript Kia Karega Ye Us Array Ke Elements Ko Apni Array Me Add Kardega Yani Ke Marge Kardega Us Array Ke Element Ko OK!

console.log(student2)

/////////////////////////////////////////////////////////////////////////////////////////////////

// Hum Object Me Bhi Spread Operators Use Kar Sakte Hain Ek Object Ki Value Ko Dosre Object Me Paste Kar Sakte Hain OK! 

var Student = {
    Name: "Jibran",
    FatherName: "Abdul Jabbar",
}
var Student1 = {
    ...Student, 
    Class: "IX (9th)",
    Coaching : "Bantva Memon Jamat Khana!",
    Number: 03111111111,
    Age: 8,
    Gmail : "jibran.jabbar06@gmail.com",
}

console.log(Student1)

/////////////////////////////////////////////////////////////////////////////////////////////////

// Object Destructuring!

var obj = { // IsMe Kia Horaha Ha Bhai IsMe As A Ek Object Ban Raha Ha OK!
    name: 'Myers',
    School: "Saylani",
}

let {name,School} = obj // IsMe Kia Ho Raha Ha Bhai Ek let Ka Variable Ban Raha Ha Our Us Me Me Do Property Ki Value Le Raha Hon Ek To Name Ki Our Dosri School Ki Me In Dono Property Ki Value Get Kar Raha Hon Is Variable Me let Ke OK Our Kis Se Get Kar Raha Hon Dono Value Me Apne Object Se Get Ker Raha Hon obj Wale Object Se OK! 

console.log(name) // Our Ap Me Direct Console Kara Raha Hon Name Our School Ki Property Ko Wo Kis Se Wo Me Let ke Variable Se Property Ki Value Access Kar Raha Hon Direct OK!
console.log(School) // Our Ap Me Direct Console Kara Raha Hon Name Our School Ki Property Ko Wo Kis Se Wo Me Let ke Variable Se Property Ki Value Access Kar Raha Hon Direct OK!

// Array Destructuring!

var arr = ["Mark","Ace","Myers"];
let [name1,name2,name3] = arr

console.log(name2)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Ternary Operators

// For Example:

var Age = 20;

if(Age > 30){
alert("Ap Abhi Bhot Bare Hoo!")
}else {
    alert('Ap Abhi Bhot Chotay Hoo!')
}

// Is Example Ko Short Karne Ke Liyen Ecs6 Ne Hamein Ek Short Tarika Diya Ha For Example:

////////////////////////

// Short Code For Conditions!

let UserAge = prompt("Enter Your Age","Your Age Is:"); Isme Kia Kia Bhai Hum Ne User Se Age Pochi Promp Ke Zerye OK!
var Check = UserAge > 30 ? "You Are Not Eligible For This Course " : "Your Age Is Less!"; Is Me Hum Ne Kia Kia Bhai Hum Ne Isme Condition Lagai Ke Ye True Ha Ya False OK! Hum Is Me IF Ke {} Culri Breket Ke Bajay Hum ? Question Mark Lagay Gein Our Else Ke {} Culri Breket Ke Bajay Hum Us Me : Colon Ka Sign La gayenge OK Our Hum Ab IF ELSE me Kaam Nhi Karenge Balke Us KO Shot Karke Varible Me Kaam Karenge OK
console.log(Check)

/////////////////////////////////////////

let UserAge = prompt("Enter Your Age","Your Age Is:");
//Isme Kia Kia Bhai Hum Ne User Se Age Pochi Promp Ke Zerye OK!
var Check = UserAge > 30 ?
"You Are Not Eligible For This Course " 
:
"Your Age Is Less!"; 
// Is Me Hum Ne Kia Kia Bhai Hum Ne Isme Condition Lagai Ke Ye True Ha Ya False OK! Hum Is Me IF Ke {} Culri Breket Ke Bajay Hum ? Question Mark Lagay Gein Our Else Ke {} Culri Breket Ke Bajay Hum Us Me : Colon Ka Sign La gayenge OK Our Hum Ab IF ELSE me Kaam Nhi Karenge Balke Us KO Shot Karke Varible Me Kaam Karenge OK
console.log(Check)

/////////////////////////

// ExplanaTion By Ternary Operator!

let UserAge = prompt("Enter Your Age","Your Age Is:");// Isme Humne Kia Kia Bhai Hum Ne User Se Age Pochi Promp Ke Zerye OK!
var Check = UserAge > 30 ? // Isme Humne Ek Variable Banaya Our Us Me Hum Ne Condition Chalai Ke UserAge > Bari Ha Kis Se 30 Se To Kia Karo Bhai Hum Culri Breket Ke Bajay ? Question Mark De Gen Wo Question Mark Culri Breket Open Bhi Kar Dega Our Close Bhi Karde Ga Backend Pe OK!
"You Are Not Eligible For This Course " // Isme Hum If Ka Console Chala raha Hain!
: // Colon Ka Matlab Else Ke Breket Hain OK!
"Your Age Is Less!"; // Isme Hum Else Ka Console Chala Raha Hain OK!
// Is Me Hum Ne Kia Kia Bhai Hum Ne Isme Condition Lagai Ke Ye True Ha Ya False OK! Hum Is Me IF Ke {} Culri Breket Ke Bajay Hum ? Question Mark Lagay Gein Our Else Ke {} Culri Breket Ke Bajay Hum Us Me : Colon Ka Sign La gayenge OK Our Hum Ab IF ELSE me Kaam Nhi Karenge Balke Us KO Shot Karke Varible Me Kaam Karenge OK
console.log(Check) // Hum Ne Console Kara Diya Variable Ko Check Ke OK!

///////////////////////////

let UserAge = prompt("Enter Your Age","Your Age Is:");// Isme Humne Kia Kia Bhai Hum Ne User Se Age Pochi Promp Ke Zerye OK!
var Check = UserAge > 30 && UserAge < 50 ? // Isme Humne Ek Variable Banaya Our Us Me Hum Ne Condition Chalai Ke UserAge > Bari Ha Kis Se 30 Se To Kia Karo Bhai Hum Culri Breket Ke Bajay ? Question Mark De Gen Wo Question Mark Culri Breket Open Bhi Kar Dega Our Close Bhi Karde Ga Backend Pe OK!
"You Are Selected!" // Isme Hum If Ka Console Chala raha Hain!
: // Colon Ka Matlab Else Ke Breket Hain OK!
"You Are Not Eligible For This Course!"; // Isme Hum Else Ka Console Chala Raha Hain OK!
// Is Me Hum Ne Kia Kia Bhai Hum Ne Isme Condition Lagai Ke Ye True Ha Ya False OK! Hum Is Me IF Ke {} Culri Breket Ke Bajay Hum ? Question Mark Lagay Gein Our Else Ke {} Culri Breket Ke Bajay Hum Us Me : Colon Ka Sign La gayenge OK Our Hum Ab IF ELSE me Kaam Nhi Karenge Balke Us KO Shot Karke Varible Me Kaam Karenge OK
console.log(Check) // Hum Ne Console Kara Diya Variable Ko Check Ke OK!

//////////////////////////

let UserAge = prompt("Enter Your Age","Your Age Is:");// Isme Humne Kia Kia Bhai Hum Ne User Se Age Pochi Promp Ke Zerye OK!
var Check = UserAge > 30 && UserAge < 50 ? // Isme Humne Ek Variable Banaya Our Us Me Hum Ne Condition Chalai Ke UserAge > Bari Ha Kis Se 30 Se To Kia Karo Bhai Hum Culri Breket Ke Bajay ? Question Mark De Gen Wo Question Mark Culri Breket Open Bhi Kar Dega Our Close Bhi Karde Ga Backend Pe OK!
"Your Age Equal!" // Isme Hum If Ka Console Chala raha Hain!
: // Colon Ka Matlab Else Ke Breket Hain OK!
UserAge > 49  ?  // Ye Kia Horaha Ha Bhai Yahan Pr Else If Chal Raha Ha OK!
"You Are Selected!"
:
"You Are Not Eligible For This Course!"; // Isme Hum Else Ka Console Chala Raha Hain OK!
// Is Me Hum Ne Kia Kia Bhai Hum Ne Isme Condition Lagai Ke Ye True Ha Ya False OK! Hum Is Me IF Ke {} Culri Breket Ke Bajay Hum ? Question Mark Lagay Gein Our Else Ke {} Culri Breket Ke Bajay Hum Us Me : Colon Ka Sign La gayenge OK Our Hum Ab IF ELSE me Kaam Nhi Karenge Balke Us KO Shot Karke Varible Me Kaam Karenge OK
console.log(Check) // Hum Ne Console Kara Diya Variable Ko Check Ke OK!

//////////////////////////////

// Ye Bhi As a Oprator Ha OK!

var Boleam = true; // Mene Isme Ek Variable Banaya Our Us Me Mene True Rakh Diya OK!
var Checked = Boleam && "Jibran" // Isme Mene Boleam Ko Check Kara Ka Agr Wo True Ha Yani Sahi Ha To Karado Jibran Our Agr False Ha To KaraDo False OK!
console.log(Checked)

/////////////////////////////

// Same Example!

var Boleam = false; // Mene Isme Ek Variable Banaya Our Us Me Mene False Rakh Diya OK!
var Checked = Boleam && "Jibran" // Isme Mene Boleam Ko Check Kara Ka Agr Wo False Ha Yani Galat Ha To Karado False Our Agr True Ha To KaraDo "Jibran" OK!
console.log(Checked)

/////////////////////////////

// Async && Sync!

setTimeout(function(){
    console.log(number1)  //  Ye Kia Horaha Ha Bhai Isme Ek SetTimeOut Chal Raha Ha Our Usme Mene Ek Console Kara Diya Ha Number1 Variable KO OK Ye Kia Karega Bhai Ye Console Kara dega Number2 Ko Our Number3 Ko Our Jab Ek Second Hojay Ga To Phir Wo Number 1 Ko Console Kara Dega JavaScript Me To Number1 Baad Me Q Aaraha Ha Bhai Q Ke Hum Ne Condition Lagai Howi Ha Ke Jese Hi Ek Second Ho To Number1 Ko Print Karwado OK JavaScript Wait Nhi Karta Usko Jo Console Ki Value Milti Ha Wo Console Kara Deta Ha OK! To Ye Jo Number 1 Pe SetTimeOut Yani Wait Hona To Ye Kehlata Ha Async OK!
},1000)
var number1 = "Number1" 
var number2 = "Number2"
var number3 = "Number3"

console.log(number2) // 000.1 MiliSecond
console.log(number3)

////////////////////////////

var FullName; // Hum Ne As A Kia Kia Bhai Hum Ne Ek Variable Declered kar Diya Our Hum ne Us Varible Ki Value Initialized Nhi Ki Yani Ke UsKi Value Nhi Di Hum Ne OK!
setTimeout(function student1(){ // Isme Humne Kia Kia Bhai Hum Ne SetTimeOut Ka Function Call Kia Our Us Me Hum Ne Variable Ki Value Initialized Kardi OK! Our Hum ne SetTimeOut Ke Aander Bola Ke Is Variable Ko Value Ek Second Baad Do Our Hum Ne Console Kara Diya Variable Ko To Is Me Hamein Abhi Undifined Mile Ga Q Ke Is Variable Ko Value 1 Second Ke Baad Mil Rahi Ha To Browser To IsKa Intazaar Nhi Karega Na Wo To Direct Value Ko Print Kara dega Ab Bhale Us Ke Aander Value Ho Ya Nhi Aander Value Hogy To Ye Mujhe Value Ladega Our Agr Nhi Hogy To Ye Mujhe Undifined La Dega Abhi To Ye Hamein Undifined Hi Lake Dega Wo Q Q Ke Us Variable Ko Value Ek Second Baad Milegi To Jab Wo Console Me Print Karwayga To Uski Value Kia Hogy Undefined Value OK! 
    // FullName = "Jibran" Humne SetTimeOut Ke Aander Hum Ne Variable Ki Value Dedi OK! 
},1000) // IsMe Hum Ne Kia Bola Ha Ke Variable Ko Kitne Time Baad Value Milegi Yani Ke Variable Ko Value 1 Second Baad Value Milegi OK!
console.log(FullName) // Hum Ne Console Kara Diya FullName Ke Variable Ko Jis Me Value Undifined Ha OK! 

// Jugari Tarika Value Lene Ka OK!

var FullName; // Hum Ne As A Kia Kia Bhai Hum Ne Ek Variable Declered kar Diya Our Hum ne Us Varible Ki Value Initialized Nhi Ki Yani Ke UsKi Value Nhi Di Hum Ne OK!
setTimeout(function student1(){ // Isme Humne Kia Kia Bhai Hum Ne SetTimeOut Ka Function Call Kia Our Us Me Hum Ne Variable Ki Value Initialized Kardi OK! Our Hum ne SetTimeOut Ke Aander Bola Ke Is Variable Ko Value Ek Second Baad Do Our Hum Ne Console Kara Diya Variable Ko To Is Me Hamein Abhi Undifined Mile Ga Q Ke Is Variable Ko Value 1 Second Ke Baad Mil Rahi Ha To Browser To IsKa Intazaar Nhi Karega Na Wo To Direct Value Ko Print Kara dega Ab Bhale Us Ke Aander Value Ho Ya Nhi Aander Value Hogy To Ye Mujhe Value Ladega Our Agr Nhi Hogy To Ye Mujhe Undifined La Dega Abhi To Ye Hamein Undifined Hi Lake Dega Wo Q Q Ke Us Variable Ko Value Ek Second Baad Milegi To Jab Wo Console Me Print Karwayga To Uski Value Kia Hogy Undefined Value OK! 
    FullName = "Jibran" // Humne SetTimeOut Ke Aander Hum Ne Variable Ki Value Dedi OK! 
},1000) // IsMe Hum Ne Kia Bola Ha Ke Variable Ko Kitne Time Baad Value Milegi Yani Ke Variable Ko Value 1 Second Baad Value Milegi OK!
console.log(FullName) // Hum Ne Console Kara Diya FullName Ke Variable Ko Jis Me Value Undifined Ha OK! 
setInterval( function() {
console.log(FullName)
}, 1000);

////////////////////////////////////////////////////////////////////////////////////////////////

// Promise!

var Promis = new Promise(function(resolve,reject){
var Zinger = "Available"
if(Zinger === "Available"){
resolve('Zinger Is Available Now!')
}
else{
    reject('Zinger Is Not Available!')
}
})

Promis.then(function(Data){
console.log(Data)
})
.catch(function(Error){
console.log(Error)
}
)

var Promis = new Promise(function(resolve,reject){
    var User = "Available";
    if (User === "Available"){
        resolve("Hayyan ne Soap Pilaya!")
    }
    else{
        reject("Hayyan Ne Soap Nnhi Pilaya!")
    }
    })
    Promis.then(function(Resolve){
        console.log(Resolve)
        })
        .catch(function(Error){
        console.log(Error)
        })

var Promis = new Promise(function(resolve,reject){
var Data = "Available";
if(Data === "Available"){
resolve('Data Is Available!')
}
else{
    reject("Data Is Not Available!!")
}
})

Promis.then(function(Data){
    console.log(Data)
})
.catch(function(Error){
console.log(Error)
})

//////////////////////////////////

// HUm Firebase Se Data Is Tarike Se Lete Hain na Essai Ha Hn!

firebase.database().ref('User').on('Child_Added',function(Data){
    console.log()
})

// Firebase Se DaTa Is Tarike Se Lete Hain Promise Ke Throw!

var Promis = new Promise(function(resolve,reject){
firebase.database().ref("User").on("Child_Added",function(Data){
if(Data.value){
    resolve(Data.value)
}
else{
    reject('SomeThing Went Wrong!')
}
})
})

Promis.then(function(Data){
console.log(Data)
})
.catch(function(Error){
console.log(Error)
}
)

// Status Check Pending

var Promis = new Promise(function(resolve,reject){
    if(true){
        setTimeout(function(){
            resolve("Available")
        },1000)
    }
    else{
        reject('Not Available!')
    }
    })
    console.log(Promis)

    Promis.then(function(Data){
    console.log(Data)
    })
    .catch(function(Error){
    console.log(Error)
    }
    )

// Function Expressions!

function User(){ 
    console.log("NoN Uses Function Expressions!")
}
User()

// Example!

// This Is Function Expressions Simple Code!

let User = function(){ // Isme Hum Function Ka Name Nhi De Raha Our Isko Hum Variable Me Bhi Declare Kar Raha Hain OK!
    console.log("Example By Function Expressions!")
}
User() // Agr HamaroKo Isko Call Karna Ha To Hum Variable Ka Name Use Karte Huwe Isko Call Karenge OK!

// Arrow Function!

function User1(){
console.log("Not Arrow Function")
}

// This Is Arrow Function!

let User = () => { // Hum Ne As a Ek Variable Banaya Our Usme Hum Ne Function Name De Dia Phir = Equal To Deke Us Ko Call Kia Our Phir Function Ka Bajay Arrow Dia => Us Ke Baad Kalri Breket Me Hum Ne Console Karadia OK!
    console.log("This Is Arrow => Function!")
}
User() // Our Phir Hum ne Us Ko Call Karlia!

// How To Add Parameter In Arrow Function!

let User = name => { // Hum Parameter Is Tarike Se Pass Karte Hain! Agr Hame Ek Parameter Pass Karna Ha To Hum Round Bracket Bhi Hata Sakta Hain OK Agr Hum Multiples Parameters Pass Karte Hain To Round Bracket Use Karenge OK! 
    console.log(`Hello ${name}`) // This Is Templete Literels Uses!
}
User("Jibran Abdul Jabbar") // Our Phir Hum ne Us Me Ek Name Pass Kar Dia Parameter Ka OK!

let User = (name,age) => { // Hum Parameter Is Tarike Se Pass Karte Hain! Agr Hame Ek Parameter Pass Karna Ha To Hum Round Bracket Bhi Hata Sakta Hain OK Agr Hum Multiples Parameters Pass Karte Hain To Round Bracket Use Karenge OK! 
    console.log(`Name: ${name} Age: ${age}`) // This Is Templete Literels Uses!
}
User("Jibran Abdul Jabbar",8) // Our Phir Hum ne Us Me do Name Pass Kar Dia Parameter Ka OK!

let User = _ => { // Zarori Nhi Ha Hum () Bracket Hi Use Karen Hum Uske Bajay _ Underscore Bhi Use Kar Sakte Hain OK!  
    return "Jibran Abdul Jabbar!" // Hum Arrow Function Me Return Bhi Kara Sakte Hain OK! 
}
console.log(User()) // Our Phir Hum Ne User Ko Call Kardia OK!

let User = _ => "Jibran Abdul Jabbar!" // Agr Hama RoKo Return Karana Ha To Zarori Nhi Ha Ka Hum Culri Bracket Our Return Ka Keyword Likhen Hum Direct Text Likh Sakte Hain Arrow => Ka Baad OK!  

console.log(User()) // Our Phir Hum Ne User Ko Call Kardia OK!

User = _ => "Jibran Abdul Jabbar!" // Hum Ne Kia Kia Isme Hum Ne Variable Ke Keyword Ko Remove Kardia

console.log(User()) // Our Phir Hum Ne User Ko Call Kardia OK!

// This Keyword Difference By Arrow Function & Normal Function!

function User(){
    console.log(this)
}
User()
Grand_Parent = _ => Parent = _ => console.log(this)

Grand_Parent()

function User(){
    console.log(this) // normal Function Ka this Apna Parent Yani Function Ko get Karta Ha OK!
}
User()

User = () => {
    console.log(this) // Arrow Function Ka this Kia Karta Ha Ye Apna Parent Ke Parent Ko get Karta Ha OK Uses By React! 
}
User()

// This Is Call Back Function!

setTimeout(() => console.log("Call_Back Function"),1000)

let CLB_Fucn = (Use_CBF) => {
    setTimeout(() => {
Use_CBF("Jibran..Abdud..Jabbar!")
    },1000)
}
let Use_CBF = (name) => {
    console.log(name)
}

CLB_Fucn(Use_CBF)

// Second Example!

setInterval(_ => console.log("CallBack_Function!"),1000)

// Third Example!

let getData = (Uses) => {
firebase.database().ref('/').on("child_added",(data) => {
    Uses(data.val)
})
}

let Uses = (data) => {
    console.log(data)
}

getData(Uses)

// Fourth Example!

let getData = (Uses) => {
    fetch('https://jsonplaceholder.cypress.io/todos/1')
    .then(response => response.json())
    .then(Use => 
        Uses(Use))
    }

    let Uses = (data) => {
        console.log(data)
    }

    getData(Uses)

// Array Function...!

let data = [{Name: "Jibran Abdul Jabbar!",Age: 8},{Name: "Hayyan",Age: 9}]
let filter = data.filter((Item)=> Item.Age === 8)  // Answer: 1 OBJ
console.log(filter)

let data = [{Name: "Jibran Abdul Jabbar!",Age: 8},{Name: "Hayyan",Age: 9}]
let filter = data.filter((Item)=> Item.Age === 9) // Answer: 2 OBJ
console.log(filter)

let data = [{Name: "Jibran Abdul Jabbar!",Age: 8},{Name: "Hayyan",Age: 9}]
let filter = data.filter((Item)=> true ) // Answer: Complete Array
console.log(filter)

let data = [{Name: "Jibran Abdul Jabbar!",Age: 8},{Name: "Hayyan",Age: 9}]
let filter = data.filter((Item)=> false) // Answer: Empty Array
console.log(filter)

let data = [{Name: "Ahsan!",Age: 6},{Name: "Jibran Abdul Jabbar!",Age: 8},{Name: "Hayyan Abdul Jabbar!",Age: 9}]
let filter = data.filter(a => a.Age > 7)
console.log(filter)

// Search.................!

let User = prompt("Enter Your Name!");
let CorrectName = "Jibran";
if(CorrectName.startsWith(User)){
    console.log(CorrectName)
}

let User = prompt("Enter Your Name!");
let CorrectName = "Jibran";
if(CorrectName.endsWith(User)){
    console.log(CorrectName)
}

// Array Map

arr.map() Array Ke Aander Jitne Bhi Element Hain Unko Update Karwata Ha Aur Multipley Karwata ha Map OK!

let arr = [2,3,4,5];

let multipley = arr.map(e => e * 3)

console.log(multipley)

let arr = [{Name: "Jibran!"},{Name: "Hayyan!"}]
let UpdateValue = arr.map(e => e.Name = "Hard_Word");
console.log(UpdateValue)

// Fetch!

 fetch('https://jsonplaceholder.cypress.io/todos/1') // Hum as a Ek Domain Purchase Karte Hain Apni Website Ke Liyen Aur Phir Hamein Us Website Se Koi Data Lena Ho Ya Phir Us Website Ko Data Dena Ho To Hum Ya Phir Hamein Us Website Se Kuch Communication Karni Ho Yani Batchet Karni Ho To Hum Fetch Ke Function Ko Use Karte Howe Website Se Communication Kar Sakte Hain Wo Kese Hum ek Function Ko Call Karenge Aur Phir Hum Us Me Us Website Ka Domain Dedenge Aur Phir Hum .then Aur .catch Ka Keyword Ko Use Karte Howe Domain Se Deta Le Sakte Hain OK! 
   .then(response => response.json()) // Agr Koi Dosri Language Me Data Aaya Ha Aur Us Language Ko Isne Json Language Me Tabdeel Kardia Ha Is Ko Ap Ignore Karden OK! Q Ke Isme Language Ko Change Kardia Ha OK!
   .then(data => console.log(data)) // Hum ne .then Is Liyen Lagaya Ha Take Domain Se Data Mil Jay To Wo .then Ke Function Me Aay Aur Phir Hum Ne Use Data Ko Console Kara Liya Parameter Ke Thoro OK! 
   .catch(Err => console.log(Err) // Hum ne .catch Is Liyen Lagaya Ha Take Domain Se Data Milte Waqt Bech Me Koi Error Aagaya To Us Error Ko Console Kara Ne Ke Liyen Q Ke Data Aata Waqt Agr Bech Me Koi Error Aaja ta Ha To Wo catch Ke Function Me Aata Ha Error Our Phir Hum Usko Parameters Ke Throw Console Kara Lete Hain OK! 
   // Fetch Ke Function Ke Backend Pe Ek Promise Use Horaha Ha Jis Ko Use Karte Howe Hum Data Le Raha Hain .then || .catch Ke Function Ke Throw Hum Data Le Raha Hain OK!   

// Second Option! Agr ApKo .then || .catch Use Nhi Karna To App Ye Option Use Karsakte Ho!
// Same Work But Code Is Change! Use The Method async = Wait & awaite = Waiting Data Is Come You Almost Welcome Next Line!

async function GetData(){  
      let data = await fetch('https://jsonplaceholder.cypress.io/todos/1');
      console.log(data)
   }
GetData()

// ES6 Classes

// Constructure Function In JavaScript!

function User(Name,Age){
    this.FullName = Name
    this.FullAge = Age
}

let data = new User("Jibran Abdul Jabbar!",8)

console.log(data)

// ES6 Constructure Class!

class User {
    constructor(Name,Age){
        this.FullName = Name
        this.FullAge = Age            
    }
}
let data = new User("Jibran Abdul Jabbar!",8)
console.log(data)

// Extends...!

// Do Class Ko Ap Apas Me Marge Bhi Kar Sakte Ho extends Ke Method Ke throw OK!

class User {
    constructor(name , age){
        this.name = name;
        this.age = age            
    }
}

class ExtendsData extends User{
    constructor(name , age , School){
super(name , age)
this.School = School;
    }
}

let data = new ExtendsData("Jibran Abdul Jabbar!",8,"BMJ Education!")
console.log(data)


// ECMA Script (6) Futurs!

// Launched By 2015!

// 1} var. Example: ( var vExample = "This Is Global Scope Variable!" )
// 2} let. Example: ( let lExample = "This Is Block Scope Variable!" )
// 3} const. Example: ( const cExample = "This Is Block Scope Variable!" )
// 4} Templete Literels. Example: ( `This Is  Text ${}` )
// 5} Spread Operators. Example: ( ...CopyElement concat(This Is Concat Function!) )
// 6} Object Destructuring. Example: ( let {Property_Name} = ObjectName;  )
// 7} Array Destructuring. Example: ( let [Create_Property_Name] = ArrayName; )
// 8} Ternary Operators. Example: ( let Condition = (Example > 10 && Example < 20) ? "Succuss!" : (Example === 15 || Example 17) ? "Waiting_Succuss" : "Not_Eligible_Succus")
// 9} Async & Sync. Example: ( Wait & Complete! )
// 10} Promise. Example: (let VarName = Promise((resolve,reject)=>{resolve("S");reject("E");});VarName.then((data)=>console.log(data).catch((Error)=>console.log(Error);) )
// 11} Function Expressions. Example: ( var Func = function{}; Func(); )
// 12} Arrow Function. Example: ( User = (Parameter_Name)=>console.log(`This Is Arrow Func! ${Parameter_Name}`; User('Example')) )
// 13} CallBack Function. Example: ( User = SetVal => setTimeout(_=>SetVal("This Is Main Data!"),3000) SetVal = (data) => console.log(data) User(SetVal) )
// 14} Array Filter. Example: ( let arr = [{Name:"Jibran",Age:8}{Name: "Mark",Age:9}]; console.log(arr.filter(a=>a)) )
// 15} Array Map. Example: ( // (Update & Multipley Elements) let arr = [2,3,4]; console.log(arr.map(a=>a*2)) Second_Example: let arr = [{Name: "Ace"},{Name: "Mark"}]; console.log(arr.map(a=>a.Name = "Jibran!")) )
// 16} startWith. Example: ( let User = prompt(); let cN = "Jibran" if(cN.startWith(User){console.log(cN);}) )
// 17} endWith. Example: ( let User = prompt(); let cN = "Jibran" if(cN.endWith(User){console.log(cN);}) )
// 18} Fetch. Example: ( fetch('https://jsonplaceholder.cypress.io/todos/1').then(response => response.json()) .then(data => console.log(data)).catch(Err => console.log(Err) )
// 19} Async & Await. Example: ( async function GetData(){let data = await fetch('https://jsonplaceholder.cypress.io/todos/1');console.log(data)};GetData(); )
// 20} ES6 Class & Constructure Function. Example: ( class User {constructor(Name,Age){this.FullName = Name;this.FullAge = Age}}let data = new User("Jibran Abdul Jabbar!",8);console.log(data) )
// 21} extends. Example: ( class LExample { constructor(name,launched){this.name = name;this.launched = launched;}}class MargeData extends LExample { constructor(name ,launched , Use){super(name, launched);this.Use = Use}}let es6Conatructure = new MargeData("ES6 Constructure Function",2015,"!ES6!");console.log(es6Conatructure) )

// Ecma Script (ESC6) Is Complete Congrulations!




