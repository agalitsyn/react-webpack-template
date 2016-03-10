import React from 'react'
import ReactDOM from 'react-dom'
import '../modules/styles.css'

class Hello extends React.Component {
    render() {
        return(
            <div className="container theme-showcase" role="main">
                <div className="jumbotron">
                    <h1>Hello React!</h1>
                    <p>
                        This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.
                    </p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))
