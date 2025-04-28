export default function Menu({ items, callbacks }) {
  return (
    <ul className='Menu'>
      {items.map((item, i) => (
        <li
          key={i}
          className='Menu__item'
          onClick={callbacks[i]}
        >
          { item }
        </li>
      ))}
    </ul>
  )
}
