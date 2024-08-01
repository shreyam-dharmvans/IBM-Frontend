import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.tsx'
import AddEvent from './pages/AddEvent.tsx'
import ViewEvents from './pages/ViewEvents.tsx'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'



function App() {
  let [allPost, setAllPost] = useState<EventType[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {

      try {
        let response = await axios.get("/allPosts");

        if (response.status == 200) {
          setAllPost(response.data.allPosts);
        }
      }
      catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }
    }
    
    if(allPost.length == 0){
    getAllPosts();
    }
  }, );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<AddEvent />}></Route>
        <Route path="/allPosts" element={<ViewEvents allPosts={allPost} />}></Route>
      </Routes>
    </>
  )
}

export default App
