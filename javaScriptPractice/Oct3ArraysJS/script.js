window.onload =()=> {
    document.getElementById("button-array").onclick = show;

    document.getElementById("button-grow").onclick = addToy;
    
    showToyTable();

    setInterval(slide, 1000);
}
//arrays
let toys = ["drum", "ball", "rope", "balloon", "tire"];
const show =()=> {
    console.log("show");

     
    for(let i in toys)
    {
        //let result = document.getElementByID("result");
        //result.innerHTML += toys(i); look at her html
        //result.innerHTML = ""; clears
        console.log(i);
    }
}

const addToy =()=>{
    const toy = document.getElementById("input").value;
    toys.push(toy);
    show();

}

const showToyTable =()=>{
    //associative arrays are hashMaps
    /*
    barbie | $7.54
    dollhouse | $86.23
    slide | $23.57
    ken | $2.30
    bike | $64.60

    let toyPrice = [];
    toyPrice["barbie]" = 7.54
    and so on

    const toyTable = document.getElementById("toy-table");// OR const toyTable = document.querySelector("#toy-table");

    for(let toy in toyPrice)
    {
        console.log("toy array for loop");
        const tr = document.createElement("tr");
        toyTable.append(tr);
        const td = document.createElement("td");
        const text = document.createTextNode(toy);

        td.append(text);
        tr.append(td); 

        tr.onclick = () => {
           let p = document.getElementById("toy-description");
           p.innerHTML = `${toy} costs ${toyPrice[toy]}`
           
            console.log(`clicked on ${toy}`);
            tr.classList.add("special");

        }


        tr.innerHTML = `<td>${toy}<td>`;
        
        or 

        toyTable.innerHTML += `<tr><td>${toy}<td><tr>`;
        //as a replacement for all 3
    }




    */
}

const slide =()=> {
    console.log("slidiiiiiiiiing");

    const currentImg = document.querySelector("#slide-show :not(.hidden");

    console.log(currentImg);

    currentImg.classList.add("hidden");

    
    let nextImg = currentImg.nextElementSibling;

    console.log(nextImg);

    if(nextImg == null)
    {
        nextImg = doucment.querySelector("#slideshow :first-child");
    }

    nextImg.classList.remove("hidden");

    


    //take section id of where slidehow is, get child, and then use not capability
}
