document.querySelector("#add_product").addEventListener("click",inputData)

function Productsfunc(t,d,p,i){
    event.preventDefault()
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function inputData(){
    event.preventDefault()

    document.querySelector("#products");

    let type1= products.type.value;
    let desc1=products.desc.value;
    let price1=products.price.value;
    let image1=products.image.value;

    let data= new Productsfunc(type1,desc1,price1,image1)

    let productsArr=JSON.parse(localStorage.getItem("products"))||[]

    productsArr.push(data)
    console.log(productsArr)

    localStorage.setItem("products",JSON.stringify(productsArr))
    
    document.querySelector("#type").value=null
    document.querySelector("#desc").value=null
    document.querySelector("#price").value=null
    document.querySelector("#image").value=null

   
}