import React from 'react'
import './header.less'

let Header = React.createClass({
    render() { 
        return (
            <div className="row components-header">
                <img src="/static/images/logo.png" width="40" alt="" className="-col-auto"></img> 
                <h1 className="caption"> React Music Play</h1>
            </div>
        )
    }
})
export default Header;