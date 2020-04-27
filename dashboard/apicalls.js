//POST function
async function post(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'no-cors', 
    cache: 'no-cache', 
    credentials: 'omit', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'manual', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//GET function
async function get(url = '') {
  const response = await fetch(url, {
    method: 'GET', 
    mode: 'no-cors', 
    cache: 'no-cache', 
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'omit',
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//PUT function
async function put(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT', 
    mode: 'no-cors', 
    cache: 'no-cache', 
    credentials: 'omit', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'manual',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}