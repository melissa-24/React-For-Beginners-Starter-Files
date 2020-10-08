import React from 'react'
import { getFunName } from '../helpers'


class StorePicker extends React.Component {
    render() {
        return (
            <> 
            <p>Hello</p>
            <form className='store-selector'>
                <h2>Please enter a store</h2>
                <input type='text' required placeholder='Store Name' defaultValue={getFunName()} />
                <button type='submit'>Visit Store →</button>
            </form>
            </>
        )
    }
}

export default StorePicker

  // Must have this fragment <> </> to have more than 1 div.  Outside of this react only allows you to return 1 div type tag adding this allows you to use normal html type tags next to each other with out having divs all over.  Makes styling eaiser