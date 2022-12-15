const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const darken = document.querySelector(".darken");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
darken.addEventListener("click", closeMenus);

function toggleDesktopMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}

	desktopMenu.classList.toggle("inactive");

	const isMenuOpen = !desktopMenu.classList.contains("inactive");

	if (isMenuOpen) darken.classList.remove("inactive");
	else darken.classList.add("inactive");
}

function toggleMobileMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}

	closeProductDetailAside();

	mobileMenu.classList.toggle("inactive");

	const isMenuOpen = !desktopMenu.classList.contains("inactive");

	if (isMenuOpen) darken.classList.remove("inactive");
	else darken.classList.add("inactive");
}

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}

	const isProductDetailClosed =
		productDetailContainer.classList.contains("inactive");

	if (!isProductDetailClosed) {
		productDetailContainer.classList.add("inactive");
	}

	shoppingCartContainer.classList.toggle("inactive");

	const isMenuOpen = !desktopMenu.classList.contains("inactive");

	if (isMenuOpen) darken.classList.remove("inactive");
	else darken.classList.add("inactive");
}

function openProductDetailAside() {
	shoppingCartContainer.classList.add("inactive");
	productDetailContainer.classList.remove("inactive");
	darken.classList.remove("inactive");
}

function closeProductDetailAside() {
	productDetailContainer.classList.add("inactive");
	darken.classList.add("inactive");
}

const productList = [];
productList.push({
	name: "Camera",
	price: 120.0,
	image:
		"https://images.pexels.com/photos/1030928/pexels-photo-1030928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});
productList.push({
	name: "Atari",
	price: 155,
	image:
		"https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});
productList.push({
	name: "Vinyls",
	price: 40.0,
	image:
		"https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});

productList.push({
	name: "Camera",
	price: 120.0,
	image:
		"https://images.pexels.com/photos/1030928/pexels-photo-1030928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});
productList.push({
	name: "Atari",
	price: 155,
	image:
		"https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});
productList.push({
	name: "Vinyls",
	price: 40.0,
	image:
		"https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		// product= {name, price, image} -> product.image
		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);
		productImg.addEventListener("click", openProductDetailAside);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = "$" + product.price;
		const productName = document.createElement("p");
		productName.innerText = product.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement("figure");
		const productImgCart = document.createElement("img");
		productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productInfoFigure.appendChild(productImgCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);

function closeMenus() {
	const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
	const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
	const isCartAsideOpen = !aside.classList.contains("inactive");
	const isProductDetailOpen =
		!productDetailContainer.classList.contains("inactive");

	if (isDesktopMenuOpen) {
		toggleDesktopMenu();
		return;
	}
	if (isMobileMenuOpen) {
		toggleMobileMenu();
		return;
	}
	if (isCartAsideOpen) {
		toggleCarritoAside();
		return;
	}

	if (isProductDetailOpen) {
		closeProductDetailAside();
		return;
	}
}
