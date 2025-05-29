import express from 'express';
import { readData, writeData } from '../index';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { problemId, members } = req.body;
const teams = readData('teams.json');
const newTeam = { _id: Date.now().toString(), problem: problemId, members };
teams.push(newTeam);
writeData('teams.json', teams);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
