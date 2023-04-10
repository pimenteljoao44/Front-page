// get the form element
const form = document.querySelector('form');

// add an event listener to the form submit button
form.addEventListener('submit', (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // get the input values
  const name = document.querySelector('input[name="name"]').value;
   const email = document.querySelector('input[name="Email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
     const interest = document.querySelector('select[name="interest"]').value;

  // create an object with the input values
  const formData = {
    name,
     email,
      phone,
       interest
  };
 
  // reseta o formulario para outro cadastro
  form.reset();
  // log the form data to the console
  console.log(formData);
});

// scrow automatico de volta para o formulario

const botaoSolicitarInscricao = document.querySelector('.btnSolicitar');

 botaoSolicitarInscricao.addEventListener('click',() =>{
 // quando for clicado, faz um scrow automatico para o formulario
   form.scrollIntoView({ behavior: 'smooth' });
});



 