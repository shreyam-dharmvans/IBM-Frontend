import './ViewEvents.css'

import Header from '../components/Header'
import Event from '../components/Event';

function ViewEvents({ allPosts }: { allPosts: EventType[] }) {

  return (
    <>
      <Header></Header>
      <div className='view-event'>
      {allPosts.map((post) => {
        return <Event post={post} />;
      })}
      </div>

    </>
  )
}

export default ViewEvents;
