
/**Отложений визов:регистр собитий */
const buttonRef = document.querySelector('button')

const handleButtonClick = function () {
    // console.log('Click');
};

buttonRef.addEventListener('click', handleButtonClick);

/**Отложений визов:интервал */
//   console.log(('перед колом'));
setTimeout(function () {
    console.log(('3000!'));
}, 3000)
// console.log(('после кола'));
  
/**stack  область видимости*/

// console.log(a);
// if (true) {
//     const a =5 ;

// }
// let message=0
// const x = 10;

// const foo = function (z) {
    
//     const x = 100;
  
//      return   x + y + z
// }
// const y = 20;
// console.log(foo(30))

/**создаем повара с именем и без ЗАМИКАНИЕ*/

// /*
// *Global env
// *Record:{}
// *Parent"null
// */
// //Envivorment:Global env

// const foo = function () {
// /*
// *Global env
// *Record:{}
// *Parent"Global env
// */

//     const x = 5
//     /*
// *Global env
// *Record:{x=5}
// *Parent"Global env
// */
//     //Envivorment:Foo env
//     return function () {
//         /*
//         *anon env
// *Global env
// *Record:{}
// *Parentfoo env
// */
//         console.log(x);
//     }
// }
// /*
// *Global env
// *Record:{foo:f}
// *Parent"null
// */
// //Envivorment:Global env
// const outerFn = foo()
// /*
// *Global env
// *Record:{foo:f.outher:f}
// *Parent"Global env
// */
// console.log(outerFn);
// outerFn()


const foo = function () {
    const x = 5;
    return function () {
        console.log(x);
    };
};
const outerFn = foo()
console.log(outerFn);
outerFn();

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} make ${dish}`);
// }

// makeDish('mango','cake')
// makeDish('mango','tea')
// makeDish('mango','juce')
// makeDish('mango','salad')

// makeDish('Yulia','meat')
// makeDish('Yulia','coffe')
// makeDish('Yulia','potato')
// makeDish('Yulia', 'pasta')

// const makeSheff = function (name) {
//     console.log(name);

//     return function (dish) {
//          console.log(`${name} make ${dish}`);
//     }
// }
// const mango = makeSheff('Mango')
// const yulia = makeSheff('Yulia')

// mango('meal')
// yulia('cake')
// console.dir(mango) 

const fnA = function (a) {
    return function fnB(b) {
        return function fnC(c) {
            console.log(a,b,c);
        }
    }
}
const rest = fnA(4)(5);
rest(13);
console.dir(rest);
 