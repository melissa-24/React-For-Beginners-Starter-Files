import React from 'react'

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market' myName='Melissa' />
                </div>
                <Inventory />
                <Order />
            </div>
        )
    }
}

export default App

// the entries in the Header tag above can now be used as props anyplace in the header page.  If you use the dev tools in the browser you can actually see that if you click on the header component what props are avail.
// <Header tagline='Alternate header line' />
// Because of the way react works you can call the Header page again and change what the tagline says and it will render both Headers but with different words due to props