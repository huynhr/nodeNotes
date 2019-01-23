console.log('------------Parent Scope----------------');

const bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    const _this = this;
    this.tasks.forEach(function (task) {
      console.log(_this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();

console.log('------------Lexical Scope----------------');

const bat = {
  name: 'Batman',
  tasks: ['transform', 'fly', 'beat up bad guys'],
  say: 'I am ' + this.name,
  showTasks: function() {
    this.tasks.forEach(task => {
      // the fat arrow function refers to it's current lexical scope and no further
      // the value of this is not found in it's lexical scope so it goes to it's enclosing scope
      console.log(this.name + " wants to " + task);
      // this.tasks.forEach(() => console.log(this.name));
    });
  }
}

bat.showTasks();

console.log('--------------TEST-------------');

class SuperHero {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.saying = this.name + ' ' + this.power;
  }
}

const Batman = new SuperHero('batman', 'super detective');

console.log(Batman.saying);