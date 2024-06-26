import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  place_name: string;
  description: string;
  place_index: number;
  image_url?: string;
}

const Modal2: React.FC<ModalProps> = ({ isVisible, onClose, place_name, description, place_index, image_url }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    setNewName(place_name);
    setNewDescription(description);
  }, [place_name, description]);

  const handleUpdateButtonClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewName(place_name);
    setNewDescription(description);
    onClose()
  };

  const handleSubmit1 = () => {
    const url = `http://127.0.0.1:8000/delete/place?email=sh33thal24@gmail.com&first_name=Sheethal&last_name=Joshi%20Thomas&place_index=${place_index}`;
    axios.post(url);
    onClose();
    window.location.reload();
  };

  const handleSubmit2 = () => {
    const url = `http://127.0.0.1:8000/update/place?email=sh33thal24@gmail.com&first_name=Sheethal&last_name=Joshi%20Thomas&place_index=${place_index}&place_name=${newName}&description=${newDescription}`;
    axios.post(url);
    onClose();
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur flex justify-center items-center z-50 '>
      <div className='w-[1000px]'>
        <div className='bg-base-200 p-7 rounded-3xl flex flex-col overflow-auto max-h-[80vh]'>
          <div className='mb-7 mt-2 text-lg flex justify-between'>
            <div className='lg:flex'>
              <div className='mr-2'>
                <div className="avatar flex-col mt-10">
                  <div className=" w-60 rounded-xl">
                  {(image_url) ? <img src={image_url} className='object-cover w-full h-full' />: <img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" className='object-cover w-full h-full' />}
                  </div>
                  {isEditing ? (
                    <>
                      <button className='btn w-64 bg-warning mr-6 mt-4' onClick={handleSubmit2}>Save Changes</button>
                      <button className='btn w-64 bg-error mr-6 mt-4' onClick={handleCancelClick}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className='btn w-64 bg-warning mr-6 mt-4' onClick={handleUpdateButtonClick}>Update Place</button>
                      <button className="btn w-64 bg-warning mr-6 mt-4" onClick={handleSubmit1}>Delete Place</button>
                    </>
                  )}
                </div>
              </div>
              <div className=' mt-10'>
                <div className='flex mb-4 justify-between'>
                  <div className='flex'>
                    {isEditing ? (
                        <input type="text" className="input input-bordered font-extrabold  text-3xl " placeholder="Daisy" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    ) : (
                      <div className='font-extrabold text-3xl'>{place_name}</div>
                    )}
                  </div>
                </div>
                <div className='card bg-base-100 shadow-xl'>
                  <div className='card-body'>
                    {isEditing ? (
                      <textarea className="textarea textarea-bordered card-body h-40 w-96" placeholder="What memory would you like to share?" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>
                    ) : (
                      <div className='mt-2 ml-3'>{description}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-square btn-sm" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;