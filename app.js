
const data={
amazon:[
['Samsung TV','R599','R12,999','https://picsum.photos/600/400?tv'],
['Gaming Laptop','R749','R16,999','https://picsum.photos/600/400?laptop'],
['iPhone','R899','R20,499','https://picsum.photos/600/400?phone'],
['Robot Vacuum','R219','R5,299','https://picsum.photos/600/400?vacuum']
],
mrprice:[
['Fashion Hoodie','R39','R799','https://picsum.photos/600/400?hoodie'],
['Jeans','R29','R599','https://picsum.photos/600/400?jeans'],
['Sneakers','R49','R999','https://picsum.photos/600/400?sneakers'],
['Jacket','R59','R1199','https://picsum.photos/600/400?jacket']
],
sportscene:[
['Running Shoes','R119','R2499','https://picsum.photos/600/400?shoes'],
['Tracksuit','R69','R1499','https://picsum.photos/600/400?sports'],
['Cap','R19','R399','https://picsum.photos/600/400?cap'],
['Sports Jacket','R89','R1899','https://picsum.photos/600/400?fitness']
],
takealot:[
['Smart TV','R519','R10999','https://picsum.photos/600/400?electronics'],
['Air Fryer','R99','R1999','https://picsum.photos/600/400?airfryer'],
['Headphones','R149','R2999','https://picsum.photos/600/400?headphones'],
['Coffee Machine','R179','R4299','https://picsum.photos/600/400?coffee']
],
makro:[
['Fridge','R649','R13999','https://picsum.photos/600/400?fridge'],
['Generator','R469','R9999','https://picsum.photos/600/400?generator'],
['Washing Machine','R419','R8999','https://picsum.photos/600/400?washing'],
['Patio Set','R299','R6499','https://picsum.photos/600/400?patio']
],
woolworths:[
['Premium Jacket','R139','R2999','https://picsum.photos/600/400?fashion'],
['Leather Boots','R119','R2499','https://picsum.photos/600/400?boots'],
['Handbag','R189','R3999','https://picsum.photos/600/400?bag'],
['Watch','R159','R3299','https://picsum.photos/600/400?watch']
],
walmart:[],bestbuy:[]
};
data.walmart=data.amazon; data.bestbuy=data.amazon;

let credit=true;
const products=document.getElementById('products');
function render(){
 const r=document.getElementById('retailerSelect').value;
 document.getElementById('retailerTitle').innerText=document.getElementById('retailerSelect').selectedOptions[0].text;
 products.innerHTML='';
 data[r].forEach(p=>{
 products.innerHTML+=`<div class="card"><img src="${p[3]}"><div class="info"><h3>${p[0]}</h3>
 ${credit?`<div class="monthly">${p[1]}/month</div><div class="cash">Cash Price: ${p[2]}</div>`:
 `<div class="monthly">${p[2]}</div><div class="cash">From ${p[1]}/month</div>`}
 </div></div>`;
 });
}
document.getElementById('retailerSelect').onchange=render;
document.getElementById('creditBtn').onclick=()=>{credit=true;creditBtn.classList.add('active');cashBtn.classList.remove('active');render();}
document.getElementById('cashBtn').onclick=()=>{credit=false;cashBtn.classList.add('active');creditBtn.classList.remove('active');render();}
render();
