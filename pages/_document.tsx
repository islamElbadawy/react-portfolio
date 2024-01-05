import {
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Islam Elbadawy Portfolio</title>
				<link
					rel="shortcut icon"
					href="../public/favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
