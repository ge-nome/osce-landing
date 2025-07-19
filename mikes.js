let scrollSpeed = 1; // pixels per frame
let scrollCont = document.getElementById('scrollium')
function autoScroll() {
    scrollCont.scrollBy(0, scrollSpeed);

    console.log(scrollCont.clientHeight);
    let scrollPercent = (scrollCont.scrollTop / (scrollCont.scrollHeight - scrollCont.clientHeight)) * 100; 
    
    // Check if bottom reached
    if (scrollPercent.toFixed(2) >= 99) {
      scrollCont.scrollTo(0, 0); // Go back to top
    }

    requestAnimationFrame(autoScroll);
}
autoScroll();