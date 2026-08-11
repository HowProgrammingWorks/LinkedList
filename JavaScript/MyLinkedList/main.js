const LinkedList = require('./list.js');
const lst = new LinkedList();
//lst.push(9);
for (let i = 0; i < 10; i++){
  lst.push(i);
}

//lst.push(9);

//lst.print();

// //Find first test
// console.log(lst.findFirst(0));
// console.log(lst.findFirst(4));
// console.log(lst.findFirst(9));
// console.log(lst.findFirst(20));

//Find all test
// console.log(lst.findAll(1));

//Find test
// lst.find(1, (value) => {
//   console.log(value);
// });

//Append test
//lst.append(10,11,12,13,14);

//lst.add("vova");
// lst.print();

//Find with RegExp test
// lst.find(new RegExp("\w","g"), (value) => {
//   console.log(value);
// });
//

// var retUnshift = lst.shift();
// console.log(retUnshift);
// var retPop = lst.pop();
// console.log(retPop);

//lst.erase(0);
//lst.erase(9);
// lst.insert(0, "Vova");
// lst.insert(4, "Vova1");
// lst.insert(12, "Vova2");
// lst.insert(12, "Vova3");

var number = 0;
lst.unshift("vova", "dima", "vitaliy", "oleksiy");
lst.find(/^[a-z]*$/, (item) => {
  console.log(number);
  number++;
});

//lst.print();
