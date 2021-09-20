
import './App.css';


function App() {
  return (
    <div className="App">
   
    </div>
  );
}

/* function Countries(){
  const [country,setCountry]=useState([]);
  useEffect(()=>{

fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>setCountry(data));


  },[])
return(

<div>
  <h2>Traveling World</h2>

  {
    country.map(a=><Displaycountry name={a.name} capital={a.capital}></Displaycountry>)
  }
</div>

);

}

function Displaycountry(props){

  return(
<div>
<h2>Name:{props.name}</h2>
<p>Capital:{props.capital}</p>
</div>


  );

} */
export default App;
