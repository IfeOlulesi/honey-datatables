import { Banknote } from "lucide-react";

function TableButton({ text }: TableButtonProps): React.JSX.Element {
	return (
		<div>
			<button style={tableButtonStyles}>
				<Banknote size={16} />
				{text}
			</button>
		</div>
	);
}

export default TableButton;

const tableButtonStyles = {
	// backgroundColor: "blue",
	// color: "white",
	padding: "8px",
	borderRadius: "20px",
	border: "1px solid lightgrey",
	cursor: "pointer",
};

interface TableButtonProps {
	text: string;
}
