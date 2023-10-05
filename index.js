const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: "⭐⭐⭐⭐",
    reviews: 250,
    seller: 'HP',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Apple iPhone 14 128GB Purple',
    price: 889,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 48,
    seller: 'Apple',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1058/10581402/1222-apple-iphone-14-128gb-purpura-libre.jpg'
  },
  {
    name: 'Apple iPad 2021 10.2" 64GB',
    price: 379,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 230,
    seller: 'Apple',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/57/579020/1719-apple-ipad-2021-102-64gb-wifi-gris-espacial.jpg'
  },
  {
    name: 'Asus TUF Gaming F15',
    price: 1039,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 707,
    seller: 'Asus',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1046/10466208/1836-asus-tuf-gaming-f15-fx506hc-hn004-intel-core-i5-11400h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'PcCom Alurin Intel Core i3-13100',
    price: 410,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 2,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1071/10719384/1985-pccom-alurin-intel-core-i3-13100-8gb-500gb-ssd.jpg'
  },
  {
    name: 'PcCom Lite i5 13400f',
    price: 902,
    stars: "⭐⭐⭐⭐",
    reviews: 45,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1074/10744127/1202-pccom-tempest-pc-lite-intel-core-i5-13400f-16gb-500gb-ssd-gtx1650-windows-11-home-negro-comprar.jpg'
  },
  {
    name: 'Logitech G733 Lightspeed RGB',
    price: 128,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 1181,
    seller: 'Logitech',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/31/317616/1650-logitech-g733-auriculares-gaming-inalambricos-negros.jpg'
  },
  {
    name: 'Xiaomi TV Q1E 55" Ultra HD',
    price: 429,
    stars: "⭐⭐⭐⭐",
    reviews: 935,
    seller: 'Xiaomi',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/82/822013/1350-xiaomi-tv-q1e-55-qled-ultrahd-4k-hdr10.jpg'
  },
  {
    name: 'MSI PRO Z790-P WIFI',
    price: 245,
    stars: "⭐⭐⭐⭐",
    reviews: 20,
    seller: 'MSI',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1064/10641900/1564-msi-pro-z790-p-wifi-review.jpg'
  },
  {
    name: 'Sony PlayStation 5 Chasis C',
    price: 549,
    stars: "⭐⭐⭐⭐⭐",
    reviews: 429,
    seller: 'Sony',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1066/10662361/1210-sony-playstation-5-chasis-c.jpg'
  },
];

const productsElement = document.querySelector(".products");

const sellerFilterElement = document.querySelector("#sellerFilter");

const selectElement = document.querySelector("#sellerFilter");

const inputPriceElement = document.querySelector("#price");

const buttonPriceElement = document.querySelector("#priceButton");

const buttonResetElement = document.querySelector("#resetButton");





selectElement.addEventListener("change", filterSeller);
inputPriceElement.addEventListener("change", filterPrice);
buttonPriceElement.addEventListener("click", filterPrice);

buttonResetElement.addEventListener("click", resetFilters);

// Pintar productos en pantalla

const paintProductDiv = (productsArray) => {
  productsArray.forEach(product => {
    let productTemplate =
      `<div class="product"   id="${product.seller}" data-value="${product.price}">
      <a href="#">
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <h2>
          ${product.price}
        </h2>
        <p>
          ${product.stars} (${product.reviews}) reviews
        </p>
      </a>
    </div>
`;
    productsElement.innerHTML += productTemplate;
  });
};

paintProductDiv(products);

// Pintar options del filtro por vendedores

const paintFilterDiv = (productsArray) => {
  const seller = [];
  productsArray.forEach(product => {
    if (!seller.includes(product.seller)) {
      let sellerFilterTemplate =
        `
        <option value="${product.seller}">${product.seller}</option>`;
      sellerFilterElement.innerHTML += sellerFilterTemplate;
      seller.push(product.seller);
    }
  });
};


// Funcion que escuche el evento y filtre

function filterSeller(e) {
  const hide = document.querySelectorAll(".product");
  // Crear una funcion que adhiera una clase a los elementos que no coincidan con el checked y ocultarlos
  for (element of hide) {
    if (e.target.value === "seller") {
      element.classList.remove("hide");
    }
    else if (element.id !== e.target.value) {
      element.classList.add("hide");
    }
    else {
      // Lo opuesto
      element.classList.remove("hide");
    }
  }
}


let price = 0;
function filterPrice(e) {
  const hide = document.querySelectorAll(".product");
  if (e.type === "change") {
    price = parseInt(e.target.value);
  }
  else {
    for (let element of hide) {
      if (parseInt(element.getAttribute("data-value")) >= parseInt(price) && parseInt(price) > 0) {
        element.classList.add("hide");
      }
    }
  }

}

function resetFilters() {
  console.log(inputPriceElement.value);
  inputPriceElement.value = "";
  const hide = document.querySelectorAll(".product");
  for (let element of hide) {
    element.classList.remove("hide");
  }

}



paintFilterDiv(products);



