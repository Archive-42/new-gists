var Signup = React.createClass({
  render: function() {
    return <form onSubmit={this._onSubmit}>
      <forms.RenderForm form={SignupForm} ref="signupForm"/>
      <button>Sign Up</button>
    </form>
  },