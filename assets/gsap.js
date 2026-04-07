// GSAP media queries
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
});

// local and session storage to run script once
// window.onload = function () {
// if (localStorage.getItem("hasCodeRunBefore") === null) {
//     /** Your code here use sessionStorage. **/
//     localStorage.setItem("hasCodeRunBefore", true);
//   }
// }
// window.onload = () => {
//   setTimeout(() => {
//     document.querySelector('body').classList.add('display');
//   }, 5250);
// };


window.addEventListener('load', function(){
  if (!sessionStorage.viewed){
    const loader = document.querySelector('.intro');
    loader.className = 'intro';
    loader.style.backgroundColor = '#C3C2C6';
    sessionStorage.viewed = 1;
  } else{
    const loader = document.querySelector('.intro');
    const container = document.querySelector('.container')
    loader.style.display = 'none';
    container.style.display = 'block';
  }
})

// Devtools link to script https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/GSDevTools.min.js
// GSDevTools.create();

let media = gsap.matchMedia();

media.add("(min-width: 800px)", () => {
  const tlintro = gsap.timeline();
  tlintro.to('svg#logo', .5,{
  scale: 1,
  opacity: 1,
  ease: 'back',
})
.to('svg#logo .fill',{
  opacity: 1,
  stagger: 0.250,
  ease: 'power4.inOut',
},'-=.250')
.to('.intro', .5,{
  background: '#28166f',
})
.to('svg#logo', .5,{
  // transformOrigin: '50% 50%',
  width: '25%',
})
.from('svg#logo', .5,{
  // x: '600px',
},'-=.5')
.to('svg#Tekst', .5,{
  // display: 'block',
  // x: '200',
  visibility: 'visible',
},'-=.5')
// .to('svg#logo', .5,{
//   // display: 'block',
//   // x: '-200',
// },'-=.5')
.from('svg#Tekst g > path', .5,{
  scale: 1,
  transformOrigin: '50% 50%',
  autoAlpha: 0,
  stagger:{
    amount: .250,
    from: 'random',
  },
  y: '400',
},'-=.5')
.to('svg#Tekst g > path', .5,{
  scale: 0,
  transformOrigin: '50% 50%',
  y: '400',
  ease: 'power4.inOut',
  stagger: {
  amount: .250,
  from: "random",
}
},'+=1')
.to('svg#logo', .5,{
  scale: 0,
  // transformOrigin: '50% 50%',
},'-=.5')
.to('.intro',.5,{
  backgroundColor: 'transparent',
  // visibility: 'hidden',
  // autoAlpha: 1,
  display: 'none',
  // zIndex: '-100',
})
.to('.container',{
  display: 'block',
})
});


media.add("(max-width: 799px)", () => {
  const tl = gsap.timeline();
  tl.to('svg#logo', .5,{
    scale: 1,
    opacity: 1,
    ease: 'back',
  })
  .to('svg#logo .fill',{
    opacity: 1,
    stagger: 0.250,
    ease: 'power4.inOut',
  },'-=.250')
  .to('.intro', .5,{
    background: '#28166f',
  })
  // .from('svg#logo', .5,{
  //   y: '95',
  // })
  .from('svg#Tekst g > path', .5,{
    scale: 1,
    transformOrigin: '50% 50%',
  autoAlpha: 0,
    stagger:{
      amount: .250,
      from: 'random',
    },
    y: '400',
  },'-=.7')
  .to('svg#Tekst g > path', .5,{
    scale: 0,
    autoAlpha: 0,
    transformOrigin: '50% 50%',
    y: '400',
    ease: 'power4.inOut',
    stagger: {
    amount: .250,
    from: "random",
  }
  },'+=1')
  .to('svg#logo', .5,{
    scale: 0,
  },'-=.5')
  .to('.intro',.5,{
    backgroundColor: 'transparent',
    display: 'none',
  })
  .to('.container',{
  display: 'block',
})
});
