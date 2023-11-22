//    html.classList.remove('light')

//} else {
    //  html.classList.add('light')
    //}
    
    //}
    function togglemode() {
        const html = document.documentElement
        html.classList.toggle("light") 
        
        //pegar a tag img
        const img = document.querySelector("#profile img")
        
        //substituir img
        if(html.classList.contains('light')) {
        // se tiver light mode. adicionar img light

        img.setAttribute('src', './guga.jpeg')
        } else {
        //se tiver sem light mode, manter img normal
        img.setAttribute('src', './godan.jpeg')
        }
            
            
        }



