import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    const onCancel = () => {
        reset();
        setIsOpen(false);
    }
    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="programming hero">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="title">Title</label>
                        <input className='w-full rounded-lg' type="text" id='title' {...register("title")} />
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="title" className='mt-2'>Description</label>
                        <textarea className='w-full rounded-lg' type="text" id='description' {...register("description")} ></textarea>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="title" className='mt-5'>Deadline</label>
                        <input className='w-full rounded-lg' type="date" id='date' {...register("date")} ></input>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="title" className='mt-5'>Assign to</label>
                        <select
                            className='w-full rounded-lg'
                            id='assignTo'
                            {...register("assignTo")}
                        >
                            <option value="Masud Rahman">Masud Rahman</option>
                            <option value="Tahsina Iqbal Nitol"> Tahsina Iqbal Nitol</option>
                            <option value="Jonaki Noman"> Jonaki Noman</option>
                            <option value="Tanjim Islam"> Tanjim Islam</option>
                            <option value="Alif Ashraf Provat"> Alif Ashraf Provat</option>
                            <option value="Raiyan Ahmed"> Raiyan Ahmed</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <label htmlFor="title" className='mt-5'>Priority</label>
                        <select
                            className='w-full rounded-lg' id='priority' {...register("priority")}
                        >
                            <option defaultValue value="high">High</option>
                            <option value="mediam">Mediam</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className='flex gap-3 mt-4 justify-end'>
                        <button onClick={() => onCancel()} type='button' className='btn btn-danger'> Cancel</button>
                        <button type='Submit' className='btn btn-primary'> Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;