var React    = require('react');
var validate = require('plexus-validate');
var Form     = require('plexus-form');

var schema = {
  title      : "My pretty form",
  description: "Declarative pure data DSLs are the best.",
  type       : "object",
  properties : {
    comment: {
      title      : "Your comment",
      description: "Type something here.",
      type       : "string",
      minLength  : 1
    }
  }
};

var onSubmit = function(data, buttonValue, errors) {
  alert('Data  : '+JSON.stringify(data)+'\n'+
        'Button: '+buttonValue+'\n'+
        'Errors: '+JSON.stringify(errors));
};

React.render(<Form
               schema   = {schema}
               validate = {validate}
               onSubmit = {onSubmit} />,
             document.body);