type ButtonPropsType = {
	title: string
	onClick: () => void
	isDisabled?: boolean
}

export const Button = ({title, onClick, isDisabled}: ButtonPropsType) => {
	return <button onClick={onClick} disabled={isDisabled}>{title}</button>
}
