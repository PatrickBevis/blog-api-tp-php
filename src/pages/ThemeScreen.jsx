import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThemeScreen() {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
      fetch("http://blog.api/theme")
        .then((resp) => resp.json())
        .then((json) =>{
          json= json.sort((a,b)=>{
              return a.title.toLowerCase() > b.title.toLowerCase() ? 1: -1
          });
        
         setThemes(json)
      
      });
  
    }, [])
    const navigate =useNavigate();
  
    return (
      <>
        <h1>Liste des themes</h1>
        <tbody>
          {themes.map(theme => {
              return(<tr key={theme.Id_theme} onClick={() => {navigate(`/theme/${theme.Id_theme}`);}}>
            
                  <td className="p-2">{theme.title}</td>
                  <td className="p-2">{theme.img_src}</td>
              </tr>)
          })}
        </tbody>
      </>
    );
  }
  


export default ThemeScreen;