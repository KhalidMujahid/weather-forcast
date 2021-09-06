const input = document.querySelector("input[type=text]");
const key = "71ac2a7a424bebd9955242ba529e966a";
const button = document.querySelector("input[type=button]");
const div = document.querySelector(".weather-list");

button.addEventListener("click", async (e) => {
	if(input.value == "") return alert("Please enter a city");
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
      .then(res => res.json())
      .then(data => {
      	let d = Math.floor((data.main.temp - 32) / 1.8);
      	let values = `
           <div class="weather-city">
			<h2>Weather in ${input.value} ${data.sys.country}</h2>
			</div>
			<div class="weather-temp">
			<p>${d}<sup>o</sup>C</p>
			</div>
			<div class="weather-nature">
			<p>Humidity: ${data.main.humidity}<sup>o</sup></p>
			<p>Wind: ${data.wind.deg} <sup>o</sup></p>
			 <p>Weather description: ${data.weather[0].description}</p>
		  </div>
      	`
      	  div.innerHTML = values;

          // console.log(data);

          input.value = "";
      })
      .catch(err => alert("invalid city name"))
})