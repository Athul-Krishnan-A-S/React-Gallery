import React from 'react'
import { useDataContext } from '../../Context/Context'
import './images.css'
import { Link } from 'react-router-dom';


export default function Images() {
    const data = useDataContext();
    return (
        <div className='card'>
            {data.map((element, index) => {
                return (
                    <div className='image-container' key={index}>
                            <Link to={`/profile/${element.id}`}>
                                <img src={element.avatar} alt={element.name}></img>
                            </Link>
                        </div>
                )
            })}
        </div>
    )
}
