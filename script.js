// const h1=document.querySelector("#title"); 
// h1.textContent="Welcome to JavaScript DOM";
// console.log(h1);


//  const btn=document.querySelector("#btn"); 
//  const body=document.querySelector("body"); 

//  btn.addEventListener('click',()=>{
//     body.style.backgroundColor="blue";
//  })


// const name=document.querySelector("#username");

// const btn=document.querySelector("button");
// const paragraph=document.querySelector("#output");

 
// btn.addEventListener('click',()=>{
// let userName=name.value;
//  paragraph.textContent=userName;
// })


// const message=document.querySelector("#message");
// const btn=document.querySelector("button");
 
//  btn.addEventListener("click",()=>{
//     if (message.style.display==="none"){
//         message.style.display="block"
//     }else{
//          message.style.display="none";
//     }
//  })


// const list=document.querySelector("#list");
//  const ul=document.querySelector("ul")
//  const btn = document.querySelector("button");
//  btn.addEventListener('click',()=>{
// const li=document.createElement("li");
// li.textContent="banana";
// ul.append(li);
//  })



// const card =document.querySelector("#card")
// const h2=document.querySelector("h2")
// const btn=document.querySelector("button")
//  btn.addEventListener('click',()=>{
//     h2.remove();
//  })

// const h1=document.querySelector("h1");
// const btn1=document.querySelector("#btn1");
// const btn2=document.querySelector("#btn2");
// var count=0; 
// btn1.addEventListener("click",()=>{
//  count++ 
//     h1.textContent=count;  
// })
 

// btn2.addEventListener("click",()=>{
//  count--
//   h1.textContent=count; 
// })
//  console.log(count)

 
//  const text=document.querySelector("textarea") ;       
//  const span=document.querySelector("#span");
 
// text.addEventListener("keyup",()=>{
// let a = text.value.length;
//    span.textContent=a;
//  })



// const text=document.querySelector("#text");
// const btn=document.querySelector("button");
// const ul=document.querySelector("ul");
// btn.addEventListener("click",()=>{

//     let inputvalue=text.value;
//     const li=document.createElement("li");
//     li.textContent=inputvalue;
//      ul.append(li);
//      text.value="";
// })
  


// let arr=["https://images.unsplash.com/photo-1518770660439-4636190af475?utm_source=chatgpt.com",'https://images.unsplash.com/photo-1498050108023-c5249f4df085?utm_source=chatgpt.com','https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?utm_source=chatgpt.com','https://images.unsplash.com/photo-1519501025264-65ba15a82390?utm_source=chatgpt.com']
// const img=document.querySelector("#image");
// const btn=document.querySelector("button");

// let index=0;
 
// btn.addEventListener("click",()=>{
//     index++;
//     img.src=arr[index];
// })

 

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  // Toggle the 'dark-mode' class and store whether it is now active (true/false)
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Update button text based on the active mode
  if (isDarkMode) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});
