let names = ['Tomáš', 'Jarda', 'Petr'];

names.forEach(name => {
    if (name === "Jarda") {
        $("ul").append(`<li><strong> ${name}</strong></li>`);    
    } else
    $("ul").append(`<li>${name}</li>`);
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("body").append(`<div class="hp">
  <h1>${additionalBlock.title}</h1>
  <p>${additionalBlock.text}</p>
</div>`);