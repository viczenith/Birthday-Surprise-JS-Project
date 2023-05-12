//PSEODOCODE 
//HOW TO CREATE A BIRTHDAY SUPPRISE USING JS
// 1. Create a span in the body of the HTML
//2. Get the body tag in JS using querrySelector
//3. Add Event listener to trigger the body tag when its being called.
//4. Set the direction or position of the span using the offset function.
//5. Mordify the size of the span container.
//6. Append the child or the classlist to the body
//6. set a time out for the event

//2
const bodyElem = document.querySelector("body");

//3
bodyElem.addEventListener("mousemove", ()=>{
    // console.log(event.offsetX);
    const xDir = event.offsetX;
    const yDir = event.offsetY;

    const spanElem = document.createElement("span");
    //mordify the span container
    spanElem.style.left = xDir + "px";
    spanElem.style.top = yDir + "px";


    const spanSize = Math.random()*100;
    spanElem.style.width = spanSize + "px";
    spanElem.style.height = spanSize + "px";

  
    bodyElem.appendChild(spanElem);

    setTimeout(()=>{
        spanElem.remove();
    }, 1000)

})
