import { NotImplementedError } from "../extensions/index.js";

// import { Node } from '../extensions/list-tree.js';

export default class BinarySearchTree {
constructor() {
this.top = null;
}

root() {
return this.top;
}

add(data) {
this.top = this.insert(this.top, data);
}

insert(node, data) {
if (!node) return { data, left: null, right: null };
if (data < node.data) node.left = this.insert(node.left, data);
if (data > node.data) node.right = this.insert(node.right, data);
return node;
}

has(data) {
return this.find(data) !== null;
}

find(data) {
let node = this.top;
while (node && node.data !== data) {
node = data < node.data ? node.left : node.right;
}
return node;
}

remove(data) {
this.top = this.cut(this.top, data);
}

cut(node, data) {
if (!node) return null;
if (data < node.data) node.left = this.cut(node.left, data);
else if (data > node.data) node.right = this.cut(node.right, data);
else if (!node.left) return node.right;
else if (!node.right) return node.left;
else {
let next = node.right;
while (next.left) next = next.left;
node.data = next.data;
node.right = this.cut(node.right, next.data);
}
return node;
}

min() {
let node = this.top;
while (node && node.left) node = node.left;
return node ? node.data : null;
}

max() {
let node = this.top;
while (node && node.right) node = node.right;
return node ? node.data : null;
}
}