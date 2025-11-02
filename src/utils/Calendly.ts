const CALENDLY_API_URL = 'https://api.calendly.com';

export async function getScheduledEvents() {
  const response = await fetch(`${CALENDLY_API_URL}/scheduled_events`, {
    headers: {
      'Authorization': `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch scheduled events');
  }

  return response.json();
}

export async function getUserInfo() {
  const response = await fetch(`${CALENDLY_API_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
}