import { lazy } from "react"
import { Routes, Route } from 'react-router-dom'
import useTheme from "../../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/globalStyles/GlobalStyles";
import SharedHeader from "../../layouts/SharedHeader"

// Pages

const MainPage = lazy(() => import('../../pages/Main'))  // Home Page
const CatalogPage = lazy(() => import('../../pages/Catalog'))   // Category page
const Favorites = lazy(() => import('../../pages/Favorites'))    // Favorite products

const App = () => {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<SharedHeader />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
};

export default App;