import React from 'react';
import Link from 'next/link';
import Study from '../../pages/study/Study.module.scss'

const StudyList = ({ classer, year, notes }) => {
    return (
        <div>
            {
                notes.map((note) => {
                    return (
                        <Link href='/study/[classId]/year/[yearId]/note/[noteId]' as={`/study/${classer.id}/year/${year.id}/note/${note.id}`}>
                            <div>
                                <div>
                                    <h2>{note.name}</h2>
                                    <p>{note.description}</p>
                                    <a href={note.link}><p>Link</p></a>
                                    <i>Author: </i>
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
