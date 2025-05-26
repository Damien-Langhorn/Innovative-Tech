import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';


const Modal = ({project, onClose}) => {
    {/* This modal component is used to display the details of a project when the user clicks on "Read More" */}

    const modalRef = useRef(null);
    

    {/* CLoses the modal with escape for accessibility */}
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    
    {/* Closes the modal when clicking outside of it */}
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        document.body.style.touchAction = 'none'; // Prevent touch actions
        return () => {
            document.body.style.overflow = ''; // Clean up on unmount
            document.body.style.touchAction = '';
        };
    }, []);

  return (
    <div className='fixed inset-0 text-white pt-20'>
        <div className='flex justify-center items-center'>
            
            <div ref={modalRef} className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-md m-8'>
            <h2 className='text-2xl font-bold mb-4'>{project.modal.title}</h2>
            <p className='mb-4'>{project.modal.content}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={onClose}>Close</button>
            </div>
            
        </div>
    </div>
  )
}
Modal.propTypes = {
    project: PropTypes.shape({
        modal: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal
