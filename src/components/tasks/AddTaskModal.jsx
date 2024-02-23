import Modal from "../ui/Modal";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming hero">
                <p>We're on a mission to provide personalized learning and empower individuals to kick-start their careers.</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;