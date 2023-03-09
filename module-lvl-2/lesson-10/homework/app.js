const allInOne = [];

function sum(truck, sedan) {
  return truck + sedan;
}

const autos = {
  truck: [],
  sedan: [],
};

function createAuto(label, price, type, color) {
  const auto = {
    label: label,
    wheels: type === 'sedan' ? 4 : 8,
    price: price,
    color: color,
    signal: function() {
      console.log(type === 'sedan' ? 'beeeep' : 'WoooooW');
    },
  };

  autos[type].push(auto);

  return auto;
}

function createSedan(label, price, color) {
  return createAuto(label, price, 'sedan', color);
}

function createTruck(label, price, color) {
  return createAuto(label, price, 'truck', color);
}


createSedan('Toyota Camry', 24000, 'blue');
createSedan('Honda Civic', 20000, 'red');
createTruck('Ford F-150', 40000, 'black');
createTruck('Chevy Silverado', 45000, 'gray');

console.log(autos.truck.map(auto => auto.label));


const sedanCost = autos.sedan.reduce((total, auto) => total + auto.price, 0);

const truckCost = autos.truck.reduce((total, auto) => total + auto.price, 0);

const totalCost = sum(sedanCost, truckCost);
console.log(`Total cost: sedans=$${sedanCost}, trucks=$${truckCost}, all=$${totalCost}`);


allInOne.push(...autos.truck, ...autos.sedan);


const allTrucks = allInOne.filter(auto => auto.wheels === 8);
const allSedans = allInOne.filter(auto => auto.wheels === 4);


const index = 1;

const prev = allInOne[index - 1];

const next = allInOne[index + 1];

console.log('Prev:', prev);

console.log('Current:', allInOne[index]);

console.log('Next:', next);