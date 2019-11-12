import React from 'react'

class Chrono extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: this.props.millliseconds,
            start: false
        }
        
    }
    componentDidMount(){
        setInterval(
            () => this.state.start ? this.setState({ timer: this.state.timer + 1000 }) : clearInterval(this.state.timer), 1000)
    }
    start = () => {
        this.setState({start: !this.state.start})
    }

    reset = () => {
        this.setState({timer: this.props.millliseconds, start: false})
    }
    render() {

        const Seconds = Math.floor((this.state.timer / 1000) % 60);
        const minuts = Math.floor((this.state.timer / 60000) % 60);
        const hours = Math.floor((this.state.timer / 3600000) % 24);
        return (
            <div className="clock">
                <h1>{String(hours).padStart(2, '0')} : {String(minuts).padStart(2, '0')} : {String(Seconds).padStart(2, '0')}</h1>
                <div className="format ">
                    <p>Hour</p>
                    <p>Minut</p>
                    <p>Second</p>
                </div>
                <div className="btn">
                    <button onClick={this.start}>{this.state.start ? 'Pause' : 'Start'}</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>




        );
    }
}




export default Chrono