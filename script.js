const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav"),themeBtn=document.getElementById("themeBtn");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light") document.body.classList.add("light");
function updateThemeIcon(){themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼";}
updateThemeIcon();
themeBtn?.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme",document.body.classList.contains("light")?"light":"dark");
  updateThemeIcon();
});

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card=>{
      card.style.display=(filter==="all"||card.dataset.category===filter)?"block":"none";
    });
  });
});

document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("contactForm"),status=document.getElementById("formStatus");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const destination="your.email@example.com"; // CHANGE THIS
  const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:${destination}?subject=${subject}&body=${body}`;
  status.textContent="Opening your email app…";
});
