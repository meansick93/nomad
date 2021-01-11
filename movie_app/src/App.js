import React from "react";
import PropTypes from "prop-types";


const FoodILike=[
  {
    id:1,
    name:"Kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating : 5.0

  },
  {
    id:2,
    name: "Samgyeopal",
    image: "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1",
    rating : 4.3
  },
  {
    id:3,
    name: "Bibimbab",
    image: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
    rating : 2.7
  },
  { 
    id:4,
    name: "Ramen",
    image: "https://0.soompi.io/wp-content/uploads/2013/05/ramen-main.jpg?s=900x600&e=t",
    rating : 5.1
  }
]


function Food({name, picture, rating}){
  console.log({name});
  //props.fav
  //{fav}
  return(
    <div>
      <h2>I love {name}!</h2>
      <h4>rating of {rating}/5.0</h4>
      <img src={picture} alt="some image"/>
    </div>
  );
}

//always has to be something.propTypes. be aware of capital.
//string, number, object, array, boolean
//google prop types react
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


//npm i prop-types
function renderFood(dish){ 
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      {FoodILike.map(renderFood)}
    </div>
  );
}

export default App;
