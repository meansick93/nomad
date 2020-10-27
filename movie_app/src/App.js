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
