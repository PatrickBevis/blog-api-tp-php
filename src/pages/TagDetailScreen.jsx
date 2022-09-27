import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TagDetailScreen() {
  const { id } = useParams();
  const [tag, setTag] = useState(null);

  useEffect(() => {
    fetch("http://blog.api/tag/" + id, {
      method: "POST",
      body: JSON.stringify({ with: [{article:'article_tag'}] }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        setTag(json);
      });
  }, [id]);

  return(
  <> 
  <h1> Détail du mot-clé: {tag?.title}</h1>;

  <div> 
            {tag?.articles_list.map(article=>{
                return <div><span className=' ms-2'>titre: {article.title}</span>
                <span>publié le : {article.created_at}</span>
                </div>
                
                
            })}
           </div>
  </>
  )
}

export default TagDetailScreen;
