import React, { Component } from 'react'
import { 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, TextField,
    Button
        } from '@material-ui/core';

export default class CardCreator extends Component {

    state = {
        open: this.props.open,
        title: '',
        text: ''

    }


    handleToggle = () => {
        this.setState({open: !this.state.open})
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCancel = () => {
        this.setState({title: '', text: ''})
        this.setState({open: !this.state.open})
    }

    handleSubmit = () => {
        let TodoCard = {
            title: this.state.title,
            text: this.state.text
        }
        this.props.callbackFromParent(TodoCard);
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(oldProps){
        const newProps = this.props
        if (newProps.open !== oldProps.open){
            this.handleToggle()
        }
    }

    render() {
        return (
            <Dialog open={this.state.open} onClose={this.handleToggle} maxWidth="md">
                <DialogTitle>Add a ToDo card!</DialogTitle>
                <DialogContent>
                    <DialogContentText>Title</DialogContentText>
                    <TextField name="title" value={this.state.title} margin="normal" onChange={this.handleChange} />

                    <DialogContentText>Content</DialogContentText>
                    <TextField name="text" value={this.state.text} margin="normal" onChange={this.handleChange} />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                    Create
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
