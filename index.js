window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];

    // sound, foreach allow you to add index
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () =>{
            // this is how we reset the audio every clicks
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // animation function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease'
        // when animation end do..
        bubble.addEventListener('animationend', () => {
            visual.removeChild(this);
        });
    }
});