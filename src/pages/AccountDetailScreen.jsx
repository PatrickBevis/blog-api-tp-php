import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AccountDetailScreen = () => {

    const{id}= useParams();
    const[appuser,setAppuser] =useState(null);

    useEffect(() => {
        fetch("http://blog.api/appuser/"+id, {
            method : "POST",
            body: JSON.stringify({with:["account", "role", "article", "comment"]})
        })
        .then((resp) => resp.json())
        .then((json) =>{
        
         setAppuser(json)
      
      });
  
    }, [id])
    

    return (
        <>
            <h1>Detail de l'user : {appuser?.pseudo}</h1>
            <b>email : </b> {appuser?.account?.login}<br/>
            <b>role : </b> {appuser?.role?.title}
            <hr/>
            {appuser?.Id_role === '1' && <>
            <h3>Articles rédigés</h3>
            <table >
                <thead>
                    <tr>
                        <th scope='col'className='p-2'>titre</th>
                        <th scope='col'className='p-2'>date publication</th>
                    </tr>
                </thead>
                <tbody>
                    {appuser?.articles_list.map(article => {
                        return (<tr key={article.Id_article} >
                            <td className='p-2'>{article.title}</td>
                            <td className='p-2'>{new Date(article.created_at).toLocaleString()}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            </>}
            {appuser?.Id_role === '2' && <>
            <h3>Commentaires rédigés</h3>
            <table >
                <thead>
                    <tr>
                        <th scope='col'className='p-2'>titre</th>
                        <th scope='col'className='p-2'>date publication</th>
                    </tr>
                </thead>
                <tbody>
                    {appuser?.comments_list.map(comment => {
                        return (<tr key={comment.Id_comment} >
                            <td className='p-2'>{comment.title}</td>
                            <td className='p-2'>{new Date(comment.created_at).toLocaleString()}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            </>}
        </>
    );
};

export default AccountDetailScreen;