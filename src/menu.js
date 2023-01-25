export default function generateMenu() {
    const element = document.createElement('div');
    element.classList.add('page');
    //const burgers = {};
    const burgersArray = [
        {
            id: 'burgerOne',
            name: 'Burger One',
            detail: 'Delicious burger Number One'
        }, 
        {
            id: 'burgerTwo',
            name: 'Burger Two',
            detail: 'Delicious burger Number Two'
        },
        {
            id: 'burgerThree',
            name: 'Burger Three',
            detail: 'Delicious burger Number Three'
        }
    ]
    burgersArray.forEach(burger => {
        const newBurger = document.createElement('div');
        newBurger.classList.add('burger');
        newBurger.id = burger.id;
        const itemHeader = document.createElement('h3');
        itemHeader.innerHTML = burger.name;
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        const itemDetail = document.createElement('div');
        itemDetail.classList.add('item-detail');
        itemDetail.innerHTML = `${burger.detail} <br><br>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.` ;
        newBurger.append(itemHeader, itemImage, itemDetail);
        element.appendChild(newBurger);
        //burgers[burger.codeName] = newBurger;
    });
/* 
    burgerOne.append(itemImage, itemDetail)
    burgerOne. innerHTML='Burger One';
    const burgerTwo = document.createElement('div');
    burgerTwo.classList.add('burger');
    burgerTwo.innerHTML='Burger Two';
    const burgerThree = document.createElement('div');
    burgerThree.classList.add('burger');
    burgerThree.innerHTML='Burger Three';
    //element.appendChild(burgerOne)
    element.append(burgerOne, burgerTwo, burgerThree) */
    return element
}