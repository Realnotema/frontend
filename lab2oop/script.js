Array.prototype.reverse = dublicateArray

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

function UserNew(name, age) {
    this.name = name;
    this.age = age;

    this.hello = function() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    };
}

class UserNew2 {
    #tel = "";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get tel() {
        return this.#tel;
    }

    set tel(value) {
        const regex = /^\+7\d{10}$/;
        if (regex.test(value)) {
            this.#tel = value;
        } else {
            console.error("Incorrect enter.");
        }
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

class UserNew3 {
    #tel = "";
    #age = 0;
  
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      console.log(`Hi! My name is ${this.name}. And I am ${this.#age} years old.`);
    }
  
    get age() {
      return this.#age;
    }
  
    set age(value) {
      if (Number.isInteger(value) && value >= 1 && value <= 100) {
        this.#age = value;
      } else {
        console.error("Incorrect enter.");
      }
    }
  
    get tel() {
      return this.#tel;
    }
  
    set tel(number) {
      const regex = /^\+7\d{10}$/;
      if (regex.test(number)) {
        this.#tel = number;
      } else {
        console.error("Incorrect enter.");
      }
    }
  }
  
class Student extends UserNew3 {
  #knowledge

    constructor(name, age) {
        super(name, age);
        this.#knowledge = 0;
    }
  
    learn() {
        this.knowledge++;
    }
  
    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }
  }

  const dublicateArray = () => {
    return [...this, ...this];
  };