import React from 'react'
import './progress.less'

let Progress = React.createClass({
    render() { 
        return (
            <div className="components-progress">
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        )
    }
})
export default Progress;

