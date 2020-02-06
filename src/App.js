import React from "react";
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'df2359151f0eb16fc94aa4855cd11fb5';

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;