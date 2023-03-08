import "./public/style/style.css";

const productsDOM = document.querySelector("#products");
const TV = document.querySelector("#TV");
const smartphone = document.querySelector("#Smartphone");

const categories = ["Smartphone", "TV"];

const products = [
  {
    id: createID(),
    label: "Samsung",
    category: getFirstItem(categories, getTV),
    imageURL:
      "https://images.samsung.com/is/image/samsung/ua-fhd-t5300-ue43t5300auxua-frontblack-226800509?$650_519_PNG$",
  },
  {
    id: createID(),
    label: "LG",
    category: getFirstItem(categories, getSmartphone),
    imageURL: "https://m.media-amazon.com/images/I/51vyeC3YloL._AC_SX679_.jpg",
  },
  {
    id: createID(),
    label: "Sony",
    category: getFirstItem(categories, getTV),
    imageURL:
      "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision%2FBRAVIA+LCD+HDTV%2FFY+22%2FX80K%2FeComm+Images%2F43-50%2F1-+X80K-50-Sony-FRNT+D2C-1208x1053.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uJTJGQlJBVklBK0xDRCtIRFRWJTJGRlkrMjIlMkZYODBLJTJGZUNvbW0rSW1hZ2VzJTJGNDMtNTAlMkYxLStYODBLLTUwLVNvbnktRlJOVCtEMkMtMTIwOHgxMDUzLnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=Cvrx6-yJSYrpXonXq2PR5eso~4m-QWwhBufGSaKpzVBCVq~6jpnNvL4Ov7Tl98e~H75RDQXMSeulbtAC7-56uoRu2mPUN-0UNhpbzH~ts8DaQSmBMKQSRfDhJfyUfClkWUNYrLHfrYZjOSOjfJ7SroXdAzOfO6AR0I8BF11JA8uQsDhElxcIY9w-gzKdD4t5FyHdh7KGKAH~-vNylQsxuS~uZlojWSlNMUastiebNgHeHjcCtJU8j9W0sC4nxVseNc6HX57skTTfK9kSQhqAdgt5zjXdMvxS7b~sQSwC8I6-j9sgEjYZsp5qABsMkltOQ8x80tl2PzeO5rZluewEzw__&Key-Pair-Id=K37BLT9C6HMMJ0",
  },
  {
    id: createID(),
    label: "Lenovo",
    category: getFirstItem(categories, getTV),
    imageURL:
      "https://www.gizmochina.com/wp-content/uploads/2014/03/Lenovo-SmartTV.jpg",
  },
  {
    id: createID(),
    label: "Philips",
    category: getFirstItem(categories, getSmartphone),
    imageURL:
      "https://www.gizmochina.com/wp-content/uploads/2018/05/Philips-S395.jpg",
  },
];

! Filter

  const TVproducts = products.filter(function (product, i) {
    if (product.category === "TV") return product;
  });
! FOREACH , REVERSE

  TVproducts.reverse().forEach(function (product, i) {
    console.log(product);

    productsDOM.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product">
        <h2 class="label">Label : ${product.label}</h2>
        <h3 class="category">Cateogry : ${product.category}</h3>

        <div class="image-wrapper">
          <img class="image" src=${product.imageURL} />
        </div>

        <button>Buy</button>
      </div>
    `
    );
  });
});

! MAP

const htmlProducts = products.map(function (elem, index) {
  const h2 = document.createElement("h2");
  h2.className = "label";
  h2.innerHTML += `
  <h2>${elem.label}</h2>
  `;

  return h2;
});

console.log("[htmlProducts]", htmlProducts);

productsDOM.append(...htmlProducts);

smartphone.addEventListener("click", function (e) {
  e.preventDefault();

  const smaprtphoneProducts = products.filter(function (product, i) {
    if (product.category === "Smartphone") return product;
  });

  smaprtphoneProducts.forEach(function (product, i) {
    console.log(product);

    productsDOM.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product">
        <h2 class="label">Label : ${product.label}</h2>
        <h3 class="category">Cateogry : ${product.category}</h3>

        <div class="image-wrapper">
          <img class="image" src=${product.imageURL} />
        </div>

        <button>Buy</button>
      </div>
    `
    );
  });
});

TV.addEventListener("click", function (e) {
  e.preventDefault();

// .filter(elem , i) +
// .reverse() +
// .forEach(elem  ,i) +
// .sort +
// .map +
// .some +
// .every +
// .reduce

const group = [
  {
    firstName: "John",
    age: 23,
  },
  {
    firstName: "Mike",
    age: 32,
  },
  {
    firstName: "Bob",
    age: 13,
  },
];

const is_adult = group.every(function (student) {
  return student.age > 18;
});

console.log("[is_adult]", is_adult);

const is_Admit = group.some(function (el) {
  return el.age > 31;
});

console.log(is_Admit);

products.forEach(function (elem, i) {
  console.log(elem, i);
});

! SORT
console.log("a" < "A");
const numbers = ["A", "a"];

numbers.sort(function (x, y) {
  return x - y;
});
console.log(numbers);

function getFirstItem(arr, callback) {
  return arr.filter(callback)[0];
}

function getSmartphone(category) {
  if (category === "Smartphone") return category;
}

function getTV(category) {
  if (category === "TV") return category;
}

function createID() {
  return Math.random().toString().slice(3, 9);
}

const group = [
  {
    firstName: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    pocket: {
      left: ["keys", "food"],
      right: ["docs", "snikers"],
    },
  },
  {
    firstName: "John",
    age: 23,
    skills: ["HTML", "CSS"],
    pocket: {
      left: ["docs", "food"],
      right: ["keys", "snikers"],
    },
  },
  {
    firstName: "John",
    age: 23,
    skills: ["JS"],
    pocket: {
      left: ["lighter", "cigarettes"],
      right: ["rat", "cheese"],
    },
  },
];


  for (let key in group) {
    if (group.pocket === 'lighter') {
      console.log("good sheet")
    } else {
      console.log("ne good sheet")
    }
  }


console.log(getLighter);

// 1) If even one of group have a ligher return "good sheet"
// 2) Sum of age into the group
// 3) Divide group on three groups : "Who knows JS" , "Who dont's know JS" , "Who knows CSS"

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  console.log(arr[key])
}

let arr = new Array(2); // чи створиться масив [2] ?

console.log( arr[0] ); // undefined! елементи відсутні.

console.log( arr.length ); // довжина 2

class Heroy {
  constructor (name) {
    this.name = name
  }
}

