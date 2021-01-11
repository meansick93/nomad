function Food({fav}){
  console.log({fav});
  //props.fav
  //{fav}
  return(
    <div>
      <h3>I love {fav}!</h3>
    </div>
  );
}

const FoodILike=[
  {
  name:"Kimchi",
  image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
},
{
  name: "Samgyeopal",
  image: "https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1"
},
{
  name: "Bibimbab",
  image: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg"
},
{
  name: "Ramen",
  image: "https://0.soompi.io/wp-content/uploads/2013/05/ramen-main.jpg?s=900x600&e=t"
}]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food
        fav="kimchi"
      />   
      <Food
        fav="ramen"
      />
    </div>
    
  );
}

export default App;
