{
    const recettesBtn = document.getElementById("recettes-btn");
    const recettesContent = document.getElementById("recettes-content");

    // Recette par source
    const divRecetteParSource = document.createElement("div");
    divRecetteParSource.classList.add("content-section");

    const divTitreRecetteParSource = document.createElement("div");
    divTitreRecetteParSource.classList.add("mini-title-blue");

    const iconRecetteParSource = document.createElement("i");
    iconRecetteParSource.classList.add("bi", "bi-caret-right-fill");
    divTitreRecetteParSource.appendChild(iconRecetteParSource);

    const recetteParSourceTitle = document.createElement("h6");
    recetteParSourceTitle.classList.add("section-title");
    divTitreRecetteParSource.appendChild(recetteParSourceTitle);

    recetteParSourceTitle.textContent = "Recettes par source";
    divRecetteParSource.appendChild(divTitreRecetteParSource);

    const recetteParSourceText = document.createElement("p");
    recetteParSourceText.textContent = "Pour cette année 2025, le total des recettes et des dons s’élèvera à 12 626,7 milliards d’Ariary, soit une augmentation de 31,8% par rapport à 2024.";

    const divFigure2 = document.createElement("div");
    divFigure2.classList.add("div-figure");
    divFigure2.style.width = "100%";
    divFigure2.style.maxWidth = "100%";

    const divTitreFigure2 = document.createElement("div");
    divTitreFigure2.classList.add("div-figure-title");
    divFigure2.appendChild(divTitreFigure2);

    const nomFigure2 = document.createElement("h6");
    nomFigure2.textContent = "Figure 2.";
    divTitreFigure2.appendChild(nomFigure2);

    const titreFigure2 = document.createElement("h6");
    titreFigure2.textContent = "Évolution des croissances sectorielles";
    titreFigure2.classList.add("mini-title");
    divTitreFigure2.appendChild(titreFigure2);

    const figure2 = document.createElement("img");
    figure2.src = "assets/img/figure-2.png";
    figure2.alt = "Évolution des croissances sectorielles";

    const sourceFigure2 = document.createElement("p");
    sourceFigure2.style.width = "100%";
    sourceFigure2.style.textAlign = "right";
    const strongF2 = document.createElement("strong");
    strongF2.textContent = "Source: ";
    const emFig2 = document.createElement("em");
    emFig2.textContent = "LF 2025";
    sourceFigure2.appendChild(strongF2);
    sourceFigure2.appendChild(emFig2);

    // Recettes fiscales intérieures
    const divRecetteFiscaleInterieure = document.createElement("div");
    divRecetteFiscaleInterieure.classList.add("content-section");

    const divTitreRecetteFiscaleInterieure = document.createElement("div");
    divTitreRecetteFiscaleInterieure.classList.add("mini-title-blue");
    divRecetteFiscaleInterieure.appendChild(divTitreRecetteFiscaleInterieure);

    const iconRecetteFiscaleInterieure = document.createElement("i");
    iconRecetteFiscaleInterieure.classList.add("bi", "bi-caret-right-fill");
    divTitreRecetteFiscaleInterieure.appendChild(iconRecetteFiscaleInterieure);

    const recetteFiscaleInterieureTitle = document.createElement("h6");
    recetteFiscaleInterieureTitle.textContent = "Recettes fiscales intérieures";
    divTitreRecetteFiscaleInterieure.appendChild(recetteFiscaleInterieureTitle);
    recetteFiscaleInterieureTitle.classList.add("section-title");

    const recetteFiscaleInterieureText1 = document.createElement("strong");
    recetteFiscaleInterieureText1.textContent =
        "L’Administration prévoit un taux de pression brute de 11,2% grâce à une augmentation des recettes fiscales de 21,39% par rapport à 2024, soit un objectif de 5 628,4 milliards d’Ariary. La stratégie repose sur la digitalisation des services, la promotion de la gouvernance et de l’intégrité, et l’élargissement de l’assiette fiscale.";

    const recetteFiscaleInterieureText2 = document.createElement("p");
    recetteFiscaleInterieureText2.textContent = "Ainsi la Loi de Finance 2025 se distingue par :";

    const listeRecetteFiscaleInterieure = [
        {
            titre: "L’introduction de nouveaux dispositifs fiscaux",
            contenu: [
                "Instauration de la taxe sur les transactions mobiles (TTM) dont le paiement de la taxe incombe à l’établissement de monnaie électronique qui perçoit les frais de l’opération (recettesprévisionnelles de 143 milliards d’Ariary) ;",
                "Application du droit d’accise sur les produits nuisibles à l’environnement et à la santé ;",
                "Rationalisation des exonérations en matière de TVA et de droits d’accise :",
            ],
            sousContenu: [
                "Suppression des exonérations sur certains produits (ex. chaussures de sport, verre de lunetterie, filet pour le sport, article de robinetterie, etc.) ;",
                "Retaxation des intérêts bancaires et des contrats d’assurance à la TVA, générant une augmentation globale de recettes de 144,23 milliards d’Ariary.",
            ],
        },
        {
            titre: "L’élargissement de l’assiette fiscale",
            contenu: [
                "Soumission de nouveaux produits au droit d’accise, dont les plastiques et les cigarettes électroniques ;",
                "Ajustement des tarifs fiscaux pour les produits alcooliques et le tabac ;",
                "Révision de la TVA sur les importations et ventes de gaz butanes, fixée à 10% ;",
                "Ces mesures devraient générer des recettes complémentaires de 784,3 milliards d’Ariary, tout en renforçant les capacités de mobilisation des ressources des Collectivités Territoriales Décentralisées.",
            ],
        },
    ];

    const divListRecetteFiscaleInterieure = document.createElement("div");
    divListRecetteFiscaleInterieure.classList.add("list");

    listeRecetteFiscaleInterieure.forEach((item, itemIndex) => {
        const divTitre = document.createElement("div");
        divTitre.classList.add("mini-title-purple");

        const titreItem = document.createElement("h6");
        titreItem.textContent = item.titre;
        titreItem.style.cursor = "pointer";

        const itemRow = document.createElement("div");
        itemRow.classList.add("list-item");

        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-caret-right-fill");
        divTitre.appendChild(icon);
        divTitre.appendChild(titreItem);

        itemRow.appendChild(divTitre);

        const contenuList = document.createElement("ul");
        item.contenu.forEach((contenuItem, contenuIndex) => {
            const listItem = document.createElement("li");
            listItem.textContent = contenuItem;

            if (itemIndex == 0 && contenuIndex == 2 && Array.isArray(item.sousContenu)) {
                const sousList = document.createElement("ul");
                sousList.classList.add("sub-list");
                item.sousContenu.forEach((sous) => {
                    const sousLi = document.createElement("li");
                    sousLi.textContent = sous;
                    sousList.appendChild(sousLi);
                });
                listItem.appendChild(sousList);
            }

            contenuList.appendChild(listItem);
        });

        titreItem.addEventListener("click", () => {
            if (itemRow.contains(contenuList)) {
                itemRow.removeChild(contenuList);
                icon.classList.remove("bi-caret-down-fill");
                icon.classList.add("bi-caret-right-fill");
            } else {
                itemRow.appendChild(contenuList);
                icon.classList.remove("bi-caret-right-fill");
                icon.classList.add("bi-caret-down-fill");
            }
        });

        divListRecetteFiscaleInterieure.appendChild(itemRow);
    });

    const recetteFiscaleInterieureText3 = document.createElement("p");
    recetteFiscaleInterieureText3.textContent = "Les prévisions par nature d’impôt se répartissent comme suit :";

    const divTable3 = document.createElement("div");
    divTable3.classList.add("div-table");

    const divTitreTab3 = document.createElement("div");
    divTitreTab3.classList.add("div-table-title");
    divTable3.appendChild(divTitreTab3);

    const nomTable3 = document.createElement("h6");
    nomTable3.textContent = "Tableau 3.";
    divTitreTab3.appendChild(nomTable3);

    const titreTab3 = document.createElement("h6");
    titreTab3.textContent = "Recettes fiscales Intérieures";
    titreTab3.classList.add("mini-title");
    divTitreTab3.appendChild(titreTab3);

    const tableau3 = document.createElement("table");
    tableau3.style.borderCollapse = "collapse";
    tableau3.style.width = "100%";

    const thead3 = document.createElement("thead");
    tableau3.appendChild(thead3);

    const headerRow3 = document.createElement("tr");
    thead3.appendChild(headerRow3);

    const headers3 = ["Nature d’impôt (en milliards d’Ariary)", "LFR 2024 ", "LFR 2025 "];

    for (let i = 0; i < headers3.length; i++) {
        const th = document.createElement("th");
        th.textContent = headers3[i];
        th.style.padding = "8px";
        th.style.backgroundColor = "#15BECB";
        th.style.color = "white";
        th.style.fontWeight = "bold";
        if (i == 0) {
            th.style.textAlign = "left";
        } else {
            th.style.textAlign = "center";
        }
        headerRow3.appendChild(th);
    }

    const tbody3 = document.createElement("tbody");
    tableau3.appendChild(tbody3);
    const data3 = [
        ["Impôt sur les revenus", 1179.0, 1411.4],
        ["Impôt sur les revenus Salariaux et Assimilés", 848.2, 889.9],
        ["Impôt sur les revenus des Capitaux Mobiliers", 78.2, 93.7],
        ["Impôt sur les plus-values Immobilières", 14.0, 18.3],
        ["Impôt Synthétique", 132.3, 164.7],
        ["Droit d’Enregistrement", 49.0, 62.8],
        ["Taxe sur la Valeur Ajoutée (y compris Taxe sur les transactions Mobiles)", 1400.2, 1742.2],
        ["Impôt sur les marchés Publics", 148.7, 250.0],
        ["Droit d’Accise (y compris Taxe environnementale)", 754.1, 955.4],
        ["Taxes sur les Assurances", 17.2, 20.6],
        ["Droit de Timbres", 14.1, 16.8],
        ["Autres", 1.5, 2.7],
    ];

    for (let i = 0; i < data3.length; i++) {
        const rowData = data3[i];
        const row = document.createElement("tr");

        row.classList.add("rows");

        if (i % 2 == 0) {
            row.style.backgroundColor = "#EBF3F9";
            row.style.borderBottom = "1px solid rgba(0, 121, 135)";
            row.style.borderTop = "1px solid rgba(0, 121, 135)";
        } else {
            row.style.backgroundColor = "white";
        }

        for (let j = 0; j < rowData.length; j++) {
            const cellData = formatNumber(rowData[j]);
            const cell = document.createElement("td");
            cell.textContent = cellData;
            cell.style.padding = "8px";
            if (j == 0) {
                cell.style.textAlign = "left";
                cell.style.fontWeight = "bold";
            } else {
                cell.style.textAlign = "center";
            }
            row.appendChild(cell);
        }
        tbody3.appendChild(row);
    }

    const tfoot3 = document.createElement("tfoot");
    const footerRow3 = document.createElement("tr");
    footerRow3.style.backgroundColor = "rgba(200, 231, 133)";
    footerRow3.style.color = "white";
    footerRow3.style.fontWeight = "bold";

    const totalCell = document.createElement("td");
    totalCell.textContent = "TOTAL";
    totalCell.style.textAlign = "left";
    totalCell.style.padding = "8px";
    footerRow3.appendChild(totalCell);

    for (let i = 0; i < 2; i++) {
        const cell = document.createElement("td");
        total = data3.reduce((acc, row) => acc + row[i + 1], 0);
        cell.textContent = formatNumber(total);
        cell.style.textAlign = "center";
        footerRow3.appendChild(cell);
    }

    tfoot3.appendChild(footerRow3);
    tableau3.appendChild(tfoot3);

    const sourceTab3 = document.createElement("p");
    sourceTab3.style.width = "100%";
    sourceTab3.style.textAlign = "right";
    const strongTab3 = document.createElement("strong");
    strongTab3.textContent = "Source: ";
    const emTab3 = document.createElement("em");
    emTab3.textContent = "LF 2025";
    sourceTab3.appendChild(strongTab3);
    sourceTab3.appendChild(emTab3);

    // Event
    recettesBtn.addEventListener("click", () => {
        if (recettesContent.innerHTML == "") {
            recettesContent.appendChild(divRecetteParSource);
            recettesContent.appendChild(divRecetteFiscaleInterieure);

            recetteParSourceTitle.addEventListener("click", () => {
                if (divRecetteParSource.contains(recetteParSourceText)) {
                    recetteParSourceTitle.classList.remove("section-title-active");
                    divRecetteParSource.removeChild(recetteParSourceText);
                    divRecetteParSource.removeChild(divFigure2);
                    iconRecetteParSource.classList.remove("bi-caret-down-fill");
                    iconRecetteParSource.classList.add("bi-caret-right-fill");
                    divTitreRecetteParSource.classList.remove("mini-title-blue-active");
                } else {
                    recetteParSourceTitle.classList.add("section-title-active");
                    divRecetteParSource.appendChild(recetteParSourceText);
                    divRecetteParSource.appendChild(divFigure2);
                    iconRecetteParSource.classList.remove("bi-caret-right-fill");
                    iconRecetteParSource.classList.add("bi-caret-down-fill");
                    divTitreRecetteParSource.classList.add("mini-title-blue-active");
                }
            });

            titreFigure2.addEventListener("click", () => {
                if (divFigure2.contains(figure2)) {
                    titreFigure2.classList.remove("mini-title-active");
                    nomFigure2.style.fontWeight = "normal";
                    divFigure2.removeChild(figure2);
                    sourceFigure2.remove();
                } else {
                    titreFigure2.classList.add("mini-title-active");
                    nomFigure2.style.fontWeight = "bold";
                    divFigure2.appendChild(figure2);
                    divFigure2.appendChild(sourceFigure2);
                }
            });

            recetteFiscaleInterieureTitle.addEventListener("click", () => {
                if (divRecetteFiscaleInterieure.contains(recetteFiscaleInterieureText1)) {
                    recetteFiscaleInterieureTitle.classList.remove("section-title-active");
                    divRecetteFiscaleInterieure.removeChild(recetteFiscaleInterieureText1);
                    divRecetteFiscaleInterieure.removeChild(recetteFiscaleInterieureText2);
                    divRecetteFiscaleInterieure.removeChild(divListRecetteFiscaleInterieure);
                    divRecetteFiscaleInterieure.removeChild(recetteFiscaleInterieureText3);
                    divRecetteFiscaleInterieure.removeChild(divTable3);

                    divTitreRecetteFiscaleInterieure.classList.remove("mini-title-blue-active");
                    iconRecetteFiscaleInterieure.classList.remove("bi-caret-down-fill");
                    iconRecetteFiscaleInterieure.classList.add("bi-caret-right-fill");
                } else {
                    recetteFiscaleInterieureTitle.classList.add("section-title-active");
                    divRecetteFiscaleInterieure.appendChild(recetteFiscaleInterieureText1);
                    divRecetteFiscaleInterieure.appendChild(recetteFiscaleInterieureText2);
                    divRecetteFiscaleInterieure.appendChild(divListRecetteFiscaleInterieure);
                    divRecetteFiscaleInterieure.appendChild(recetteFiscaleInterieureText3);
                    divRecetteFiscaleInterieure.appendChild(divTable3);

                    divTitreRecetteFiscaleInterieure.classList.add("mini-title-blue-active");
                    iconRecetteFiscaleInterieure.classList.remove("bi-caret-right-fill");
                    iconRecetteFiscaleInterieure.classList.add("bi-caret-down-fill");
                }
            });

            titreTab3.addEventListener("click", () => {
                if (divTable3.contains(tableau3)) {
                    nomTable3.classList.remove("mini-title-active");
                    titreTab3.classList.remove("mini-title-active");
                    nomTable3.style.fontWeight = "normal";
                    divTable3.removeChild(tableau3);
                    divTable3.removeChild(sourceTab3);
                } else {
                    nomTable3.classList.add("mini-title-active");
                    titreTab3.classList.add("mini-title-active");
                    nomTable3.style.fontWeight = "bold";
                    divTable3.appendChild(tableau3);
                    divTable3.appendChild(sourceTab3);
                }
            });

            recettesContent.classList.add("expanded");
            recettesBtn.querySelector("i").classList.remove("bi-box-arrow-down-left");
            recettesBtn.querySelector("i").classList.add("bi-box-arrow-up-right");
        } else {
            recettesContent.innerHTML = "";
            recettesContent.classList.remove("expanded");
            recettesBtn.querySelector("i").classList.remove("bi-box-arrow-up-right");
            recettesBtn.querySelector("i").classList.add("bi-box-arrow-down-left");
        }
    });
}
