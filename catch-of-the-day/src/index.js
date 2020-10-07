import React from 'react'
import { render } from 'react-dom'
import StorePicker from './components/StorePicker'




render(<StorePicker />, document.querySelector('#main'))

// This is all that is needed for your index page. The #main part is what ever it is called on your html doc in the public folder. In this case the div has an id of main