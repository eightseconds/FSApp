import React from "react";
import { withRouter } from 'react-router-dom';

class LoadingPage extends React.Component {
    constructor(props) {
        super(props)


        // this.handleLogout = this.handleLogout.bind(this)
    }

    // handleLogout(e) {
    //     this.props.logout()
    //     .then(this.props.history.push('/login'))
    // }

    componentDidMount(){
        let that = this;
        this.props.fetchWorkspaces()
        .then(() => {
            if (!!that.props.workspaces.length) {
                debugger
                that.props.history.push(`/home/${that.props.workspaces[0].id}`)
            } else {
                that.props.history.push('/home/create')
            }
        })
    }


    render() {
        return (
            <div>
                    <i className="fas fa-spinner" ></i>
            </div>
        )
    }
}

export default withRouter(LoadingPage)