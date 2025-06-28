import Fries from "../fries-svgrepo-com.png"

function home(){
    const content = document.getElementById('content')
    const image = document.createElement('img');
    image.src = Fries;
    
    content.appendChild(image)
    
    const headline = document.createElement('h1');
    headline.innerHTML = 'Welcome to Fry City';
    
    content.appendChild(headline)
    
    const about = document.createElement('p');
    about.innerHTML = 'Here at Fry City we give you the best fries and all its variations.<br> Enjoy our Birria Fries, Carne Asada Fries, and the house favorite Pulled Pork Fries'
    
    content.appendChild(about)
    }

    export default home;
    
    