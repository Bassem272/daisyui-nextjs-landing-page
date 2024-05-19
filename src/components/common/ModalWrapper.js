import React from 'react'

function ModalWrapper({isOpen , title , size , closeModal , children}) {
    if (!isOpen) return null; 
  return (
    <div className={`modal ${size}`}>
        <div className="modal-header">
            <h2>{title}</h2>
            <button onClick={closeModal}>Close </button>
            <div className="modal-body">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ModalWrapper