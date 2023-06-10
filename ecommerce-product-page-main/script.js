const picsElements=document.querySelector(".left-part").querySelectorAll(".overlay");
const Arraypics=[...picsElements];
const choicespage=document.querySelector(".choices-page");
const returnFromChoicesBtn=document.querySelector(".return-svg");
var getUrlimage;
var mainPicUrlChoices=document.querySelectorAll(".over")[0].querySelector("img").src
const previousBtn=document.querySelector("#previous-btn");
const nextBtn=document.querySelector("#next-btn");
const containerPics= document.querySelectorAll(".over");
const ArraycontainerPics=[...containerPics];

var userPrice=prompt("please Enter the Price",125.00);
var reductionTaux=prompt("please Enter the reduction you want % :",50)

function extractNumberFromString(str) {
    const numberRegex = /\d+/;
    const match = str.match(numberRegex);
    if (match) {
      return parseInt(match[0]);
    }
    return null;
  }


Arraypics.forEach((picElement)=>{
    
    picElement.addEventListener("mouseover",()=>{
        picElement.classList.add("hoverStyle");
        
    })
    Arraypics.forEach((picElement)=>{
        picElement.addEventListener("mouseout",()=>{
            picElement.classList.remove("hoverStyle");
            
        })
    })
    picElement.addEventListener("click",()=>{
        getUrlimage=picElement.querySelector("img").src;
        Arraypics[0].querySelector("img").src=getUrlimage;
    })
})

Arraypics[0].addEventListener("click",()=>{
    Arraypics[0].classList.remove("hoverStyle");
     choicespage.classList.remove("hidden"); 
     document.querySelectorAll(".over")[0].querySelector("img").src=getUrlimage;
})
returnFromChoicesBtn.addEventListener("click",()=>{
    choicespage.classList.add("hidden");
}
)

ArraycontainerPics.forEach((picElement,index)=>{
    if(index===0){
    }else{
        picElement.addEventListener("mouseover",()=>{
            picElement.classList.add("hoverEffect");
            
        })
            picElement.addEventListener("mouseout",()=>{
                picElement.classList.remove("hoverEffect"); 
            })  
    }
    picElement.addEventListener("click",()=>{
        getUrlimage=picElement.querySelector("img").src;
        ArraycontainerPics[0].querySelector("img").src=getUrlimage;
    })
})


previousBtn.addEventListener("click",()=>{
    const containerpic = ArraycontainerPics[0].querySelector("img");
    const url = containerpic.src;
    console.log(url);
    const filename = url.split("/")[url.split("/").length - 1];
    console.log(filename);
    const number = extractNumberFromString(filename);

    switch (parseInt(number)) {
      case 1:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-4.jpg";
        break;
      case 2:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-1.jpg";
        break;
      case 3:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-2.jpg";
        break;
      case 4:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-3.jpg";
        break;
      default:
        // Handle other cases if needed
    }
  });

  nextBtn.addEventListener("click",()=>{
    const containerpic = ArraycontainerPics[0].querySelector("img");
    const url = containerpic.src;
    console.log(url);
    const filename = url.split("/")[url.split("/").length - 1];
    console.log(filename);
    const number = extractNumberFromString(filename);

    switch (parseInt(number)) {
      case 1:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-2.jpg";
        break;
      case 2:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-3.jpg";
        break;
      case 3:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-4.jpg";
        break;
      case 4:
        document.querySelectorAll(".over")[0].querySelector("img").src = "./images/image-product-1.jpg";
        break;
      default:
        // Handle other cases if needed
    }
  });

  //-------------------------------------------------------------------
  const minusBtn=document.querySelector(".minus-btn");
  const plusBtn=document.querySelector(".plus-btn");
  const quantity=document.querySelector('[data-quantety]');
  const panier=document.querySelector(".svg-cart");
  const emptyCart=document.querySelector(".cartEmpty");
  const nonEmptyCart=document.querySelector(".cartNotEmpty");
  const removeCart=document.querySelector(".removeCart");
  var added=false;

  minusBtn.addEventListener("click",()=>{
    if(parseInt(quantity.innerText)===1){
      notificationNumber.classList.add("hidden");
    }
    if(parseInt(quantity.innerText)===0){
       return
    }else{
        quantity.innerText=parseInt(quantity.innerText)-1;
    }
  
  })
  plusBtn.addEventListener("click",()=>{
        quantity.innerText=parseInt(quantity.innerText)+1;

  })

  panier.addEventListener("click", () => {
    if ((parseInt(quantity.innerText) === 0) || !added) {
      if (emptyCart.classList.contains("hidden")) {
        emptyCart.classList.remove("hidden");
      } else {
        emptyCart.classList.add("hidden");
      }
    }else{
      if (nonEmptyCart.classList.contains("hidden")) {
        nonEmptyCart.classList.remove("hidden");
      } else {
        nonEmptyCart.classList.add("hidden");
      }
    }
  });
  
const totalPrice=document.querySelector(".total-price");
const priceForOne=document.querySelector(".price-for-one");
const newPrice=document.querySelector(".new-price");
const price=document.querySelector(".price");
const addCartBtn=document.querySelector(".add-cart");
const notificationNumber=document.querySelector(".numberCart");
const reduction=document.querySelector(".reduction");
reduction.innerHTML=parseInt(reductionTaux)+"%"
price.innerHTML="$"+parseInt(userPrice);
newPrice.innerHTML="$"+(parseInt(userPrice)-parseInt(userPrice)*parseInt(reductionTaux)/100);

addCartBtn.addEventListener("click",()=>{
  priceForOne.innerHTML=newPrice.innerHTML+" x "+quantity.innerText;
  totalPrice.innerHTML=" "+parseFloat(newPrice.innerHTML.replace('$',''))*parseInt(quantity.innerHTML);
  if (!totalPrice.innerHTML.includes(".")) {
    totalPrice.innerHTML = totalPrice.innerHTML + ".00";
  }
  notificationNumber.querySelector("p").innerHTML=quantity.innerHTML;
  notificationNumber.classList.remove("hidden");
  added=true;
})

removeCart.addEventListener("click",()=>{
  notificationNumber.classList.add("hidden");
  nonEmptyCart.classList.add("hidden");
  emptyCart.classList.remove("hidden");
  quantity.innerText=0;
});


