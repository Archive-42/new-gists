// User with React Hooks
import React from 'react'
import { useLink } from 'valuelink'
...
// Instead of const [ name, setName ] = useState('')
const $name = useLink('');

// Use with React Components

import React from 'react'
// Instead of React.Component...
import { LinkedComponent } from 'valuelink'
...
// In a render, do
const $name = this.$at('name');
// Or, to link all the state members at once...
const state$ = this.state$();