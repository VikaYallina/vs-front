import React, { useState } from "react";
import { useEffect } from "react";
import ApiData from '../services/api.data'

const Home = () => {
    const [content, setContent] = useState("")

    useEffect(() => {
        ApiData.getContent().then(
            (resp) => {
                setContent(resp.data);
                console.log(resp.data)
            },
            (error) => {
                const msg = (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                console.log(msg)
                setContent(msg)
            }
        );
    }, []);

    return (
        <div className='container'>
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    )
    
}

 export default Home;