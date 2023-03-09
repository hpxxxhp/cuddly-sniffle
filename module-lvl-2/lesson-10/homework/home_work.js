
const allInOne = [];

console.log("[ALL IN ONE]", allInOne);

const auto = 
    {
    truck: [],
    sedan: [],
    };
;
console.log("[AUTO]" ,auto);

// auto => label , wheels , price

function Auto(label, price, color){
    return {
        label : label,
        price : price,
        color: color,
    }
}

function TypeSedan(){
    return{
        type: "SEDAN",
        wheels: 4,
        signal: "beeeep"
    }
}

function TypeTruck(){
    return{
        type: "TRUCK",
        wheels: 8,
        signal: "WoooooW"
    }
}

function Sedan(label,price,color) {
    
    const autoSedan = Auto(label, price, color);
    const typeSedan = TypeSedan();

    const sedan = Object.assign(autoSedan,typeSedan );

    auto.sedan.push(sedan);
    // console.log(sedan);
    return sedan;
}

const sedanPejo = Sedan("Pejo","10000 $","RED");
const sedanReno = Sedan("Reno", "15000 $", "Black");
const sedanVolvo = Sedan ("Volvo","20000 $","Pink");

function Truck(label, price, color) {

    const autoTruck = Auto(label, price, color);
    const typeTruck = TypeTruck();

    const truck = Object.assign(autoTruck,typeTruck );

    auto.truck.push(truck);
    return truck;
}

const truckDaf = Truck("DAF"," 120000 $","YELLOU");
const truckScania = Truck("SCANIA", " 150000 $", "WHITE");
const truckIveco = Truck ("IVECO"," 80000 $","BLUE");


 //* 1) get all trucks label and print it to the console

const truckLabel = auto.truck.map(function(labelTruck){
     return labelTruck.label;
});

console.log("LABEL-TRUCK", truckLabel);

//* 2) How much cost : all sedans , all trucks , and then all auto

const costOfAllSedan = auto.sedan.reduce(function(sum,sedan){
    return sum + parseInt(sedan.price);
},0);
console.log("[COST OF ALL SEDAN]",  " *** " + costOfAllSedan + " $");

const costOfAllTruck = auto.truck.reduce(function(sum,truck){
    return sum + parseInt(truck.price);
},0);
console.log("[COST OF ALL TRUCK]",  " *** " + costOfAllTruck + " $");

function constOfAllAuto(costOfAllSedan,costOfAllTruck){
  return parseInt(costOfAllSedan) + parseInt(costOfAllTruck);
}

const result = constOfAllAuto(costOfAllSedan,costOfAllTruck);

console.log("[COST OF ALL AUTO]", " *** " + result + " $");


//* 3) Concat arr truck and sedan in allInOne

allInOne.push(...auto.truck, ...auto.sedan);
console.log(allInOne.length);

//* 4) Get from allInOne only truck , only sendan

//  4.1)
const getTruck = allInOne.filter(typeTruck => typeTruck.type === "TRUCK");
console.log("[GET TRUCK]", getTruck);
//  4.2)
const getSedan = allInOne.filter(typeSedan => typeSedan.type === "SEDAN");
console.log("[GET SEDAN]", getSedan);

//* 5) Find elem by index '1' in allInOne and next + prev => [prev , 1 ,next]

console.log("[ ELEMENT AT INDEX '1' ]" ,allInOne[1]);

const newArr = allInOne.slice(0,3);
console.log("[NEW ARR]", newArr);

// 6) Вывести только названия авто:

const arrLabel = allInOne.forEach( element => console.log(element.label));

















