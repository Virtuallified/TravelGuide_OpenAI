import React from 'react';
import { useSelector } from 'react-redux';
import Toast from 'react-bootstrap/Toast';

const Toaster = () => {
  const toast = useSelector(state => state.toast);

  return (
    <Toast
      onClose={() => { /* dismiss the toast */ }}
      show={toast.show}
      delay={toast.delay}
      autohide={toast.autohide}
    >
      <Toast.Header>
        <strong className="me-auto">{toast.title}</strong>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  );
};

export default Toaster;
