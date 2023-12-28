import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubjectProduct from './component/SubjectProduct';
import SingleProduct from './component/SingleProduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <Nav />
        <Routes >

          <Route path='/' element={<Home />} />


          {/* rendering the SubjectProduct page data :
          sunjectName -> with this info i will know what data to take from the Data page
          subjectTitle -> for the H1 to show the user what section : pastries or cakes */}
          <Route path='/pastries' element={<SubjectProduct subjectName="pastries" subjectTitle="מאפים" />} />
          <Route path='/cakes' element={<SubjectProduct subjectName="cakes" subjectTitle="עוגות" />} />


          
          {/* rendering the SingleProduct page
          :type & productId art route parameter that we taking from the url for example ->/cakes/cheeseCakes/cheeseCake2
          than we take from the Data page the item from 
          A=allProduct[cakes ->subjectProduct] 
          B=A[cheeseCakes],
           result=B[cheeseCake2] */}
          <Route path="/cakes/:type/:productId" element={<SingleProduct subjectProduct="cakes" />} />
          <Route path="/pastries/:type/:productId" element={<SingleProduct subjectProduct="pastries" />} />
          <Route path="/catering" element={<SingleProduct subjectProduct="catering" />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
