const orderedListDino = document.querySelectorAll('ol>li');
const unorderedListDino = document.querySelectorAll('ul>li');
const pictureDino = document.querySelectorAll('#row>img')
document.querySelector('#toggle').addEventListener('click', extinction)

function lineThrough(event){
    event.target.style.textDecoration = 'line-through'
}

for (let i=0; i<orderedListDino.length; i++){
    orderedListDino[i].addEventListener('click', lineThrough)
}

function zeroOpacity(event){
    event.target.style.opacity = '0'
}

for (let i=0; i<unorderedListDino.length; i++){
    unorderedListDino[i].addEventListener('click', zeroOpacity)
}


function shrinking(event){
    event.target.style.width = '0'
}

for (let i=0; i<pictureDino.length; i++){
    pictureDino[i].addEventListener('click', shrinking)
}

function extinction(){
    for (let i=0; i<orderedListDino.length; i++){
        orderedListDino[i].style.textDecoration = 'line-through'
    }
    for (let i=0; i<unorderedListDino.length; i++){
        unorderedListDino[i].style.opacity = '0'
    }
    for (let i=0; i<pictureDino.length; i++){
        pictureDino[i].style.width = '0'
    }
}

