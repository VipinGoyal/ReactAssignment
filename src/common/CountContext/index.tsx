import React, { useState, createContext } from 'react';

export const CountContext = createContext([]);

export const CountProvider = (props) => {
	const [countData, setCountData] = useState(null);
	return (
		<CountContext.Provider value={[countData, setCountData]}>
			{props.children}
		</CountContext.Provider>
	);
};
