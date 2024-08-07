import { useState } from 'react';
import Modal from './Modal';
import './style.css';

export default function ModalTest() {
    const [showPop, setShowPop] = useState(false);

    function handleClick() {
        setShowPop(!showPop);
    }

    function onClose (){
        setShowPop(false)
    
    }

    return (
        <div className='main'>
            <button onClick={handleClick}> Open Modal Popup</button>
            {showPop && <Modal onClose={onClose} />}
        </div>
    );
}
