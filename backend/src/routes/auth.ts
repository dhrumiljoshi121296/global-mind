import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readData, writeData } from '../index';

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = readData('users.json');
const existingUser = users.find((user: IUser) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
const newUser: IUser = { _id: Date.now().toString(), name, email, password: hashedPassword };
users.push(newUser);
writeData('users.json', users);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });
    res.status(201).json({ token, userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = readData('users.json');
const existingUser = users.find((user: IUser) => user.email === email);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });
    res.status(200).json({ token, userId: existingUser._id });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
