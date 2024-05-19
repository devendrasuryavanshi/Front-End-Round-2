document.querySelectorAll('p').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
      const span = anchor.querySelector('.material-symbols-rounded');
      gsap.to(span, {
        display: 'inline-block',
        opacity: 1,
        rotate: 0,
        duration: .3
      });
    });

    anchor.addEventListener('mouseout', () => {
      const span = anchor.querySelector('.material-symbols-rounded');
      gsap.to(span, {
        opacity: 0,
        rotation: 45,
        duration: .3,
        onComplete: () => {
          span.style.display = 'none';
        }
      });
    });
  });

  // bhenergypresentations.html

  document.querySelectorAll('.link-1').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
      gsap.to('.icon', {
        opacity: 1,
        rotate: 0,
        duration: .3
      });
    
    });

    anchor.addEventListener('mouseout', () => {
      gsap.to('.icon', {
        opacity: 0,
        rotation: 45,
        duration: .3,
      });
    });
  });

  document.querySelectorAll('.link-2').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
      gsap.to('.icon-2', {
        opacity: 1,
        rotate: 0,
        duration: .3
      });
    
    });

    anchor.addEventListener('mouseout', () => {
      gsap.to('.icon-2', {
        opacity: 0,
        rotation: 45,
        duration: .3,
      });
    });
  });