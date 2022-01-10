Smart('smart-hello',classSmartHelloextendsSmart.BaseElement {   
// Declare properties  
staticgetproperties() {   
return {  
'name':
     {  
value:'World!',  
type:'string'
     }  
   };  
  }  
// Define a template  
template() {  
return'<p>Hello, <span>{{name}}</span></p>';  
  }  
 });
