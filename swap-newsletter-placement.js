const div1 = document.querySelector("body > main > main > div");
const div2 = document.querySelector("body > footer > div.footer-top > div > div > div.footer-newsletter.col-sm-12");
div1.after(div2)
div2.style['text-align'] = 'center';
div2.style['padding-bottom'] = '20px';