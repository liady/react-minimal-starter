import React from "react/addons";

var Item = React.createClass({
    mixins : [React.addons.PureRenderMixin],
    render : function(){
        return <li>
            Item text : {this.props.text}
        </li>
    }
});

export default Item;