// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }

// const greetWithName = function (callback) {
//     const name = 'Mango'
    
//     console.log(callback);
//     callback(name)
// }



// greetWithName(greet)


/**quiz */
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
//   for(values in salaries){
//       totalSalary+=salaries[values]

const values=Object.values(salaries)
for(let i=0;i<values.length;i+=1){
  
    totalSalary += values[i]
}
//   }
    // values = Object.values(salaries)
    // for (value in values) {
    //     console.log(value);
    //     totalSalary += values[value]
    // }
  // Пиши код выше этой строки
    //  console.log(totalSalary);
    return totalSalary;
   
}
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// // console.log(totalSalary);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for(const color of colors){
//   hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }
// console.log(hexColors);
//   console.log(rgbColors);

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     let message = [];
//     const allNames = [];
//     const allPrice = [];
//     const allQuantity = [];
    
//     for (const product of products) {
//         allNames.push(product.name)
//         allPrice.push(product.price)
//         allQuantity.push(product.quantity)
//     }

//     switch (propName) {
//         case 'name':
//             message = allNames;
//             break;
//         case 'price':
//             message = allPrice;
//             break;
//         case 'quantity':
//             message = allQuantity;
//             break;
//         default:
//             message
//     }
//     console.log(message);
// return message
// }

// getAllPropValues('price')

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let allPrice=0;
//     for (product of products) {
//         if (productName === product.name) {
//            allPrice = product.price * product.quantity
  
//         }
//     }
//     console.log(allPrice);
//   return allPrice
//   // Пиши код выше этой строки
// }

//     calculateTotalPrice('Захват')

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const{yesterday,today,tomorrow}=highTemperatures;


// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const{
//   yesterday:highYesterday,
//       today:highToday,
//   tomorrow:highTomorrow,
//   icon:highIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// }=highTemperatures


// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);


// Пиши код ниже этой строки
// const forcot ={
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
  
//   const{
//     today:{low:todayLow,high:todayHigh},
//     tomorrow:{low:tomorrowLow,high:tomorrowHigh}
//   }=forecast
//   console.log(todayLow);
//   const message=(todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// console.log(message);
//   // Пиши код выше этой строки
//   return  message;
// }

// calculateMeanTemperature({ today: {low: 27, high: 32}, tomorrow: {low: 25, high: 29} })

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  const text=''
  // Пиши код ниже этой строки
  const newItem = {category, completed, priority, text,...data }
  console.log(newItem);
return newItem
  // Пиши код выше этой строки
}
makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })
