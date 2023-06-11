class parent {
  constructor() {
    this.fathername = "Swpan Adhikar";
    this.mother = "Shilan Chakraborthy";
  }
}

class child extends parent {
  constructor(name) {
      super();
    this.name = name;
  }
}

const baby1 = new child("Hridoy");

const baby2 = new child("Anik");

console.log(baby1, baby2);
