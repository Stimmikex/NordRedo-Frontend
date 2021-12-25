import React from 'react'
import { ifUserAdmin } from '../../components/NavFunctions';

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const invite = ({ gov, users, user }) => {
    const [selectedFile, setSelectedFile] = React.useState();
	const [isFilePicked, setIsFilePicked] = React.useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const handleOnSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <label htmlFor="name" onSubmit={handleOnSubmit}>Invite a user by email: </label>
                <input type="text" name="email"></input>
            </div>
            <div>
                <p>Upload sheet file of invites</p>
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
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch(`${apiUrl}/users/me`, {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    if (!ifUserAdmin(user)) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    return {
        props: {
            user,
        },
    }
}

export default invite