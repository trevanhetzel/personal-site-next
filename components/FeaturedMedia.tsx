const FeaturedMedia = (props: any) => {
  return (
		<img
			alt={props.image.description ? props.image.description : props.image.title}
      src={props.image.sourceUrl}
			srcSet={props.image.srcSet}
			style={{ margin: '60px 0 0' }}
		/>
  );
};

export default FeaturedMedia;
