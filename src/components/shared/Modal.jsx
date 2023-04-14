import ReactDOM from "react-dom";


export default function Modal({ modalState }) {

    const [modal, setModal] = modalState;

    if (modal === null) return null;

    return ReactDOM.createPortal(
        <div className="overlay" >
            <div className="modalview">
                <button className="modalview-btn" onClick={() => setModal(null)}>X</button>
                <div className="modal-content">{modal}</div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}
