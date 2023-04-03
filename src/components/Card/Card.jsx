import './Card.css';

const IMAGE_PLACEMENT = ['top-full', 'left', 'right', 'bottom-full'];

export const Card = ({
  title,
  image,
  children,
  imagePosition = 'top-full',
  width,
  height,
}) => {
  const position = IMAGE_PLACEMENT.includes(imagePosition) ? imagePosition : '';
  const classes = `RestCard ${position}`;

  return (
    <article className={classes} style={{ width: width ?? 'auto' }}>
      <section className={`RestCardImage ${position}`}>
        <img
          src={image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'}
          alt={title}
          title={`${title} | Tijuana's Food`}
        />
      </section>
      <div className="RestCardBody">{children}</div>
    </article>
  );
};
