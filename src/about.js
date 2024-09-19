export function about(){
    console.log('gerren')
    const content = document.getElementById('content')
    const image = document.createElement('img');
    image.src = '/drink.png';
    
    content.appendChild(image)
    
    }