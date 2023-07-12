// slider

const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivant = document.querySelector('#left');
const precedent = document.querySelector('#right');
let count = 0;
let time=10000;
function autoslide(){

    items[count].classList.remove('active');
    
    if(count < nbSlide - 1){
        count++;
    } else {
        count--;
    }
    
    items[count].classList.add('active')
    
}   
setInterval(function() {
    autoslide()
  }, time);

function slideSuivante(){
    items[count].classList.remove('active');
    
    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');
    
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }
    items[count].classList.add('active')
    
}
precedent.addEventListener('click', slidePrecedente)


// Blur effect

function blurfocus(){
    const main=document.querySelector('.main');
    const image=document.querySelector('.container');
    const footer=document.querySelector('.footer');
    const vid=document.querySelector('.video_container');
    footer.classList.toggle('footer1');
    main.classList.toggle('main1');
    image.classList.toggle('container1');
    vid.classList.toggle('video_container1');
}
function blurfocus_p(){
    const main=document.querySelector('.main');
    main.classList.toggle('main1');
}





// Chat boot
function chatt() {
  const input = document.getElementById("chat-input");
  const output = document.getElementById("chat-output");
  const message = input.value;
  if (input.value!=""){
    input.value = "";
    const messageElement = document.createElement("div");
    messageElement.innerHTML = "<p class='message'>"+message+"</p>";
    output.appendChild(messageElement);
    const response = getResponse(message);
    const responseElement = document.createElement("div");
    responseElement.innerHTML = "<p class='reponse'>"+response+"</p>";
    output.appendChild(responseElement);
  }
}

const input = document.getElementById("chat-input");
const output = document.getElementById("chat-output");

input.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    if (input.value!=""){
      const message = input.value;
      input.value = "";
      const messageElement = document.createElement("div");
      messageElement.innerHTML = "<p class='message'>"+message+"</p>";
      output.appendChild(messageElement);
      const response = getResponse(message);
      const responseElement = document.createElement("div");
      responseElement.innerHTML = response;
      output.appendChild(responseElement);
    }
    
  }
});

function getResponse(message) {
  switch (message.toLowerCase()) {
    case "who developed this website ?" :
        return "<p class='reponse'>Aslem Najjar !</p>";
    case "qui a développé ce site ?" :
        return "<p class='reponse'>Aslem Najjar !</p>";
    case "phone number ?" :
        return " <p class='reponse'>+216 73 463 472</p>";
    case "numéro de téléphone ?":
        return " <p class='reponse'>+216 73 463 472</p>";
    case "location ?" :
        return "<p class='reponse'>Rue Chedly Ghedira, 7, Monastir-Tunisia 5000.</p> ";
    case "emplacement ?":
        return "<p class='reponse'>Rue Chedly Ghedira, 7, Monastir-Tunisia 5000.</p> ";
    case "fax number ?" :
        return "<p class='reponse'>+216 73 425 347</p> ";
    case "numéro de fax ?":
        return "<p class='reponse'>+216 73 425 347</p> ";
    case "e-mail ?" :
        return "<p class='reponse'>biotools@biotools.tn</p> "
    default:
      return "<div class='default-message reponse'>Hello For asking about anything type :<br>• Phone number ?<br>• Location ?<br>• Fax number ?<br>• E-mail ?</div>";
  }
}

// switcher francais anglais presentation

