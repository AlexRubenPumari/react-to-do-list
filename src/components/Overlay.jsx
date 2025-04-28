import CircleButton from './CircleButton'
import LeftArrowIcon from './icons/LeftArrowIcon'

export default function Overlay({ title, children, onClose }) {
  return (
    <div className='Overlay'>
      <div className='Overlay__header'>
        {onClose && (
          <CircleButton mod='back' icon={<LeftArrowIcon />} onClick={onClose} />
        )}
        {title && <span className='Title Title--flex'>{title}</span>}
      </div>
      {children}
    </div>
  )
}
