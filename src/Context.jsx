import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        setPageId,
        pageId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
