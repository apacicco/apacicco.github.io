window.onload = () => {
    document.getElementById("button-loop").onclick = makeLoops;

    document.getElementById("button-grow").onclick = growButton;

    document.getElementById("button-shrink").onclick = shrinkButton;

    var width = 100;
   // document.getElementById("square").style.setProperty("--x", width + "px");
    setSquareWidth();
}


const makeLoops = () => {
    console.log("make looooooooooooooooops");
    const resultDiv = document.getElementById("result");
    const ul = document.createElement("ul");
    resultDiv.append(ul);//WHAT IS THE error    
    for(let i = 1; i <=10; i++)
    {
       // ul.append(document.createElement("li").append(document.createTextNode(i)));
       const li = document.createElement("li");
       li.textContent = i;
       ul.append(i);
    }
    
}



const growButton = () => {
    console.log("grow");
    width += 10;
    setSquareWidth();
} 

const shrinkButton = () => {
    console.log("shrink");
    width -= 10;
    setSquareWidth();

} 

const setSquareWidth = () => {
    document.getElementById("square").style.setProperty("--x", width + "px");
}



const listing = () => {
    console.log("LISITING");
    const lis = document.querySelectorAll("#className li");
    //if u put getElementsByTagName("li"); it selects all items
    //for each 

    for(let i in lis){//access to index, not item
        lis[i].innerHTML("num num numn numumumumumumumumum");
    }
}


const countNums =()=> {
    console.log("in count");
    let  count = 0;
    let p = doucment.querySelectorAll("#idname");
   // p.innerHTML("hi");
    const updateCount = setInterval(() => {
    count ++;
    p.innerHTML = count;

    if (count >= 10)
    {
        clearInterval(updateCount);
    }
    
   }, 1000);//executes whatever function every 1 second (1000 miliseconds);

   //to get out of interval = clearInterval(updateCount);


}
/*
windows.onload = () => {
    
}
*/