import { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header'
import { DataContext } from '../../Context/Context';
import Button from '../../components/Button/Button';
import Skeleton from '../../components/Skeleton/Skeleton';

import './reactPractice.css';

const Images = lazy(() => wait(300).then(() => import('../../components/Images/Images')))

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default function ReactPractice() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [Imagecount, setImagecount] = useState([]);
    const url = 'https://66a9b6c0613eced4eba5fb36.mockapi.io/gallery';

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                setImagecount(data.length)
                setTimeout(()=>{
                    setIsLoading(false)
                },500)
            })
            .catch((e)=>{
                console.log(e);
            })
    }, []);


    return (
        <div className="react-practice-container">
            <Header />
            {isLoading ? (
                <div className='loader-container'>
                   <div className="loader"></div>
                </div>

                
            ) : (
                <div className='react-practice-image-container'>
                    <DataContext.Provider value={data}>
                        <Suspense fallback={<Skeleton Imagecount={Imagecount} />}>
                            <Images />
                        </Suspense>
                    </DataContext.Provider>
                </div>
            )}
            <Button />
        </div>
    );
}
