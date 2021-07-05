import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import FetchContext from '../context/FetchContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { categoryListMeal, fetchRecipesList } from '../services/Api';
import Category from '../components/Category';

function Foods() {
  const {
    setTypeFunc, data, setData, setNameRecipes, setImgRecipes, setCategories, categories
  } = useContext(FetchContext);

  Foods.displayName = 'Comidas';

  const renderCategorys = () => {
    categoryListMeal().then((res) => setCategories(res))
  }

  useEffect(() => {
    renderCategorys();
  }, []);

  const fnAlert = (func, message) => {
    func(message);
  };

  if (data === null) {
    const msg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    return fnAlert(alert, msg);
  }

  // if (data.length === 1) {
  //   return <Redirect to={ `/comidas/${data[0].idMeal}` } />;
  // }

  if (data.length === 1 && data[0].idMeal !== '52968') {
    return <Redirect to={ `/comidas/${data[0].idMeal}` } />;
  }


  const renderRecipes = () => {
    setNameRecipes('strMeal');
    setImgRecipes('strMealThumb');
    fetchRecipesList().then((res) => setData(res));
  };
 
  return (
    <div>
      { setTypeFunc('Foods')}
      {console.log(categories)}
      <Header title={ Foods.displayName } />
      <Category />
      { data.length === 0 && renderRecipes() }
      <Cards />
      <Footer />
    </div>
  );
}

export default Foods;
