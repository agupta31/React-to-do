var React=require("react");

var List=React.createClass({
     
      render:function(){
            var ListItems=this.props.items.map(function(item){
                 return <li>{item}</li>
            });
           return(
               <ul>
                {ListItems}
               </ul>
            )
      }
});

module.exports=List;