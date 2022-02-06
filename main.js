// // alert("test")

// // Higher order function
// function calAge(func){
// func()
// }

// function sayHello(){
//     console.log("Hello")
// }
 
// // [].map(() =>{})

// calAge(sayHello);

// function outerFunction(){
//     console.log("Outer function")
//     let a = 'hello there';
//     return () =>{
//         console.log("Inner Function");
//         console.log(a)
//     }
// }

// const storeFnc = outerFunction();

// // console.log(storeFnc());
// console.log(outerFunction()());
// // synchro
// // => blocking
// // alert("This is blocking");
// console.log("I am here!");

// // Async
// // callback,promises,async await
// // document.getElementById("btn").addEventListener("click",() =>{
// // console.log("callnack function")
// // });


// console.log("I am first!");

// setTimeout(() => {
//     console.log("I am last !")
// }, 2000);

// console.log("I am second!");


// // promises
// const canGetLaptop = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         const canHeBuy = false;
//         if(canHeBuy){
//             const response = {
//                 data:[],
//                 status:"success",

//             }
//             resolve(response)
//         }else{
//             const response = {
//                 data:[],
//                 status:"fail",

//             }
//             reject(response)
//         } 
//     }, 2000);
// })

// canGetLaptop.then((res) =>{
//     console.log("success",res)
// }).catch(err =>{
//     console.log(err)
// })


