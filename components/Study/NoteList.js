import React from 'react';
import Link from 'next/link';
import NoteStyle from './Note.module.scss'

const StudyList = ({ classer, year, notes }) => {
    return (
        <div className={NoteStyle.noteContainer}>
            {
                notes.map((note) => {
                    return (
                        // <Link href='/study/[classId]/year/[yearId]/note/[noteId]' as={`/study/${classer.id}/year/${year.id}/note/${note.id}`}>
                            <div className={NoteStyle.note}>
                                <div>
                                    <h2>{note.name}</h2>
                                    <p>{note.description}</p>
                                    <a href={note.link}><p>Link</p></a>
                                    <i>Author: {note.author}</i>
                                </div>
                            </div>
                        // </Link>
                    )
                })
            }
        </div>
    )
}

export default StudyList
