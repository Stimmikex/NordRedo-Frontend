import React from 'react'

const addAds = () => {
    const [selectedFile, setSelectedFile] = React.useState();
	const [isFilePicked, setIsFilePicked] = React.useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
    return (
        <div>
            <hr></hr>
            <h2>Add Ad</h2>
            <label>Upload image </label>
            <input
                onChange={changeHandler}
                accept=".jpg, .png, .jpeg"
                className="fileInput mb-2"
                type="file">
            </input>
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <hr></hr>
            <button onClick={handleSubmission}>Add Ads</button>
        </div>
    )
}

export default addAds
