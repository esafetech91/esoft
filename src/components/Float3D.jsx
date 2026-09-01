function Float3D({
  src,
  alt,
  className = '',
  speed = 'normal',
  delay = 0,
}) {
  return (
    <div
      className={`float-3d float-3d--${speed} ${className}`}
      style={{ '--float-delay': `${delay}ms` }}
    >
      <div className="float-3d__shadow" aria-hidden="true" />
      <img src={src} alt={alt} className="float-3d__image" loading="lazy" />
    </div>
  )
}

export default Float3D
