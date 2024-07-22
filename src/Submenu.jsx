import React, { useRef } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const submenuRefContainer = useRef(null)

  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const handleMouseLeave = (event) => {
    const submenu = submenuRefContainer.current
    const result = submenu.getBoundingClientRect()

    const { clientX, clientY } = event
    const { left, right, bottom } = result

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      ref={submenuRefContainer}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { icon, label, id, url } = link
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