function switcher_presentation(){
  const titre1 = document.querySelector(".titre1");
  const titre2 = document.querySelector(".titre2");
  const titre3 = document.querySelector(".titre3");
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const p3 = document.querySelector(".p3");
  const inactive=document.querySelector(".inactive-language");
  const translations = {
    FR: {
      titre1: "PRÉSENTATION DE LA SOCIÉTÉ",
      p1:"Biotools-Tunisia SARL, est une société basée en Tunisie qui propose une large gamme de produits et services pour les Sciences de la Vie, la Pharmacie, la Biotechnologie, les Centres de Recherche Hospitaliers et Médicaux.La demande des utilisateurs nous a amenés à mettre à jour régulièrement nos activités. En tant que partenaire de connaissances des entreprises manufacturières, des institutions universitaires et de la recherche dans les sciences de la vie et le diagnostic, nous fournissons des solutions complètes pour la biologie moléculaire et les domaines connexes.",
      p2:"Biotools Tunisie SARL a été fondée en 2006 et depuis cette date, nous n'avons cessé de grandir en actualisant nos activités. Biotools a commencé par la distribution de réactifs de biologie moléculaire. Depuis 2010, notre activité s'est étendue aux équipements liés à la Biologie Moléculaire. À partir de 2019, nous avons élargi notre division de diagnostic pour l'oncologie et les maladies infectieuses en utilisant des plateformes de biologie moléculaire. Notre société est un distributeur bien connu et leader d'équipements et de réactifs de laboratoire et scientifiques de qualité supérieure sur le marché tunisien. En fait, nous avons de nombreux partenaires de fabrication à travers le monde.",
      p3:"Nous fournissons une gamme complète de réactifs et d'instruments de laboratoire utilisés dans les hôpitaux, les instituts d'enseignement et les laboratoires de recherche, en nous concentrant principalement sur la biologie moléculaire.",
      titre2: "Historique de l'entreprise :",
      titre3: "Activité principale:",
    },
    EN: {
      titre1: "COMPANY PRESENTATION",
      p1:"Biotools-Tunisia SARL, is a company based in Tunisia which offers a wide range of products and services for Life Science, Pharmaceutical, Biotechnology, Hospital and Medical Research Centers.User demand led us regularly update our activities. As a knowledge partner of manufacturing companies, academic institutions and research in the life sciences and diagnostics, we provide comprehensive solutions for molecular biology and related fields.",
      p2:"Biotools Tunisia SARL was founded in 2006 and since that date, we have not stopped growing by updating our activities. Biotools began with the distribution of molecular biology reagents. Since 2010, our activity has extended to equipment related to Molecular Biology. Starting in 2019, we have expanded our diagnostic division for oncology and infectious diseases using molecular biology platforms.Our company is a well-known and leading distributor of premium quality of laboratory and scientific equipment and reagents on the Tunisian market. In fact, we have many manufacturing partners around the world.",
      p3:"We provide a complete range of Laboratory Reagents and Instruments served in Hospitals, Educational Institutes and Research Laboratories, focusing mainly on Molecular Biology.",
      titre2: "Company History:",
      titre3: "Main activity:",
    }
  };
  if(inactive.innerHTML=="EN"){
      inactive.innerHTML="FR"
      titre1.innerHTML = translations.EN.titre1;
      p1.innerHTML = translations.EN.p1;
      titre2.innerHTML = translations.EN.titre2;
      p2.innerHTML = translations.EN.p2;
      titre3.innerHTML = translations.EN.titre3;
      p3.innerHTML = translations.EN.p3;
  }
  else{
      inactive.innerHTML="EN"
      titre1.innerHTML = translations.FR.titre1;
      p1.innerHTML = translations.FR.p1;
      titre2.innerHTML = translations.FR.titre2;
      p2.innerHTML = translations.FR.p2;
      titre3.innerHTML = translations.FR.titre3;
      p3.innerHTML = translations.FR.p3;
  }
}

// switcher francais anglais home

function switcher_home(){
  const p1 = document.querySelector(".p1_home");
  const p2 = document.querySelector(".p2_home");
  const p3 = document.querySelector(".p3_home");
  const title = document.querySelector(".title");
  const slogan = document.querySelector(".slogan");
  const title2 = document.querySelector(".title2");
  const title3 = document.querySelector(".title3");
  const chatboot = document.querySelector(".chatboot_title");
  const inactive=document.querySelector(".inactive-language");
  const defaultmessage=document.querySelector(".default-message");
  const translations = {
    FR: {
      title:"Bienvenue aux BioTools !",
      slogan:"Libérez la puissance du génome avec nos séquenceurs d'ADN révolutionnaires",
      title2:"Leader dans la technologie de l'ADN",
      title3:"NanoBiotools : Nouvelle Division",
      p1:"Biotools-Tunisia SARL, est une société basée en Tunisie qui propose une large gamme de produits et services pour les Sciences de la Vie, la Pharmacie, la Biotechnologie, les Centres de Recherche Hospitaliers et Médicaux.",
      p2:"Biotools Tunisia SARL fournit une gamme complète de réactifs et d'instruments de laboratoire destinés aux hôpitaux, aux instituts d'enseignement et aux laboratoires de recherche, se concentrant principalement sur la biologie moléculaire.",
      p3:"Biotools Tunisie SARL a été fondée en 2006 et depuis cette date, nous n'avons cessé de grandir en actualisant nos activités. Biotools a commencé par la distribution de réactifs de biologie moléculaire.",
      chatboot:"Demandez quelque chose ici !",
      defaultmessage:"Bonjour pour demander quoi que ce soit, écrivez:<br><br>• Numéro de téléphone ?<br>• Emplacement ?<br>• Numéro de fax ?<br>• E-mail ?"
    },
    EN: {
      title:"Welcome to BioTools !",
      slogan:"Unleash Genome Power with our Breakthrough DNA Sequencers",
      title2:"Leader in DNA tchnology",
      title3:"NanoBiotools : New Division",
      p1:"Biotools-Tunisia SARL, is a company based in Tunisia which offers a wide range of products and services for Life Science, Pharmaceutical, Biotechnology, Hospital and Medical Research Centers.",
      p2:"Biotools Tunisia SARL provides a complete range of Laboratory Reagents and Instruments served in Hospitals, Educational Institutes and Research Laboratories, focusing mainly on Molecular Biology.",
      p3:"Biotools Tunisia SARL was founded in 2006 and since that date, we have not stopped growing by updating our activities. Biotools began with the distribution of molecular biology reagents.",
      chatboot:"Ask for something here !",
      defaultmessage:"Hello For asking about anything, write :<br><br>• Phone number ?<br>• Location ?<br>• Fax number ?<br>• E-mail ?"
    }
  };
  if(inactive.innerHTML=="EN"){
      inactive.innerHTML="FR"
      title.innerHTML = translations.EN.title;
      slogan.innerHTML = translations.EN.slogan;
      title2.innerHTML = translations.EN.title2;
      title3.innerHTML = translations.EN.title3;
      p1.innerHTML = translations.EN.p1;
      p2.innerHTML = translations.EN.p2;
      p3.innerHTML = translations.EN.p3;
      chatboot.innerHTML = translations.EN.chatboot;
      defaultmessage.innerHTML = translations.EN.defaultmessage;
  }
  else{
      inactive.innerHTML="EN"
      title.innerHTML = translations.FR.title;
      slogan.innerHTML = translations.FR.slogan;
      title2.innerHTML = translations.FR.title2;
      title3.innerHTML = translations.FR.title3;
      p1.innerHTML = translations.FR.p1;
      p2.innerHTML = translations.FR.p2;
      p3.innerHTML = translations.FR.p3;
      chatboot.innerHTML = translations.FR.chatboot;
      defaultmessage.innerHTML = translations.FR.defaultmessage;
  }
}

