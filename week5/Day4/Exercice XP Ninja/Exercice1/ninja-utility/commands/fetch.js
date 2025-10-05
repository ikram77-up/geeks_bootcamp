import axios from "axios";
export async function fetch() {
    try {
        const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=33.5731&longitude=-7.5898&current_weather=true");
        console.log(`temperature: ${response.data.current_weather.temperature} °C`);
        console.log(`windspeed: ${response.data.current_weather.windspeed} m/s`);
    } catch (error) {
        console.error(error);
    }
}fetch();