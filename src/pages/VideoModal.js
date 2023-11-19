import React from 'react';
import { Modal} from 'react-bootstrap';
import Video from './Video';

function VideoModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton />
        <Video />
    </Modal>
  );
}

export default VideoModal;
