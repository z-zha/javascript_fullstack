let listener = [
  () => {console.log(1)},
  () => {console.log(2)},
  1,
  2,
  3
];
const subPub = {
  'price':[
    () => {console.log(3)},
    () => {console.log(4)}

  ]
}
for (let i =0; i < subPub.price.length; i++) {
  console.log('---', subPub.price[i]);
}

// price对应的方法执行一遍
class Events {
  constructor() {
    this.listener = [];
  }
  on(fn) {
    this.listener.push(fn);
  }

  emit() {
    for(let fn of this.listener) {
      fn()
    }
  }
}
const ev = new Events();
ev.on(() => {console.log(1) })
ev.on(() => {console.log(2) })
ev.emit();  // 执行的