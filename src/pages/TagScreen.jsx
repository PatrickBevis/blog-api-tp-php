import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function TagScreen() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://blog.api/tag")
      .then((resp) => resp.json())
      .then((json) =>{
        json= json.sort((a,b)=>{
            return a.title.toLowerCase() > b.title.toLowerCase() ? 1: -1
        });
      
       setTags(json)
    
    });

  }, [])

const navigate =useNavigate();


  return (
    <>
      <h1>Liste des mots-clés</h1>
      <tbody>
        {tags.map(tag => {
            return(<tr key={tag.Id_tag} onClick={() => {navigate(`/tag/${tag.Id_tag}`);}}>
                <td className="p-2">{tag.title}</td>
            </tr>)
        })}
      </tbody>
    </>
  );
}

export default TagScreen;
