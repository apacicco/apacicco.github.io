window.onload=()=> {
    document.getElementById("run-button").onclick = movePhoto;

    document.getElementById("therm").onclick = fillTherm;
}

const movePhoto =()=> {
    
    const root = document.querySelector(":root");
   const img1 = document.getElementById("right");//get element ID;
   let count = 0;

   const updateCount = setInterval(() => {
    
    count++; 

    if (count <= 200 && count % 2 == 0)
    {
        root.style.setProperty("--numMargin", count + "px");
        img1.src="images/right-leg-forward.jpg";
        console.log("right" + count);
        
    } else if (count <= 200 && count % 2 != 0)
    {
        root.style.setProperty("--numMargin", count + "px");
        img1.src="images/left-leg-forward.jpg";
        console.log("left" + count);
       // --numMargin == numMargin + numMargin;
        
        
    } else {
        clearInterval(updateCount);
    }
    
   }, 100);

   }


   const fillTherm =()=> {
    console.log("in therm");


    const donation = parseInt(document.getElementById("txt-therm-determiner").value);
    const error = document.getElementById("error-num");
    const root = document.querySelector(":root");

    let count = 0;

const gradualIncrease = setInterval(() => {
    count++;
    if(donation > 0 && count <= (donation/10000)*100)
    {
        console.log("donations");
        root.style.setProperty("--percent", count + "%");
    }
    else 
    {
        clearInterval(gradualIncrease);
    }
}, 100);


    



}
   

