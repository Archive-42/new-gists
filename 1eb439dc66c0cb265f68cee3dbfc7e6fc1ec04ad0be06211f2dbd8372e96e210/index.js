const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = {multiple: true};
 
try {
  const contacts = await navigator.contacts.select(props, opts);
  handleResults(contacts);
} catch (ex) {
  // Handle any errors here.
}
