var React=require("react");
var Display=require("./ToDoList");
 

var target=document.getElementById("target");

var element=React.createElement(Display);

ReactDOM.render(element,target);