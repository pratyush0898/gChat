const API_BASE = '/.netlify/functions';

export async function loginUser({ username, password }) {
    const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Login failed');
    }
    return data;
}

export async function signupUser({ username, password, name }) {
    const response = await fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, name })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
    }
    return data;
}

export async function sendMessage(message) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
    }
    return data;
}

export async function getMessages() {
    const response = await fetch(`${API_BASE}/getMessages`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch messages');
    }
    return data;
}
