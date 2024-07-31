import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function ProfilePage() {
    const { id } = useParams();
    const api = `https://66a9b6c0613eced4eba5fb36.mockapi.io/gallery/${id}`;
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(api)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
            })
            .catch((e) => {
                console.error(e);
            })
    }, [])
    return (
        <div>
            <img src={user.avatar} alt={user.name}></img>
            <p>{user.name}</p>
        </div>
    );
}
export default ProfilePage;