const jsonifyForm = (form) => {
  const formKeyNodes = form.querySelectorAll(
    '.field > :nth-child(1):not(.submit)'
  );
  const formValNodes = form.querySelectorAll('.field > :nth-child(2)');

  const jsonifiedForm = {};
  for (var i = 0; i < formKeyNodes.length; i++)
    jsonifiedForm[formKeyNodes[i].textContent] = formValNodes[i].value;

  return jsonifiedForm;
};

const onsubmitHandler = (e, method, onfulfilled) => {
  e.preventDefault();

  const form = e.target;
  const formData = jsonifyForm(form);

  const req = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };

  fetch('https://weak-puce-toad-garb.cyclic.app/', req)
    .then(onfulfilled)
    .catch((error) => console.log(error));
};
export { onsubmitHandler };
