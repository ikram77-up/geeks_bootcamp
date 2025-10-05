import axios from "axios";
import chalk from "chalk";
export async function fetch(city) {
    try {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
        if (response.data.results.length === 0) {
            console.log(chalk.red(`❌City not found: ${city}`));
            return;
        }
        const { latitude, longitude } = response.data.results[0];

        const response2 = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

        console.log(chalk.green(`temperature of ${city}: ${response2.data.current_weather.temperature} °C`));
        console.log(chalk.red(`windspeed of ${city}: ${response2.data.current_weather.windspeed} m/s`));
    } catch (error) {
        console.error(error);
    }

}


