import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters/Characters';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import GlobalStyles from './styles/GlobalStyles';

const App = () => (
  <Router>
    <GlobalStyles /> {/* Apply global styles */}
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  </Router>
);

export default App;