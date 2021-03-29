import React from 'react'
import addForm from '../../styles/AddForm.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const StoreAddForm = () => {
    const EventAdd = async event => {
        event.preventDefault();

        const data = {
            title: event.target.title.value,
            seats: event.target.seats.value,
            location: event.target.location.value,
        };

        const options = {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        }

        console.log(data);

        const res = await fetch(`https://nordredo-backend.herokuapp.com/store/add`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    const handleChange = event => {
        setSelectedImage(event.target.files[0]);
      }
    
      const handleImageUpload = () => {
        if (!selectedImage) { return; }
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        uploadImage(formData)
          .then(uploadedImage => {
            console.log(uploadedImage);
          })
          .catch(_ => {
            console.log('Oooops, something went wrong!')
          })
      }
    
    return (
        <div className={addForm.add_container}>
            <h1>Add Item to store</h1>
            <form onSubmit={EventAdd}>
            <div>
                <label>Title: </label>
                <input type='text'
                    name='title'
                    required
                />
                <hr></hr>
                <label>Info: </label>
                <textarea name='text'></textarea>
                <hr></hr>
                <label>Seats: </label>
                <input type='number'
                    name='seats'
                    required
                />
                <hr></hr>
                <label>Upload image </label>
                <input
                    onChange={handleChange}
                    accept=".jpg, .png, .jpeg"
                    className="fileInput mb-2"
                    type="file">
                </input>
                <hr></hr>
            </div>
            <button type='submit'>Add Item</button>
        </form>
        </div>
    )
}

export default StoreAddForm