class Toy {
    constructor(type, price, ageRange, stars, pic)
    {
        this.type = type;
        this.price = price;
        this.ageRange = ageRange;
        this.stars = stars;
        this.pic = pic;
    }


get ToyDetails ()
{
    const section = document.createElement("section");
    section.classList.add("toy");

    const h3 = document.createElement("h3");

    h3.classList.add("hidden");

    h3.innerHTML = this.type;

    //section.append(h3);

    const ul = document.createElement("ul");

    ul.classList.add("hidden")
    
    ul.append(this.listItem("Age Range: " + this.ageRange));
    ul.append(this.listItem("price: $" + this.price));
    ul.append(this.listItem("Stars: " + this.stars));

    section.append(h3);
    section.append(ul);

    const pic = document.createElement("img");
    section.append(pic);
    pic.src = "images/" + this.pic;


    

    section.onmouseover =()=> {

    h3.classList.remove("hidden");
    ul.classList.remove("hidden");
    pic.classList.add("transparent");
   }



   section.onmouseout =()=> {

    h3.classList.add("hidden");
    ul.classList.add("hidden");
    pic.classList.remove("transparent");
   }

    return section;

    
}

    listItem (info)
    {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}



const showToys =()=>{
    const toyList = document.getElementById("toy-list");
    const toys = [];

    toys.push(new Toy("American Girl Doll", 25.25 , "for 5 to 7 year olds", 4, "american-girl-doll.jpg"));//pushes to array
    toys.push(new Toy("Bike", 50.25 , "for 10 to 15 year olds", 5, "bike.jpg"));
    toys.push(new Toy("Doll House", 46.50 , "for 4 to 8 year olds", 3, "doll-house.jpg"));
    toys.push(new Toy("Basketball", 16.75 , "for 5 to 17 year olds", 5, "basketball.jpg"));
    toys.push(new Toy("Lawn Darts", 20.00 , "for 18+ year olds", 1, "lawn-darts.jpg"));
    toys.push(new Toy("Stuffed Puppy", 14.20 , "for 3 to 12 year olds", 5, "Chewie.jpg"));


    toys.forEach((toy)=>{
        toyList.append(toy.ToyDetails);
    });
}



const displayToyDetails =()=> {
    const toyList = document.getElementById("toy-list");
    const toys = [];
}



window.onload=()=>{
    showToys();
    //displayToys();
}   