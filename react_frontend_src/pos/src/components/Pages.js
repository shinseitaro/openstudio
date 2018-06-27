import React, { Component } from "react"
import PageTemplate from "./PageTemplate"


export class POS extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PageTemplate>
            <section className="POS">
                <div>POS</div>
            </section>
            </PageTemplate>
        )
    }
}

export class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    setLoaderStatus(status) {
        this.props.setLoaderStatus(status)
    }

    setLoaderMessage(message) {
        this.props.setLoaderMessage(message)
    }

    componentWillMount() {
        this.setLoaderStatus('loading')
    }

    componentDidMount() {
        setTimeout(() => this.setLoaderMessage('phase 1'), 0)
        setTimeout(() => this.setLoaderMessage('phase 2'), 1000)
        setTimeout(() => this.setLoaderMessage('phase 3'), 2500)

        setTimeout(() => this.setLoaderStatus('ready'), 3000)
        setTimeout(() => this.setLoaderMessage('Loading done!'), 3500)
        
    }

    render() {
        return (this.props.loader.status === 'loading') ?
            <div>Loading... <br /> {this.props.loader.message} </div> :
            <PageTemplate>
            <section className="Welcome">
                <div>Welcome page</div>
                <div>{this.props.loader.status}</div>
                <div>{this.props.loader.message}</div>
            </section>
            </PageTemplate>
    }
}


export const Whoops404 = ({ location }) =>
    <div className='whoops-404'>
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>
