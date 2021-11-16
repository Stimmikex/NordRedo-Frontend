import React from 'react';
import Link from 'next/link';
import Study from '../../pages/study/Study.module.scss'

const StudyList = ({ years, classer }) => {
    return (
        <div>
            {
                years.map((year) => {
                    return (
                        <Link href='/study/[classId]/year/[yearId]' as={`/study/${classer.id}/year/${year.id}`}>
                            <div>
                                <h1>{year.name}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default StudyList
