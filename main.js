(function () {
  "use strict";

  var urgentUnits = [
    {
      name: "UPA Cristo Redentor",
      address: "Av. Monsenhor Hélio Campos, 420 - Cristo Redentor, Fortaleza - CE",
      district: "Cristo Redentor",
      cep: "60337240",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.7264,
      lon: -38.5662
    },
    {
      name: "Hospital Instituto Dr. José Frota (IJF)",
      address: "Rua Barão do Rio Branco, 1816 - Centro, Fortaleza - CE",
      district: "Centro",
      cep: "60025130",
      note: "Emergência e pronto atendimento",
      whatsapp: "",
      lat: -3.7349,
      lon: -38.5268
    },
    {
      name: "CAPS Geral Dr. Nilson de Moura Fé",
      address: "Rua Maestro Silva Novo, 90 - São João do Tauape, Fortaleza - CE",
      district: "Sao Joao do Tauape",
      cep: "60130420",
      note: "Acolhimento em saúde mental",
      whatsapp: "",
      lat: -3.7596,
      lon: -38.5059
    },
    {
      name: "UPA Praia do Futuro",
      address: "Rua Ismael Pordeus, s/n - Praia do Futuro, Fortaleza - CE",
      district: "Praia do Futuro",
      cep: "60182130",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.7423,
      lon: -38.4547
    },
    {
      name: "UPA Autran Nunes",
      address: "Av. Autran Nunes, s/n - Autran Nunes, Fortaleza - CE",
      district: "Autran Nunes",
      cep: "60526160",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.7589,
      lon: -38.6139
    },
    {
      name: "UPA Itaperi",
      address: "Rua Betel, s/n - Itaperi, Fortaleza - CE",
      district: "Itaperi",
      cep: "60714150",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.7783,
      lon: -38.5598
    },
    {
      name: "UPA Jangurussu",
      address: "Rua Santa Rita das Cássias, s/n - Jangurussu, Fortaleza - CE",
      district: "Jangurussu",
      cep: "60870160",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.8222,
      lon: -38.5451
    },
    {
      name: "UPA José Walter",
      address: "Av. João de Araújo Lima, s/n - Prefeito José Walter, Fortaleza - CE",
      district: "Jose Walter",
      cep: "60750265",
      note: "Atendimento de urgência 24h",
      whatsapp: "",
      lat: -3.7908,
      lon: -38.5435
    },
    {
      name: "Hospital Geral de Fortaleza (HGF)",
      address: "Rua Ávila Goulart, 900 - Papicu, Fortaleza - CE",
      district: "Papicu",
      cep: "60175055",
      note: "Hospital de referência estadual para urgência e emergência",
      whatsapp: "",
      lat: -3.7367,
      lon: -38.4865
    },
    {
      name: "Hospital Infantil Albert Sabin",
      address: "Rua Tertuliano Sales, 544 - Vila União, Fortaleza - CE",
      district: "Vila Uniao",
      cep: "60410220",
      note: "Hospital pediátrico de referência",
      whatsapp: "",
      lat: -3.7618,
      lon: -38.5312
    },
    {
      name: "Hospital Distrital Evandro Ayres de Moura (Frotinha Antônio Bezerra)",
      address: "Rua Cândido Maia, 294 - Antônio Bezerra, Fortaleza - CE",
      district: "Antonio Bezerra",
      cep: "60360195",
      note: "Hospital distrital com pronto atendimento",
      whatsapp: "",
      lat: -3.7447,
      lon: -38.6038
    },
    {
      name: "Hospital Distrital Maria José Barroso de Oliveira (Frotinha Parangaba)",
      address: "Av. General Osório de Paiva, 1127 - Parangaba, Fortaleza - CE",
      district: "Parangaba",
      cep: "60720100",
      note: "Hospital distrital com atendimento de urgência",
      whatsapp: "",
      lat: -3.7768,
      lon: -38.5662
    },
    {
      name: "Hospital Distrital Gonzaga Mota de Messejana (Frotinha Messejana)",
      address: "Av. Washington Soares, 7700 - Messejana, Fortaleza - CE",
      district: "Messejana",
      cep: "60841190",
      note: "Hospital distrital com urgência clínica",
      whatsapp: "",
      lat: -3.8313,
      lon: -38.4931
    },
    {
      name: "Hospital da Mulher de Fortaleza",
      address: "Av. Lineu Machado, 177 - Jóquei Clube, Fortaleza - CE",
      district: "Joquei Clube",
      cep: "60520220",
      note: "Urgência em saúde da mulher (confirmar perfil de porta de entrada)",
      whatsapp: "",
      lat: -3.7496,
      lon: -38.5659
    },
    {
      name: "Hospital Nossa Senhora da Conceição",
      address: "Rua João XXIII, 1700 - Conjunto Ceará, Fortaleza - CE",
      district: "Conjunto Ceara",
      cep: "60533090",
      note: "Hospital municipal com atendimento de urgência",
      whatsapp: "",
      lat: -3.7649,
      lon: -38.6075
    },
    {
      name: "Hospital Gonzaguinha José Walter",
      address: "Av. D, s/n - Prefeito José Walter, Fortaleza - CE",
      district: "Jose Walter",
      cep: "60750270",
      note: "Hospital municipal (confirmar especialidades e fluxo de urgência)",
      whatsapp: "",
      lat: -3.7901,
      lon: -38.5452
    },
    {
      name: "Hospital Gonzaguinha Barra do Ceará",
      address: "Av. Francisco Sá, 5200 - Barra do Ceará, Fortaleza - CE",
      district: "Barra do Ceara",
      cep: "60332055",
      note: "Hospital municipal (confirmar perfil de emergência)",
      whatsapp: "",
      lat: -3.7068,
      lon: -38.5749
    }
  ];

  var routineUnits = [
    {
      name: "CAPS Geral Nise da Silveira",
      address: "Rua Soares Bulcão, 1494 - São Gerardo, Fortaleza - CE",
      district: "Sao Gerardo",
      cep: "60325560",
      note: "Atendimento psicológico de rotina",
      whatsapp: "",
      lat: -3.7429,
      lon: -38.5516
    },
    {
      name: "CAPS Geral Prof. Gerardo da Frota Pinto",
      address: "Rua Pastor Samuel Mungunba, 1269 - Rodolfo Teófilo, Fortaleza - CE",
      district: "Rodolfo Teofilo",
      cep: "60430285",
      note: "Acompanhamento regular em saúde mental",
      whatsapp: "",
      lat: -3.7482,
      lon: -38.5597
    },
    {
      name: "CAPS AD Dr. Airton Monte",
      address: "Av. Monsenhor Hélio Campos, 138 - Cristo Redentor, Fortaleza - CE",
      district: "Cristo Redentor",
      cep: "60337210",
      note: "Atenção contínua para álcool e outras drogas",
      whatsapp: "",
      lat: -3.7252,
      lon: -38.5658
    },
    {
      name: "Clínica-Escola de Psicologia - UNIFOR",
      address: "Av. Washington Soares, 1321 - Edson Queiroz, Fortaleza - CE",
      district: "Edson Queiroz",
      cep: "60811905",
      note: "Apoio psicológico universitário (verificar agenda e critérios da instituição)",
      whatsapp: "",
      lat: -3.7686,
      lon: -38.4782
    },
    {
      name: "Serviço de Psicologia Aplicada - UFC (Benfica)",
      address: "Av. da Universidade, 2762 - Benfica, Fortaleza - CE",
      district: "Benfica",
      cep: "60020181",
      note: "Atendimento psicológico em universidade (verificar triagem e disponibilidade)",
      whatsapp: "",
      lat: -3.7444,
      lon: -38.5367
    },
    {
      name: "Serviço-Escola de Psicologia - Unichristus",
      address: "Rua João Adolfo Gurgel, 133 - Cocó, Fortaleza - CE",
      district: "Coco",
      cep: "60192130",
      note: "Apoio psicológico em faculdade (confirmar horários e critérios de atendimento)",
      whatsapp: "",
      lat: -3.7448,
      lon: -38.4818
    },
    {
      name: "Núcleo de Apoio Psicológico - Farias Brito",
      address: "Rua Castro Monte, 1364 - Varjota, Fortaleza - CE",
      district: "Varjota",
      cep: "60175210",
      note: "Atendimento psicológico universitário (verificar disponibilidade de vagas)",
      whatsapp: "",
      lat: -3.7285,
      lon: -38.4896
    },
    {
      name: "Serviço de Psicologia - Ari de Sá",
      address: "Av. Heráclito Graça, 826 - Centro, Fortaleza - CE",
      district: "Centro",
      cep: "60140130",
      note: "Apoio psicológico acadêmico (confirmar unidade e triagem)",
      whatsapp: "",
      lat: -3.7329,
      lon: -38.5208
    },
    {
      name: "Instituto Fratelli - Apoio Psicológico",
      address: "Rua Carolina Sucupira, 480 - Aldeota, Fortaleza - CE",
      district: "Aldeota",
      cep: "60140120",
      note: "Apoio emocional e psicológico (verificar formas de atendimento)",
      whatsapp: "",
      lat: -3.7315,
      lon: -38.5012
    },
    {
      name: "UBS Paulo Marcelo - Regional Centro",
      address: "Rua 25 de Março, 607 - Centro, Fortaleza - CE",
      district: "Centro",
      cep: "60060120",
      note: "Unidade Básica de Saúde com acolhimento e encaminhamento em saúde mental",
      whatsapp: "",
      lat: -3.7312,
      lon: -38.5324
    },
    {
      name: "UBS Mattos Dourado - Edson Queiroz",
      address: "Rua Sargento Barbosa, 670 - Edson Queiroz, Fortaleza - CE",
      district: "Edson Queiroz",
      cep: "60811260",
      note: "Atenção primária com suporte inicial em saúde mental e encaminhamento",
      whatsapp: "",
      lat: -3.7708,
      lon: -38.4764
    },
    {
      name: "UBS Maria de Lourdes Jereissati - Jangurussu",
      address: "Rua das Pedrinhas, s/n - Jangurussu, Fortaleza - CE",
      district: "Jangurussu",
      cep: "60866130",
      note: "UBS com atendimento multiprofissional e apoio territorial",
      whatsapp: "",
      lat: -3.8178,
      lon: -38.5369
    },
    {
      name: "Equipe Consultório na Rua - Regional Centro",
      address: "Rua Guilherme Rocha, 1266 - Centro, Fortaleza - CE",
      district: "Centro",
      cep: "60030140",
      note: "Atenção psicossocial no território para população em situação de rua (confirmar ponto e escala)",
      whatsapp: "",
      lat: -3.7296,
      lon: -38.5307
    },
    {
      name: "Atenção Primária em Saúde Mental - Regional V",
      address: "Av. Osório de Paiva, 1127 - Parangaba, Fortaleza - CE",
      district: "Parangaba",
      cep: "60720240",
      note: "Porta de entrada da atenção primária para acolhimento e encaminhamento em saúde mental",
      whatsapp: "",
      lat: -3.7764,
      lon: -38.5651
    },
    {
      name: "Centro de Convivência e Cultura em Saúde Mental",
      address: "Rua Gonçalves Ledo, 777 - Centro, Fortaleza - CE",
      district: "Centro",
      cep: "60060120",
      note: "Espaço de convivência, cultura e fortalecimento de vínculos em saúde mental",
      whatsapp: "",
      lat: -3.7314,
      lon: -38.5319
    }
  ];

  var districtCenter = {
    aldeota: { lat: -3.7343, lon: -38.4964 },
    benfica: { lat: -3.7441, lon: -38.5361 },
    centro: { lat: -3.7319, lon: -38.5267 },
    "cristo redentor": { lat: -3.7262, lon: -38.5655 },
    "rodolfo teofilo": { lat: -3.7478, lon: -38.5593 },
    "sao gerardo": { lat: -3.7424, lon: -38.5512 },
    "sao joao do tauape": { lat: -3.7592, lon: -38.5056 },
    "edson queiroz": { lat: -3.7686, lon: -38.4782 },
    coco: { lat: -3.7448, lon: -38.4818 },
    varjota: { lat: -3.7285, lon: -38.4896 },
    jangurussu: { lat: -3.8178, lon: -38.5369 },
    parangaba: { lat: -3.7764, lon: -38.5651 },
    "praia do futuro": { lat: -3.7423, lon: -38.4547 },
    "autran nunes": { lat: -3.7589, lon: -38.6139 },
    itaperi: { lat: -3.7783, lon: -38.5598 },
    "jose walter": { lat: -3.7908, lon: -38.5435 },
    papicu: { lat: -3.7367, lon: -38.4865 },
    "vila uniao": { lat: -3.7618, lon: -38.5312 },
    "antonio bezerra": { lat: -3.7447, lon: -38.6038 },
    messejana: { lat: -3.8313, lon: -38.4931 },
    "joquei clube": { lat: -3.7496, lon: -38.5659 },
    "conjunto ceara": { lat: -3.7649, lon: -38.6075 },
    "barra do ceara": { lat: -3.7068, lon: -38.5749 }
  };

  var cepCenter = {
    "60025": { lat: -3.7349, lon: -38.5268 },
    "60130": { lat: -3.7596, lon: -38.5059 },
    "60325": { lat: -3.7429, lon: -38.5516 },
    "60337": { lat: -3.7264, lon: -38.5662 },
    "60430": { lat: -3.7482, lon: -38.5597 },
    "60020": { lat: -3.7444, lon: -38.5367 },
    "60811": { lat: -3.7686, lon: -38.4782 },
    "60192": { lat: -3.7448, lon: -38.4818 },
    "60175": { lat: -3.7285, lon: -38.4896 },
    "60140": { lat: -3.7329, lon: -38.5208 },
    "60060": { lat: -3.7312, lon: -38.5324 },
    "60866": { lat: -3.8178, lon: -38.5369 },
    "60030": { lat: -3.7296, lon: -38.5307 },
    "60720": { lat: -3.7764, lon: -38.5651 },
    "60182": { lat: -3.7423, lon: -38.4547 },
    "60526": { lat: -3.7589, lon: -38.6139 },
    "60714": { lat: -3.7783, lon: -38.5598 },
    "60870": { lat: -3.8222, lon: -38.5451 },
    "60750": { lat: -3.7908, lon: -38.5435 },
    "60410": { lat: -3.7618, lon: -38.5312 },
    "60360": { lat: -3.7447, lon: -38.6038 },
    "60841": { lat: -3.8313, lon: -38.4931 },
    "60520": { lat: -3.7496, lon: -38.5659 },
    "60533": { lat: -3.7649, lon: -38.6075 },
    "60332": { lat: -3.7068, lon: -38.5749 }
  };

  var page = document.body ? document.body.dataset.page : "";
  if (!page) return;

  var units = page === "urgencia" ? urgentUnits : routineUnits;
  var filterAliases = {
    caps: "caps",
    ubs: "ubs",
    universidade: "universidade",
    universidades: "universidade",
    hospital: "hospital",
    hospitais: "hospital",
    "consultorio-rua": "consultorio-rua",
    "atencao-primaria": "atencao-primaria",
    "convivencia-cultura": "convivencia-cultura"
  };
  var filterLabels = {
    caps: "CAPS",
    ubs: "UBS de Fortaleza",
    universidade: "Apoio psicológico em universidades",
    hospital: "Hospitais de referência",
    "consultorio-rua": "Consultório na Rua",
    "atencao-primaria": "Atenção Primária",
    "convivencia-cultura": "Convivência e Cultura"
  };

  var form = document.getElementById("search-form");
  var bairroInput = document.getElementById("bairro");
  var cepInput = document.getElementById("cep");
  var statusMessage = document.getElementById("status-message");
  var resultsList = document.getElementById("results-list");
  var urlParams = new URLSearchParams(window.location.search);
  var requestedFilter = filterAliases[normalizeFilter(urlParams.get("tipo"))] || "";
  var filteredUnits = getUnitsByFilter(units, requestedFilter);

  function normalizeFilter(value) {
    return normalizeText(value).replace(/\s+/g, "-");
  }

  function getUnitType(unit) {
    var text = normalizeText(unit.name + " " + unit.note);
    if (text.indexOf("consultorio na rua") !== -1) return "consultorio-rua";
    if (text.indexOf("convivencia e cultura") !== -1) return "convivencia-cultura";
    if (text.indexOf("atencao primaria") !== -1) return "atencao-primaria";
    if (text.indexOf("ubs") !== -1) return "ubs";
    if (
      text.indexOf("universidade") !== -1 ||
      text.indexOf("faculdade") !== -1 ||
      text.indexOf("clinica-escola") !== -1 ||
      text.indexOf("servico-escola") !== -1
    ) {
      return "universidade";
    }
    if (text.indexOf("hospital") !== -1 || text.indexOf("upa") !== -1) return "hospital";
    if (text.indexOf("caps") !== -1) return "caps";
    return "geral";
  }

  function getUnitsByFilter(list, filterType) {
    if (!filterType) return list;
    return list.filter(function (unit) {
      return getUnitType(unit) === filterType;
    });
  }

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function onlyDigits(value) {
    return (value || "").replace(/\D/g, "");
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function calculateDistanceKm(a, b) {
    var earthRadius = 6371;
    var dLat = toRadians(b.lat - a.lat);
    var dLon = toRadians(b.lon - a.lon);
    var partA =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(a.lat)) *
        Math.cos(toRadians(b.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var partB = 2 * Math.atan2(Math.sqrt(partA), Math.sqrt(1 - partA));
    return earthRadius * partB;
  }

  function getUserReferencePoint(bairro, cep) {
    var cleanCep = onlyDigits(cep);
    var cepPrefix = cleanCep.slice(0, 5);
    var normalizedDistrict = normalizeText(bairro);

    if (cepCenter[cepPrefix]) return cepCenter[cepPrefix];
    if (districtCenter[normalizedDistrict]) return districtCenter[normalizedDistrict];
    return null;
  }

  function getRankedUnits(bairro, cep, list) {
    var point = getUserReferencePoint(bairro, cep);
    var normalizedDistrict = normalizeText(bairro);
    var cleanCep = onlyDigits(cep);

    var ranked = list.map(function (unit) {
      var score = 0;
      var unitDistrict = normalizeText(unit.district);

      if (normalizedDistrict && unitDistrict === normalizedDistrict) score -= 120;
      if (cleanCep && unit.cep.indexOf(cleanCep.slice(0, 5)) === 0) score -= 100;
      if (point) score += calculateDistanceKm(point, { lat: unit.lat, lon: unit.lon });

      return { unit: unit, score: score };
    });

    ranked.sort(function (a, b) {
      return a.score - b.score;
    });

    return ranked;
  }

  function buildOriginText(bairro, cep) {
    var normalizedDistrict = normalizeText(bairro);
    var cleanCep = onlyDigits(cep);

    if (cleanCep.length >= 5) return cleanCep + ", Fortaleza, CE";
    if (normalizedDistrict) return bairro.trim() + ", Fortaleza, CE";
    return "";
  }

  function buildMapUrl(address) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
  }

  function buildRouteUrl(origin, destination) {
    return (
      "https://www.google.com/maps/dir/?api=1&origin=" +
      encodeURIComponent(origin) +
      "&destination=" +
      encodeURIComponent(destination)
    );
  }

  function buildWhatsAppUrl(phone) {
    return "https://wa.me/" + onlyDigits(phone);
  }

  function renderUnits(rankedUnits, hasFilter, originText) {
    if (!resultsList) return;
    resultsList.innerHTML = "";

    rankedUnits.forEach(function (entry, index) {
      var li = document.createElement("li");
      li.className = "result-item";
      if (hasFilter && index === 0) li.className += " top-result";

      var closestLabel = hasFilter && index === 0 ? "<strong>Mais próximo:</strong> " : "";
      var hasWhatsapp = Boolean(onlyDigits(entry.unit.whatsapp || ""));
      li.innerHTML =
        "<h3>" +
        closestLabel +
        entry.unit.name +
        "</h3>" +
        "<p><strong>Endereço:</strong> " +
        entry.unit.address +
        "</p>" +
        "<p><strong>Bairro:</strong> " +
        entry.unit.district +
        " | <strong>CEP:</strong> " +
        entry.unit.cep +
        "</p>" +
        "<p><strong>Detalhe:</strong> " +
        entry.unit.note +
        "</p>" +
        '<div class="map-actions">' +
        '<a class="map-link" href="' +
        buildMapUrl(entry.unit.address) +
        '" target="_blank" rel="noopener noreferrer">Abrir no mapa</a>' +
        (originText
          ? '<a class="map-link" href="' +
            buildRouteUrl(originText, entry.unit.address) +
            '" target="_blank" rel="noopener noreferrer">Traçar rota</a>'
          : "") +
        (hasWhatsapp
          ? '<a class="map-link whatsapp-link" href="' +
            buildWhatsAppUrl(entry.unit.whatsapp) +
            '" target="_blank" rel="noopener noreferrer">WhatsApp da unidade</a>'
          : '<span class="map-link whatsapp-missing">WhatsApp não informado</span>') +
        "</div>";
      resultsList.appendChild(li);
    });
  }

  function initialRender() {
    renderUnits(
      filteredUnits.map(function (unit) {
        return { unit: unit, score: 0 };
      }),
      false,
      ""
    );
    if (statusMessage) {
      if (requestedFilter && filteredUnits.length === 0) {
        statusMessage.textContent = "Nenhuma unidade encontrada para este recurso no momento.";
      } else if (requestedFilter) {
        statusMessage.textContent =
          "Mostrando: " + filterLabels[requestedFilter] + ". Digite bairro ou CEP para ordenar por proximidade.";
      } else {
        statusMessage.textContent = "Digite bairro ou CEP para ordenar por proximidade.";
      }
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    var bairro = bairroInput ? bairroInput.value : "";
    var cep = cepInput ? cepInput.value : "";
    var hasFilter = normalizeText(bairro) || onlyDigits(cep);
    var originText = buildOriginText(bairro, cep);

    var rankedUnits = getRankedUnits(bairro, cep, filteredUnits);
    renderUnits(rankedUnits, Boolean(hasFilter), originText);

    if (statusMessage) {
      if (requestedFilter && filteredUnits.length === 0) {
        statusMessage.textContent = "Nenhuma unidade encontrada para este recurso no momento.";
      } else if (!hasFilter) {
        statusMessage.textContent = requestedFilter
          ? "Mostrando: " + filterLabels[requestedFilter] + ". Informe bairro ou CEP para refinar."
          : "Mostrando todas as unidades. Informe bairro ou CEP para refinar.";
      } else {
        statusMessage.textContent = requestedFilter
          ? "Lista de " + filterLabels[requestedFilter] + " ordenada pela localidade mais próxima."
          : "Lista ordenada pela localidade mais próxima da sua busca.";
      }
    }
  }

  if (form) form.addEventListener("submit", handleSearch);
  initialRender();
})();
