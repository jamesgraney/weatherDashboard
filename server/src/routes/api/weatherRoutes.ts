import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (_req: Request, res: Response) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
  try {
    res.status(200).json("fetchweather response")
  } catch (error) {
    console.log(error) 
    res.status(500).json(error)
  }
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  try {
    const data = await HistoryService.getCities()
    res.status(200).json(data)
  } catch (error) {
    console.log(error) 
    res.status(500).json(error)
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req: Request, res: Response) => {
  try {
    res.status(200).json("delete history response")
  } catch (error) {
    console.log(error) 
    res.status(500).json(error)
  }
});

export default router;
