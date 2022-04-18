import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Dashboard() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var graphql = JSON.stringify({
    query: "query Query {\r\n  getAllUsers {\r\n    id\r\n    firstName\r\n    lastName\r\n    email\r\n    results\r\n    typePermis\r\n  }\r\n}",
    variables: {}
  })
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow'
  };

const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://code-conduite.herokuapp.com/gql/getAllUsers", requestOptions)
    .then(response => response.json())
    .then(result => setData(result.data.getAllUsers))
    .catch(error => console.log('error', error));
  
}, []);
    
    return (
      // getAllUsers
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Liste des utilisateurs</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Type permis</th>
                      <th>Résultats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.typePermis}</td>
                        <td>{item.results}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

        
    );
  } 
  
  export default Dashboard;