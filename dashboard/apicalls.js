//POST function
async function post(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',   
    headers: {
      'Content-Type': 'application/json'
          }, 
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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

//Delete function
async function del(url = '') {
  const response = await fetch(url, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}