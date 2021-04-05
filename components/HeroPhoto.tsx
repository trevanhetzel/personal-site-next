import styles from './HeroPhoto.module.scss';

const HeroPhoto = () => {
  return (
		<div className={styles.frame}>
			<div className={styles.leftBars} />
			<img src="/trevan-hetzel.jpg" alt="Trevan Hetzel" />
			<div className={styles.rightBars} />
		</div>
  );
};

export default HeroPhoto;
