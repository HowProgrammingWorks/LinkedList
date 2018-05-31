'use strict';

const List = require('./class-list.js');
const { objectList } = require('./obj-list.js');

//Usage

const classList = new List();
const objList = objectList();

const obj = {
  name: 'Vlad',
  age: 18
};

const arr = [11, 12];

const pow = (x) => x * x;

const func = (data) => data % 2 === 0;
const fn = (data) => data === 5;

classList.append(3).append(6).append(7);
classList.prepend(2).prepend(1);
classList.insert(3, 4).insert(4, 5);
classList.append(obj).append(arr);


objList.append(3).append(6).append(7);
objList.prepend(2).prepend(1);
objList.insert(3, 4).insert(4, 5);
objList.append(obj).append(arr);

const cloneClassList = classList.clone();
const mappedClassList = classList.map(pow);
const filteredClassList = classList.filter(func);
const gluedClassList = classList.glue(objList);

const cloneObjList = objList.clone();
const mappedObjList = objList.map(pow);
const filteredObjList = objList.filter(func);
const gluedObjList = objList.glue(classList);

console.log('Class');
console.log('----------------------------');
console.log('ClassList.length: ' + classList.length());
console.log(...classList);
console.log('Compare 1: ' + classList.compare(cloneClassList));
classList.delete(7);
console.log(...classList);
console.log(...cloneClassList);
console.log('Compare 2: ' + classList.compare(cloneClassList));
console.log(...mappedClassList);
console.log('ClassList include 3: ' + classList.includes(3));
console.log('ClassList include 110: ' + classList.includes(110));
console.log('IndexOf 5: ' + classList.indexOf(5));
console.log('ClassList.find: ' + classList.find(fn));
console.log('ClassList.filter: ', ...filteredClassList);
console.log('ClassList.glue: ', ...gluedClassList);

console.log();
console.log();
console.log('Object');
console.log('----------------------------');
console.log('ObjList.length: ' + objList.length());
console.log(...objList);
console.log('Compare 1: ' + objList.compare(cloneObjList));
objList.delete(7);
console.log(...objList);
console.log(...cloneObjList);
console.log('Compare 2: ' + objList.compare(cloneObjList));
console.log(...mappedObjList);
console.log('ObjList include 3: ' + objList.includes(3));
console.log('ObjList include 110: ' + objList.includes(110));
console.log('IndexOf 5: ' + objList.indexOf(5));
console.log('ObjList.find: ' + objList.find(fn));
console.log('ObjList.filter: ', ...filteredObjList);
console.log('ObjList.glue: ', ...gluedObjList);

console.log();
console.log();
console.log('Time counters');
console.log('----------------------------');
console.log('ClassList instantiation: ');
console.time('newlist');
const lc = new List();
console.timeEnd('newlist');

console.log('ObjList instantiation: ');
console.time('newlist');
const lo = objectList();
console.timeEnd('newlist');
console.log();

console.log('ClassList append: ');
console.time('append');
lc.append(2);
console.timeEnd('append');

console.log('ObjList append: ');
console.time('append');
lo.append(2);
console.timeEnd('append');
console.log();

console.log('ClassList prepend: ');
console.time('prepend');
lc.prepend(8);
console.timeEnd('prepend');

console.log('ObjList prepend: ');
console.time('prepend');
lo.prepend(8);
console.timeEnd('prepend');
console.log();

console.log('ClassList indexOf: ');
console.time('index');
lc.indexOf(8);
console.timeEnd('index');

console.log('ObjList indexOf: ');
console.time('index');
lo.indexOf(8);
console.timeEnd('index');
console.log();

console.log('ClassList insert');
console.time('insert');
lc.insert(1, 55);
console.timeEnd('insert');

console.log('ObjList insert');
console.time('insert');
lo.insert(1, 55);
console.timeEnd('insert');
console.log();

console.log('ClassList delete');
console.time('delete');
lc.delete(1);
console.timeEnd('delete');

console.log('ObjList delete');
console.time('delete');
lo.delete(1);
console.timeEnd('delete');
console.log();

console.log('ClassList clone');
console.time('clone');
const lcClone = lc.clone();
console.timeEnd('clone');

console.log('ObjList clone');
console.time('clone');
const loClone = lo.clone();
console.timeEnd('clone');
console.log();

console.log('ClassList length');
console.time('length');
lc.length();
console.timeEnd('length');

console.log('ObjList length');
console.time('length');
lo.length();
console.timeEnd('length');
console.log();

console.log('ClassList compare');
console.time('compare');
lc.compare(lcClone);
console.timeEnd('compare');

console.log('ObjList compare');
console.time('compare');
lo.compare(loClone);
console.timeEnd('compare');
console.log();

console.log('ClassList find');
console.time('find');
lc.find(func);
console.timeEnd('find');

console.log('ObjList find');
console.time('find');
lo.find(func);
console.timeEnd('find');
console.log();

console.log('ClassList filter');
console.time('filter');
lc.filter(func);
console.timeEnd('filter');

console.log('ObjList filter');
console.time('filter');
lo.filter(func);
console.timeEnd('filter');
console.log();

console.log('ClassList map');
console.time('map');
lc.map(pow);
console.timeEnd('map');

console.log('ObjList map');
console.time('map');
lo.map(pow);
console.timeEnd('map');
console.log();

console.log('ClassList includes');
console.time('includes');
lc.includes(8);
console.timeEnd('includes');

console.log('ObjList includes');
console.time('includes');
lo.includes(8);
console.timeEnd('includes');
console.log();

console.log('ClassList glue');
console.time('glue');
lc.glue(lo);
console.timeEnd('glue');

console.log('ObjList glue');
console.time('glue');
lo.glue(lc);
console.timeEnd('glue');
console.log();

console.log('ClassList Symbol.iterator');
console.time('spread');
console.log(...lc);
console.timeEnd('spread');

console.log('ObjList Symbol.iterator');
console.time('spread');
console.log(...lo);
console.timeEnd('spread');
console.log();