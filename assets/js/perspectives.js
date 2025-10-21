{
    const perspectivesBtn = document.getElementById("perspectives-btn");
    const perspectivesContent = document.getElementById("perspectives-content");

    const paragraphe1 = document.createElement("p");
    paragraphe1.textContent = "En 2025, l’économie malgache devrait connaître une croissance de 5,0%, soutenue par des performances solides dans plusieurs secteurs stratégiques :";

    // Liste des secteurs avec contenu déroulant
    const divList = document.createElement("div");
    divList.classList.add("list");

    const items = ["Agriculture", "L’industrie extractive", "Secteur tertiaire"];
    const contents = [
        "Une augmentation estimée de 9,5%, portée par la production de riz amélioré, qui permettra un rendement de plus de 8 tonnes par hectare.",
        "Une croissance de 4,0%, en raison de la demande accrue liée aux énergies renouvelables et à la production de batteries pour véhicules électriques.",
        "Une croissance de 5,4%, avec des initiatives visant à attirer davantage de touristes et à développer les infrastructures numériques. Pour assurer une qualité des services publics efficace et pérenne, l’État envisage en 2025 d’aménager 6 650 postes budgétaires (dont 2 150 à recruter par voie de concours).",
    ];

    for (let i = 0; i < items.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("list-item");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("list-title");

        const icon = document.createElement("i");
        icon.className = "bi bi-caret-right-fill";

        const listTitle = document.createElement("h6");
        listTitle.textContent = items[i];

        const listContent = document.createElement("p");
        listContent.textContent = contents[i];
        listContent.classList.add("padding-paragraph");

        titleDiv.appendChild(icon);
        titleDiv.appendChild(listTitle);
        itemDiv.appendChild(titleDiv);
        titleDiv.addEventListener("click", () => {
            if (itemDiv.contains(listContent)) {
                itemDiv.removeChild(listContent);
                titleDiv.classList.remove("list-title-active");
                icon.classList.remove("bi-caret-down-fill");
                icon.classList.add("bi-caret-right-fill");
            } else {
                itemDiv.appendChild(listContent);
                titleDiv.classList.add("list-title-active");
                icon.classList.remove("bi-caret-right-fill");
                icon.classList.add("bi-caret-down-fill");
            }
        });
        divList.appendChild(itemDiv);
    }

    const paragraphe2 = document.createElement("p");
    paragraphe2.textContent = "Les grands agrégats macroéconomiques sont présentés dans le tableau ci-après :";

    function formatNumber(num) {
        return num.toLocaleString("fr-FR");
    }

    // Tableau des prévisions macroéconomiques
    const divTable1 = document.createElement("div");
    divTable1.classList.add("div-table");

    const divTitreTab1 = document.createElement("div");
    divTitreTab1.classList.add("div-table-title");
    divTable1.appendChild(divTitreTab1);

    const nomTable1 = document.createElement("h6");
    nomTable1.textContent = "Tableau 1.";
    divTitreTab1.appendChild(nomTable1);

    const titreTab1 = document.createElement("h6");
    titreTab1.textContent = "Prévisions macroéconomiques";
    titreTab1.classList.add("mini-title");
    divTitreTab1.appendChild(titreTab1);

    const tableau1 = document.createElement("table");
    tableau1.style.borderCollapse = "collapse";
    tableau1.style.width = "100%";

    const thead = document.createElement("thead");
    tableau1.appendChild(thead);

    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);

    const headers = ["AGRÉGATS MACROÉCONOMIQUES", "2024", "2025", "2026"];

    for (let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");
        th.textContent = headers[i];
        th.style.padding = "8px";
        th.style.backgroundColor = "#15BECB";
        th.style.color = "white";
        th.style.fontWeight = "bold";
        if (i == 0) {
            th.style.textAlign = "left";
        } else {
            th.style.textAlign = "center";
        }
        headerRow.appendChild(th);
    }

    const tbody = document.createElement("tbody");
    tableau1.appendChild(tbody);

    const sectionsTab1 = [
        {
            color: "#ffffff",
            data: [
                ["PIB nominal (milliards d’Ariary)", 78945.4, 88851.6, 99826.3],
                ["Taux de croissance économique", 4.4, 5.0, 5.2],
                ["Indice des prix à la consommation (fin de période)", 8.2, 7.1, 7.2],
                ["Ratio de dépenses publiques (% PIB)", 16.2, 18.4, 17.8],
                ["Solde global (base caisse)", -4.3, -4.1, -4.1],
                ["Solde primaire (base caisse)", 214.2, 1097.6, 866.0],
            ],
        },
        {
            color: "rgba(200, 231, 133)",
            title: "Taux de change (moyenne période)",
            data: [
                ["Dollars/Ariary", 4508.6, 4688.8, 4853.2],
                ["Euro/Ariary", 4905.5, 5275.2, 5532.7],
            ],
        },
        {
            color: "rgba(200, 231, 133)",
            title: "Taux d’investissement (% PIB)",
            data: [
                ["Public", 6.1, 9.6, 8.3],
                ["Privé", 14.6, 12.0, 13.7],
                ["Taux de pression fiscale (% PIB)", 10.6, 11.2, 11.8],
            ],
        },
    ];

    for (let s = 0; s < sectionsTab1.length; s++) {
        const section = sectionsTab1[s];

        if (section.title) {
            const sectionRow = document.createElement("tr");
            const sectionCell = document.createElement("td");
            sectionCell.colSpan = 4;
            sectionCell.textContent = section.title;
            sectionCell.style.backgroundColor = section.color;
            sectionCell.style.fontWeight = "bold";
            sectionCell.style.textAlign = "left";
            sectionCell.style.padding = "6px";
            tbody.appendChild(sectionRow);
            sectionRow.appendChild(sectionCell);
        }

        for (let i = 0; i < section.data.length; i++) {
            const tr = document.createElement("tr");

            tr.classList.add("rows");

            if (i % 2 == 0) {
                tr.style.backgroundColor = "#EBF3F9";
                tr.style.borderBottom = "1px solid rgba(0, 121, 135)";
                tr.style.borderTop = "1px solid rgba(0, 121, 135)";
            } else {
                tr.style.backgroundColor = "white";
            }

            if (i % 3 == 0) {
                tr.style.borderTop = "1px solid white";
            }

            for (let j = 0; j < section.data[i].length; j++) {
                const td = document.createElement("td");
                td.textContent = section.data[i][j];
                td.style.padding = "6px";
                if (j == 0) {
                    td.style.textAlign = "left";
                    td.style.fontWeight = "bold";
                } else {
                    td.style.textAlign = "center";
                    td.textContent = formatNumber(section.data[i][j]);
                }

                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }
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
    
    const sourceTab1 = createSource("LF 2025, Tome I");

    // Tableau des taux de croissance sectorielle
    const divTable2 = document.createElement("div");
    divTable2.classList.add("div-table");

    const divTitreTab2 = document.createElement("div");
    divTitreTab2.classList.add("div-table-title");
    divTable2.appendChild(divTitreTab2);

    const nomTable2 = document.createElement("h6");
    nomTable2.textContent = "Tableau 2.";
    divTitreTab2.appendChild(nomTable2);

    const titreTab2 = document.createElement("h6");
    titreTab2.textContent = "Taux de croissance sectorielle";
    titreTab2.classList.add("mini-title");
    divTitreTab2.appendChild(titreTab2);

    const tableau2 = document.createElement("table");
    tableau2.style.borderCollapse = "collapse";
    tableau2.style.width = "100%";

    const thead2 = document.createElement("thead");
    tableau2.appendChild(thead2);
    const headerRow2 = document.createElement("tr");
    thead2.appendChild(headerRow2);

    const headers2 = ["(Variation en %)", "2024", "2025"];
    for (let i = 0; i < headers2.length; i++) {
        const th = document.createElement("th");
        th.style.textAlign = "center";
        th.textContent = headers2[i];
        th.style.padding = "8px";
        th.style.backgroundColor = "#15becb";
        th.style.color = "white";
        th.style.fontWeight = "bold";
        headerRow2.appendChild(th);
    }

    const tbody2 = document.createElement("tbody");
    tableau2.appendChild(tbody2);

    const dataTab2 = [
        ["SECTEUR PRIMAIRE", 5.3, 7.8],
        ["Agriculture", 6.0, 9.5],
        ["Élevage et pêche", 3.9, 4.0],
        ["Sylviculture", 1.0, 1.1],

        ["SECTEUR SECONDAIRE", -3.3, 3.4],
        ["Industrie extractive", -20.8, 4.0],
        ["Alimentaire, boisson, tabac", 0.9, 2.4],
        ["Textile", 31.6, 4.0],
        ["Bois, papiers, imprimerie", 0.4, 0.7],
        ["Matériaux de construction", 7.9, 8.0],
        ["Industrie métallique", 7.2, 7.3],
        ["Machine, matériels électriques", 3.1, 3.2],
        ["Industries diverses", 0.5, 0.6],
        ["Électricité, eau, gaz", 3.9, 4.0],

        ["SECTEUR TERTIAIRE", 5.0, 5.4],
        ["BTP", 3.2, 3.6],
        ["Commerce, entretiens, réparations", 4.2, 4.3],
        ["Hôtel, restaurant", 14.7, 14.9],
        ["Transport", 7.0, 7.2],
        ["Poste et télécommunication", 13.4, 13.7],
        ["Banque, assurance", 5.3, 6.1],
        ["Services aux entreprises", 2.3, 2.4],
        ["Administration", 1.7, 1.9],
        ["Éducation", 1.7, 1.8],
        ["Santé", 1.8, 1.9],
        ["Services rendus aux ménages", 1.3, 1.4],
    ];

    for (let i = 0; i < dataTab2.length; i++) {
        const tr = document.createElement("tr");
        tr.classList.add("rows");

        for (let j = 0; j < dataTab2[i].length; j++) {
            const td = document.createElement("td");
            td.textContent = formatNumber(dataTab2[i][j]);

            if (j > 0) {
                td.style.textAlign = "center";
            }

            if (i == 0 || i == 4 || i == 14) {
                td.style.fontWeight = "bold";
                td.style.backgroundColor = "rgba(200, 231, 133)";
                td.style.borderBottom = "1px solid white";
                td.style.borderTop = "1px solid white";
            }

            if (i % 2 != 0) {
                tr.style.backgroundColor = "#EBF3F9";
            } else {
                tr.style.backgroundColor = "white";
                tr.style.borderBottom = "1px solid rgba(0, 121, 135)";
                tr.style.borderTop = "1px solid rgba(0, 121, 135)";
            }

            if (i == dataTab2.length - 1) {
                tr.style.borderBottom = "1px solid rgba(0, 121, 135)";
            }
            td.style.padding = "8px";
            if (j == 0) {
                td.style.fontWeight = "bold";
            }
            tr.appendChild(td);
        }
        tbody2.appendChild(tr);
    }

    const sourceTab2 = createSource("LF 2025, Tome I");

    // Figure sur Évolution des croissances sectorielles
    const divFigure1 = document.createElement("div");
    divFigure1.classList.add("div-figure");
    divFigure1.style.width = "100%";
    divFigure1.style.maxWidth = "100%";

    const divTitreFigure1 = document.createElement("div");
    divTitreFigure1.classList.add("div-figure-title");
    divFigure1.appendChild(divTitreFigure1);

    const nomFigure1 = document.createElement("h6");
    nomFigure1.textContent = "Figure 1.";
    divTitreFigure1.appendChild(nomFigure1);

    const titreFigure1 = document.createElement("h6");
    titreFigure1.textContent = "Évolution des croissances sectorielles";
    titreFigure1.classList.add("mini-title");
    divTitreFigure1.appendChild(titreFigure1);

    const divImageFigure1 = document.createElement("div");

    const sourceFigure1 = createSource("LF 2025, Tome I");

    // Event
    perspectivesBtn.addEventListener("click", () => {
        if (perspectivesContent.innerHTML == "") {
            perspectivesContent.appendChild(paragraphe1);
            perspectivesContent.appendChild(divList);
            perspectivesContent.appendChild(paragraphe2);
            perspectivesContent.appendChild(divTable1);
            perspectivesContent.appendChild(divTable2);
            perspectivesContent.appendChild(divFigure1);

            titreTab1.addEventListener("click", () => {
                if (divTable1.contains(tableau1)) {
                    titreTab1.classList.remove("mini-title-active");
                    nomTable1.style.fontWeight = "normal";
                    divTable1.removeChild(tableau1);
                    divTable1.removeChild(sourceTab1);
                } else {
                    titreTab1.classList.add("mini-title-active");
                    nomTable1.style.fontWeight = "bold";
                    divTable1.appendChild(tableau1);
                    divTable1.appendChild(sourceTab1);
                }
            });

            titreTab2.addEventListener("click", () => {
                if (divTable2.contains(tableau2)) {
                    titreTab2.classList.remove("mini-title-active");
                    nomTable2.style.fontWeight = "normal";
                    divTable2.removeChild(tableau2);
                    divTable2.removeChild(sourceTab2);
                } else {
                    titreTab2.classList.add("mini-title-active");
                    nomTable2.style.fontWeight = "bold";
                    divTable2.appendChild(tableau2);
                    divTable2.appendChild(sourceTab2);
                }
            });

            titreFigure1.addEventListener("click", () => {
                if (!divImageFigure1.innerHTML.trim()) {
                    fetch("pages/figure-1.html")
                        .then((response) => {
                            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
                            return response.text();
                        })
                        .then((html) => {
                            divImageFigure1.innerHTML = html;
                        });
                }

                if (divFigure1.contains(divImageFigure1)) {
                    titreFigure1.classList.remove("mini-title-active");
                    nomFigure1.style.fontWeight = "normal";
                    divFigure1.removeChild(divImageFigure1);
                    divFigure1.removeChild(sourceFigure1);
                } else {
                    titreFigure1.classList.add("mini-title-active");
                    nomFigure1.style.fontWeight = "bold";
                    divFigure1.appendChild(divImageFigure1);
                    divFigure1.appendChild(sourceFigure1);
                }
            });

            perspectivesContent.classList.add("expanded");
            perspectivesBtn.querySelector("i").classList.remove("bi-box-arrow-down-left");
            perspectivesBtn.querySelector("i").classList.add("bi-box-arrow-up-right");
        } else {
            perspectivesContent.innerHTML = "";
            perspectivesContent.classList.remove("expanded");
            perspectivesBtn.querySelector("i").classList.remove("bi-box-arrow-up-right");
            perspectivesBtn.querySelector("i").classList.add("bi-box-arrow-down-left");
        }
    });
}
