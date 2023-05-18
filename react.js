const root = document.getElementById("root");

function Container() {
	const [minutes, setmin] = React.useState();
	const [hour, sethour] = React.useState();
	const onChangeMin = (event) => {
		setmin(event.target.value);
		sethour(event.target.value / 60);
	};
	const onChangeHour = (event) => {
		sethour(event.target.value);
		setmin(event.target.value * 60);
	};
	const reset = () => {
		setmin();
		sethour();
	};
	return (
		<div>
			<h1>Super Converter!!</h1>
			<div>
				<label htmlFor="min utes">Minutes</label>
				<input
					value={minutes}
					type="number"
					placeholder="Minutes"
					id="minutes"
					onChange={onChangeMin}
					// disabled={filp === true}
				/>
				<h4>you want Convert {minutes}</h4>
			</div>
			<div>
				<label htmlFor="hours">Hours</label>
				<input
					value={hour}
					type="number"
					placeholder="Hours"
					id="hours"
					onChange={onChangeHour}
					// disabled={filp === false}
				/>
			</div>
			<button onClick={reset}>reset</button>
			{/* <button onClick={filped}>filped</button> */}
		</div>
	);
}
ReactDOM.render(<Container />, root);
