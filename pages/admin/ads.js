import React from 'react'
import Link from 'next/Link';

const ads = ({ getAds }) => {
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
            <h1>Ads Managment</h1>
            {getAds.map((ad) => {
                return (
                    <div>
                        <div>
                            <img src={ad.link}></img>
                            <p>{ad.name}</p>
                            <Link></Link><button>Change</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })
            }
            <div>
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
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/ads`);
    const getAds = await res.json();
    return {
        props: {
            getAds,
        },
    }
}

export default ads
