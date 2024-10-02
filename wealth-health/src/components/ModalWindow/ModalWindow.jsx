import './ModalWindow.scss';

export default function ModalWindow({toggleModal}) {

    return (
        <div className="modalWindow">
                <div className="modal">
                    <div
                        onClick={toggleModal}
                        className="overlay"></div>
                    <div className="modal-content">
                        <p>Employee creation complete</p>
                        <button
                            onClick={toggleModal}
                            className='close-modal'>
                            Close
                        </button>
                    </div>
                </div>
        </div>
    )
}