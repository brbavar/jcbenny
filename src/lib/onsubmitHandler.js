const jsonifyForm = (form) => {
  const formKeyNodes = form.getElementsByTagName('label');
  const formValNodes = [];
  for (let keyNode of formKeyNodes)
    formValNodes.push(form.querySelector(`#${keyNode.htmlFor}`));

  const jsonifiedForm = {};
  for (var i = 0; i < formKeyNodes.length; i++)
    jsonifiedForm[formKeyNodes[i].textContent] = formValNodes[i].value;

  return jsonifiedForm;
};

const onsubmitHandler = (
  e,
  path,
  method,
  onfulfilled,
  onrejected,
  userInfo
) => {
  e.preventDefault();

  const form = e.target;
  const formData = jsonifyForm(form);

  const req = {
    method: method,
  };

  if (method === 'POST') {
    req.headers = { 'Content-Type': 'application/json' };
    req.body = JSON.stringify(formData);
  }

  fetch(
    `https://weak-puce-toad-garb.cyclic.app${path}${
      method === 'GET'
        ? `emails/${formData.Email}/passwords/${formData.Password}`
        : ''
    }`,
    req
  )
    .then(onfulfilled, onrejected)
    .catch((error) => console.log(error));
};

export default onsubmitHandler;
