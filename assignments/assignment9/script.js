window.onload =()=> {
    changeQuote();
    setInterval(changeQuote, 2000);

    document.getElementById("button-rainbow").onclick = createRainbow;
}



let quotes = ["And still, I rise. - Maya Angelou", 
"Because I have loved life, I shall have no sorrow to die. - Amelia Burr", 
"There is more to life than increasing its speed. - Gandhi", 
"I do not need it to be easy, I need it to be worth it. - Lil Wayne", 
"Broken crayons still color. - Ralph Waldo Emerson"];

let count = 0;

const changeQuote =()=> {
    let result = document.getElementById("quote");
    
    if(quotes[count] != null && count < 4)
    {
        result.innerHTML = quotes[count];
        count++;
    }
    else 
    {
        result.innerHTML = quotes[count];
        count = 0;
    }
    
    
    
 };


let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]


let colorCount = 0;


const createRainbow =()=>{
    //console.log("createRainbow");
    const updateCount = setInterval(() => {
        const p = document.createElement("p");
        let rainbows = document.getElementById("rainbow");
        document.querySelectorAll("rainbow button").forEach((button)=>{
            button.onclick =()=>{
                console.log("rainbow button clicked");
                
            }
        })
       
        if(colors[colorCount] != null)
        {
           
           p.classList.add(colors[colorCount]);
           rainbows.append(p);
           colorCount++;  
           
           if(colorCount == (7))
           {
            console.log("in inner if");
            const image = document.createElement("img");
            image.src="images/Screenshot 2023-10-04 203642.png";
            image.classList.add("rel");
            p.append(image);

           }
        
           
        }
        else
        {
            

           //p.append(image);
            
            
            clearInterval(colors[colorCount]);
            

            //document.getElementById("pot").classList.remove("hide");
        }
            

        
        
       }, 100);
       
       
};


 