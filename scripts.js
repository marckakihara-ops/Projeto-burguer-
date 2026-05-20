const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');
const formatCurrency = (value) => {
    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return newValue;
}


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {
        myLi += `<li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>`;
    });
    list.innerHTML = myLi;
}

function mapAllitems() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }));

    showAll(newPrices)
}

function SumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `<li>
     <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
        </li>`;

}

function filterAllItems() {
    const veganItems = menuOptions.filter((product) => product.vegan === true);
    showAll(veganItems);
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllitems);
buttonSumAll.addEventListener('click', SumAllItems);
buttonFilterAll.addEventListener('click', filterAllItems);











