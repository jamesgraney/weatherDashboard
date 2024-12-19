import fs from "node:fs/promises"
// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  async read() {
    try {
      const data = await fs.readFile('./db/searchHistory.json', "utf8"); 
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading file:`, error);
      return [];
    }
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}

  async write(cities: City[]) {
    try {
      const jsonData = JSON.stringify(cities, null, 2); 
      await fs.writeFile('./searchHistory.json', jsonData); 
      console.log('Cities successfully written to searchHistory.json');
    } catch (error) {
      console.error('Error writing to file:', error);
    }
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  async getCities() {
    try {
      const data = await this.read(); 
      return data.map((city:City) => new City(city.name, city.id)); 
    } catch (error) {
      console.error('Error getting cities:', error);
      return [];
    }
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  async addCity(city: string) {
    const cities = await this.getCities();
    cities.push(new City(city, `${Date.now()}`));
    await this.write(cities);
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
  async removeCity(id: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter((city:City) => city.id !== id);
    await this.write(updatedCities);
}
}

export default new HistoryService();
