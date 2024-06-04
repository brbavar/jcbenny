const jsonifyForm = (form) => {
  const formKeyNodes = form.getElementsByTagName('label');
  const formValNodes = [];
  for (let keyNode of formKeyNodes)
    formValNodes.push(form.querySelector(`#${keyNode.htmlFor}`));

  const jsonifiedForm = {};
  for (var i = 0; i < formKeyNodes.length; i++)
    jsonifiedForm[formKeyNodes[i].textContent] = form.classList.contains(
      'checkboxes'
    )
      ? formValNodes[i].checked
      : formValNodes[i].value;

  return jsonifiedForm;
};

const onsubmitHandler = (
  e,
  userInfo,
  method = '',
  path,
  onfulfilled,
  onrejected
) => {
  e.preventDefault();

  const form = e.target;
  const formData = jsonifyForm(form);
  if (
    userInfo &&
    userInfo[Symbol.iterator] &&
    typeof userInfo[Symbol.iterator] === 'function'
  )
    for (let [key, val] of userInfo) formData[key] = val;

  if (method) {
    const req = {
      method: method,
    };

    if (method === 'POST') {
      req.headers = { 'Content-Type': 'application/json' };
      req.body = JSON.stringify(formData);
    }

    fetch(
      `https://jcbenny-api.fly.dev${path}${
        method === 'GET'
          ? `emails/${formData.Email}/passwords/${formData.Password}`
          : ''
      }`,
      req
    )
      .then(onfulfilled, onrejected)
      .catch((error) => console.log(error));
  }

  return formData;
};

export default onsubmitHandler;
