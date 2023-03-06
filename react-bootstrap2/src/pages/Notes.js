import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/notes').then(res => res.json()).then(data=> setNotes(data))
  }, [])

  return (
    <Container>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4} >
            {/* <Paper>{note.title}</Paper> */}
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}