async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  const post = { title: 'My New Post', completed: false };
  
  postData('https://jsonplaceholder.typicode.com/posts', post)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  