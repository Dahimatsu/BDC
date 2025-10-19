{
    const avantProposBtn = document.getElementById("avant-propos-btn");
    const avantProposContent = document.getElementById("avant-propos-content");

    const paragraphe1 = document.createElement("p");
    paragraphe1.textContent =
        "Le Ministère de l’Économie et des Finances présente le Budget des Citoyens 2025, une version simplifiée et facilement accessible de la Loi de Finances. Ce document a  été conçu pour permettre à tous les citoyens de comprendre les grandes orientations budgétaires de l’État.";

    const paragraphe2 = document.createElement("p");
    paragraphe2.textContent =
        "Avec un langage clair et des explications simples, le Budget des Citoyens reflète l’engagement du gouvernement à promouvoir la transparence et à rapprocher les citoyens de la gestion des finances publiques. Il met en lumière les priorités économiques et  sociales définies pour 2025 et de passage, met en exergue comment les ressources publiques sont utilisées pour répondre aux besoins de la population.";

    const paragraphe3 = document.createElement("p");
    paragraphe3.textContent =
        "Au fil des années, des efforts constants ont permis d’améliorer ce document,   notamment en simplifiant les termes complexes et en présentant les informations essentielles  comme les grandes catégories de dépenses de manière compréhensible pour tous.";

    const paragraphe4 = document.createElement("p");
    paragraphe4.textContent =
        "Disponible en malagasy et en français, ce Budget des Citoyens sera diffusé largement  sur les plateformes numériques et dans des espaces publics dans tout Madagascar. Ainsi, tout un chacun est sollicité de partager ce Budget des citoyens afin d’atteindre   la finalité qui est la transparence budgétaire.";

    const divSignature = document.createElement("div");
    divSignature.classList.add("signature");
    
    const signature = document.createElement("img");
    signature.src = "assets/img/signature.png"; 
    signature.alt = "Signature";
    divSignature.appendChild(signature);

    avantProposBtn.addEventListener("click", () => {
        if (avantProposContent.innerHTML == "") {
            avantProposContent.appendChild(paragraphe1);
            avantProposContent.appendChild(paragraphe2);
            avantProposContent.appendChild(paragraphe3);
            avantProposContent.appendChild(paragraphe4);
            avantProposContent.appendChild(divSignature);

            avantProposContent.classList.add("expanded");
            avantProposBtn.querySelector("i").classList.remove("bi-box-arrow-down-left");
            avantProposBtn.querySelector("i").classList.add("bi-box-arrow-up-right");
        } else {
            avantProposContent.innerHTML = "";
            avantProposContent.classList.remove("expanded");
            avantProposBtn.querySelector("i").classList.remove("bi-box-arrow-up-right");
            avantProposBtn.querySelector("i").classList.add("bi-box-arrow-down-left");
        }
    });
}
