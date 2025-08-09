import type React from "react";

type Props = {
	selectedGender: string,
	handleCheckboxChange: (gender: string) => void
}

const GenderCheckbox: React.FC<Props> = ({ selectedGender, handleCheckboxChange }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-white'>Male</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900' 
						checked={ selectedGender == "male" }
						onChange={() => handleCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-white'>Female</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900' 
						checked={ selectedGender == "female" }
						onChange={() => handleCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
