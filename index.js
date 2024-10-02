document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const text = textElement.textContent;
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type,100); // Typing speed
        } else {
            setTimeout(erase, 3000); // Delay before erasing
        }
    }

    function erase() {
        if (index >= 0) {
            textElement.textContent = text.substring(0, index);
            index--;
            setTimeout(erase, 50); // Erasing speed
        } else {
            setTimeout(type, 1000); // Delay before typing again
        }
    }

    type();
});
