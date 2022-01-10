var React = require('react');
var ReactDOM = require('react-dom');
var FormHandler = require('react-form-builder').Mixins.Handler;
var ExampleFormDef = {
  type: 'form',
  components: [
    {
      type: 'text-field',
      dataKey: 'example',
      displayName: 'Example'
    }
  ]
};

var Example = React.createClass({
  mixins: [FormHandler],
// using props
  getDefaultProps: function() {
    return {
      formDef: ExampleFormDef
    };
  },

  onSubmit: function(callback) {
    console.log("FormData: ", this.state.formData);
    callback();
  },

  render: this.renderForm();
});

ReactDOM.render(Example(), document.body);