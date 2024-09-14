const milstonesData=JSON.parse(data).data;
function loadMilstones(){
    const milstones=document.querySelector(".milestones");
    milstones.innerHTML=`${milstonesData.map(function(milstone){
        return `<div class="milestones">
          <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilstone(this)">
                <p>
                 ${milstone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milstone.modules.map(function(module){
                return `<div class="module border-b">
                <p>${module.name}</p>
                </div>`
              }).join("")}
              
            </div>
          </div>
        </div>`
    }).join("")}`
}
function openMilstone(milstoneElement){
    const currentPannel= milstoneElement.parentNode.nextElementSibling;
    const shownPannel=document.querySelector(".show");
    const active=document.querySelector(".active");
    //frist remove active if any[other than clicked one]
    if(active && !milstoneElement.classList.contains("active")){
        active.classList.remove("active");
    }
    //toggle current clicked one
    milstoneElement.classList.toggle("active");
    //frist hide previous pannel if open[other than clicked element]
    if(!currentPannel.classList.contains("show") && shownPannel)
        shownPannel.classList.remove("show");
    //toggle current element
    currentPannel.classList.toggle("show");
    
}
loadMilstones()
