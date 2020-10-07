import React from 'react'


class StorePicker extends React.Component {
    render() {
        return (
            // Must have this fragment to have more than 1 div.  Outside of this react only allows you to return 1 div type tag adding this allows you to use normal html type tags next to each other
            <> 
            <p>Hello</p>
            </>
        )
    }
}

export default StorePicker