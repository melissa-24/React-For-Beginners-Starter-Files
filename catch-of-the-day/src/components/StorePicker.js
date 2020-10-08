import React from 'react'
import { getFunName } from '../helpers'


class StorePicker extends React.Component {

    // constructor() {
    //     super()
    //     console.log('Gonna create a component')
    //     this.goToStore = this.goToStore.bind(this)
    //     {/* See Note #4 */}
    // }

    myInput = React.createRef()

    handleClick() {
        alert('Hey there you clicked me')
    }

    goToStore = (event) => {
        event.preventDefault()
        console.log('Going to Store')
        console.log(this)
        {/* See Note #3 */}

    }

    render() {
        return (
            <> {/* See Note #1 */}

            <p>Hello</p>
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <button onClick={this.handleClick}> 
                {/* See Note #2 */}
                    Click Me!
                </button>
                <input 
                    type='text' 
                    required 
                    ref={this.myInput}
                    placeholder='Store Name' defaultValue={getFunName()} 
                />
                <button type='submit'>Visit Store →</button>
            </form>
            </>
        )
    }
}

export default StorePicker

  // #1 Must have this fragment <> </> to have more than 1 div.  Outside of this react only allows you to return 1 div type tag adding this allows you to use normal html type tags next to each other with out having divs all over.  Makes styling eaiser

  // #2 If you put handleClick() Like you would assume then the alert in this case would run on mount as in when the page loads then the event would run.  For the handleclick you don't want that alert to run on page load but you do want the getfunname to run on page load

  // #3 Written with just a console.log the goToStore function will just simply refresh the page.  You have tp click in the dev tools on the browser to preserve logs to be able to see what is going on. By adding event.preventDefault you are stopping the page from refreshing and you don't need to preserve logs

  // #4 Doing this allows us to use this on a function inside the current component.  Where before we used this where it was calling something from another component with out the use of constructor we would get undefined however if we change the goToStore to a method like above then we can get the same results