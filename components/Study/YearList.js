import React from 'react';
import Link from 'next/link';
import YearStyle from './Year.module.scss'

const StudyList = ({ years, classer }) => {
    return (
        <div className={YearStyle.yearContainer}>
            {
                years.map((year) => {
                    return (
                        <Link href='/study/[classId]/year/[yearId]' as={`/study/${classer.id}/year/${year.id}`}>
                            <div className={YearStyle.year}>
                                <h1>{year.name}</h1>
                                <p>Number of notes: </p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default StudyList
