import React from "react/addons";
import List from "./List";

var Root = React.createClass({
    mixins : [React.addons.PureRenderMixin],

    render : function(){
        
        return <div>
            <h1>Hello {this.props.name}!</h1>
            <List items={this.props.items}/>
        </div>
    }
});

export default Root;