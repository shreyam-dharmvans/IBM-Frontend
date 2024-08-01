import './AddEvent.css'

import Header from '../components/Header'
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
//import Slidebar from"../components/slider"
// type PropsType = {
//   setAllPosts : React.Dispatch<React.SetStateAction<EventType>>
// }

function AddEvent() {
                                    //put these line in comment in input tags of form 
  let title = useRef<HTMLInputElement>(null);   //ref = {title} in input tag of title 
  let venue = useRef<HTMLInputElement>(null);   // ref = {venue} in input tag of venue and similarly for other inputs
  let time = useRef<HTMLInputElement>(null);
  let date = useRef<HTMLInputElement>(null);
  let description= useRef<HTMLTextAreaElement>(null); 
  let navigate = useNavigate();   
//  let [added,setAdded]= useState<boolean>(false); 

  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let newPost= {
      title: title.current!.value,
      venue: venue.current!.value,
      time: time.current!.value,
      date: date.current!.value,
      description: description.current?.value,
    };


    try{
      toast.loading("adding event",{id:"add"});
      let res= await axios.post("/new",newPost);

      if(res.status == 200){
      //  setAdded(true);
        navigate("/allPosts");
        toast.success("event added",{id:"add"});
      }
    }
    catch(err){
      toast.error("error",{id:"add"});
      console.log(err);
    }
  }

  return (
    <>
      <Header></Header>
      {/* <Slidebar></Slidebar> */}
     {/* { added && <div className="alert alert-dark" role="alert">
        Event added
      </div>} */}
      <form action="" onSubmit={e => handleSubmit(e)}>
      <div className="container p-4">
          <div className="row mb-4 gy-4">
            <div className=" col-md-6 col-sm-12">
              <input type="text" ref = {title} className="form-control bg-body-tertiary border-secondary-subtle" placeholder="Title" />
            </div>
            <div className=" col-md-6 col-sm-12 ">
              <input type="text" ref = {venue} className="form-control bg-body-tertiary border-secondary-subtle" placeholder="Venue" />
            </div>
          </div>

          <div className="row mb-4 gy-4">
            <div className="col col-md-6 col-sm-12">
              <input type="date" ref={date} className="form-control bg-body-tertiary border-secondary-subtle" placeholder="Date" />
            </div>
            <div className="col col-md-6 col-sm-12">
              <input type="time" ref={time} className="form-control bg-body-tertiary border-secondary-subtle" placeholder="Time" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col col-md-12">
              <textarea ref={description} placeholder="Description " className="form-control bg-body-tertiary border-secondary-subtle"></textarea>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col  col-sm-12 ">
            {/* /*  <input type="button" value="Submit" className="btn btn-primary w-100" /> */}
              <div className=' d-grid gap-2  d-sm-flex justify-content-sm-end '>
                <button className="btn btn-danger me-md-2 ">Submit</button>
                <button className="btn btn-secondary  " type='reset'>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddEvent
