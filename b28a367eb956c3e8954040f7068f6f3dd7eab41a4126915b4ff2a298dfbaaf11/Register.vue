user => {
	this.$router.replace("home");
},
err => {
	alert(err.message);
}
