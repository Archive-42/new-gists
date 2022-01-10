import {render} from 'react-dom'

render(
  <Form value={{firstName: 'Michael', lastName: 'Jackson'}} />,
  document.getElementById('form')
)
