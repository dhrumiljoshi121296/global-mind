import express from 'express';
import { readData } from '../index';
import aiService from '../services/aiService';

const router = express.Router();

router.get('/match', async (req, res) => {
  try {
    const problemDomain = req.query.problemDomain as string;
    const users = readData('users.json');
const availableExperts = users.filter((user: any) => user.skills.some((skill: any) => skill.domain === problemDomain));
    const matchedExperts = await aiService.expertMatcher([], availableExperts, problemDomain);
    res.status(200).json(matchedExperts);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
