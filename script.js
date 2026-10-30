document.querySelectorAll('img[data-img]').forEach(i => {
  i.src = i.dataset.img + '.' + (i.dataset.img === 'logo' ? 'png' : 'jpg');
});

const M = {
  "Entradas": [
    [
      "Entradas & porções",
      [
        ["Bolinho de Costela com Ovo de Codorna", "", "41,00"],
        ["Bruschetta Pizzaiola", "Pão tostado, fonduta de queijos e tomate-cereja confitado ao pesto.", "43,00"],
        ["Antipasto di Olive Nere", "Torradas com antepasto de azeitonas pretas.", "37,00"],
        ["Bolinho de Salmão aos Três Queijos", "Salmão com requeijão, muçarela e parmesão.", "41,00"],
        ["Caesar do Armazém", "Alface americana, frango grelhado, parmesão, croutons e molho Caesar.", "45,00"],
        ["Insalata Greca", "Tomate, pepino, azeitonas, cebola roxa, ovo cozido e queijo.", "40,00"],
        ["Churrasquinho na Tábua", "Alcatra acebolada, cupim, queijo coalho e torradas de alho.", "219,00"],
        ["Tiras Crocantes de Peixe com Batata Frita", "Molho da casa.", "152,00"],
        ["Batata Vulcão de Cheddar e Bacon", "Porção para compartilhar.", "65,00"],
        ["Pastel de Carne e Queijo", "Molho da casa.", "65,00"],
        ["Bolinho de Frango com Provolone", "Molho da casa.", "54,00"],
        ["Dadinho de Tapioca", "Geleia de pimenta biquinho.", "52,00"],
        ["Croquete de Cupim", "Recheio de muçarela.", "54,00"],
        ["Caldo de Batata com Bacon", "Acompanha torradas de alho.", "67,00"],
        ["Caldo de Legumes com Frango", "Acompanha torradas de alho.", "67,00"]
      ]
    ]
  ],
  "Pratos": [
    [
      "Para compartilhar",
      "Servem de 2 a 3 pessoas.",
      [
        ["Picanha no Alho", "800 g, arroz Armazém, maionese de batatas, tomate e cebola roxa.", "232,00"],
        ["Medalhão ao Molho Quatro Queijos", "500 g de mignon, batatas rústicas e brócolis.", "225,00"],
        ["Costela em Crosta de Ervas", "Feijão tropeiro, batatas fritas e arroz.", "229,00"],
        ["Salmone al Limone Siciliano", "500 g de salmão, limão siciliano e alcaparras, mousseline de mandioquinha.", "225,00"],
        ["Parmegiana Tradizionale de Frango", "Molho pomodoro e mozzarella, arroz e batatas fritas.", "215,00"],
        ["Parmegiana Tradizionale de Miolo de Alcatra", "Molho pomodoro e mozzarella, arroz e batatas fritas.", "215,00"],
        ["Cupim ao Chimichurri com Aligot", "400 g de cupim desfiado, aligot e arroz Armazém.", "210,00"]
      ]
    ],
    [
      "Risotos e massas",
      "",
      [
        ["Risoto de Limão Siciliano e Salmão Grelhado", "Arbório, limão siciliano e parmesão.", "112,00"],
        ["Risoto de Alho-Poró com Medalhão", "Arbório, alho-poró fresco e mignon.", "110,00"],
        ["Risoto de Parmesão Trufado", "Arbório, parmesão, cogumelos e azeite trufado.", "90,00"],
        ["Risoto de Açafrão com Ragù de Cupim", "Arbório, açafrão e ragù de cupim.", "112,00"],
        ["Capeletti Caprese ao Pesto", "Mozzarella, tomate seco, pesto e lascas de peixe.", "105,00"],
        ["Ravioli de Mozzarella à Bolonhesa", "Massa fresca, molho bolonhesa e parmesão.", "99,00"]
      ]
    ],
    [
      "Burgers e pequeninos",
      "Acompanham batata frita.",
      [
        ["Burger Bacon", "", "59,00"],
        ["Burger Salad", "", "59,00"],
        ["Tiras de Carne com Arroz e Batata Frita", "", "59,00"],
        ["Tiras de Frango com Arroz e Batata Frita", "", "52,00"]
      ]
    ]
  ],
  "Fondues": [
    [
      "Fondues",
      "",
      [
        ["Fondue Brasileiríssimo", "Emmental, Catupiry, parmesão e muçarela, com dadinho, pão de queijo e bacon.", "169,90"],
        ["Fondue Tartufo Alpino", "Emmental, Steppe, parmesão, azeite trufado e cogumelos.", "169,90"],
        ["Fondue Quatro Queijos", "Muçarela, provolone, parmesão e gorgonzola.", "159,90"],
        ["Nutella com Ninho", "Fondue de Nutella e leite Ninho.", "169,90"],
        ["Chocolat Alpino", "Chocolate ao leite e meio amargo, com rum envelhecido.", "149,90"],
        ["Experiência Itália & Alpes", "Seleção de fondues salgados e doces. Por pessoa.", "249,90"]
      ]
    ]
  ],
  "Drinks": [
    [
      "Caipirinhas brasileiras",
      "Escolha o destilado: cachaça R$ 37 · Smirnoff R$ 41 · Absolut R$ 44 · sakê R$ 43.",
      [
        ["Limão com Rapadura", "Cítrico, levemente adocicado e caramelizado.", "37,00"],
        ["Três Limões", "Cítrico, intenso e refrescante.", "37,00"],
        ["Maracujá com Morango", "Tropical, frutado e equilibrado.", "41,00"],
        ["Tangerina com Maracujá", "Cítrico, tropical e aromático.", "44,00"],
        ["Abacaxi com Hortelã", "Refrescante, tropical e mentolado.", "43,00"],
        ["Frutas Vermelhas", "Frutado, leve e delicadamente adocicado.", "43,00"]
      ]
    ],
    [
      "Drinks clássicos",
      "",
      [
        ["Aperol Spritz", "Aperol, espumante brut e laranja.", "42,00"],
        ["Fitzgerald", "Gin, limão siciliano, açúcar e angostura.", "42,00"],
        ["Negroni", "Gin, Campari e vermute rosso.", "43,00"],
        ["Cosmopolitan", "Vodka, licor de laranja, cranberry e limão.", "41,00"],
        ["Moscow Mule", "Vodka, limão e espuma de gengibre.", "42,00"],
        ["Piña Colada", "Rum, leite de coco, leite condensado e abacaxi.", "35,85"],
        ["Espanhola", "Vinho tinto, leite condensado, creme de leite e abacaxi.", "38,85"]
      ]
    ],
    [
      "Histórias em goles",
      "Drinks autorais da casa.",
      [
        ["Jardim Siciliano", "Gin, tônica, pepino, limão siciliano e alecrim.", "39,85"],
        ["Sakura", "Sakê, licor de cereja, limão siciliano e xarope de açúcar.", "42,85"],
        ["Velho Oeste", "Bourbon, maracujá, limão, espuma de gengibre e canela.", "41,85"],
        ["Corvo Negro", "Vodka, licor de café, espresso e cordial de morango.", "42,85"],
        ["Âmbar", "Gin, tônica, limão, suco de laranja e espuma de gengibre.", "39,85"]
      ]
    ],
    [
      "Doses e licores",
      "Destilados em garrafa: consulte nosso garçom.",
      [
        ["Buchanan’s", "", "40,85"],
        ["Red Label", "", "39,85"],
        ["Jack Daniel’s Old Nº 7", "", "39,85"],
        ["Absolut", "", "32,85"],
        ["Ketel One", "", "34,85"],
        ["Tanqueray", "", "27,85"],
        ["El Jimador Reposado", "", "26,85"],
        ["Balena de Morango (licor)", "", "25,00"],
        ["Jägermeister", "", "25,00"],
        ["Campari", "", "24,00"]
      ]
    ]
  ],
  "Vinhos": [
    [
      "Espumantes",
      "",
      [
        ["Amitié Brut", "Chardonnay e malvasia, 750 ml. Seco e refrescante.", "120,00"],
        ["Amitié Rosé", "Moscatel rosé, 750 ml. Leve e levemente adocicado.", "120,00"]
      ]
    ],
    [
      "Brancos e rosé",
      "Garrafa 750 ml · taça 150 ml",
      [
        ["Potre White Blend", "Blend de uvas brancas. Leve e frutado.", "140,00 · taça 31,99"],
        ["Magnate", "100% alvarinho. Elegante e aromático.", "168,00"],
        ["Casas de Herencia Rosé", "Monastrell. Leve e delicado.", "149,90 · taça 33,90"]
      ]
    ],
    [
      "Tintos",
      "Garrafa 750 ml · taça 150 ml",
      [
        ["Potre Malbec", "Macio, frutado, fácil de beber.", "158,00 · taça 39,90"],
        ["Casas de Herencia", "Monastrell e tempranillo. Suave e equilibrado.", "149,90 · taça 35,90"],
        ["Miraflores Reserva Carménère", "Intenso, marcante e especiado.", "189,90 · taça 36,90"],
        ["Miraflores Reserva Merlot", "Macio, aveludado e elegante.", "189,90 · taça 36,90"],
        ["Miraflores Reserva Cabernet Sauvignon", "Encorpado, intenso e marcante.", "189,90 · taça 36,90"]
      ]
    ]
  ],
  "Sem álcool": [
    [
      "Cervejas e chopp",
      "",
      [
        ["Brahma Pilsen 500 ml", "", "20,00"],
        ["Brahma Black 500 ml", "", "21,00"],
        ["Heineken 600 ml", "", "23,99"],
        ["Original 600 ml", "", "22,99"],
        ["Corona Longneck", "", "21,99"],
        ["Heineken Longneck", "", "16,99"],
        ["Stella Artois Longneck", "", "16,99"],
        ["Heineken Sem Álcool", "", "16,99"]
      ]
    ],
    [
      "Sodas e sucos",
      "",
      [
        ["Soda italiana zero, frutas vermelhas", "Morango, amora e framboesa.", "26,99"],
        ["Soda italiana zero, frutas tropicais", "Abacaxi, maracujá e manga.", "26,99"],
        ["Soda italiana zero, detox", "Limão, gengibre e hortelã.", "26,99"],
        ["Suco natural, copo", "Laranja, maracujá ou cordial de limão. 1 ou 2 sabores.", "18,00"],
        ["Suco natural, jarra", "1 ou 2 sabores.", "49,00"],
        ["Coca-Cola / Zero", "", "10,00"],
        ["Guaraná / Zero", "", "10,00"],
        ["Água com ou sem gás", "", "7,99"]
      ]
    ]
  ]
};

const tabs = document.getElementById('tabs');
const list = document.getElementById('list');

function show(k) {
  [...tabs.children].forEach(b => b.setAttribute('aria-pressed', b.textContent === k));
  list.innerHTML = M[k].map(s => `<div><div class="cat">${s[0]}</div>${s[1] ? `<p class="cat-note">${s[1]}</p>` : ''}` + s[2].map(i => `<div class="item"><div><b>${i[0]}</b>${i[1] ? `<p>${i[1]}</p>` : ''}</div><span class="pr">R$ ${i[2]}</span></div>`).join('') + `</div>`).join('');
}

Object.keys(M).forEach(k => {
  const b = document.createElement('button');
  b.textContent = k;
  b.onclick = () => show(k);
  tabs.appendChild(b);
});

show('Entradas');
