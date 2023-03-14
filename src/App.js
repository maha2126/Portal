import Modal from './Modal/Modal';
import { useState } from 'react';

const App = () => {
    const [showModal, setShowModal] = useState(false)
    return <>
        <h1>Let's play modal!</h1> 
        <button onClick={() => setShowModal(true)}>Open Modal</button>

        <Modal  show = {showModal}
                title = 'Hello World'
                onClose = {() => setShowModal(false)}
                onSuccess = {() => setShowModal(false)} >
            <h3>This is modal content...</h3>
            <p>Welcome back</p>
        </Modal>
    </>
}

export default App;
