const allInOne = [];

function sum(truck, sedan) {
  return truck + sedan;
}

const auto = {
  truck: [],
  sedan: [],
};

console.log('[auto]' , auto);

function auto(label, price) {
  const auto = {
    label: label,
    wheels: 4,
    price: price,
  };

  return auto;
}

const addedSedan = () => {

  return {
   typeCar : 'Sedan',
   wheelsCar : 4,
   signalCar : 'bepepepepepe',
  }
}

const addedTruck = () => {

  return {
    typeCar : 'Truck',
    wheelsCar : 8,
    signalCar : 'wowowowowowowow',
  }

}

function Sedan (label, price, color) {

  const typeSedan = auto(label, price, color);

  const carSedan = carSedan()

  const sedan = Object.assign (addedSedan, addedTruck);

  auto.sedan.push(sedan);

  return sedan;

}

const sedanBmw = Sedan('bmw', '60k$', 'red');

const sedanMers = Sedan('mers', '90k$', 'black');

const sedanSigma = Sedan('sigma', '40k$', 'green');


function Truck(label, price, color) {

  const autoTruck = auto(label, price, color);

  const typeTruck = addedTruck();

  const truck = Object.assign(addedSedan, addedTruck);

  auto.truck.push(truck);

  return truck;

}

function sedan() {
  typeCar : sedan
}


function truck() {
  // push into auto.truck
  // return ;
}

// Amount of trucks / sedans => by 3

//* 1) get all trucks label and print it to the console
//* 2) How much cost : all sedans , all trucks , and then all auto
//* 3) Concat arr truck and sedan in allInOne
//* 4) Get from allInOne only truck , only sendan
//* 5) Find elem by index '1' in allInOne and next + prev => [prev , 1 ,next


