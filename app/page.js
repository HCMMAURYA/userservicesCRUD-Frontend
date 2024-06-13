'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const UserForm = () => {
  const router = useRouter()
	const userInfo = {
		user: '',
		interest: [],
		age: '',
		mobile: '',
		email: '',
	};

	const [formData, setFormData] = useState(userInfo);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const data = await axios.post('http://localhost:3000/users', formData);
			console.log('add user', data);
      router.push('/getuser', { scroll: false })
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<input
				type="text"
				name="user"
				value={formData.user}
				onChange={handleChange}
				placeholder="User"
				required
			/>
			<input
				type="text"
				name="interest"
				value={formData.interest}
				onChange={handleChange}
				placeholder="Interests (comma separated)"
				required
			/>
			<input
				type="number"
				name="age"
				value={formData.age}
				onChange={handleChange}
				placeholder="Age"
				required
			/>
			<input
				type="number"
				name="mobile"
				value={formData.mobile}
				onChange={handleChange}
				placeholder="Mobile"
				required
			/>
			<input
				type="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				placeholder="Email"
				required
			/>
			<button onClick={handleSubmit} type="submit">
				create user
			</button>
		</div>
	);
};

export default UserForm;
