import React from 'react'
import { Link } from 'react-router';
import Progress from '../components/progress'
import './player.less'

let durarion; //音乐的总时间
let Player = React.createClass({
    progressChangeHander(progress) { 
        $('#player').jPlayer('play',durarion*progress)
    },
    getInitialState() { 
        return {
            progress: '-', 
        }
    },
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            durarion = e.jPlayer.status.duration
            console.log('durarion: ', durarion);
            this.setState({progress:e.jPlayer.status.currentPercentAbsolute })
         })
    },
    componentWillUnmount() {
        $('#player').unbind($.jPlayer.event.timeupdate)
    },
    render() { 
        return (
            <div className='player-page'> 
            <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>    
            <div className="mt20 row">
                <div className="controll-wrapper">
                    <h2 className="music-title">{this.props.currentMusitItem?this.props.currentMusitItem.title:""}</h2>
                    <h3 className="music-artist mt10">{this.props.currentMusitItem?this.props.currentMusitItem.artist:""}</h3>    
                    <div className="row mt20">
                        <div className="left-time -col-auto">-{this.state.leftTime}</div>
                        <div className="volume-container">
                            <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                            <div className="volume-wrapper">
                                <Progress
                                    progress={this.state.volume}
                                    onProgressChange={this.changeVolumeHandler}
                                    barColor='#aaa'
                                >
                                </Progress>
                            </div>
                        </div>
                    </div>    
                    <div style={{ height: 10, lineHeight: '10px' }}>
                        <Progress progress={this.state.progress} barColor={this.state.barColor} onProgressChange={this.progressChangeHander}></Progress>    
                    </div>  
                    <div className="mt35 row">
                        <div>
                            <i className="icon prev" onClick={this.prev}></i>
                            <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
                            <i className="icon next ml20" onClick={this.next}></i>
                        </div>
                        <div className="-col-auto">
                            <i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
                        </div>
                    </div>
                </div>    
                <div className="-col-auto cover">
                    <img src={this.props.currentMusitItem?this.props.currentMusitItem.cover:""} alt={this.props.currentMusitItem?this.props.currentMusitItem.title:""}/>
                </div>
            </div>    
                
                
                
            </div>
        )
    }
})
 export default Player
