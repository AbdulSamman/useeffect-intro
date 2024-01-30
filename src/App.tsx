import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const employeeUrl = "https://edwardtanguay.vercel.app/share/employees.json";

const customersUrl =
  "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/customers.json";

function App() {
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState(true);

  // api with fetch
  useEffect(() => {
    (async () => {
      const response = await fetch(employeeUrl);
      const dataEmployee = await response.json();
      //console.log(dataEmployee);
      setEmployees(dataEmployee);
    })();
  }, []);

  // api with axios

  useEffect(() => {
    (async () => {
      const response = (await axios.get(customersUrl)).data;
      //console.log(response);
      setCustomers(response);
    })();
  }, []);

  // analyse wie oft wurde den butten geklickt
  //[showCustomer] nur wenn showCustomers sich ändert

  useEffect(() => {
    console.log(
      `send user data to external statistic API: showCustomers =${showCustomers.toString()}`
    );
  }, [showCustomers]);
  return (
    <div className="App">
      <h1>Useeffect intro</h1>
      <button onClick={() => setShowCustomers(!showCustomers)}>
        Toggle Customers
      </button>
      <p>there are {employees.length} employees.</p>
      {showCustomers && <p>there are {customers.length} customers.</p>}
    </div>
  );
}

export default App;
