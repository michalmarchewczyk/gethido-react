import React, {useState} from 'react';
import {Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {createTask} from '../../actions/taskActions';


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: theme.spacing(4),
    }
}));


function TaskAdd(props) {
    
    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        props.createTask({name: name, description: desc});
        setOpen(false);
        setName('');
        setDesc('');
    };
    
    return (
        <React.Fragment>
            <Fab color='secondary' className={classes.fab} onClick={() => {
                setOpen(true)
            }}>
                <AddIcon/>
            </Fab>
            <Dialog open={open} onClose={() => {
                setOpen(false)
            }} maxWidth='sm' fullWidth>
                <form onSubmit={onSubmit}>
                    <DialogTitle>Add task</DialogTitle>
                    <DialogContent>
                        <Box>
                            <TextField
                                type='text'
                                label='Name'
                                fullWidth
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                value={name}
                            />
                        </Box>
                        <Box mt={1}>
                            <TextField
                                multiline
                                label='Description'
                                fullWidth
                                rows={2}
                                rowsMax={6}
                                onChange={(e) => {
                                    setDesc(e.target.value)
                                }}
                                value={desc}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    // stage: state.task.stage,
});

export default connect(mapStateToProps, {createTask})(TaskAdd);
