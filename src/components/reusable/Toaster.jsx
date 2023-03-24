import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, Toast } from 'react-bootstrap';
import { FcInfo } from "react-icons/fc";

const Toaster = () => {
  const toast = useSelector(state => state.toast);

  return (
    <div>
      <ToastContainer position="top-end" className="p-3">
        <Toast
        onClose={() => { /* dismiss the toast */ }}
        show={toast.show}
        delay={toast.delay}
        autohide={toast.autohide}
        >
          <Toast.Header>
            <strong className="me-auto"><FcInfo className="h5"/> {toast.title}</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Toaster;
