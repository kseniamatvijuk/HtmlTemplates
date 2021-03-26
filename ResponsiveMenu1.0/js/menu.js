(function() {
    let elements = document.getElementsByClassName("drop-click");
    let burger = document.getElementById("burder-menu-lbl");
    Array.from(elements).forEach(item => {
        item.addEventListener("click",  () => { dropDownClick(item); }, false);
    });
    burger.addEventListener("click",  () => { burgerMenu(burger); }, false);
  
 } )();

function dropDownClick(el){
    console.log(el);
    event.stopPropagation();
    if(hasClass(el, "drop-click")){
        el.classList.toggle('show');
      }

    }
function burgerMenu(el){
    event.stopPropagation();
    el.classList.toggle('show');
}
document.onclick = function(event) {
    if (!event.target.matches('.drop-click') || !event.target.matches('#burder-menu-lbl')) {
        let elements = document.getElementsByClassName("drop-click");
        let burger = document.getElementById("burder-menu-lbl");
        burger.classList.remove('show');
      Array.from(elements).forEach(item => {
        item.classList.remove('show');
      });
    }
  }

  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

