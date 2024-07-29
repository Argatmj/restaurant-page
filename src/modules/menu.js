import original from '../assets/Original.jpg'
import Burger1 from '../assets/Burger1.jpg'
import Burger2 from '../assets/Burger2.jpg'
import Burger3 from '../assets/Burger3.jpg'
import MealDeal1 from '../assets/MealDeal1.jpg'
import MealDeal2 from '../assets/MealDeal2.jpg'


const menuItems = [
    { src: original, name: '2 Original pieces meal' },
    { src: Burger1, name: 'Fire Zinger Stacker meal' },
    { src: Burger2, name: 'Original Burger meal' },
    { src: Burger3, name: 'Veggie Burger meal' },
    { src: MealDeal1, name: '2 Original Mega meal' },
    { src: MealDeal2, name: 'Veggie Kipsalon meal' },
];

function createCard(item){
    const div = document.createElement("div");
    const picDiv = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.classList.add("card");
    picDiv.classList.add("pic");

    p.textContent = item.name;
    img.src = item.src;
    img.alt = item.name;

    picDiv.appendChild(img);
    div.appendChild(picDiv);
    div.appendChild(p);

    return div;
}

export default function createMenu(){
    const container = document.getElementById("content");

    menuItems.forEach(item => {
        const card = createCard(item);
        container.append(card);
    });

    container.classList.add("menu-content");
}