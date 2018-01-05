import React from 'react'
import Header from './components/header'
import Progress from './components/progress'

let Root = React.createClass({
    getInitialState() { 
        return {
            progress: '-',
            barColor:'#2f9842'
        }
    },
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
                }).jPlayer('play');
            },
            // swfPath: "../../dist/jplayer",
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });  
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({progress:e.jPlayer.status.currentPercentAbsolute })
         })
    },
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate)
     },
    render() { 
        return (
            <div>
                
                <Header />
                
                <Progress progress={this.state.progress} barColor={this.state.barColor}></Progress>
            </div>
        )
    }
})
export default Root


