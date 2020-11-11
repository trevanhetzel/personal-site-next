import styles from './Hero.module.scss'
import Button from './Button';
import HeroPhoto from './HeroPhoto';

const Hero = () => {
  return (
		<div className={`${styles.container}`}>
			<h1>Trevan Hetzel</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non egestas urna. Praesent semper tellus libero. Vestibulum vitae aliquet erat. Donec finibus quam ut varius scelerisque. Integer hendrerit lectus at cursus elementum.</p>

			<Button text="Get to know me more" url="/about" arrow />

			<HeroPhoto />
		</div>
  );
};

export default Hero;
