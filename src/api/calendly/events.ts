
import { getScheduledEvents } from '@/utils/Calendly';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const events = await getScheduledEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error('Calendly API error:', error);
    res.status(500).json({ message: 'Error fetching Calendly events' });
  }
}