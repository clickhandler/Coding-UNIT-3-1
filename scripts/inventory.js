let productsArr=JSON.parse(localStorage.getItem("products"))||[]


displayData(productsArr)
function displayData(productsArr){
    productsArr.forEach(function(elem){


var tr=document.createElement("tr")

var imageData=document.createElement("img")
imageData.setAttribute("src",elem.image)
var td1=document.createElement("td")
td1.append(imageData)

var td2=document.createElement("h2")
td2.innerText="Type- "+elem.type
var td3=document.createElement("p")
td3.innerText="Description- "+ elem.desc
var td4=document.createElement("h3")
td4.innerText="Price- "+elem.price+" /-"

var del=document.createElement("button")
del.setAttribute("id","remove_product")
del.innerText="Remove"
del.addEventListener("click",removedata)


tr.append(td1,td2,td3,td4,del)

document.querySelector("#all_products").append(tr)
function removedata(){
    //  
      event.target.parentNode.remove()
      localStorage.clear()

    }

    })

  
}