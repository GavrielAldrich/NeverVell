gsap.registerPlugin(TextPlugin);

gsap.to('.lead', { duration: 1.3, delay: 1, text: "NeverVell", fontSize: "40px" });

gsap.to('.altlead', {
    duration: 2, // Duration of the fade-in animation
    delay: 2.5, // Delay before the animation starts
    opacity: 1, // Fade-in effect
    onComplete: function() {
        console.log("Text animation complete!");
    }
});

gsap.to('.button-28', { duration: 1, delay: 4, text: "Enter Here...", fontSize: "15px", textDecoration: "underline" });
