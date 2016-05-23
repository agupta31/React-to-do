var React=require("react");
var List=require("./List");

var Display=React.createClass({
      getInitialState:function(){
           return{
               eventNo:0
           }      
      },
      componentWillMount:function(){
          this.text="";
          this.inputText=[];
      },
      handleChange:function(e){
            this.text=e.target.value;
          
      },
      handleSubmit:function(e){
           e.preventDefault();
           this.inputText.push(this.text);
            
           this.setState(
               {eventNo:this.state.eventNo++
            
               });
      },
       render:function(){
            return(
                <div className="container">

                   <List items={this.inputText}/>
                <form onSubmit={this.handleSubmit}>
                   <input type="text" onChange={this.handleChange}/>
                <button>Add</button>
                </form>
                </div>
            )
       }
});

module.exports=Display;