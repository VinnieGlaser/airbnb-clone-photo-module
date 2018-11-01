import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.css';

const Photo = ({
  isFirstPhoto,
  imageUrl,
  altText,
  photoIndex,
  isHeroHovered,
  currentHoveredPhoto,
  updateCurrentHandler,
}) => {
  let containerClasses = [styles.PhotoContainer];
  if (isFirstPhoto) {
    containerClasses.push(styles.PhotoContainer__firstPhoto);
  }
  if (isHeroHovered && currentHoveredPhoto !== photoIndex) {
    containerClasses.push(styles.darken);
  }
  containerClasses = containerClasses.join(' ');
  return (
    <div
      className={containerClasses}
      onMouseEnter={() => updateCurrentHandler(photoIndex)}
    >
      <img className={styles.Photo} src={imageUrl} alt={altText} />
    </div>
  );
};

Photo.propTypes = {
  isFirstPhoto: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  photoIndex: PropTypes.number.isRequired,
  isHeroHovered: PropTypes.bool,
  currentHoveredPhoto: PropTypes.number.isRequired,
  updateCurrentHandler: PropTypes.func.isRequired,
};

Photo.defaultProps = {
  isFirstPhoto: false,
  isHeroHovered: false,
};

export default Photo;
