export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
import * as ProjectApiUtil from '../util/project_api_util';


const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
})

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

const removeProject = project => ({
    type: REMOVE_PROJECT,
    // projectId: project.id
})


export const fetchProjects = (workspace_id) => dispatch => (
    ProjectApiUtil.fetchProjects(workspace_id).then(projects => dispatch(receiveProjects(projects)))
)

export const fetchProject = (id) => dispatch => (
    ProjectApiUtil.fetchProject(id).then(project => dispatch(receiveProject(project)))
)

export const createProject = (project) => dispatch => (
    ProjectApiUtil.createProject(project).then(project => dispatch(receiveProject(project)))
)

export const updateProject = (project) => dispatch => (
    ProjectApiUtil.updateProject(project).then(project => dispatch(receiveProject(project)))
)

export const deleteProject = (id) => dispatch => (
    ProjectApiUtil.deleteProject(id).then(project => dispatch(removeProject(project)))
)