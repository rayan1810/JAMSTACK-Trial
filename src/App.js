//Grab all the LInks
// display all the links

import { useState,useEffect } from "react";
import LinkList from './component/LinkList'
import LinkForm from "./component/LinkForm";
// add delete and archive functionality
function App() {
  const [links,setLinks] = useState([]);
  const loadLinks = async()=>{
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (error) {
      console.error(error);
      
    }
    
  }
  useEffect(()=>{
    loadLinks();
  },[])
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List O' Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks}/>
    </div>
  );
}

export default App;