// fonction pour ouvrir le chatboot

function openchat(){
  container=document.querySelector("#chat-container");
  outputchat=document.querySelector("#chat-output");
  title=document.querySelector(".chatboot_title");
  openchatt=document.querySelector(".openchat");
  envoyer=document.querySelector('.envoyer');
  openchatt.style="opacity:0;";
  outputchat.style="opacity: 1;";
  envoyer.style="visibility: visible;";
  title.style="opacity: 1;";
  container.style="width: 300px;height: auto;border-radius: 20px;cursor: pointer; padding: 10px;"
}
function closechat(){
  container=document.querySelector("#chat-container");
  outputchat=document.querySelector("#chat-output");
  title=document.querySelector(".chatboot_title");
  openchatt=document.querySelector(".openchat");
  envoyer=document.querySelector('.envoyer');
  openchatt.style="opacity:1;";
  outputchat.style="opacity: 0;";
  envoyer.style="visibility: hidden;";
  title.style="opacity: 0;";
  container.style="    border-radius: 50%; width: 50px;height: 50px;"
}

// effect de translation on loading home page

function tzahlik(){
  title=document.querySelector('.title');
  title2=document.querySelector('.title2');
  back=document.querySelector('.back');
  title.style="transform: translateX(0px);opacity: 1;"
  title2.style="transform: translateY(0px);opacity: 1;"
  back.style="opacity: 0.7;transform: scale(1);"
}




// search filtre
const searchInput = document.getElementById('search');
const fa=document.querySelector('.fa');
const itemsList = document.getElementById('items');
function lista(){
    for (let i = 0; i < itemsList.children.length; i++) {
    const item = itemsList.children[i];
    const text = item.textContent.toLowerCase();
      item.style.display = 'none';
  }
  search.style="border-radius: 10px;"
  fa.style="border-radius: 0px 10px 10px 0px ;"
}
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  
  // loop through all items and check if they match the search term
  for (let i = 0; i < itemsList.children.length; i++) {
    const item = itemsList.children[i];
    const text = item.textContent.toLowerCase();
    
    if (text.includes(searchValue)) {
      item.style.display = 'block';
      search.style="border-radius: 10px 10px 0px 0px ;"
      fa.style="border-radius: 0px 10px 0px 0px ;"
    } else {
      item.style.display = 'none';
      search.style="border-radius: 10px 10px 0px 0px ;"
      fa.style="border-radius: 0px 10px 0px 0px ;"
    }
  }
});

const slidingin = () =>{
  const slide=document.querySelector('.video_container');
  const slide2=document.querySelector('.video_container2');
  slide.style="transform: translateX(-50%);"
  slide2.style="transform: translateX(-50%);"
} ;
const slidingout = () =>{
  const slide=document.querySelector('.video_container');
  const slide2=document.querySelector('.video_container2');
  slide.style="transform: translateX(50%);"
  slide2.style="transform: translateX(50%);"
} 

window.addEventListener('load', function() {
  setTimeout(function() {
    slideAuto();
  }, 51000); // Wait for 20 seconds before calling slideAuto()

  function slideAuto() {
    const slide = document.querySelector('.video_container');
    const slide2 = document.querySelector('.video_container2');
    slide.style.transform = 'translateX(-50%)';
    slide2.style.transform = 'translateX(-50%)';
  }
});






