import React from 'react';
import {Routes, Router} from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import UpdateBook from './pages/UpdateBook';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path= '/' element= {<Home/>} />
      <Route path= '/books/create' element= {<CreateBook/>} />
      <Route path= '/book/details:id' element= {<ShowBook />} />
      <Route path= '/books/edit/:id' element= {<EditBook/>} />
      <Route path= '/books/delete/:id' element= {<DeleteBook/>} />
    </Routes>
  );
};

export default App;