import 'bootstrap/dist/css/bootstrap.css'
import p from "./persons";

document.getElementById("menu").onclick = showPageView;

function showPageView(evt){
  var menuId = evt.target.id;
  console.log(`You pressed ${menuId}`);
}




