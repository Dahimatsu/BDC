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

    const divImageFigure2 = document.createElement("div");

    function createSource(source) {
        const p = document.createElement("p");
        p.style.width = "100%";
        p.style.textAlign = "right";

        const strong = document.createElement("strong");
        strong.textContent = "Source: ";

        const em = document.createElement("em");
        em.textContent = source;

        p.appendChild(strong);
        p.appendChild(em);

        return p;
    }

    const sourceFigure2 = createSource("LF 2025, Tome I");

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

    function tableBuilder(headers, data) {
        const tableau = document.createElement("table");
        tableau.style.borderCollapse = "collapse";
        tableau.style.width = "100%";

        // ====== THEAD ======
        const thead = document.createElement("thead");
        tableau.appendChild(thead);

        const headerRow = document.createElement("tr");
        thead.appendChild(headerRow);

        for (let i = 0; i < headers.length; i++) {
            const th = document.createElement("th");
            th.textContent = headers[i];
            th.style.padding = "8px";
            th.style.backgroundColor = "#15BECB";
            th.style.color = "white";
            th.style.fontWeight = "bold";
            th.style.textAlign = i === 0 ? "left" : "center";
            headerRow.appendChild(th);
        }

        // ====== TBODY ======
        const tbody = document.createElement("tbody");
        tableau.appendChild(tbody);

        for (let i = 0; i < data.length; i++) {
            const row = document.createElement("tr");
            row.classList.add("rows");

            if (i % 2 === 0) {
                row.style.backgroundColor = "#EBF3F9";
                row.style.borderBottom = "1px solid rgba(0, 121, 135)";
                row.style.borderTop = "1px solid rgba(0, 121, 135)";
            } else {
                row.style.backgroundColor = "white";
            }

            for (let j = 0; j < data[i].length; j++) {
                const cell = document.createElement("td");
                const cellData = formatNumber(data[i][j]);
                cell.textContent = cellData;
                cell.style.padding = "8px";
                cell.style.textAlign = j === 0 ? "left" : "center";
                if (j === 0) cell.style.fontWeight = "bold";
                row.appendChild(cell);
            }

            tbody.appendChild(row);
        }

        // ====== TFOOT ======
        const tfoot = document.createElement("tfoot");
        const footerRow = document.createElement("tr");
        footerRow.style.backgroundColor = "rgba(200, 231, 133)";
        footerRow.style.color = "white";
        footerRow.style.fontWeight = "bold";

        const totalCell = document.createElement("td");
        totalCell.textContent = "TOTAL";
        totalCell.style.textAlign = "left";
        totalCell.style.padding = "8px";
        footerRow.appendChild(totalCell);

        // Calcule les totaux colonnes numériques
        for (let i = 1; i < headers.length; i++) {
            const cell = document.createElement("td");
            const total = data.reduce((acc, row) => acc + row[i], 0);
            cell.textContent = formatNumber(total);
            cell.style.textAlign = "center";
            footerRow.appendChild(cell);
        }

        tfoot.appendChild(footerRow);
        tableau.appendChild(tfoot);

        return tableau;
    }

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

    const headers3 = ["Nature d’impôt (en milliards d’Ariary)", "LFR 2024 ", "LFR 2025 "];
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

    const tableau3 = tableBuilder(headers3, data3);

    const sourceTab3 = createSource("LF 2025");

    // Recettes Douanières
    const divRecetteDouaniere = document.createElement("div");
    divRecetteDouaniere.classList.add("content-section");

    const divTitreRecetteDouaniere = document.createElement("div");
    divTitreRecetteDouaniere.classList.add("mini-title-blue");
    divRecetteDouaniere.appendChild(divTitreRecetteDouaniere);

    const iconRecetteDouaniere = document.createElement("i");
    iconRecetteDouaniere.classList.add("bi", "bi-caret-right-fill");
    divTitreRecetteDouaniere.appendChild(iconRecetteDouaniere);

    const recetteDouaniereTitle = document.createElement("h6");
    recetteDouaniereTitle.textContent = "Recettes douanières";
    divTitreRecetteDouaniere.appendChild(recetteDouaniereTitle);
    recetteDouaniereTitle.classList.add("section-title");

    const recetteDouaniereText1 = document.createElement("strong");
    recetteDouaniereText1.textContent =
        "La prévision des recettes douanières pour l’année 2025 s’élève à 4 366,0 milliards d’Ariary soit une hausse de 15,9% par rapport à la prévision de 2024. Cette progression est portée par plusieurs réformes stratégiques, notamment :";

    const recetteDouaniereList = [
        {
            titre: "Modérnisation des processus",
            contenus: ["Dématérialisation des exonérations pour un contrôle fiscal renforcé ;", "Surveillance accrue des Zones Franches et des importateurs pour optimiser la gestion des recettes."],
        },
        {
            titre: "Révision du code des Douanes",
            contenus: ["Encadrement des Zones Économiques Spéciales (ZES) ;", "Renforcement des déclarations en douane et harmonisation des mesures tarifaires."],
        },
        {
            titre: "Modification tarifaire",
            contenus: [
                "Augmentation des droits sur les produits de luxe et les biens technologiques (ex. catamaran, navire de plaisance, etc.) ;",
                "Fiscalité adaptée pour encourager la production locale et protéger l’industrie nationale.",
            ],
        },
        {
            titre: "Conformité internationale",
            contenus: ["Alignement sur le Système Harmonisé 2022 et respect des accords commerciaux pour sécuriser les recettes douanières."],
        },
    ];

    const divListRecetteDouaniere = document.createElement("div");
    divListRecetteDouaniere.classList.add("list");

    recetteDouaniereList.forEach((liste) => {
        const divTitre = document.createElement("div");
        divTitre.classList.add("mini-title-purple");

        const titreListe = document.createElement("h6");
        titreListe.textContent = liste.titre;

        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-caret-right-fill");
        divTitre.appendChild(icon);
        divTitre.appendChild(titreListe);

        const listLigne = document.createElement("div");
        listLigne.classList.add("list-item");

        listLigne.appendChild(divTitre);

        const contenuList = document.createElement("ul");
        liste.contenus.forEach((contenu) => {
            const listItem = document.createElement("li");
            listItem.textContent = contenu;
            contenuList.appendChild(listItem);
        });

        titreListe.addEventListener("click", () => {
            if (listLigne.contains(contenuList)) {
                listLigne.removeChild(contenuList);
                icon.classList.remove("bi-caret-down-fill");
                icon.classList.add("bi-caret-right-fill");
            } else {
                listLigne.appendChild(contenuList);
                icon.classList.remove("bi-caret-right-fill");
                icon.classList.add("bi-caret-down-fill");
            }
        });

        divListRecetteDouaniere.appendChild(listLigne);
    });

    const recetteDouaniereText2 = document.createElement("p");
    recetteDouaniereText2.textContent = "Ces initiatives visent à maximiser les revenus, soutenir l’économie locale et renforcer la compétitivité de Madagascar.";

    const divTable4 = document.createElement("div");
    divTable4.classList.add("div-table");

    const divTitreTab4 = document.createElement("div");
    divTitreTab4.classList.add("div-table-title");
    divTable4.appendChild(divTitreTab4);

    const nomTable4 = document.createElement("h6");
    nomTable4.textContent = "Tableau 4.";
    divTitreTab4.appendChild(nomTable4);

    const titreTab4 = document.createElement("h6");
    titreTab4.textContent = "Recettes Douanières";
    titreTab4.classList.add("mini-title");
    divTitreTab4.appendChild(titreTab4);

    const headers4 = ["NATURE DES DROITS ET TAXES (en milliards d’Ariary)", "LFR 2024 ", "LFR 2025 "];
    const data4 = [
        ["Droit de douane", 847.5, 1010.7],
        ["TVA à l'importation", 1768.3, 2148.3],
        ["Taxe sur les produits pétroliers", 308.0, 326.0],
        ["TVA sur les produits pétroliers", 842.8, 879.0],
        ["Droit de navigation", 1.2, 1.9],
        ["Autres", 0.2, 0.1],
    ];

    const tableau4 = tableBuilder(headers4, data4);

    const sourceTab4 = createSource("LF 2025");

    const textTab4 = document.createElement("p");
    textTab4.textContent =
        "Les recettes fiscales intérieures et douanières atteignent un total de 9 994,4 milliards d’Ariary en 2025, marquant une augmentation de 1 589,9 milliards d’Ariary par rapport aux prévisions de 2024. Cette hausse correspond à un taux d’augmentation de 18,9 %.";

    const divFigure3 = document.createElement("div");
    divFigure3.classList.add("div-figure");
    divFigure3.style.width = "100%";
    divFigure3.style.maxWidth = "100%";

    const divTitreFigure3 = document.createElement("div");
    divTitreFigure3.classList.add("div-figure-title");
    divFigure3.appendChild(divTitreFigure3);

    const nomFigure3 = document.createElement("h6");
    nomFigure3.textContent = "Figure 3.";
    divTitreFigure3.appendChild(nomFigure3);

    const titreFigure3 = document.createElement("h6");
    titreFigure3.textContent = "Évolution des recettes fiscales et douanières";
    titreFigure3.classList.add("mini-title");
    divTitreFigure3.appendChild(titreFigure3);

    const divImageFigure3 = document.createElement("div");

    const sourceFigure3 = createSource("LF 2025, Tome I");

    const textFigure3 = document.createElement("p");
    textFigure3.textContent =
        "Les projections des recettes fiscales intérieures pour les années 2025 à 2028 prévoient une croissance progressive, passant de 5 578,4 milliards d’Ariary en 2025 à 7 571,6 milliards d’Ariary en 2028, avec des taux de pression fiscale bruts variant entre 6,31 % et 6,13 % du PIB. Pour les recettes douanières, des efforts seront déployés pour poursuivre la digitalisation, la modernisation des infrastructures et la gestion des risques, avec un taux de pression fiscale douanière estimé à 6,1 % du PIB à moyen terme.";

    // Recettes non fiscales
    const divRecetteNonFiscale = document.createElement("div");
    divRecetteNonFiscale.classList.add("content-section");

    const divTitreRecetteNonFiscale = document.createElement("div");
    divTitreRecetteNonFiscale.classList.add("mini-title-blue");
    divRecetteNonFiscale.appendChild(divTitreRecetteNonFiscale);

    const iconRecetteNonFiscale = document.createElement("i");
    iconRecetteNonFiscale.classList.add("bi", "bi-caret-right-fill");
    divTitreRecetteNonFiscale.appendChild(iconRecetteNonFiscale);

    const recetteNonFiscaleTitle = document.createElement("h6");
    recetteNonFiscaleTitle.textContent = "Recettes non fiscales";
    divTitreRecetteNonFiscale.appendChild(recetteNonFiscaleTitle);
    recetteNonFiscaleTitle.classList.add("section-title");

    const recetteNonFiscaleText = document.createElement("p");
    recetteNonFiscaleText.innerHTML =
        "En 2024, les recettes non fiscales atteindront <strong>345,9 milliards d’Ariary</strong>, en <strong>hausse de 64,4 %</strong> grâce au recouvrement exceptionnel des arriérés de loyer de SUCCOMA. Elles devraient augmenter à <strong>491,7 milliards d'Ariary</strong> en 2025 <strong>(0,6 % du PIB)</strong>, portées par les recettes minières <strong>(67,4 %),</strong> liées au lancement de plusieurs projets miniers et les dividendes <strong>(57,1 %)</strong>. A partir de 2026, elles se stabiliseront à <strong>0,25 % du PIB.</strong>";

    const divTable5 = document.createElement("div");
    divTable5.classList.add("div-table");

    const divTitreTab5 = document.createElement("div");
    divTitreTab5.classList.add("div-table-title");
    divTable5.appendChild(divTitreTab5);

    const nomTable5 = document.createElement("h6");
    nomTable5.textContent = "Tableau 5.";
    divTitreTab5.appendChild(nomTable5);

    const titreTab5 = document.createElement("h6");
    titreTab5.textContent = "Recettes Non Fiscales";
    titreTab5.classList.add("mini-title");
    divTitreTab5.appendChild(titreTab5);

    const headers5 = ["RECETTES NON FISCALES (en milliards d’Ariary)", "LFR 2024 ", "LFR 2025 "];
    const data5 = [
        ["Dividendes", 89.5, 120.2],
        ["Productions immobilières financières", 0.5, 2.1],
        ["Redevance de pêche", 10.0, 15.0],
        ["Redevance minières", 84.9, 331.2],
        ["Autres redevance", 9.7, 10.0],
        ["Produits des activités et autres", 11.1, 8.1],
        ["Autres", 140.1, 5.2],
    ];

    const tableau5 = tableBuilder(headers5, data5);

    const sourceTab5 = createSource("LF 2025, Tome II");

    // Dons
    const divDons = document.createElement("div");
    divDons.classList.add("content-section");

    const divTitreDons = document.createElement("div");
    divTitreDons.classList.add("mini-title-blue");

    const iconDons = document.createElement("i");
    iconDons.classList.add("bi", "bi-caret-right-fill");
    divTitreDons.appendChild(iconDons);

    const donsTitle = document.createElement("h6");
    donsTitle.textContent = "Dons";
    divTitreDons.appendChild(donsTitle);
    donsTitle.classList.add("section-title");
    divDons.appendChild(divTitreDons);

    const donsText = document.createElement("p");
    donsText.innerHTML =
        "En 2025, les dons attendus s'élèveront à <strong>2 476,6 milliards d'Ariary</strong>, incluant <strong> 445,6 milliards d'Ariary</strong> pour les dons projets et <strong>31,0 milliards d'Ariary</strong> pour la reconstitution des FCV et aides budgétaires.";

    const divTable6 = document.createElement("div");
    divTable6.classList.add("div-table");

    const divTitreTab6 = document.createElement("div");
    divTitreTab6.classList.add("div-table-title");
    divTable6.appendChild(divTitreTab6);

    const nomTable6 = document.createElement("h6");
    nomTable6.textContent = "Tableau 6.";
    divTitreTab6.appendChild(nomTable6);

    const titreTab6 = document.createElement("h6");
    titreTab6.textContent = "Composition des Dons";
    titreTab6.classList.add("mini-title");
    divTitreTab6.appendChild(titreTab6);

    const headers6 = ["RUBRIQUES (en milliards d’Ariary)", "LFR 2024 ", "LFR 2025 "];
    const data6 = [
        ["Courants", 0.3, 31.0],
        ["Capital", 1086.0, 2476.6],
    ];
    const tableau6 = tableBuilder(headers6, data6);

    const sourceTab6 = createSource("LF 2025, Tome I");

    // Event
    recettesBtn.addEventListener("click", () => {
        if (recettesContent.innerHTML == "") {
            recettesContent.appendChild(divRecetteParSource);
            recettesContent.appendChild(divRecetteFiscaleInterieure);
            recettesContent.appendChild(divRecetteDouaniere);
            recettesContent.appendChild(divRecetteNonFiscale);
            recettesContent.appendChild(divDons);

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
                if (!divImageFigure2.innerHTML.trim()) {
                    fetch("pages/figure-2.html")
                        .then((response) => {
                            if (response.ok) {
                                return response.text();
                            }
                            throw new Error("Erreur lors du chargement de la figure 2");
                        })
                        .then((html) => {
                            divImageFigure2.innerHTML = html;
                        });
                }
                if (divFigure2.contains(divImageFigure2)) {
                    titreFigure2.classList.remove("mini-title-active");
                    nomFigure2.style.fontWeight = "normal";
                    divFigure2.removeChild(divImageFigure2);
                    divFigure2.removeChild(sourceFigure2);
                } else {
                    titreFigure2.classList.add("mini-title-active");
                    nomFigure2.style.fontWeight = "bold";
                    divFigure2.appendChild(divImageFigure2);
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

            recetteDouaniereTitle.addEventListener("click", () => {
                if (divRecetteDouaniere.contains(recetteDouaniereText1)) {
                    divRecetteDouaniere.removeChild(recetteDouaniereText1);
                    divRecetteDouaniere.removeChild(divListRecetteDouaniere);
                    divRecetteDouaniere.removeChild(recetteDouaniereText2);
                    divRecetteDouaniere.removeChild(divTable4);
                    divRecetteDouaniere.removeChild(divFigure3);

                    recetteDouaniereTitle.classList.remove("section-title-active");
                    iconRecetteDouaniere.classList.remove("bi-caret-down-fill");
                    iconRecetteDouaniere.classList.add("bi-caret-right-fill");
                } else {
                    divRecetteDouaniere.appendChild(recetteDouaniereText1);
                    divRecetteDouaniere.appendChild(divListRecetteDouaniere);
                    divRecetteDouaniere.appendChild(recetteDouaniereText2);
                    divRecetteDouaniere.appendChild(divTable4);
                    divRecetteDouaniere.appendChild(divFigure3);

                    recetteDouaniereTitle.classList.add("section-title-active");
                    iconRecetteDouaniere.classList.remove("bi-caret-right-fill");
                    iconRecetteDouaniere.classList.add("bi-caret-down-fill");
                }
            });

            titreTab4.addEventListener("click", () => {
                if (divTable4.contains(tableau4)) {
                    nomTable4.classList.remove("mini-title-active");
                    titreTab4.classList.remove("mini-title-active");
                    nomTable4.style.fontWeight = "normal";
                    divTable4.removeChild(tableau4);
                    divTable4.removeChild(sourceTab4);
                    divTable4.removeChild(textTab4);
                } else {
                    nomTable4.classList.add("mini-title-active");
                    titreTab4.classList.add("mini-title-active");
                    nomTable4.style.fontWeight = "bold";
                    divTable4.appendChild(tableau4);
                    divTable4.appendChild(sourceTab4);
                    divTable4.appendChild(textTab4);
                }
            });

            titreFigure3.addEventListener("click", () => {
                if (!divImageFigure3.innerHTML.trim()) {
                    fetch("pages/figure-3.html")
                        .then((response) => {
                            if (response.ok) {
                                return response.text();
                            }
                            throw new Error("Network response was not ok.");
                        })
                        .then((html) => {
                            divImageFigure3.innerHTML = html;
                        });
                }
                if (divFigure3.contains(divImageFigure3)) {
                    titreFigure3.classList.remove("mini-title-active");
                    nomFigure3.style.fontWeight = "normal";
                    divFigure3.removeChild(divImageFigure3);
                    divFigure3.removeChild(sourceFigure3);
                    divFigure3.removeChild(textFigure3);
                } else {
                    titreFigure3.classList.add("mini-title-active");
                    nomFigure3.style.fontWeight = "bold";
                    divFigure3.appendChild(divImageFigure3);
                    divFigure3.appendChild(sourceFigure3);
                    divFigure3.appendChild(textFigure3);
                }
            });

            recetteNonFiscaleTitle.addEventListener("click", () => {
                if (divRecetteNonFiscale.contains(recetteNonFiscaleText)) {
                    recetteNonFiscaleTitle.classList.remove("section-title-active");
                    divRecetteNonFiscale.removeChild(recetteNonFiscaleText);
                    divRecetteNonFiscale.removeChild(divTable5);

                    iconRecetteNonFiscale.classList.remove("bi-caret-down-fill");
                    iconRecetteNonFiscale.classList.add("bi-caret-right-fill");
                } else {
                    recetteNonFiscaleTitle.classList.add("section-title-active");
                    divRecetteNonFiscale.appendChild(recetteNonFiscaleText);
                    divRecetteNonFiscale.appendChild(divTable5);

                    iconRecetteNonFiscale.classList.remove("bi-caret-right-fill");
                    iconRecetteNonFiscale.classList.add("bi-caret-down-fill");
                }
            });

            titreTab5.addEventListener("click", () => {
                if (divTable5.contains(tableau5)) {
                    nomTable5.classList.remove("mini-title-active");
                    titreTab5.classList.remove("mini-title-active");
                    nomTable5.style.fontWeight = "normal";
                    divTable5.removeChild(tableau5);
                    divTable5.removeChild(sourceTab5);
                } else {
                    nomTable5.classList.add("mini-title-active");
                    titreTab5.classList.add("mini-title-active");
                    nomTable5.style.fontWeight = "bold";
                    divTable5.appendChild(tableau5);
                    divTable5.appendChild(sourceTab5);
                }
            });

            donsTitle.addEventListener("click", () => {
                if (divDons.contains(donsText)) {
                    donsTitle.classList.remove("section-title-active");
                    divDons.removeChild(donsText);
                    divDons.removeChild(divTable6);

                    iconDons.classList.remove("bi-caret-down-fill");
                    iconDons.classList.add("bi-caret-right-fill");
                } else {
                    donsTitle.classList.add("section-title-active");
                    divDons.appendChild(donsText);
                    divDons.appendChild(divTable6);

                    iconDons.classList.remove("bi-caret-right-fill");
                    iconDons.classList.add("bi-caret-down-fill");
                }
            });

            titreTab6.addEventListener("click", () => {
                if (divTable6.contains(tableau6)) {
                    nomTable6.classList.remove("mini-title-active");
                    titreTab6.classList.remove("mini-title-active");
                    nomTable6.style.fontWeight = "normal";

                    divTable6.removeChild(tableau6);
                    divTable6.removeChild(sourceTab6);
                } else {
                    nomTable6.classList.add("mini-title-active");
                    titreTab6.classList.add("mini-title-active");
                    nomTable6.style.fontWeight = "bold";

                    divTable6.appendChild(tableau6);
                    divTable6.appendChild(sourceTab6);
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
