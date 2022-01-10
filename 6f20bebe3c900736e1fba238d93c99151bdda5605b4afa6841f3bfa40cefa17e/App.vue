<template>
 <div id="app">
   <span>Select Color</span>
   <br>
   <input type="color" v-model="textColor" width="50px" margin-top="70px">
   <br>
   <br>
   <Sbutton :color="textColor">check out the text color</Sbutton>
   <br>
 </div>
</template>
 
<script>
import CButton from "@/component/element/StyledButton.js";
export default {
 components: {
   Sbutton: CButton
 },
 data() {
   return {
     textColor: "#000000"
   };
 }
};
</script>