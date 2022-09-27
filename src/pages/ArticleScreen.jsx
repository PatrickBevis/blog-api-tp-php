import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ArticleScreen() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://blog.api/article",{
      method : "POST",
      body: JSON.stringify({with:["appuser", "theme"]})

    })
      .then((resp) => resp.json())
      .then((json) => {
        json = json.sort((a, b) => {
          return a.created_at.toLowerCase() > b.created_at.toLowerCase() ? 1 : -1;
        });

        setArticles(json);
      });
  }, []);

const navigate =useNavigate()

  return (
    <>
      <h1>Liste des articles</h1>
      <th className="p-2">Title</th>
      <th className="p-2">Date de création</th>
      <th className="p-2">Auteur</th>
      <th className="p-2">Theme</th>
      <tbody>
        {articles.map(article => {
          return (
            <tr key={article.Id_article} onClick={() => {navigate(`/article/${article.Id_article}`);}}> 
              
              <td className="p-2">{article.title}</td>
              <td className="p-2">{article.created_at}</td>
              <td className="p-2">{article.appuser.pseudo}</td>
              <td className="p-2">{article.theme.title}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default ArticleScreen;
