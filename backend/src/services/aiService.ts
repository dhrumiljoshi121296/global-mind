import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const MISTRAL_API_KEY = 'i3yirAtLbaHOpyhzDmomhSmveaA1iBFg';
const MISTRAL_API_URL = 'https://api.mistral.ai/v1';

const aiService = {
  async problemDecomposer(problemDescription: string) {
    try {
      const response = await axios.post(`${MISTRAL_API_URL}/decompose`, {
        problemDescription,
      }, {
        headers: {
          'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error decomposing problem:', error);
      throw error;
    }
  },

  async expertMatcher(userSkills: string[], availableExperts: any[], problemDomain: string) {
    try {
      const response = await axios.post(`${MISTRAL_API_URL}/match`, {
        userSkills,
        availableExperts,
        problemDomain,
      }, {
        headers: {
          'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error matching experts:', error);
      throw error;
    }
  },

  async solutionSynthesizer(teamIdeas: string[], problemContext: string) {
    try {
      const response = await axios.post(`${MISTRAL_API_URL}/synthesize`, {
        teamIdeas,
        problemContext,
      }, {
        headers: {
          'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error synthesizing solution:', error);
      throw error;
    }
  },

  async researchAssistant(query: string, context: string) {
    try {
      const response = await axios.post(`${MISTRAL_API_URL}/research`, {
        query,
        context,
      }, {
        headers: {
          'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error with research assistant:', error);
      throw error;
    }
  },
};

export default aiService;
