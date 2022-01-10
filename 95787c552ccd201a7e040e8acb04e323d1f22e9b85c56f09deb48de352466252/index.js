// This is an example of x-ordering
var schema = {
  type      : "object",
  properties: {
    comment: { title: "Comment" },
    email  : { title: "Email" },
    name   : { title: "Name" }
  },
  "x-ordering": ["name", "email", "comment"]
};

// Example for x-hint
var schema = {
  type      : "object",
  properties: {
    name : {
      title: "Name",
      "x-hints": {
        form: {
          classes: [ "form-text-field", "form-name-field" ]
        }
      }
    },
    email: {
      title: "Email",
      "x-hints": {
        form: {
          classes: [ "form-text-field", "form-email-field" ]
        }
      }
    }
  },
  "x-hints": {
    form: {
      classes: [ "form-person-section" ]
    }
  }
};