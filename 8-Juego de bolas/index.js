window.onload = () =>{
    newBola();
    newBolaalclicar();
    arr = NBolas();
    for (let index = 0; index < arr.length; index++) {
        arr[index].incX = Math.floor(Math.random() * (11 - 1)) + 1;
        arr[index].incY = Math.floor(Math.random() * (11 - 1)) + 1;
        animar(arr[index],arr[index].incX,arr[index].incY);
    } 
    }
    // Función para animar un número indefinido de bolas.
    function animar(bola,incX,incY) {
        // Evento para cuando pulsas una pelota con el click izquierdo del ratón.
        // Si la bola está en movimiento se para y sino se mueve.
        bola.addEventListener("mousedown", function() {
            if(incX == 0 && incY == 0){
                incX = Math.floor(Math.random() * (11 - 1)) + 1;
                incY = Math.floor(Math.random() * (11 - 1)) + 1;
            }else{
                incX = 0;
                incY = 0;
            }
          });
        // A continuación movemos cada bola.
        setInterval(function(){
            
        let radio = parseInt(bola.getAttribute("r"));
        let posXActual= parseInt(bola.getAttribute("cx"))+incX;
        bola.setAttribute("cx",posXActual);
        let posYActual = parseInt(bola.getAttribute("cy"))+incY;
        bola.setAttribute("cy",posYActual);
        let sizeSVG = document.getElementsByTagName("svg")[0].getBoundingClientRect();
        if ((posXActual-radio)<=0 || (posXActual+radio)>=sizeSVG.width)
        incX*= -1;
        if ((posYActual-radio)<=0 || (posYActual+radio)>=sizeSVG.height)
        incY*= -1;

        
        },30)
    }

    // Función que debuelve el array de bolas.
    function NBolas () {
        let array = document.getElementsByTagName("circle");
        return array;
    }

    // Función para añadir nuevas bolas.
    function newBola () {
        let num = Math.floor(Math.random() * (21 - 1)) + 1;
        const svg = document.getElementById("svg");
        for (let i = 0; i < num; i++) {
            let x = Math.floor(Math.random() * (460 - 40)) + 40;
            let y = Math.floor(Math.random() * (460 - 40)) + 40;
            let r = Math.floor(Math.random() * (41 - 10)) + 10;
            let scolor = Math.floor(Math.random() * (7 - 0)) + 0;
            let ncolor = Math.floor(Math.random() * (7 - 0)) + 0;
            let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
            let bola = document.createElementNS("http://www.w3.org/2000/svg","circle");
            bola.setAttribute("cx",x);
            bola.setAttribute("cy",y);
            bola.setAttribute("r",r);
            bola.setAttribute("stroke",color[scolor]);
            bola.setAttribute("stroke-width","4");
            bola.setAttribute("fill",color[ncolor]);
            svg.appendChild(bola);
        }
    }

    // Con clase lo he intentado pero no me ha salido.

    // La siguiente función añade una bola si haces click derecho del ratón sobre el svg.
    function newBolaalclicar () {
        const svg = document.getElementById("svg");
        svg.addEventListener("auxclick", function() {
            let x = Math.floor(Math.random() * (460 - 40)) + 40;
            let y = Math.floor(Math.random() * (460 - 40)) + 40;
            let r = Math.floor(Math.random() * (41 - 10)) + 10;
            let scolor = Math.floor(Math.random() * (7 - 0)) + 0;
            let ncolor = Math.floor(Math.random() * (7 - 0)) + 0;
            let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
            let bola = document.createElementNS("http://www.w3.org/2000/svg","circle");
            bola.setAttribute("cx",x);
            bola.setAttribute("cy",y);
            bola.setAttribute("r",r);
            bola.setAttribute("stroke",color[scolor]);
            bola.setAttribute("stroke-width","4");
            bola.setAttribute("fill",color[ncolor]);
            svg.appendChild(bola);
            bola.incX = Math.floor(Math.random() * (11 - 1)) + 1;
            bola.incY = Math.floor(Math.random() * (11 - 1)) + 1;
            animar(bola,bola.incX,bola.incY);
          });
          
            
    }
    