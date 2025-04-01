const product=document.getElementById('product-receiver-input')
const cost=document.getElementById('cost-input')
const addBtn=document.getElementById('add-button')
let select=document.getElementById('person-selector-container')
select.value=""
let options=document.getElementsByTagName('option')
let id=1
// UI containers
const inputs=document.getElementById('header-inputs')
const tableBody=document.getElementById('table-body')
const table=document.getElementById('table')

// Insertion data

const products=[]


 

addBtn.addEventListener('click',()=>{
    const obj={id:id++, product:product.value, cost:cost.value, buyer:select.value}

    if(obj.id<=1){
        table.style.display="block"
    }

    if(product.value==='' || cost.value===''  ){
        inputs.classList.add('caution')
      setTimeout(()=>{
        inputs.classList.remove('caution')
      },1500) 
      id=products.length+1
      return
    }

    if(select.value===''){
       select.classList.add('caution')
       setTimeout(()=>{
        select.classList.remove('caution')
       },1500)
       id=products.length+1
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



    let UI=''

    products.forEach((expense)=>{
        UI+=`
           <tr>
                <td>${expense.id}</td>
                <td>${expense.product}</td>
                <td>${expense.cost}so'm</td>
                <td class="whoBought"><i class="fa-solid fa-check"></i>${expense.buyer}</td>
                <td><button class="deleteBtn" style="width: 2vw; height: 1.5vw;background-color: #E3E4E8; font-size: 1vw; outline: none; border: none;"><i class="fa-solid fa-trash" style="font-size:0.5vw"></i></button></td>
           </tr>
        `
    }) 
    tableBody.innerHTML=UI
})




tableBody.addEventListener('click',(e)=>{
    if(e.target.tagName==="BUTTON"){
        const parentElement=e.target.parentElement.parentElement
        parentElement.remove()
    }
})