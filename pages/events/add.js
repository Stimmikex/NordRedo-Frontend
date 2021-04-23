import EventAddForm from '../../components/Events/EventAddForm.js'

export default function AddEvent({ types }) {
    return (
        <EventAddForm types={types}/> 
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://nordredo-backend.herokuapp.com/event/types')
    const types = await res.json()
    return {
      props: {
        types,
      },
    }
  }