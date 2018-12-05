var square = x => x * x;

console.log(square(122));

var user = {
  name: "Carlos Pedro",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}!!!`);
  },
  sayHiAlt(fucck, you, ass) {
      console.log(arguments);
      console.log(`Hi, I'm ${this.name}!!!`);}
};

user.sayHi();
user.sayHiAlt(1,2,3);