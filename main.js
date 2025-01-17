
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I know I messed up, and I want to make things right. Please accept my heartfelt apology.";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
  gif.style.width = "400px"; 
  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Accha thik hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! I knew It";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "I'm truly sorry for what happened. I hope we can move past this and make things better.";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Chal maaf kiya!";
    noBtn.innerHTML = "Pehle nhi bata sakte the?";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe, I knew it!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Didn't want you to get hurt, I loveyou so much <3";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Loveyou too <3";
      noBtn.innerHTML = "Let me think";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe, I knew it!";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "I know you're hurt, but one thing is for sure that I care for you and I don't wanna lose you.";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "You lost me:(";
        noBtn.innerHTML = "I Loveyou too <3";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "I Loveyou so much, you are my favourite person ever and i value you deeply and Your feelings matter a lot to me, Thankyou for understanding.";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});




