export default function Task({ mod, children, state, onClick, onDoubleClick }) {
  const className = `Task${state ? ` ${state}` : ''}${
    mod ? ` Task--${mod}` : ''
  }`
  return (
    <p
      className={className}
      onClick={onClick}
      onDoubleClick={onDoubleClick}>
      {children}
    </p>
  )
}