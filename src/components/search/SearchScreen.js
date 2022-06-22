import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import queryString from 'query-string';
import { getHeroByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";



export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
/*   const query    = queryString.parse(location.search); */
  const { q = '' }    = queryString.parse(location.search);



  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;



  const heroesFiltered = useMemo( () => (getHeroByName(q)), [q]);



  const handleSearch = (e) => {

    e.preventDefault();
    navigate(`?q=${searchText}`);

  };
  
  
  
  return (
      <div>
  
              <h1>Search your favorite hero!</h1>
              <hr />

              <div className="row">

                <div className="col-5">

                    <h4>Use the form below</h4>
                    <hr />

                    <form onSubmit={ (e) => handleSearch (e) }>
                        
                        <input type="text" placeholder="Search hero" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange}></input>

                        <button className="btn btn-outline-primary mt-3">Search</button>

                    </form>

                </div>

                <div className="col-7">

                  <h4>Results</h4>
                  <hr />

                  {
                    (q === '') 
                      ? <div className="alert alert-info">Your results here</div>
                      : (heroesFiltered.length === 0)
                        && <div className="alert alert-danger">Hero not found: {q}</div>
                  
                  
                  }
                  

                  {
                    heroesFiltered.map (hero => (
                      <HeroCard key={hero.id} {...hero}/>
                    ))
                  }

                </div>

              </div>
      </div>
    )
  };