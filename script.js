let menuitem=document.getElementById("menuitem");

menuitem.style.maxHeight="0px";

function menu(){
    if(menuitem.style.maxHeight=="0px")
    {
        menuitem.style.maxHeight="200px";
    }else{
        menuitem.style.maxHeight="0px";
    }
}