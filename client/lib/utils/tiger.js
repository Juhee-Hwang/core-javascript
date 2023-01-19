export const tiger = async (options={}) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    // 얕은 복사라 headers 전까지 복사 => 그래서 headers는 객체 안의 객체라 다시 얕복 진행
    headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }

  let response = await fetch(url, restOptions);
  
/*   let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      }
    }
  ) */


  // 성공 -> response.ok
  if (response.ok) {
    response.data = await response.json();
  }

/*   response.then((res) => {
    console.log(res);
  }) */

  // console.log(response);
  return response;
}

tiger.get = (url, options) => {
  tiger({url, ...options})
}

tiger.post = (url, body, options) => {
  tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.put = (url, body, options) => {
  tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.delet = (url, options) => {
  tiger({
    method: 'DELETE',
    url,
    ...options
  })
}