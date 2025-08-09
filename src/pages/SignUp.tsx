import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useEffect, useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullname: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: ""
	})

	const {loading, signup} = useSignup()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.target
		
		setInputs(prev => ({
			...prev,
			[id]: value
		}))
	}

	const handleCheckboxChange = (gender: string) => {
		setInputs(prev => ({
			...prev,
			gender
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		signup(inputs)
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Full Name</span>
						</label>
						<input 
							id="fullname"
							type='text' 
							placeholder='John Doe' 
							className='w-full input input-bordered h-10'
							
							onChange={handleChange}
							value={inputs.fullname}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input
							id="username" 
							type='text' 
							placeholder='johndoe' 
							className='w-full input input-bordered h-10' 

							onChange={handleChange}
							value={inputs.username}
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
							value={inputs.password}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Confirm Password</span>
						</label>
						<input
							id="confirmPassword"
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'

							onChange={handleChange}
							value={inputs.confirmPassword}
						/>
					</div>

					<GenderCheckbox 
						selectedGender={inputs.gender}
						handleCheckboxChange={handleCheckboxChange}
					/>

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>
							{ loading ? "loading..." : "sign up" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
