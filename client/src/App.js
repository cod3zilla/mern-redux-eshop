import React,{useEffect,useState} from 'react'
import axios from 'axios'


function App() {
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get('/home');
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{posts}</h1>
    </div>
  );
}

export default App;
