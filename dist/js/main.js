const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});

function subtract() {
    const value = document.getElementById("store")
    // value.innerHTML = + value.innerHTML - 1    
    if(value.innerHTML > 1){
        value.innerHTML = +value.innerHTML -1
    }
}
function add() {
    const value = document.getElementById("store")
    value.innerHTML = + value.innerHTML + 1
}




const cards = [
    {
        cardimg: "./dist/images/red1.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/Group.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/red1.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/Group.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/red1.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/Group.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/red1.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
    {
        cardimg: "./dist/images/Group.png",
        cardimg4: "./dist/images/Group.png",
        shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardimg2: "./dist/images/cart.png",
        cardimg3: "./dist/images/grey-star.png",

    },
]


const cardcontainer = document.getElementById("cardcontainer")


cards.forEach((cards) => {
    const cardelement = document.createElement("div")
    cardelement.className = "shoescard"
    cardelement.innerHTML = `
    <img class ="cursor-pointer" src="${cards.cardimg}"  alt="shoes">
   <div class="pl-[14px] pt-[18px] pr-[14px] pb-[30px] flex justify-between">
   <div>
   <p class=" text-[18px] font-Poppins font-[500]
   ">${cards.shoesname}</p>
   <div class="flex items-center gap-1 pt-[3px]">
   <p class ="text-[18px] font-Poppins font-[500] text-[#999999]">${cards.price1}</p>
   <p class ="text-[18px] font-Poppins font-[500] text-[#FF0000]">${cards.price2}</p>
   </div>
   <img class ="pt-[15px]" src="${cards.cardimg3}"  alt="star">
   </div>
   <div>
   <img class ="pt-[15px]" src="${cards.cardimg2}"  alt="cart">
   </div>
   </div>
    `
    cardcontainer.appendChild(cardelement)
})

function navtabs(tabs) {
    const tablets = document.querySelectorAll('.tablets')
    tablets.forEach(content => {
        content.style.display = 'none'
    })
    const threetab = document.querySelectorAll(".threebtn button")
    threetab.forEach(content => {
        content.classList.remove('tabstyle')

    })
    const select = document.getElementById(tabs)
    select.style.display = 'block'
    const activeTab = document.querySelector(`button[onclick="navtabs('${tabs}')"]`)
    activeTab.classList.add('tabstyle')



}
navtabs('tab1')


const card1 = [
    {
        card1img: "./dist/images/Group-foot.png",
        card1img2: "./dist/images/Group-sidestep.png",
        price3: "Price:",
        price4: "€179,99",
        size: "Size:",
        text1: "View this product as:",
        text2: "Foot Locker NL",


    },
    {
        card1img: "./dist/images/Group-sidestep.png",
        price3: "Price:",
        price4: "€179,99",
        size: "Size:",
        text1: "View this product as:",
        text2: "Foot Locker NL",


    },
    {
        card1img: "./dist/images/Group-foot.png",
        card1img2: "./dist/images/Group-sidestep.png",
        price3: "Price:",
        price4: "€179,99",
        size: "Size:",
        text1: "View this product as:",
        text2: "Foot Locker NL",


    },
    {
        card1img: "./dist/images/Group-sidestep.png",
        price3: "Price:",
        price4: "€179,99",
        size: "Size:",
        text1: "View this product as:",
        text2: "Foot Locker NL",


    },


]

const cardcontainer1 = document.getElementById("cardcontainer1")


card1.forEach((card1) => {
    const cardelement1 = document.createElement("div")
    cardelement1.className = "card1"
    cardelement1.innerHTML = `
    <img class ="cursor-pointer" src="${card1.card1img}"  alt="shoes">
    <div class ="pl-[19px] pr-[18px] pt-7 pb-[31px] ">
   <div class =" flex justify-between">
   <div>
   <div class ="flex items-center gap-[17px]">
   <p class ="font-[400] text-[16px] font-Poppins">${card1.price3}</p>
   <p class ="font-[600] text-[20px] font-Poppins">${card1.price4}</p>
   </div>
    <p class ="font-[400] text-[16px] font-Poppins">${card1.size}</p>
   </div>
    <div class ="bg-[#28A745] w-[70px] h-[19px] rounded-[6px] mt-1 flex justify-center items-center ">
   <p class ="text-[10px] font-[400] font-Poppins text-white">Best Price</p>
   </div>
   </div>
   <div class ="flex items-center gap-[11px] mt-[10px]">
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">41</p>
   </div>
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">42</p>
   </div>
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">43</p>
   </div>
   </div>
   <div class ="flex items-center gap-[11px] mt-[11px]">
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">44</p>
   </div>
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">45</p>
   </div>
   <div class ="w-[84.51px] h-[38.73px] rounded-[40px] border flex justify-center items-center group hover:bg-[#28A745] duration-300 ease-linear">
   <p class ="font-[500] group-hover:text-white text-[16px] font-Poppins">46</p>
   </div>
   </div>
   <h4 class="font-poppins font-[400] cursor-pointer text-[16px] text-[#454729] pt-[19px]">View this product as:</h4>
 <h4 class="font-poppins font-[600] cursor-pointer text-[16px] text-[#007BFF] pt-[8px]">Foot Locker NL</h4>
    </div>
    `
    cardcontainer1.appendChild(cardelement1)
})

  

// year
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year