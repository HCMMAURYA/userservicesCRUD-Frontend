'use client'


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';


const Edit = () => {
    const router = useRouter()
	const id = localStorage.getItem("id")

    const [userData, setUserData] = useState({
        user: '',
		interest: [],
		age: '',
		mobile: '',
		email: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
			
            try {
                const response = await axios.get(`http://localhost:3002/users/${id}`);
                setUserData(response.data.data); 
				console.log("???????",response.data.data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const inputHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const updateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/users/${id}`, userData);
            console.log('User updated:', response.data);
            router.push('/getuser', { scroll: false })
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="container">
            <h3>Edit User...</h3>
         <div>
			<input
				type="text"
				name="user"
				value={userData.user}
				onChange={inputHandler}
				placeholder="User"
				required
			/>
			<input
				type="text"
				name="interest"
				value={userData.interest}
				onChange={inputHandler}
				placeholder="Interests (comma separated)"
				required
			/>
			<input
				type="number"
				name="age"
				value={userData.age}
				onChange={inputHandler}
				placeholder="Age"
				required
			/>
			<input
				type="number"
				name="mobile"
				value={userData.mobile}
				onChange={inputHandler}
				placeholder="Mobile"
				required
			/>
			<input
				type="email"
				name="email"
				value={userData.email}
				onChange={inputHandler}
				placeholder="Email"
				required
			/>
			<button onClick={updateUser} type="submit">
			update user
			</button>
		</div>
        </div>
    );
};

export default Edit;
