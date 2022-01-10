<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    Register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>