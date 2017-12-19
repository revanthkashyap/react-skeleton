var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

var ingredients = [{"id":1, "text":"tennis"}, {"id":2, "text":"cricket"},
                        {"id":3, "text":"football"}];

var List = createReactClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
