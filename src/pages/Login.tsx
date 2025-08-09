import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
	const [data, setData] = useState({
		username: "",
		password: ""
	})

	const {login, loading} = useLogin()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {id, value} = e.target

		setData(prev => ({
			...prev,
			[id]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		login(data)
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input 
							id="username"
							type='text' 
							placeholder='Enter username' 
							className='w-full input input-bordered h-10' 

							onChange={handleChange}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							id="password"

							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'

							onChange={handleChange}
						/>
					</div>
					<Link
						to='/signup'
						className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block'
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2'>
							{ loading ? "loading..." : "login" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
