import { useState } from 'react'
import './Event.css'

function Event({ post }: { post: EventType }) {
  //   Posts {
  //     title: string;
  //     venue: string;
  //     time: string;
  //     date: Date;
  //     description: string;
  // }
  let [pledged, setPledged] = useState<boolean>(false);

  const handlePledge = () => {
    setPledged(true);
  }

  return (
    <>
      <div className="col-xxl-3 w-style col-lg-4 col-md-6 col-sm-12">
        <div className="card car" style={{ width: "16rem", margin: "15px" }}>
          {/* <img src={post.img} className="card-img-top" alt="Image"/> */}
          <div className="card-body body-style">
            <h5 className="card-title">{post.title}</h5>
            <div className='schedule'>
              <span>{post.date.substring(0,9)}</span> <span>{post.time}</span>
            </div>
            <div className='Venue'><a href="http://google.map.com">{post.venue}</a></div>
            <p className="card-text">{post.description}</p>
            <button onClick={handlePledge} className="btn btn-dark">{pledged ? <div>Pledged</div> : <div>I Pledge to reduce Poverty !!!</div>}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
