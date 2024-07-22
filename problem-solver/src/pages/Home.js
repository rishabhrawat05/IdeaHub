import React,{useEffect,useState} from 'react'
import Base from '../components/Base'
import AllIdeas from '../components/AllIdeas';
import { getAllProblems } from '../services/problem_service';



const Home=()=> {
  useEffect(() => {
    document.title = "IdeaHub";
}, []);
    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState([]);

  useEffect(()=>{
    setLoading(true);
    getAllProblems().then(response=>{
      setProblem(response);
      setLoading(false);
    })
  },[]);
  
  return (
    <div>
        <Base/>
        <AllIdeas problems={problem} loading={loading}/>
       
        </div>
  )
}

export default Home