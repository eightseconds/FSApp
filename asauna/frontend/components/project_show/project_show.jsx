import React from 'react';
import Sidebar from '../sidebar/sidebar_container'
import Navbar from '../navbar/navbar_container';
import { withRouter } from 'react-router-dom';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)


        this.handleRemove = this.handleRemove.bind(this)
    }


    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchWorkspaces();
    }

    handleRemove(){
        const projectId = this.props.match.params.projectId
        this.props.deleteProject(projectId)
        .then(() => this.props.history.push(`/home/${this.props.workspace.id}`))
    }

    render() {
        const projectName = this.props.project ? this.props.project.name : ""
        const workspace = this.props.workspace ? this.props.workspace : null
        return (
            <div>
                <div className="project--show--container">
                    <Sidebar 
                    currentUser = {this.props.currentUser}
                    workspace = {workspace}/>
                    <Navbar />
                    <div className="Topbar--header">
                        <span className="header--name">{projectName}</span>
                        <button onClick={this.handleRemove} className="buttonView buttonView--default buttonView--primary buttonView--large button-submit">Delete Project</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(ProjectShow)