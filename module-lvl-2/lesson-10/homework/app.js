const allInOne = [];

const auto = {
  truck: [],
  sedan: [],
};

// auto => label , wheels , price
function auto(label) {
  const auto = {
    label: label,
    wheels: 4,
  };

  return auto;
}

// label
// wheels
// price
// *-----------
// type = sedan
// color = color
// wheels = 4
// signal () => beeeep

function sedan() {
  // push into auto.sedan
  // return ;
}

// label
// wheels
// price
// *-----------
// type = truck
// color = color
// wheels = 8
// signal () => WoooooW

function truck() {
  // push into auto.truck
  // return ;
}

// Amount of trucks / sedans => by 3

//* 1) get all trucks label and print it to the console
//* 2) How much cost : all sedans , all trucks , and then all auto
//* 3) Concat arr truck and sedan in allInOne
//* 4) Get from allInOne only truck , only sendan
//* 5) Find elem by index '1' in allInOne and next + prev => [prev , 1 ,next]
