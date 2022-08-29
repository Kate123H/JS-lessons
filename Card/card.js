// document.onkeypress = function(event){
// let a = document.querySelector("Name");
// console.log(Name);
// }

// document.onkeypress = function(event){
//     console.log(event.key);
//     }

// (function(){
//     document.querySelector('Name').addEventListener('keydown', function(e)) {
//         if (e.keyCode===13){
//             console.log(this.value);
//         }
//     }
//     })

// document.getElementById('Name').onkeypress = function(event){
//     // console.log(event.key);
//     // let a = document.querySelector("Name");
//     document.querySelector('Name').addEventListener('keydown', function(e)) { 
//     if (e.keyCode===13){
//     console.log("Name: " + Name);
//     }
// }
// }

var str ='';
document.getElementById('Name').onkeypress = function(event){
        // console.log(event);
        str=str + event.key;
        console.log("Name: " + str);
    }

