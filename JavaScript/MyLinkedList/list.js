//Constructor for list element - Node
function Node(prev, next, value) {
  this.prev = prev;
  this.next = next;
  this.value = value;
}
//Constructor for LinkedList
function LinkedList() {
   this.head = null;
}
//--------------------Add--------------------
//Push elements to the start of the array
LinkedList.prototype.unshift = (...args) => {
  var current;
  var prev = null;
  var next = this.head;

  for (let i = args.length - 1; i >= 0; i--) {
      current = new Node(prev, next, args[i]);
      next = current;
  }

  this.head = current;
};
//Push element to the end of array
LinkedList.prototype.push = (val) => {
  if (this.head == null){
    this.head = new Node(null, null, val);
  } else {
    let current = this.head;
    while (current.next != null){
      current = current.next;
    }
    var item = new Node(current, null, val);
    current.next = item;
  }
};
//Insert elements inside of the list on the index
LinkedList.prototype.insert = (index, value) => {
  let current = this.head;
  let i = 0;

  while (current.next != null && index != i) {
    current = current.next;
    i++;
  }

  if (i == index){
    if (i == 0){
      this.head.prev = new Node(null, this.head, value);
      this.head = this.head.prev;
    } else {
      var item = new Node(current.prev, current, value);
      current.prev.next = item;
    }
  } else {
    if (i == index - 1) {
      current.next = new Node(current, null, value);
    }
  }
};
//Append elements to the end of list
LinkedList.prototype.append = (...args) => {
  let current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  for (let i = 0; i < args.length; i++) {
    LinkedList.prototype.add(args[i]);
  }
};
//--------------------Find--------------------
//Find first item with given value
LinkedList.prototype.findFirst = (value) => {
  let current = this.head;

  do {
    if (current.value == value)
      return true;

    current = current.next;
  } while(current != null);

  return false;
};
//Returns array of all items with given value
LinkedList.prototype.findAll = (value) => {
  let current = this.head;
  let results = [];

  do {
    if (current.value == value)
      results.push(current);

    current = current.next;
  } while(current != null);

  return results;
};
//Find(if element is regular expression, we test if item is proper for it
//and call callback function, if not we compare it as ordinal value
//and call callback)
LinkedList.prototype.find = (value, callback) => {
  let current = this.head;

  var comparator;

  if (value instanceof RegExp) {
    comparator = (current) => { return value.test(current.value); };
  } else {
    comparator = (current) => { return current.value == value; };
  }

  do {
    if (comparator(current)) {
      callback(current.value);
    }
    current = current.next;
  } while(current != null);
};
//Add array of elements to the end of list
LinkedList.prototype.append = (...args) => {
  let current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  for (let i = 0; i < args.length; i++) {
    LinkedList.prototype.add(args[i]);
  }
};
//--------------------Print--------------------
LinkedList.prototype.print = () => {
  let current = this.head;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
};
//--------------------Remove--------------------
//Removal from the start of list
LinkedList.prototype.shift = () => {
    if (this.head == null){
      return null;
    }
    else{
      var returnVal = this.head.value;

      if (this.head.next == null) {
         this.head = null;
      }
      else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return returnVal;
    }
}
//Removal from the end of list
LinkedList.prototype.pop = () => {
  let current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  current.prev.next = null;
  return current.value;
};
//Removal of certain value in the list
LinkedList.prototype.erase = (value) => {
  let current = this.head;
  while (current != null) {
    if (current.value == value)
      break;
    current = current.next;
  }

  if (current != null){
    if (current.next == null) {
      current.prev.next = null;
      current.prev = null;
    } else if (current.prev == null) {
      this.head = current.next;
      this.head.prev = null;
    }
    else{
       current.prev.next = current.next;
       current.next.prev = current.prev;
    }
    LinkedList.prototype.erase(value);
  }
};

//Module exports
module.exports = LinkedList;
