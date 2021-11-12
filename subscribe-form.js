            const form = document.createElement("form");
            form.setAttribute('action', "/wurth/newsletter/subscribe");
            form.setAttribute('method', "post");
            form.setAttribute('class', "contenteddietor-newslettersubscribe form-horizontal");
            
            const email = document.createElement("input");
            email.setAttribute('type', "text");
            email.setAttribute('name', "email");
            email.setAttribute('data-item', "email");
            email.setAttribute('placeholder', "Email Address");
            email.setAttribute('class', "form-control newsletter-control");
            email.setAttribute('placeholder', "Email Address");
            email.setAttribute('autocomplete', "off");
            email.setAttribute('data-validate', "true");
            email.setAttribute('data-validate-required', "true");
            email.setAttribute('data-validate-email', "true");
            
            const submit = document.createElement("input");
            submit.setAttribute('type', "submit");
            submit.setAttribute('value', "submit");
            submit.setAttribute('class', "btn newsletter-button g-recaptcha");
            submit.setAttribute('data-sitekey', "6LcHb_4ZAAAAAAHjKYcRqvvqJO53xoEOEO2u0g2T");
            submit.setAttribute('data-callback', "newsletterSubscribe_5969");
            submit.setAttribute('data-action', "newsletterSubscribe");
            submit.setAttribute('data-item', "button");
            
            
            
            form.appendChild(email);
            form.appendChild(submit);
            var form_medium = document.querySelector("body > main > main > div > div > div > div");
            
            if (form_medium) {
                form_medium.parentElement.insertBefore(form, form_medium.nextSibling)
            }
//document.body.appendChild(form);