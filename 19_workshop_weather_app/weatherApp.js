// const url = `https://api.openweathermap.org/data/2.5/weather?q=SEARCH_VALUE&appid=API_KEY&units=metric`;
// const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
import {input, list} from './constants.js';

export class WeatherApp {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
    }

    fetchData = () => {
        const inputVal = input.value;
        if (!inputVal.length) {
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${this.API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.updateDOM(data);
            })
            .catch((error) => {
                throw new Error(error);
            })
    }

    updateDOM = (data) => {
        const {name, main} = data;
        const li = document.createElement('li');
        li.classList.add('city');
        li.innerHTML = `<h2 class="city-name">${name}</h2><div class="city-temp">${main.temp}</div>`;
        list.appendChild(li);
    }
}
