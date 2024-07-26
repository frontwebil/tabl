const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();
console.log(year , month , day , dayOfWeek)

const monthName = monthNames[month];
const dayName = dayNames[dayOfWeek];

const liam = document.querySelector('.liam-section-date');

function liamUpdate(){
  let liamDayofWeek = dayOfWeek - 1;
  let liamDay = day - 1;
  let liamMonth = month;
  if (liamDayofWeek < 0){
    liamDayofWeek = 6;
  }
  if (liamDay < 0){
    liamMonth--;
  }

  liam.innerHTML= `${dayNames[liamDayofWeek]}, ${monthNames[liamMonth]} ${liamDay}`


}
liamUpdate()  

const dayOfWeekHTML = document.querySelectorAll('.dof');
const dateHTML = document.querySelectorAll('.date');

console.log(dayOfWeekHTML);

dayOfWeekHTML.forEach((el)=>{
  el.innerHTML = `${dayNames[dayOfWeek]} ,`;
})

dateHTML.forEach((el)=>{
  el.textContent = `${monthNames[month]} ${day} , ${year}`;
})



// document.addEventListener('DOMContentLoaded', function() {
//   const counter = document.getElementById('counter');
//   const targetNumber = parseInt(counter.getAttribute('data-target'));
//   const startNumber = parseInt(counter.textContent);

//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               let currentNumber = startNumber;
//               const decrement = () => {
//                   if (currentNumber > targetNumber) {
//                       currentNumber--;
//                       counter.textContent = currentNumber;
//                       setTimeout(decrement, 200); // измените интервал (в миллисекундах) по вашему усмотрению
//                   }
//               };
//               decrement();
//               observer.unobserve(entry.target); // остановить наблюдение после начала изменения числа
//           }
//       });
//   });

//   observer.observe(counter);
// });

document.addEventListener('DOMContentLoaded', function() {
  const counter = document.getElementById('counter');
  const targetNumber = parseInt(counter.getAttribute('data-target'));
  const startNumber = parseInt(counter.textContent);

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              let currentNumber = startNumber;

              const decrement = () => {
                  let decrementCount = 0;

                  const innerDecrement = () => {
                      if (decrementCount < 3 && currentNumber > targetNumber) {
                          currentNumber--;
                          counter.textContent = currentNumber;
                          decrementCount++;
                          setTimeout(innerDecrement, 300);
                      }
                  };

                  innerDecrement();

                  if (currentNumber > targetNumber) {
                      setTimeout(decrement, 3000);
                  }
              };

              decrement();
              observer.unobserve(entry.target);
          }
      });
  });

  observer.observe(counter);
});