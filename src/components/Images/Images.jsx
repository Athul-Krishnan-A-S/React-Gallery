import React from 'react'
import { useDataContext } from '../../Context/Context'
import './images.css'


export default function Images() {
    const data = useDataContext();
    console.log(data)
    return (
        <div className='card'>
            {data.map((element, index) => {
                return (
                    <div className='image-container' key={index}>
                        <img src={element.avatar} alt='card-img'></img>
                    </div>
                )
            })}

        </div>
    )
}
