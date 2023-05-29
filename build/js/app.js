// NAVIGATION JS
const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.menu-nav')


menuBtn.addEventListener('click', () =>{
    menuNav.classList.toggle('hidden');
    // menuBtn.style.classList.toggle('rotate-45')
});

// FAQ JS
const btn = document.querySelectorAll('.btn');


// btn.addEventListener('click', ()=>{
//     faq.classList.toggle('hidden')
// })

// btn.forEach(btns =>{
//     const faq = document.querySelector('.faq');
//     btns.addEventListener('click', (e)=>{
//         // const roll = e.nextElement;
//         // faq.classList.toggle('hidden')
//         btn.forEach(function (item) {
//             if (item !== btn) {
//               item.classList.remove("hidden");
//             }
//           });
      
//           btn.classList.toggle("hidden");
//         });
//     })


//using selectors inside the element
// const questions = document.querySelectorAll(".question");
// const faq = document.querySelector('.faq')

// questions.forEach(function (question) {
//   const btn = question.querySelector(".btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (faq) {
//       if (faq !== question) {
//         faq.classList.remove("hidden");
//       }
//     });

//     faq.classList.toggle("hidden");
//   });
// });


// traversing the dom
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const faq = document.querySelectorAll('.faq');

//     faq.classList.remove("hidden");
//   });
// });