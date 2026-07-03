/* =========================================================
   MOBILE NAV (hamburger menu)
   ========================================================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* =========================================================
   CREATIVE CHALLENGES POPUP
   ========================================================= */
function pop(title, description) {
  document.getElementById("mTitle").innerText = title;
  document.getElementById("mDesc").innerText = description;
  document.getElementById("popOverlay").style.display = "flex";
}

function closePop() {
  document.getElementById("popOverlay").style.display = "none";
}

/* =========================================================
   AI CHAT WIDGET
   ========================================================= */
const knowledgeBase = {
  contests: `<b>🔥 Active Contests:</b><br><br>1️⃣ <b>Photo Shoot Contest</b> 📸<br>2️⃣ <b>Reel Editing Contest</b> 🎬<br>3️⃣ <b>Graphic Designing</b> 🎨<br>4️⃣ <b>Web Building Contest</b> 💻<br><br><i>Join now and showcase your skills!</i>`,

  howToWin: `<b>🎯 How to Win?</b><br>Here are the judging criteria:<br>1. <b>Originality:</b> Content must be unique.<br>2. <b>Creativity:</b> Show us something new.<br>3. <b>Quality:</b> High-resolution photo/video.<br><br><i>Tip: Give your best shot, don't copy!</i>`,

  previousWinners: `<b>🏆 Hall of Fame (Last Month):</b><br><br>1️⃣ <b>Aryan Sharma</b> (Web Dev)<br>&nbsp;&nbsp;&nbsp;&nbsp;💰 Prize: <b>₹300</b><br><br>2️⃣ <b>Nidhi Sinha</b> (Photography)<br>&nbsp;&nbsp;&nbsp;&nbsp;💰 Prize: <b>₹300</b><br><br>3️⃣ <b>Rahul Verma</b> (Editing)<br>&nbsp;&nbsp;&nbsp;&nbsp;💰 Prize: <b>₹200</b><br><br>4️⃣ <b>Priya Singh</b> (Design)<br>&nbsp;&nbsp;&nbsp;&nbsp;💰 Prize: <b>₹100</b><br><br><i>Next winner could be YOU! 🫵</i>`,

  getPrize: `<b>💸 Prize Money Guarantee:</b><br><b>YES, Absolutely!</b><br>Winners receive their prize money <b>instantly</b> via UPI (GPay/PhonePe) or Bank Transfer.<br><br>Payment is processed within <b>24 hours</b> of the result announcement. Trust is our priority! 🤝`,

  certificate: `<b>📜 Certificate of Excellence:</b><br>Yes! Everyone gets a certificate.<br><br>✅ <b>Participants:</b> Get a Certificate of Participation.<br>🏆 <b>Winners:</b> Get a Merit Certificate + Cash Prize.<br><br><i>Great for your resume and portfolio!</i>`,

  topics: `<b>💡 Contest Topics / Themes:</b><br><br>📸 <b>Photo:</b> Nature, Street, or Portrait.<br>🎬 <b>Reel:</b> Creative Transitions or Storytelling.<br>🎨 <b>Design:</b> Poster for a Music Event.<br>💻 <b>Web:</b> Personal Portfolio Website.<br><br><i>Choose your category and start creating!</i>`,

  refundPolicy: `<b>🔄 Refund Policy:</b><br>We value your trust!<br>✅ Your Entry Fee (₹29) is <b>100% Refundable</b> if:<br>1. The contest gets cancelled.<br>2. There is a technical error in payment.<br><br><i>Your money is always safe with Profi-BHARAT.</i>`,

  safetyInfo: `<b>🛡️ 100% Safe & Trusted:</b><br>✅ <b>Legitimate Platform:</b> Run by a professional team.<br>✅ <b>Secure Payments:</b> We use standard UPI gateways.<br>✅ <b>Transparent Results:</b> Winners are announced publicly.<br>✅ <b>Direct Support:</b> You can call us anytime.<br><br><i>Join without fear! Hundreds of students have participated.</i>`,

  aboutTeam: `<b>👥 About Our Team:</b><br>Profi-BHARAT is created and managed by a dedicated <b>Team of 4 Members</b>.<br><br><b>👨‍💻 Lead Developer:</b> Uditya<br><b>🎨 Design & Management:</b> Our core team handles UI/UX, Contest Management, and Community Support.<br><br><i>We are working together to build the best platform for you!</i>`,

  contact: `<b>📞 24x7 Live Support:</b><br>We are here to help you anytime!<br><br>• <b>WhatsApp:</b> +91 9934750481<br>• <b>Email:</b> profibharat@gmail.com<br>• <b>Phone:</b> +91 9934750481<br><br><i>Feel free to message us on WhatsApp for instant reply!</i>`,

  referEarn: `<b>📢 Refer & Earn:</b><br>Bring your friends to Profi-BHARAT!<br>If you refer <b>3 friends</b>, you get:<br>✅ <b>Free Entry to 1 Contest!</b><br><br><i>Contact support to claim your bonus after referring.</i>`,

  reportIssue: `<b>⚠️ Report an Issue:</b><br>Facing problems with the website or payment?<br><br>Please describe your issue here or <b>WhatsApp us immediately</b> at +91 9934750481.<br><i>We will resolve it within 2 hours.</i>`
};

