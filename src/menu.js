import Burger from '../burger-huge-svgrepo-com.png'

 function menu(){
    const content = document.getElementById('content')
    const image = document.createElement('img');
    image.src = Burger;
    
    content.appendChild(image)
    
    }
    
export default menu;