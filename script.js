* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
  font-family: "JetBrains Mono", monospace
}

:root {
  --bg-color: #1C1C22;
  --second-bg-color: #131313;
  --text-color: white;
  --main-color: #00ff99;
}

html {
  font-size: 60%;
  overflow-x: hidden;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4rem 12% 4rem;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

.logo {
  font-size: 3rem;
  color: var(--text-color);
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.logo span {
  text-shadow: 0 0 25px var(--main-color);
}

.navbar a {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-left: 4rem;
  font-weight: 500;
  transition: 0.3s ease;
  border-bottom: 3px solid transparent;
}

.navbar a:hover,
.navbar a.active {
  color: var(--main-color);
  border-bottom: 3px solid var(--main-color);
}

#menu-icon {
  font-size: 3.6rem;
  color: var(--main-color);
  display: none;
}

section {
  min-height: 100vh;
  padding: 10rem 12% 10rem;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  justify-content: center;
  margin-top: 3rem;
}

span {
  color: var(--main-color);
}

.logo span {
  color: var(--main-color);
}

.home-content h3 {
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 3.5rem;
}

.home-content h1 {
  font-size: 7rem;
  font-weight: 700;
  margin-top: 1.5rem;
  line-height: 1;
}

.home-img {
  border-radius: 50%;
}

.home-img img {
  position: relative;
  top: 3rem;
  width: 32vw;
  border-radius: 50%;
  box-shadow: 0 0 25px var(--main-color);
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

.home-img img:hover {
  box-shadow: 0 0 25px var(--main-color),
              0 0 50px var(--main-color),
              0 0 100px var(--main-color);
}

.home-content p {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.8;
  max-width: 1000px;
}

.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  background-color: transparent;
  border: 2px solid var(--main-color);
  font-size: 2.5rem;
  border-radius: 50%;
  color: var(--main-color);
  margin: 3rem 1.5rem 3rem 0;
  transition: 0.3s ease-in-out;
}

.social-icons a:hover {
  color: var(--text-color);
  transform: scale(1.3) translateY(-5px);
  box-shadow: 0 0 25px var(--main-color);
  background-color: var(--main-color);
}

.btn {
  display: inline-block;
  padding: 1rem 2.8rem;
  background-color: var(--main-color);
  box-shadow: 0 0 25px var(--main-color);
  border-radius: 4rem;
  font-size: 1.6rem;
  color: black;
  border: 2px solid transparent;
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px var(--main-color);
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-group a:nth-of-type(2) {
  background-color: black;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  box-shadow: 0 0 25px transparent;
}

.btn-group a:nth-of-type(2):hover {
  box-shadow: 0 0 25px var(--main-color);
  background-color: var(--main-color);
  color: black;
}

.text-animation {
  font-size: 34px;
  font-weight: 600;
  min-width: 280px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
}

.text-animation span {
  position: relative;
  display: inline-block;
}

.text-animation span::before {
  content: "Cybersecurity Enthusiast";
  color: var(--main-color);
  animation: words 20s infinite;
}

.text-animation span::after {
  content: "";
  background-color: var(--bg-color);
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 3px solid var(--bg-color);
  right: 0px;
  animation: cursor 0.6s infinite, typing 20s steps(25) infinite;
}

@keyframes cursor {
  50%{
    border-left-color: transparent;
  }
}

@keyframes words {
  0%, 20% {
    content: "Cybersecurity Enthusiast";
  }
  21%, 40%{
    content: "Security Consultant";
  }
  41%, 60% {
    content: "IT Help Desk Specialist";
  }
  61%, 80% {
    content: "Field Technician";
  }
  81%, 100% {
    content: "Ethical Professional";
  }
}

@keyframes typing {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }
  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: 100%;
  }
}

.heading {
  font-size: 8rem;
  text-align: center;
  margin: 5rem 0;
}

.education {
  padding: 100px 15px;
  background: var(--bg-color);
}

.education h2 {
  margin-bottom: 5rem;
}

.timeline-items {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.timeline-items::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: var(--main-color);
  left: calc(50% - 1px);
}

