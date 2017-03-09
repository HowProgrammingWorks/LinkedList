'use strict';

function LeftLinkedNode(prev, data) {
  this.prev = prev;
  this.data = data;
}

LeftLinkedNode.prototype.foreach = function(f) {
  f(this.data);
  if (this.prev !== null)
    this.prev.foreach(f);
};

const ln1 = new LeftLinkedNode(null, { name: 'first' });
const ln2 = new LeftLinkedNode(ln1, { name: 'second' });
const ln3 = new LeftLinkedNode(ln2, { name: 'third' });

ln3.foreach((d)=>{ console.dir(d); });

function RightLinkedNode(prev, data) {
  this.next = null;
  if (prev !== null)
    prev.next = this;
  this.data = data;
}

RightLinkedNode.prototype.foreach = function(f) {
  f(this.data);
  if (this.next !== null)
    this.next.foreach(f);
};

const rn1 = new RightLinkedNode(null, { name: 'first' });
const rn2 = new RightLinkedNode(rn1, { name: 'second' });
const rn3 = new RightLinkedNode(rn2, { name: 'third' });

rn1.foreach((d)=>{ console.dir(d); });


