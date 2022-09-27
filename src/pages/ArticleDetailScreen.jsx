import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailScreen = () => {


    const {id} =useParams();
    const [article, setArticle] =useState(null);


    useEffect(() => {
        fetch ("http://blog.api/article/"+id,{
            method : "POST",
            body: JSON.stringify({with:["appuser", "theme", "comment", {tag:'article_tag'}]})
      
          })

        .then((resp) => resp.json())
        .then((json) =>{
        
         setArticle(json)
      
      });
  
    }, [id])



    return (
        <>
           <h1>Detail de l'article : {article?.title} </h1>
           <p>publié le :{article?.created_at}</p><span className='p-2'>par: {article?.appuser?.pseudo}</span>
           <p>theme : {article?.theme?.title}</p>
           <hr />
           <div>Mot-cles: 
            {article?.tags_list.map(tag=>{
                return <span className='badge bg-danger ms-2'>{tag.title}</span>
            })}
           </div>
           <p>content: <br />{article?.content}</p>
           <img src={article?.theme?.img_src} alt="" />
           <h2>Commentaires:</h2>
           
           {article?.comments_list.map(comment => {
                        return (<tr key={comment.Id_comment} >
                            <p className='p-2'>{comment.title}</p>
                            <p className='p-2'>le {new Date(comment.created_at).toLocaleString()}</p>
                            <p className='p-2'>{comment.content}</p>
                        </tr>)
                    })}
                    
           
        </>
    );
};

export default ArticleDetailScreen;