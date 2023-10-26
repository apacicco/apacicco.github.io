
const getItem = async() =>{
    const url = "https://portiaportia.github.io/json/shoes.json";
    try {
        const response = await fetch (url);
        return await response.json();


    } catch (error){
        console.log(error);
    }

}

const showItem = async() =>{

    //doc.getElementById("my-form").onsubmit = ...
    let items = await getItem();
    let homepg = document.getElementById("home-page");

    items.forEach(item => {
        homepg.append(getItemSection(item));
    })
}

const getItemSection = (item) =>{
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = item.name;

    const brandP = document.createElement("p");
    section.append(brandP);
    brandP.innerHTML = item.brand;


    const ul = document.createElement("ul");
    section.append(ul);
    
    for (let i in item.reviews){
       // console.log(item.reviews[i]);

       const li = document.createElement("li");
       ul.append(li);
       li.innerHTMl = item.reviews[i];
    }


    return section;
}

window.onload =()=> showItem();


const getBreweires =async ()=> {
    try {
        return await fetch("https://api.openbrewerydb.org/breweries").json;
    } catch (error){
        console.log(error);
    }
};

const showBreweries = async () => {
    let breweries = await getBreweires();//beautiful json
    let breweriesList = document.getElementById("some-section-in-html");

    breweries.forEach((brewery)=>{
        const section = document.createElement("section");
        breweriesList.append(section);
        section.classList.add("brewery");


        const a =document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);

        const h3 = document.createElement("h3");
        a.append(h3);
        h3.innetHTML = brewery.name;

        const p = document.createElement("p");
        a.append(p);
        p.innerHTML = `${brewer.brewery_type} brewery`;

        const iframe = document.createElement("iframe");
        iframe.src = "";
    })

};