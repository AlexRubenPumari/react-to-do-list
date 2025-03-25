export default function Modal ({ children, toClose }) {
  return (
    <div className='Modal__overlay'>
      <div className='Modal'>
        <button className='CloseButton' onClick={toClose}>
          ×
        </button>
        <div className='Modal__body'>{ children }</div>
      </div>
    </div>
  )
}
