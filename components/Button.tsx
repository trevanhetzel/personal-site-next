import Link from 'next/link';
import styles from './Button.module.scss'

const Button = (props: any) => {
  return (
		<Link href={props.url}>
			<a className={`${styles.button} ${props.secondary ? styles.secondary : ''}`}>
				{props.text}

				{props.arrow &&
					<svg xmlns="http://www.w3.org/2000/svg" width="7.563" height="13.379" viewBox="0 0 7.563 13.379" style={{ marginLeft: '12px' }}><path id="chevron-small-right" d="M12.518,12.089,7.95,7.116a1.011,1.011,0,0,1,0-1.422.99.99,0,0,1,1.409,0l5.569,5.683a1.013,1.013,0,0,1,0,1.424L9.359,18.483a.987.987,0,0,1-1.409,0,1.011,1.011,0,0,1,0-1.422Z" transform="translate(-7.658 -5.4)" fill="#fb4500" /></svg>
				}
			</a>
		</Link>
  );
};

export default Button;

// import { connect, styled, css } from "frontity";
// import Link from "@frontity/components/link";

// const Button = ({
// 	state,
// 	actions,
// 	text,
// 	url,
// 	secondary,
// 	alt,
// 	previous,
// 	arrow,
// 	click
// }) => {
// 	const handleClick = (event) => {
// 		if (url) {
// 			actions.router.set(url);
// 			window.scrollTo(0, 0);
// 		}

// 		if (click) click(event);
// 	};

// 	return (
// 		<ButtonStyle as={secondary ? SecondaryButtonStyle : false} as={alt ? AltButtonStyle : false}>
// 			<a onClick={(event) => handleClick(event)}>
// 				{previous && arrow &&
// 					<svg xmlns="http://www.w3.org/2000/svg" width="7.563" height="13.379" viewBox="0 0 7.563 13.379" css={css`transform: rotate(180deg); margin-right: 12px`}><path id="chevron-small-right" d="M12.518,12.089,7.95,7.116a1.011,1.011,0,0,1,0-1.422.99.99,0,0,1,1.409,0l5.569,5.683a1.013,1.013,0,0,1,0,1.424L9.359,18.483a.987.987,0,0,1-1.409,0,1.011,1.011,0,0,1,0-1.422Z" transform="translate(-7.658 -5.4)" fill="#fb4500"/></svg>
// 				}

// 				{ text }

// 				{!previous && arrow &&
// 					<svg xmlns="http://www.w3.org/2000/svg" width="7.563" height="13.379" viewBox="0 0 7.563 13.379" css={css`margin-left: 12px`}><path id="chevron-small-right" d="M12.518,12.089,7.95,7.116a1.011,1.011,0,0,1,0-1.422.99.99,0,0,1,1.409,0l5.569,5.683a1.013,1.013,0,0,1,0,1.424L9.359,18.483a.987.987,0,0,1-1.409,0,1.011,1.011,0,0,1,0-1.422Z" transform="translate(-7.658 -5.4)" fill="#fb4500" /></svg>
// 				}
// 			</a>
// 		</ButtonStyle>
// 	);
// };

// export default connect(Button);
