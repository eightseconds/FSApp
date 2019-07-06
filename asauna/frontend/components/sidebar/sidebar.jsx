import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchWorkspaces();
    }

    render() {
        let workspaceId = this.props.match.params.workspaceId
        return (
            <div className="sidebar--container">
                <div className="sidebar--title">
                    <i className="fas fa-fire sidebar"></i> 
                    <div className="sidebar-links--content--name">asauna</div>
                </div>
                <div className="sidebar--links">
                    <Link className="sidebar--links--link" to={`/home/${workspaceId}`}>
                        <div className="sidebar--links--content">
                            <i className="fas fa-home"></i>
                            <div>Home</div>
                        </div>
                    </Link>
    
                    <Link className="sidebar--links--link" to={`/home/${workspaceId}`}>
                        <div className="sidebar--links--content">
                            <i className="fas fa-check-circle"></i>
                            <div>My Tasks</div>
                        </div>
                    </Link>
                </div>

                <div className="sidebar--section">
                    <div className="sidebar--workspace">
                        <div className="sidebar--workspaceName">{this.props.workspace.name}</div>
                    </div>
                    <div className="sidebar--teamMemberList">   
                        <div className="Avatar Avatar--small Avatar--color1 Avatar--sidebar">DU</div>
                        <div className="Avatar Avatar--small Avatar--colorNone Avatar--sidebar"></div>
                        <div className="Avatar Avatar--small Avatar--colorNone Avatar--sidebar"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar)