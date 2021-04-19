import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const TaskToDo = ({modal,toggle,save}) => {
    const [taskName,setTaskName]=useState('')
    const[description,setDescription]=useState('')
    const onChange=(e)=>{
        const{name,value}=e.target
        if(name==="taskName"){setTaskName(value)}
        else{setDescription(value)}
    }
    const saveEvent=(e)=>{
        e.preventDefault()
        let obj={}
        obj["Name"]=taskName
        obj["Description"]=description
        save(obj)

    }
    return (
        <div>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Tasks</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text" className="form-control"value={taskName}name="taskName" onChange={onChange} />
                    </div>
                    <div className="form-group">
                       <label>Description</label>
                       <textarea rows="7" className="form-control" value={description}name="description" onChange={onChange} ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={saveEvent}>Add Task</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
};

export default TaskToDo;