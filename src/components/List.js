import React from "react/addons";
import Item from "./Item";

var Root = React.createClass({
    mixins : [React.addons.PureRenderMixin],

    render : function(){
        
        var items = [];
        this.props.items.forEach(function(item){
            items.push(<Item text={item.text}/>);
        });
        
        return <ul>
            {items}
        </ul>
    }
});

export default Root;