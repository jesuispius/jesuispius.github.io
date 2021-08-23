# Porfolio

This is my personal website/porfolio.

---

## Deployed

My porfolio website is deployed by Github Pages.

Please see my website at the following URL:  https://jesuispius.github.io/porfolio.html

---

## Usage

Since this website is a single-page website with different sections on the page.

So, to run/view this project, we can simply open the `porfolio.html` file on a web browser.

---

## How my website's built

1. My website is built by using HTML, CSS, and JavaScript.

    - I write my own HTML, CSS, and JavaScript code. I break down into multiple css and JavaScript files to maintain. This is how they are called in porfolio.html:

    ``` bash
        jesuispius.github.io/
        ├─ css/
        │  ├─ resume.css
        │  ├─ project.css
        │  ├─ contact.css
        │  ├─ style.css
        │  ├─ intro.css
        │  ├─ about.css
        ├─ js/
        │  ├─ resume.js
        │  ├─ backToTop.js
        │  ├─ navbar.js
        ├─ porfolio.html

    ```

    - In the backToTop.js and navbar.js, I have used the pure JavaScript code, but in the resume.js, I have used the Jquery to render list of information instead of using a plenty of HTML lines of code.

2. Besides, I also use some  [***Bootstrap***](https://getbootstrap.com/) CSS Framework's classes.

    - This is how I call Bootstrap in porfolio.html:

        ```html
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        ```

3. In addition, I use some awesome SVG shapes from [***Haikei***](https://haikei.app/) website - a web app to generate unique SVG shapes, backgrounds for free.

4. Using a built-in animations library - [***AOS***](https://michalsnik.github.io/aos/), to animate the elements on scroll more smoothly.

    - This is how I call AOS library and initialize it in porfolio.html:

        ```html
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
        AOS.init({
            once: true,
            duration: 1500,
        });
        </script>
        ```

---
