import { useRef } from "react";


const App = () => {

  let APIdata = useRef(null);
  let myPTag = useRef();

  const fetchData = async() => {
    const response = await fetch("https://dummyjson.com/products")
    APIdata.current = await response.json();
  }

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIdata.current);
  }


  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
      <button>Dummy</button>
    </div>
  );
};

export default App;