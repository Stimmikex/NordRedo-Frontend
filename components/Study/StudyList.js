import React from 'react';
import Link from 'next/link';
import Study from './Study.module.scss'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const StudyList = ({ classes }) => {
    return (
        <div className={Study.classContainer}>
            {
                classes.map((classer) => {
                    return (
                        <Link href='/study/[classId]' as={`/study/${classer.id}`}>
                            <div className={Study.class}>
                                {/* <div className={Study.class__image}>
                                    <img src="test"></img>
                                </div> */}
                                <div className={Study.class__info}>
                                    <h2>Class: {classer.name}</h2>
                                    <p>Number of posts:</p>
                                    <p>Years: [int number] - [int number]</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default StudyList
