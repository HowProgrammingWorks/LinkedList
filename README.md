# Linked list data structure

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9KvA4hDDSjk/0.jpg)](https://www.youtube.com/watch?v=9KvA4hDDSjk)

Задания (на выбор):
- Реализовать двусвязный список на классах
- Реализовать двусвязный список на замыканиях
- Реализовать двусвязный список на фабриках
- Добавить к двусвязному списку протокол iterable
  - см. про `next()` и [`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- Сделать методы для обхода списка
  - `.insert(index, data)`
  - `.delete(index, [count])`
  - `.append(data)`
  - `.prepend(data)`
  - `.clone():list`
  - `.compare(list):Boolean`
- Сделать методы, аналогичные методам массива
  - `.find(item => expression:Boolean):data`
  - `.filter(item => expression:Boolean):list`
  - `.indexOf(data):Number`
  - `.includes(data):Boolean`
  - `.map(item => f(item)):list`
  - другие методы
- Декларативные аналоги
  - аналог find: `.search(field, value):data`
  - аналог filter: `.select({ field1: value1, field2: value2 }):list`
  - алалог sort: `.order('field2'):list`
- Асинхронные аналоги
  - `.find(item => expression:Boolean, data => {})`
  - `.filter(item => expression:Boolean, data:list => {})`
  - другие методы с колбеками, аналоги на Promise
- Реализовать циклический список
  - Выполнить перечисленное выше для циклического списка
