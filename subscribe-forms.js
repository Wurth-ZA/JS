            const form = document.createElement("form");
            form.setAttribute('action', "/wurth/newsletter/subscribe");
            form.setAttribute('method', "post");
            form.setAttribute('class', "container newsletter-container contenteddietor-newslettersubscribe form-horizontal");
            form.setAttribute('id', "form_686c9380-6df1-452b-a97f-a4090e1e9d8a");
            form.setAttribute('onsubmit', "return NewsletterSubscribe.Actions.Submit($(this), '686c9380-6df1-452b-a97f-a4090e1e9d8a");

            
            const email = document.createElement("input");
            email.setAttribute('type', "text");
            email.setAttribute('id', "email");
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
            submit.setAttribute('style', "display:inline; float:right");
            
            
            
            form.appendChild(email);
            form.appendChild(submit);
            var form_medium = document.querySelector("body > main > main > div > div > div > div");
            
            if (form_medium) {
                form_medium.parentElement.insertBefore(form, form_medium.nextSibling)
            } 
//document.body.appendChild(form);