.timeline-item {
  margin-bottom: 40px;
  width: 100%;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:nth-child(odd) {
  padding-right: calc(50% + 30px);
  text-align: right;
}

.timeline-item:nth-child(even) {
  padding-left: calc(50% + 30px);
}

.timeline-dot {
  height: 21px;
  width: 21px;
  background-color: var(--main-color);
  box-shadow: 0 0 25px var(--main-color),
              0 0 50px var(--main-color);
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
}

.timeline-date {
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin: 6px 0 15px;
}

.timeline-content {
  background-color: var(--bg-color);
  border: 3px solid var(--main-color);
  padding: 30px 50px;
  border-radius: 4rem;
  box-shadow: 0 0 10px var(--main-color);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.timeline-content:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px var(--main-color);
}

.timeline-content h3 {
  font-size: 20px;
  color: white;
  margin: 0 0 10px;
  font-weight: 500;
}

.timeline-content p {
  color: white;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
}

::-webkit-scrollbar-track {
  background-color: var(--bg-color);
  width: 50px;
}






.services {
  background-color: var(--bg-color);
  color: black;
}

.services h2 {
  margin-bottom: 5rem;
  color: white;
}

.services-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.service-box {
  background-color: var(--main-color);
  border-radius: 3rem;
  border: 5px solid transparent;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  padding: 1rem;
  text-align: center;
}

.service-box:hover {
  background-color: white;
  color: black;
  border: 5px solid var(--main-color);
  transform: scale(1.03);
}

.service-info h4 {
  font-size: large;
  padding-bottom: 1rem;
}

.service-info p {
  font-size: medium;
}





.projects {
  background-color: var(--bg-color);
  color: black;
}

.projects h2 {
  margin-bottom: 5rem;
  color: white;
}

.projects-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.project-box {
  background-color: var(--main-color);
  border-radius: 3rem;
  border: 5px solid transparent;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  padding: 1rem;
  text-align: center;
}

.project-box:hover {
  background-color: white;
  color: black;
  border: 5px solid var(--main-color);
  transform: scale(1.03);
}

.project-info{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-info h4 {
  font-size: large;
  padding-bottom: 1rem;
}

.project-info p {
  padding-bottom: 2rem;
  font-size: medium;
}




.github-link {
  padding: 1rem;
  background-color: var(--bg-color);
  border-radius: 4rem;
  font-size: 1.5rem;
  color: var(--main-color);
  border: 2px solid transparent;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.github-link:hover {
  transform: scale(1.1);
}

.github-group{
  margin-top: auto;
}













.contact {
  background-color: var(--bg-color);
}

.contact h2 {
  margin-bottom: 3rem;
  color: white;
}

.contact form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 5rem auto;
  text-align: center;
}

.contact form .input-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contact form .input-box input,
.contact form textarea {
  width: 100%;
  padding: 2.5rem;
  font-size: 1.8rem;
  color: var(--text-color);
  background-color: var(--bg-color);
  border-radius: 2rem;
  border: 2px solid var(--main-color);
  margin: 1.5rem 0;
  resize: none;
}

.contact form .btn {
  margin-top: 2rem;
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  background-color: var(--bg-color);
}

.footer .social {
  text-align: center;
  padding-bottom: 25px;
  color: var(--main-color);
}

.footer .social a {
  font-size: 25px;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  width: 42px;
  height: 42px;
  line-height: 42px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin: 0 10px;
  transition: 0.3s ease-in-out;
}

.footer .social a:hover {
  transform: scale(1.2)translateY(-10px);
  background-color: var(--main-color);
  color: var(--bg-color);
  box-shadow: 0 0 25px var(--main-color);
}

.footer ul {
  margin-top: 0;
  padding: 0;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
}

.footer ul li a {
  color: var(--text-color);
  border-bottom: 3px solid transparent;
  transition: 0.3s ease-in-out;
}

.footer ul li a:hover {
  border-bottom: 3px solid var(--main-color);
}

.footer ul li {
  display: inline-block;
  padding: 0 15px;
}

.footer .copyright {
  margin-top: 50px;
  text-align: center;
  font-size: 16px;
  color: var(--text-color);
}









@media(max-width:1285px) {
  html{
    font-size: 55%;
  }
  .services-container{
    padding-bottom: 7rem;
    grid-template-columns: repeat(2,1fr);
    margin: 0 5rem;
  }
}

@media(max-width:991px) {
  header {
    padding: 2rem 3%
  }
  section {
    padding: 10rem 3% 2rem;
  }
  .timeline-items::before{
    left: 7px;
  }
  .timeline-item:nth-child(odd){
    padding-right: 0;
    text-align: left;
  }
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even){
    padding-left: 37px;
  }
  .timeline-dot{
    left: 0;
  }
  .services{
    padding-bottom: 7rem;
  }
  .contact form{
    flex-direction: column;
  }
  .footer{
    padding: 2rem 3%;
  }
}

@media(max-width:895px) {
  #menu-icon{
    display: block;
  }
  .navbar{
    position: absolute;
    top: 100px;
    right: 0;
    width: 50%;
    padding: 1rem 3%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    border-bottom-left-radius: 2rem;
    border-left: 2px solid var(--main-color);
    border-bottom: 2px solid var(--main-color);
    display: none;
  }
  .navbar.active{
    display: block;
  }
  .navbar a{
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
    color: var(--text-color);
  }
  .home{
    flex-direction: column-reverse;
    margin: 5rem 4rem;
  }
  .home-content h3{
    font-size: 2.6rem;
  }
  .home-content h1{
    font-size: 8rem;
    margin-top: 3rem;
  }
  .home-content p{
    max-width: 600px;
    margin: 0 auto;
  }
  .home-img img{
    width: 56vw;
  }
  .services h2{
    margin-bottom: 3rem;
  }
  .services-container{
    grid-template-columns: repeat(1,1fr);
  }
}


