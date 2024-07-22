import React, { useState } from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const Navlinks = () => {
  const { setPageId } = useGlobalContext()

  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { page, pageId } = item
        return (
          <button
            className="nav-link"
            type="button"
            key={pageId}
            onMouseEnter={() => {
              setPageId(pageId)
            }}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Navlinks
