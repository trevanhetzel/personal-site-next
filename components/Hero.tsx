import styles from './Hero.module.scss'
import Button from './Button';
import HeroPhoto from './HeroPhoto';

const Hero = (props: any) => {
  return (
		<div className={`${styles.container}`}>
			<h1>Trevan Hetzel</h1>
			<p>Customer inspired front-end developer with a passion for building design led experiences at scale. A strong believer that design matters and that complex problems should be solved with simplicity and elegance.</p>

			<Button text="Get to know me more" url="/about" arrow />

			<HeroPhoto />
		</div>
  );
};

export default Hero;
