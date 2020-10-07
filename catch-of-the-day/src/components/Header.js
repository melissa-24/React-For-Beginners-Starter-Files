import React from 'react'

const Header = (props) => {
    return (
        <>
            <header className='top'>
                <h1>
                    Catch 
                    <span className='ofThe'>
                        <span className='of'>Of</span>
                        <span className='the'>The</span>
                    </span>
                    Day
                </h1>
                <h3 className='tagline'>
                <span>{props.tagline}</span>
            </h3>
            </header>
            </>
    )
}


export default Header

// Original way

// class Header extends React.Component {
//     render() {
//         return (
//             <>
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className='ofThe'>
//                         <span className='of'>Of</span>
//                         <span className='the'>The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className='tagline'>
//                 <span>{this.props.tagline}</span>
//             </h3>
//             </header>
//             </>
//         )
//     }
// } 


// Other ways to write this

// function Header(props) {
//     return (
//         <>
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className='ofThe'>
//                         <span className='of'>Of</span>
//                         <span className='the'>The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className='tagline'>
//                 <span>{props.tagline}</span>
//             </h3>
//             </header>
//             </>
//     )
// }

// const Header = (props) => {
//     return (
//         <>
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className='ofThe'>
//                         <span className='of'>Of</span>
//                         <span className='the'>The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className='tagline'>
//                 <span>{props.tagline}</span>
//             </h3>
//             </header>
//             </>
//     )
// }

// This is a implicit return
// const Header = (props) => (
//         <>
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className='ofThe'>
//                         <span className='of'>Of</span>
//                         <span className='the'>The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className='tagline'>
//                 <span>{props.tagline}</span>
//             </h3>
//             </header>
//             </>
//     )

// const Header = ({ tagline }) => {
//     return (
//         <>
//             <header className='top'>
//                 <h1>
//                     Catch 
//                     <span className='ofThe'>
//                         <span className='of'>Of</span>
//                         <span className='the'>The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className='tagline'>
//                 <span>{tagline}</span>
//             </h3>
//             </header>
//             </>
//     )
// }