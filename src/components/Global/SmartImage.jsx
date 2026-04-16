const SmartImage = ({ priority = false, alt = '', className = '', ...props }) => (
  <img
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
    alt={alt}
    className={className}
    {...props}
  />
);

export default SmartImage;
