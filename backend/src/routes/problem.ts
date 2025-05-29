import express from 'express';
import { readData, writeData } from '../index';
import aiService from '../services/aiService';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { title, description, urgency, domain } = req.body;
const problems = readData('problems.json');
const newProblem = { _id: Date.now().toString(), title, description, urgency, domain };
problems.push(newProblem);
writeData('problems.json', problems);
    res.status(201).json(newProblem);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const problems = readData('problems.json');
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.post('/decompose', async (req, res) => {
  try {
    const { problemId } = req.body;
    const problems = readData('problems.json');
const problem = problems.find((p: any) => p._id === problemId);
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    const decomposition = await aiService.problemDecomposer(problem.description);
problem.decomposition = decomposition;
writeData('problems.json', problems);
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
