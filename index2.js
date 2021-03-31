let products = [
        { name: "Abaya Dress", Price: 45, Description: 'Latest dress in town ,Nigeria made', image: 'assets/Abaya.jpg' },
        { name: "Ankara Jacket", Price: 30, Description: 'Latest Jacket in town ,Made in Uganda', image: 'assets/Jacket.jpg' },
        { name: "Office Gown", Price: 45, Description: 'Latest dress in town ,Nigeria made', image: 'assets/Dress.jpg' },
        { name: "Coperate Gown", Price: 25, Description: 'Latest dress in town ,Nigeria made', image: 'assets/coperate.jpg' },
        { name: "Long Ankara Jacket", Price: 30, Description: 'Latest dress in town ,Nigeria made', image: 'assets/long-jacket.jpg' },
        { name: "Ankara Top", Price: 15, Description: 'Latest dress in town ,Nigeria made', image: 'assets/top.jpg' },
        { name: "Material Gown", Price: 75, Description: 'Latest dress in town ,Nigeria made', image: 'assets/material-gown.jpg' },
        { name: "Shoe", Price: 40, Description: 'Latest dress in town ,Nigeria made', image: 'assets/shoe-1.jpg' },
        { name: "Sandal", Price: 12, Description: 'Latest dress in town ,Nigeria made', image: 'assets/Sandal.jpg' },
        { name: "Wedge Heels", Price: 30, Description: 'Latest dress in town ,Nigeria made', image: 'assets/Wegde Heels.jpg' }

    ]
    // alert(products[3].name+ ''+ products[3].Price +'' + products[3].Description)

let text = []

for (let i = 0; i < products.length; i++) {

    text += `<div class="card" style="width: 20rem;">
        <div class="card" style="width: 20rem;">
            <img src="${products[i].image}" alt="" height="100px">
            <div class="card-body">
            <h5 class="card-tittle" > ${products[i].name} </h5>
            <h4 class="card-tittle" >$ ${products[i].Price}</h4>
            <p class="card-text"> ${products[i].Description}</p><br>
            <a href="#cart" id="Add-cart" class="btn">Add to cart</a>
            </div></div></div>`
}
document.getElementById('demo').innerHTML = text

let Add = document.querySelectorAll("#Add-cart")
Add.forEach(i => i.addEventListener('click', function() {
    // alert('Added to cart')
    let newcart = []
    let img = i.parentElement.parentElement.children[0]
    let imgn = img.attributes[0].value

    let name = i.parentElement.children[0].innerText
    let price = i.parentElement.children[1].innerText
    let description = i.parentElement.children[2].innerText

    newcart.push(name)
    newcart.push(price)
    newcart.push(description)
    newcart.push(imgn)
    console.log(newcart);

    document.getElementById('popme').innerHTML = `
   <div class="card" style="width: 10rem;">
    <div class="card" style="width: 10rem;">
    <img src="${newcart[3]}" alt="" height="50px">
    <div class="card-body">
   <h5 class="card-tittle" > ${newcart[0]} </h5>
   <h4 class="card-tittle" >$ ${newcart[1]}</h4>
   <p class="card-text"> ${newcart[2]}</p><br>
   </div>`


}))

// console.log(all);

function search() {
    let newp = document.getElementById('ser').value;

    let a = products.find(f => f.name == newp);

    const b = products.map(g => g.name);

    if (b.includes(newp)) {
        document.getElementById('demo').innerHTML = `<div class="card" style="width: 10rem;">
        <div class="card" style="width: 10rem;">
        <img src="${a.image}" alt="" height="300px">
        <div class="card-body">
        <h5 class="card-tittle" > ${a.name} </h5>
        <h4 class="card-tittle" >$ ${a.Price}</h4>
        <p class="card-text"> ${a.Description}</p><br>
        <a href="#cart" class="btn">Add to cart</a>
        </div></div></div>`;
    } else {
        document.getElementById('demo').innerHTML = 'not found'
    }
}

(function() {
    const cart = document.getElementById("cart");
    const mycart = document.getElementById("popme");

    cart.addEventListener("click", function() {

        // mycart.style.display = "block"
        mycart.classList.toggle("showcart")
    })
})();



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}























// function search(){
// var students = ["Joshua","Lukman","Damilola","Bolu","Pelumi"]
// let list
// students.map(i => list+= `<li> ${i} </li>`)

// }
// document.getElementById("list").innerHTML = list





// features
// ShadowRoot
// search:
// 4methods
// Arrayname.include()
// Arrayname.find
// Arrayname.indexof
// Arrayname.filter