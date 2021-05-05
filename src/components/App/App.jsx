import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/components/Navbar';


const HomePage = lazy(() =>
  import('../../pages/HomePage'),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage'),
);
const ReviewsPage = lazy(() =>
  import('../../pages/ReviewsPage'),
);
const CastPage = lazy(() =>
  import('../../pages/CastPage'),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage'),
);

const App = () => {
  return (
    <>
      <Router>
          <Navbar/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
         <Route path="/" exact>
               <HomePage title="Home page" exact component={HomePage}/>
          </Route>
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={CastPage} />
          <Route path="/movies/:movieId/reviews" component={ReviewsPage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
      </Router>
    </>
  );
};

export default App;