function toggleChat() {
  const win = document.getElementById("chatWindow");
  const bubble = document.getElementById("greetingBubble");
  if (win.style.display === "none" || win.style.display === "") {
    win.style.display = "flex";
    bubble.style.display = "none";
    document.getElementById("userInput").focus();
  } else {
    win.style.display = "none";
    bubble.style.display = "flex";
  }
}

function closeBubble(event) {
  event.stopPropagation();
  document.getElementById("greetingBubble").style.display = "none";
}

function handleEnter(e) {
  if (e.key === "Enter") sendMessage();
}

function sendQuickMsg(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userText = inputField.value.trim();
  if (userText === "") return;

  appendMessage(userText, "user-msg");
  inputField.value = "";

  const typing = document.getElementById("typing");
  const chatBody = document.getElementById("chatBody");
  typing.style.display = "block";
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    typing.style.display = "none";
    const reply = getSmartReply(userText);
    appendMessage(reply, "bot-msg");
  }, 800);
}

function appendMessage(html, className) {
  const body = document.getElementById("chatBody");
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.innerHTML = html;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function getSmartReply(text) {
  text = text.toLowerCase();
  if (text.includes("topic") || text.includes("theme")) return knowledgeBase.topics;
  if (text.includes("contest") || text.includes("active")) return knowledgeBase.contests;
  if (text.includes("previous") || text.includes("winner")) return knowledgeBase.previousWinners;
  if (text.includes("how to win") || text.includes("criteria")) return knowledgeBase.howToWin;
  if (text.includes("get prize") || text.includes("will i") || text.includes("prize") || text.includes("fee")) return knowledgeBase.getPrize;
  if (text.includes("certificate")) return knowledgeBase.certificate;
  if (text.includes("refund")) return knowledgeBase.refundPolicy;
  if (text.includes("register") || text.includes("join")) return "<b>📝 To Register:</b><br>Go to the Participate section, click Join Contest, and fill the form.";
  if (text.includes("safe") || text.includes("secure")) return knowledgeBase.safetyInfo;
  if (text.includes("refer")) return knowledgeBase.referEarn;
  if (text.includes("report") || text.includes("issue")) return knowledgeBase.reportIssue;
  if (text.includes("team") || text.includes("owner")) return knowledgeBase.aboutTeam;
  if (text.includes("contact") || text.includes("support")) return knowledgeBase.contact;
  if (text.includes("hi") || text.includes("hello")) return "Hello! I am your 24x7 Assistant. How can I help you win today?";
  return "I'm not sure about that. Try selecting an option from above.";
}

/* =========================================================
   SKILL QUIZ
   ========================================================= */
const quizData = [
  { q: "Full form of HTML?", options: ["Hyper Text Markup Language", "High Text Make Language", "Hyper Links and Text", "Home Tool Markup"], a: 0 },
  { q: "Which tool is best for Video Editing?", options: ["MS Paint", "Adobe Premiere Pro", "Notepad", "Excel"], a: 1 },
  { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], a: 1 },
  { q: "Color mode used for Printing?", options: ["RGB", "CMYK", "HEX", "HSL"], a: 1 },
  { q: "Which language is used for Web Logic?", options: ["HTML", "CSS", "JavaScript", "SQL"], a: 2 },
  { q: "Short cut for 'Undo' in most apps?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + X"], a: 2 },
  { q: "Best software for Vector Graphics?", options: ["Photoshop", "Illustrator", "After Effects", "Premiere"], a: 1 },
  { q: "What is 1080p resolution?", options: ["1280x720", "1920x1080", "3840x2160", "720x480"], a: 1 },
  { q: "Tag used for Image in HTML?", options: ["<img>", "<image>", "<pic>", "<src>"], a: 0 },
  { q: "Which one is a JavaScript Framework?", options: ["Laravel", "React", "Django", "Flask"], a: 1 },
  { q: "FPS stands for?", options: ["Frames Per Second", "First Person Shooter", "Frames Play Speed", "File Play System"], a: 0 },
  { q: "Extension for Photoshop file?", options: [".ai", ".psd", ".indd", ".cdr"], a: 1 },
  { q: "Which tag makes text bold in HTML?", options: ["<b>", "<bold>", "<bb>", "<dark>"], a: 0 },
  { q: "Primary colors of Light (Screen)?", options: ["RYB", "CMYK", "RGB", "B&W"], a: 2 },
  { q: "Software used for 3D Modeling?", options: ["Blender", "Figma", "Canva", "Word"], a: 0 },
  { q: "To declare a variable in JS?", options: ["dim", "var / let", "int", "string"], a: 1 },
  { q: "Aspect ratio for Instagram Reels?", options: ["16:9", "4:3", "9:16", "1:1"], a: 2 },
  { q: "Correct syntax for ID selector in CSS?", options: [".classname", "#idname", "@idname", "*idname"], a: 1 },
  { q: "Tool used to cut video clips?", options: ["Razor Tool", "Brush Tool", "Pen Tool", "Clone Tool"], a: 0 },
  { q: "Who is the owner of Profi-BHARAT?", options: ["A Team", "Rahul", "Amit", "Sandeep"], a: 0 }
];

