import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AccountScreen() {
  const [appusers, setAppusers] = useState([]);

  useEffect(() => {
    fetch("http://blog.api/appuser/", {
      method : "POST",
      body: JSON.stringify({with:["account", "role"]})
  })
      .then((resp) => resp.json())
      .then((json) => {
        json = json.sort((a, b) => {
          return a.pseudo.toLowerCase() > b.pseudo.toLowerCase() ? 1 : -1;
        });

        setAppusers(json);
      });
  }, []);

  const navigate =useNavigate();

  return (
    <>
      <h1>Liste des users</h1>
      <th className="p-2">Pseudo</th>
      <th className="p-2">Email</th>
      <th className="p-2">role</th>
      <tbody>
        {appusers.map(appuser => {
          return (
            <tr key={appuser.Id_appUser} onClick={() => {navigate(`/account/${appuser.Id_appUser}`);}}>
              
              <td className="p-2">{appuser.pseudo}</td>
              <td className="p-2">{appuser.account.login}</td>
              <td className="p-2">{appuser.role.title}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default AccountScreen;
