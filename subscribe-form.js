const form = document.createElement("form");
form.setAttribute('action', "/wurth/newsletter/subscribe");
form.setAttribute('method', "post");
form.setAttribute('class', "contenteddietor-newslettersubscribe form-horizontal");

const email = document.createElement("input");
email.setAttribute('type', "text");
email.setAttribute('name', "email");
email.setAttribute('data-item', "email");
email.setAttribute('placeholder', "Email Address");

const submit = document.createElement("input");
submit.setAttribute('type', "submit");
submit.setAttribute('value', "submit");

form.appendChild(email);
form.appendChild(submit);

document.body.appendChild(form);