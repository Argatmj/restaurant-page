
function createIntro(){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement('p');

    h1.textContent = "Welcome to KFC"
    p.textContent = "Welcome to Kentucky Fried Chicken at Maplewood Plaza! We are delighted to serve you the world-famous, finger-lickin' good chicken that has made us a beloved name across the globe. Our commitment is to provide you with a dining experience that is as enjoyable as our delicious menu offerings."

    div.appendChild(h1);
    div.appendChild(p); 
    div.classList.add("home-div");

    return div;
}

function createHours(){
    const div = document.createElement("div");
    const p = document.createElement('p');
    const ul = document.createElement("ul");
    const days = [
        "Monday: 08:00 AM - 10:00 PM",
        "Tuesday: 08:00 AM - 10:00 PM",
        "Wednesday: 08:00 AM - 10:00 PM",
        "Thursday: 08:00 AM - 10:00 PM",
        "Friday: 10:00 AM - 11:00 PM",
        "Saturday: 10:00 AM - 11:00 PM",
        "Sunday: 11:00 AM - 9:00 PM"
    ];

    p.textContent = "Opening Hours";

    days.forEach(day => {
        const li = document.createElement("li");
        li.textContent = day;
        ul.appendChild(li);
    });

    div.appendChild(p);
    div.appendChild(ul);
    div.classList.add("home-div");

    return div;
}

function createLocation(){
    const div = document.createElement("div");
    const p = document.createElement('p');

    p.textContent = " KFC Maplewood Plaza 1234 Oak Street, Maplewood, KY 54321";

    div.appendChild(p);
    div.classList.add("home-div");

    return div;
}

export default function createHome(){
    const container = document.getElementById("content");

    const intro = createIntro();
    const menu = createHours();
    const location = createLocation();

    container.classList.add("home-content");
    container.appendChild(intro);
    container.appendChild(menu);
    container.appendChild(location);
}