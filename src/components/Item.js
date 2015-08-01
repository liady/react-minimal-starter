import React from "react/addons";
import ReactCSS from "reactcss";

var Item = React.createClass({
    mixins : [React.addons.PureRenderMixin, ReactCSS.mixin],
    styles : function(){
        return this.css()
    },
    classes : function(){
        return {
          'default': {
            item: {
              "fontWeight": 'bold'
            }
          }  
        };
    },
    render : function(){
        return <li is="item">
            Item text : {this.props.text}
        </li>
    }
});

export default Item;
