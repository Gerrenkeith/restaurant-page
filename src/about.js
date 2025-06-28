import drink from "../drink.png"

function about(){
    console.log('gerren')
    const content = document.getElementById('content')
    const image = document.createElement('img');
    image.src = drink;
    
    content.appendChild(image)
    
    }

export default about;