let currentQIndex = 0;
let score = 0;

function openQuiz() {
  document.getElementById("quizModal").style.display = "flex";
  document.getElementById("quizStart").style.display = "block";
  document.getElementById("quizGame").style.display = "none";
  document.getElementById("quizResult").style.display = "none";
  currentQIndex = 0;
  score = 0;
}

function closeQuiz() {
  document.getElementById("quizModal").style.display = "none";
}

function startQuiz() {
  document.getElementById("quizStart").style.display = "none";
  document.getElementById("quizGame").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const qData = quizData[currentQIndex];
  document.getElementById("qCount").innerText = `Q: ${currentQIndex + 1}/${quizData.length}`;
  document.getElementById("questionText").innerText = qData.q;
  document.getElementById("nextQBtn").style.display = "none";

  const progress = ((currentQIndex + 1) / quizData.length) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;

  const optsDiv = document.getElementById("optionsContainer");
  optsDiv.innerHTML = "";

  qData.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, btn) {
  const correctIndex = quizData[currentQIndex].a;
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.classList.add("disabled"));

  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    score += 2;
    document.getElementById("currentScore").innerText = `Score: ${score}`;
  } else {
    btn.classList.add("wrong");
    allBtns[correctIndex].classList.add("correct");
  }
  document.getElementById("nextQBtn").style.display = "block";
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex < quizData.length) loadQuestion();
  else showResults();
}

function showResults() {
  document.getElementById("quizGame").style.display = "none";
  document.getElementById("quizResult").style.display = "block";
  document.getElementById("finalScoreDisplay").innerText = `${score}/40`;

  const list = document.getElementById("lbList");
  list.innerHTML = "";
  const dummyScores = [
    { name: "Sanya Gupta", s: 38 },
    { name: "Rahul Verma", s: 36 },
    { name: "YOU", s: score, isUser: true },
    { name: "Amit Kumar", s: Math.max(0, score - 2) },
    { name: "Priya Singh", s: Math.max(0, score - 6) }
  ];
  dummyScores.sort((a, b) => b.s - a.s);
  dummyScores.forEach((p, i) => {
    const li = document.createElement("li");
    li.className = `lb-item ${p.isUser ? "user-rank" : ""}`;
    li.innerHTML = `<span>#${i + 1} ${p.name}</span> <span>${p.s} pts</span>`;
    list.appendChild(li);
  });
}

/* =========================================================
   USER PROFILE (Firebase-backed)
   ========================================================= */
const firebaseConfig = {
  apiKey: "AIzaSyD5yA9_Ieu05rC4qYVuokI04MZ5ggLpAms",
  authDomain: "profibharat-system.firebaseapp.com",
  projectId: "profibharat-system",
  databaseURL: "https://profibharat-system-default-rtdb.firebaseio.com/",
  storageBucket: "profibharat-system.firebasestorage.app",
  messagingSenderId: "737868719964",
  appId: "1:737868719964:web:57ee8792200f6f4c418399"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

async function openProfile() {
  const user = JSON.parse(localStorage.getItem("profiUser"));
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const uKey = user.email.replace(/[.$#[\]]/g, "_");

  document.getElementById("pName").innerText = user.name.toUpperCase();
  document.getElementById("pEmail").innerText = user.email;
  document.getElementById("pMobile").innerText = user.mobile || "--";
  document.getElementById("pGender").innerText = user.gender || "--";
  document.getElementById("pQual").innerText = user.qualification || "--";
  document.getElementById("userBigInitial").innerText = user.name.charAt(0).toUpperCase();

  const overlay = document.getElementById("profileOverlay");
  const card = document.getElementById("pCard");
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("show-overlay");
    card.classList.add("show-card");
  }, 10);

  // Each user's own profile photo is stored in Firebase
  db.ref("users/" + uKey + "/photo").once("value", (snap) => {
    const savedImg = snap.val();
    const img = document.getElementById("userDisplayImg");
    const initial = document.getElementById("userBigInitial");

    if (savedImg) {
      img.src = savedImg;
      img.style.display = "block";
      initial.style.display = "none";
    } else {
      img.style.display = "none";
      initial.style.display = "block";
    }
  });
}

function handleImage(input) {
  if (input.files && input.files[0]) {
    const user = JSON.parse(localStorage.getItem("profiUser"));
    const uKey = user.email.replace(/[.$#[\]]/g, "_");
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target.result;
      document.getElementById("userDisplayImg").src = url;
      document.getElementById("userDisplayImg").style.display = "block";
      document.getElementById("userBigInitial").style.display = "none";
      db.ref("users/" + uKey).update({ photo: url });
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function closeProfile() {
  const overlay = document.getElementById("profileOverlay");
  const card = document.getElementById("pCard");
  card.classList.remove("show-card");
  overlay.classList.remove("show-overlay");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}

function handleLogout() {
  localStorage.removeItem("profiUser");
  window.location.href = "index.html";
}
