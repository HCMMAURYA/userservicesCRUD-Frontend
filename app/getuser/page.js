'use client';

import { useEffect, useState } from 'react';

 import { useRouter } from 'next/navigation'
import axios from 'axios';

const Getuser = () => {
	 const router = useRouter()
	const [userList, setUserList] = useState([]);
console.log("userList",userList)


	// const changeCPage = (id) => {
	// 	setCurrentPage(id);
	// };

	const goToEditPage = () => {
		// localStorage.setItem('id', userId);
        router.push('/edituser', { scroll: false })
	};

	const deleteUser = async (deleteId) => {
		const confirmed = window.confirm(
			'Are you sure you want to delete this user?',
		);
		if (!confirmed) return;

		try {
			const res = await axios.delete(
				`http://localhost:3003/users/${deleteId}`,
			);
			alert('User deleted successfully');

			fetchUser();
			console.log(res);
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};

	const fetchUser = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3001/users',
			);
			setUserList(res.data);
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	};

    const GotoAddButton =()=>{
        router.push('/', { scroll: false })
    }

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<>
			<div className="user">
                <button onClick={GotoAddButton}>Add User</button>
				<h1>Our Valuable Users here...</h1>
			</div>

			<table>
				<thead>
					<tr>
						<th>Sn.</th>
						<th>Name</th>
						<th>Interest</th>
						<th>Age</th>
						<th>Mobile</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{userList.map((user, index) => (
						<tr key={user._id}>
							<td>{user._id}</td>
							<td>{user.user}</td>
							<td>{user.interest}</td>
							<td>{user.age}</td>
							<td>{user.mobile}</td>
							<td>{user.email}</td>
							<td>
								<button
									onClick={() => goToEditPage(user._id)}
									type="button"
									className="btn btn-primary"
								>
									Edit
								</button>
								<button
									onClick={() => deleteUser(user._id)}
									type="button"
									className="btn btn-danger"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

		</>
	);
};

export default Getuser;
