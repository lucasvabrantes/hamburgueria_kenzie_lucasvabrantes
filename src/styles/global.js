import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
    --color-primary: #27ae60;
	--color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-400:#BDBDBD;
	--color-grey-300: #828282;
	--color-grey-200:#F5F5F5;
	--color-grey-100: #e0e0e0;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-white: #fff;

	--toastify-color-error:#E60000;
    --toastify-color-warning:#FFCD07;
    --toastify-color-success:#168821;
    --toastify-color-info:#155BCB;
}

	* {
		margin:0;
		padding: 0;
		outline:0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}

	body, html{
		width: 100vw;
		height: 100vh;
		overflow-x:hidden;
	}

	ul,ol{
		list-style:none;
		padding: 0;
	}

	button{
		display:inline-flex;
		cursor: pointer;
		border:none;

	}

  
`;
