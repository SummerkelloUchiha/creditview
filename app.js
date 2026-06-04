
const data={
amazon:[
{name:"4K Smart TV",cash:"R12,999",monthly:"R599",img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800"},
{name:"Gaming Laptop",cash:"R15,999",monthly:"R749",img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"},
{name:"Robot Vacuum",cash:"R6,999",monthly:"R329",img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800"}],
takealot:[
{name:"Bluetooth Headphones",cash:"R2,999",monthly:"R149",img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"},
{name:"Air Fryer",cash:"R1,999",monthly:"R99",img:"https://images.unsplash.com/photo-1585515656973-94d6e4d1f89c?w=800"},
{name:"Smart TV",cash:"R10,999",monthly:"R519",img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"}],
mrprice:[
{name:"Men's Hoodie",cash:"R799",monthly:"R39",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"},
{name:"Denim Jeans",cash:"R599",monthly:"R29",img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=800"},
{name:"Fashion Sneakers",cash:"R999",monthly:"R49",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"}],
sportscene:[
{name:"Running Shoes",cash:"R2,499",monthly:"R119",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"},
{name:"Tracksuit",cash:"R1,499",monthly:"R69",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"},
{name:"Sports Jacket",cash:"R1,899",monthly:"R89",img:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800"}],
makro:[
{name:"Double Door Fridge",cash:"R13,999",monthly:"R649",img:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800"},
{name:"Washing Machine",cash:"R8,999",monthly:"R419",img:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800"},
{name:"Generator",cash:"R9,999",monthly:"R469",img:"https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800"}],
woolworths:[
{name:"Premium Jacket",cash:"R2,999",monthly:"R139",img:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800"},
{name:"Leather Boots",cash:"R2,499",monthly:"R119",img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800"},
{name:"Designer Handbag",cash:"R3,999",monthly:"R189",img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"}]
};

function render(){
 const retailer=document.getElementById("retailer").value;
 const mode=document.getElementById("mode").value;
 document.getElementById("title").innerText=document.getElementById("retailer").selectedOptions[0].text;
 const products=document.getElementById("products");
 products.innerHTML="";
 data[retailer].forEach(p=>{
  products.innerHTML+=`
   <div class="card ${retailer}">
    <img src="${p.img}">
    <div class="info">
     <h3>${p.name}</h3>
     ${mode==="credit"
      ? `<div class="credit">R${p.monthly}/month</div><div class="small">Cash Price: ${p.cash}</div>`
      : `<div class="cash">${p.cash}</div><div class="small">From R${p.monthly}/month</div>`}
     <button>View Offer</button>
    </div>
   </div>`;
 });
}
document.getElementById("retailer").onchange=render;
document.getElementById("mode").onchange=render;
render();
