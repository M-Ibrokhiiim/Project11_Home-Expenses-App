const product=document.getElementById('product-receiver-input')
const cost=document.getElementById('cost-input')
const addBtn=document.getElementById('add-button')

const inputs=document.getElementById('header-inputs')

let select=document.getElementById('person-selector-container')
select.value=""
let options=document.getElementsByTagName('option')
let id=0
// Inputs data

const products=[]

addBtn.addEventListener('click',()=>{
    const obj={id:id++, product:product.value, cost:cost.value, buyer:select.value}

    if(product.value==='' || cost.value===''  ){
        inputs.classList.add('caution')
      setTimeout(()=>{
        inputs.classList.remove('caution')
      },1500)
    
    }
    if(select.value===''){
       select.classList.add('caution')
       setTimeout(()=>{
        select.classList.remove('caution')
       },1500)
       return
    }    
     

    for(let i=0; i<products.length; i++ ){
        if(obj.product===products[i].product && obj.cost===products[i].cost){
            product.value=''
            cost.value=''
            select.value=''    
            return
        }
      }  

    products.push(obj)
    
    product.value=''
    cost.value=''
    select.value=''    
})

console.log(products);
