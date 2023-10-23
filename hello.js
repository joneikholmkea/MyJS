


function f1() {
    var name = "anna"
    const f2 = (num)=>{
        console.log(num, " the name is ", name)
    }
    return f2
}
const myCallback = f1()

function f2(aFun){
    // let local=12
    const a = 12
    // (() => aFun(a))()
    aFun(a)
    // console.log(a)
}

f2(myCallback)











//simulateAPIcall(myCallback)
// function useState(_list){
//     var list;
//     if(_list){
//         list = _list;
//     }
//     function setState(func){
//         list = func(list);
//         console.log(list);
//     };
//     return setState;
// }
//
// const setState=useState([{name:"Conny", age:44}]);
//
// setState((prevList)=>[
//     ...prevList, {name: "Anna", age: 30},
// ]);
//
// setState((prevList)=>[
//     ...prevList, {name: "Benny", age: 40}
// ]);




















function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// console.log(name) // does not work, since name is out of scope



async function simulateAPIcall(callback){
    await sleep(1000)
    callback()
}