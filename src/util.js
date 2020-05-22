
export const removeLastFruit = () => {

    let fruit = document.querySelector('.fruit-list:last-child');

    if (fruit) {
        fruit.remove();
    }

}

export const removeAllFruit = () => {
    let fruits = document.querySelectorAll('.fruit-list');
    fruits.forEach(fruit => {
        fruit.remove()
    })
}
 
export const randPos = () => {
    let rand = Math.floor(Math.random() * 15);
    return rand * 25
}


export const addList = (str) => {
    let basket = document.getElementById('basket')
    let list = document.createElement('li')
    list.setAttribute('class', 'fruit-list')
    let fruit = document.createTextNode(str)
    list.appendChild(fruit)
    basket.appendChild(list)
}

export const addFruit = () => {

    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {
        addList('🍎');
        replaceFruit('apple');
    }

    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {
        addList('🥭');
        replaceFruit('mango');
    }

    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {
        addList('🍊');
        replaceFruit('orange');
    }

    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {
        addList('🍌');
        replaceFruit('banana');
    }

    if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {
        addList('🍇');
        replaceFruit('grape');
    }

    if ((circle.style.left === strawberry.style.left) && (circle.style.top === strawberry.style.top)) {
        addList('🍓');
        replaceFruit('strawberry');
    }
}

export const addFruits = (fruits) => {
    for (let key in fruits) {
        let board = document.getElementById('board');
        let fruit = document.createElement('div');
        fruit.setAttribute('id', key);
        fruit.setAttribute('class', 'fruit');
        let pic = document.createTextNode(fruits[key]);
        fruit.appendChild(pic)
        board.appendChild(fruit)
    }
}

export const randomFruit = (fruits, lvl=3) => {
    let res = [];

    while (res.length < lvl) {
        let rand = Math.floor(Math.random() * fruits.length)
        res.push(fruits[rand])
    }
    return res
};

export const replaceFruit = (str) => {
    let fruit = document.getElementById(str);
    fruit.style.top = randPos();
    fruit.style.left = randPos();
}

export const placeFruits = () => {

    let fruits = document.querySelectorAll('.fruit');

    fruits.forEach(fruit => {
        fruit.style.position = 'absolute';
        fruit.style.left = randPos();
        fruit.style.top = randPos();
    })
}


