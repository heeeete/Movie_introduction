const root = document.getElementById("root");
const Btn = ({ text, onChangeText }) => {
	console.log(text);
	return (
		<button onClick={onChangeText} className="Btn">
			{text}
		</button>
	);
};
const MemorizeBtn = React.memo(Btn);
const App = () => {
	const [btn, setbtn] = React.useState("asd");
	const onChangeText = () => setbtn("qqweasdasdasdas");
	return (
		<div>
			<MemorizeBtn text={btn} onChangeText={onChangeText} />
			<MemorizeBtn text="1231" />
		</div>
	);
};

ReactDOM.render(<App />, root);
