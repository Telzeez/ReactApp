import { useState, useEffect, use} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
export function FruitSearch(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {   
    if(query.trim() === ''){
      setResults([]);
      return;
    }

    const timeId = setTimeout(async () => {
      try {
        // Using a CORS proxy to avoid CORS issues
        // visit https://cors-anywhere.herokuapp.com/ to request temporary access to the demo server (Important) do that first
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/${query}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
      }, 700); 
      return () => { clearTimeout(timeId) };
      }, [query]);

function handleSubmit(e){ e.preventDefault();}
  return(
    <div className='container'>
      <form action=""  onSubmit={handleSubmit}>
          <input 
        type="text" 
        placeholder="Search for a fruit..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />

      </form>
            <ul>
        {results.length === 0 ? <p>No results found</p>:results.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  )} 
function App() {
    

  return (
    <div className="App">
      <h1>Fruit Search App</h1>
      <FruitSearch/>
    </div>
  )
}

export default App

