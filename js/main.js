const milstonesData=JSON.parse(data).data;
function loadMilstones(){
    const milstones=document.querySelector(".milestones");
    milstones.innerHTML=`${milstonesData.map(function(milstone){
        return `<div class="milestones">
          <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div>
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
loadMilstones()
