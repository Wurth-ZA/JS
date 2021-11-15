            

            const container_newsletter = document.createElement('div');
            container_newsletter.setAttribute('class', "container newsletter-container");
            container_newsletter.setAttribute('style',"padding-bottom:25px;");

            var text = document.createElement('h2');
            text.innerText = "Signup for our VIP newsletter to get updates for Black Week";
            text.setAttribute('style', "color:#cc0000");

       
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
            submit.setAttribute('style', "background-color: #cc0000;border: none; padding-bottom:0px; color: white;text-align: center;text-decoration: none;display: inline-block; font-size: 25px;");

            container_newsletter.appendChild(text);
            form.appendChild(email);
            form.appendChild(submit);
            container_newsletter.appendChild(form);
            
            var form_medium = document.querySelector("body > main > main > div > div > div > div");
            
            if (form_medium) {
                form_medium.parentElement.insertBefore(container_newsletter, form_medium.nextSibling)
            } 
//document.body.appendChild(form);