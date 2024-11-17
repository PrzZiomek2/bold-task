import React, { useEffect, useRef, useState } from "react";

/**
 * A flexible image component using images lazy loading mode by default. Component can be further extended with additional options, like loader, fallback component, etc.
 * @param {string} src - The URL of the image source.
 * @param {string} alt - Alternative image text, for accessibility purposes and to display when image fails to load. Initial value is empty, but some meaningful content should be provided.
 * @param {string} className - CSS class names for styling.
 * @param {string|number} width - The width of the image, default value set to "auto".
 * @param {string|number} height - The height of the image, default value set to "auto".
 * @param {function} onLoad - Callback function called when the image is successfully loaded (if provided).
 * @param {function} onError - Callback function called when the image fails to load (if provided).
 * @param {string} fallbackSrc - Fallback image URL used instead of src value before the image is lazy loaded, here can be set some placeholder.
 * @param {string} srcSet - The set of image sources, in form of the string of comma-separated values 'url size, url size...'.
 * @param {string} sizes - The value specify what image sizes from srcset list will be used to specified media queries. Format (media-condition) width'
 * @param {boolean} loadLazy - Flag to specify if the image should be loaded by lazy loading. By default value is set to true.
 * @returns {JSX.Element} - The rendered Image component.
 */

const Image = ({
  src,
  alt = "",
  className = "",
  width = "auto",
  height = "auto",
  onLoad,
  onError,
  fallbackSrc = "",
  srcSet,
  sizes,
  loadLazy = true,
}) => {
  const [imgSrc, setImgSrc] = useState(fallbackSrc);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!loadLazy) return;

    const imgEl = imgRef.current;

    if (!imgEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgSrc(src);
          observer.unobserve(imgEl);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(imgEl);

    return () => {
      observer.unobserve(imgEl);
    };
  }, [imgRef.current, src, loadLazy]);

  const handleImageError = (e) => {
    e.target.alt = "Image failed to load";
    e.target.src = fallbackSrc;
  };

  return (
    <img
      ref={imgRef}
      src={loadLazy ? imgSrc : src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onLoad={(e) => {
        e.target.alt = alt;
        if (onLoad) {
          onLoad(e);
        }
      }}
      onError={(e) => {
        handleImageError(e);
        if (onError) {
          onError(e);
        }
      }}
    />
  );
};

export default Image;
