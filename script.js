const PASSWORD="07/06/2025";
const nameText="Hiiiiii Babitooooo!";
let i=0;

function checkPassword(){
 const v=document.getElementById("passwordInput").value;
 if(v===PASSWORD){
  document.getElementById("lockScreen").classList.add("hidden");
  showPage("welcome"); typeName(); autoOpenGift();
 } else document.getElementById("errorMsg").innerText="Try again 💕";
}

function showPage(id){
 document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
}

function typeName(){
 if(i<nameText.length){
  document.getElementById("typeName").innerHTML+=nameText.charAt(i);
  i++; setTimeout(typeName,120);
 }
}

function toggleMusic(){
 const m=document.getElementById("bgMusic");
 m.paused?m.play():m.pause();
}

function openModal(img){
 document.getElementById("modalImg").src=img.src;
 document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal(){
 document.getElementById("imageModal").classList.add("hidden");
}

function celebrate(){
 showPage("final"); startCountdown();
 for(let i=0;i<60;i++){
  const c=document.createElement("div");
  c.className="confetti";
  c.innerHTML=Math.random()>0.5?"❤️":"🎉";
  c.style.left=Math.random()*100+"vw";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),3000);
 }
}

function startCountdown(){
 const target=new Date("February 14, 2026 00:00:00").getTime();
 setInterval(()=>{
  const d=target-new Date().getTime();
  if(d<=0){countdown.innerHTML="It’s Valentine’s Day ❤️";return;}
  const days=Math.floor(d/(1000*60*60*24));
  countdown.innerHTML=`⏳ ${days} days to Valentine’s Day`;
 },1000);
}

function openModal(img) {
  document.getElementById("modalImg").src = img.src;
  document.getElementById("imageModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}


let autoOpened=false;
function autoOpenGift(){
 if(!autoOpened){autoOpened=true;setTimeout(()=>showPage("menu"),1200);}
}
