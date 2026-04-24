import React, { useState, useMemo, useEffect } from "react";
import "./styles.css";

/* ============================================================
   BANCO DE CONTEÚDO — Segurança Orgânica da Marinha do Brasil
   ============================================================ */

const CONTEUDO = {
  blocos: [
    {
      titulo: "1. Noções Fundamentais",
      texto:
        "Segurança Orgânica (SegOrg) é o segmento da Contra Inteligência (CI) que preconiza a adoção de um conjunto de medidas passivas destinadas a prevenir e a obstruir ações adversas de serviços de Inteligência estrangeiros ou de elemento/grupos de qualquer natureza dirigidas contra a Marinha do Brasil. Tais medidas nunca devem ser consideradas definitivas, devendo ser constantemente avaliadas."
    },
    {
      titulo: "2. Conceitos Básicos",
      texto:
        "Acesso: possibilidade/oportunidade de obter conhecimento ou dado sigiloso. Áreas Sensíveis: vitais para o funcionamento da OM. Áreas Sigilosas: áreas sensíveis que abrigam material sigiloso. Credenciamento de Segurança: autorização concedida por autoridade competente. Necessidade de Conhecer: condição indispensável para acesso. Compartimentação: restringe acesso a quem tem necessidade de conhecer. Comprometimento: acesso por pessoa não autorizada. Vazamento: certeza da divulgação não autorizada."
    },
    {
      titulo: "3. Medidas Preventivas",
      texto:
        "Autodisciplina (evitar falar da atividade profissional, jamais mencionar sigilosos por telefone, variar itinerários); Proteção da Identidade (sigilo sobre funções e local de trabalho); Segregação (limitar trato de matéria sigilosa a quem tem necessidade de conhecer)."
    },
    {
      titulo: "4. Mentalidade de Segurança",
      texto:
        "Alto nível de conscientização do pessoal em relação à SegOrg. Não é imediata — demanda longo e contínuo trabalho. Desenvolvida por palestras, adestramentos, exercícios, notas em Plano do Dia, sinalização, inspeções inopinadas e rodízio a cada 2 anos em funções sensíveis."
    },
    {
      titulo: "5. Grupos de Atividades da SegOrg",
      texto:
        "Pessoal; Documentação e Material; Informação Digital (SID); Comunicações; Áreas e Instalações."
    },
    {
      titulo: "6. Segurança do Pessoal",
      texto:
        "Fases: Processo Seletivo (VDB — ingresso, cargo sensível, atividade especial, Órgão de Inteligência); Desempenho da Função (Credenciamento, Educação de Segurança — orientação inicial, atualização, adestramento; e Controle); Desligamento (Entrevista Final e Controle após Desligamento)."
    },
    {
      titulo: "7. Segurança da Documentação",
      texto:
        "5 tipos: Produção (classificação, atribuição preliminar, controle de recursos, lixo classificado, numeração, autenticação); Tramitação (acondicionamento, controle de saída, controle de entrada); Manuseio (reproduções, custódia, seleção); Arquivamento (local, tipo de cofre, controle, evacuação); Destruição (meios/locais, controle, rotinas de emergência)."
    },
    {
      titulo: "8. Segurança do Material",
      texto:
        "Medidas voltadas para salvaguarda do material de importância para a OM, por seu valor ou característica sensível. A custódia deve ser clara e documentada."
    },
    {
      titulo: "9. Segurança da Informação Digital (SID)",
      texto:
        "Requisitos básicos: Sigilo, Autenticidade, Integridade, Disponibilidade. Ameaças: Interrupção (disponibilidade), Interceptação (sigilo), Modificação (integridade), Fabricação (autenticidade). Ataques: Acidentais, Intencionais, Externos, Internos. Medidas: Segurança Física, Lógica, do Tráfego, Criptológica."
    },
    {
      titulo: "10. Segurança das Comunicações",
      texto:
        "Dois grupos: Segurança de Transmissão (restrição de acesso, escolha de meios, recursos eletrônicos, indicativos, autenticação); Segurança de Conteúdo (Física e Criptológica). INTCOM é a atividade oposta — interceptação e criptoanálise."
    },
    {
      titulo: "11. Segurança das Áreas e Instalações",
      texto:
        "Medidas: Demarcação de áreas, Implantação de barreiras (naturais, estruturais, BDV, eclusas, portas blindadas, janelas, fechaduras, salas-forte, cofres), Controle de Acesso (crachás), Detecção de Intrusão e Monitoração de Alarme, Planos de Prevenção contra ocorrências adversas."
    },
    {
      titulo: "12. Planejamento de SegOrg",
      texto:
        "Órgãos: Executor (OM), Aprovador (ComImSup), OM Líder (GptFN/BtlOpRib), Gestor (ComDN), Centralizador (CIM), Setorial (ODS: DGPM, DGMM, CGCFN), Supervisor (ComOpNav), Doutrina (EMA). PSO deve ser flexível, evitar medidas excessivas, e aprovado pelo ComImSup. Avaliação por CAVSO e inspeções correntes."
    }
  ],

  superResumo: [
    "🎯 SegOrg = CI + medidas PASSIVAS para prevenir/obstruir ações adversas contra a MB",
    "🔑 Conceitos: Acesso, Áreas Sensíveis/Sigilosas, Credenciamento, Necessidade de Conhecer, Compartimentação, Comprometimento, Vazamento",
    "🛡️ 3 Medidas Preventivas: Autodisciplina, Proteção da Identidade, Segregação (APS)",
    "🏛️ 5 Grupos: Pessoal, Documentação/Material, Informação Digital, Comunicações, Áreas/Instalações (PDICA)",
    "👤 Pessoal — 3 fases: Seleção → Desempenho → Desligamento",
    "📄 Documentação — 5 tipos: Produção, Tramitação, Manuseio, Arquivamento, Destruição (PTMAD)",
    "💻 SID — 4 requisitos: Sigilo, Autenticidade, Integridade, Disponibilidade (SAID)",
    "💻 SID — 4 ameaças: Interrupção, Interceptação, Modificação, Fabricação (IIMF)",
    "📡 Comunicações: Transmissão + Conteúdo (Física + Criptológica)",
    "🏢 Áreas/Instalações: Demarcação → Barreiras → Controle Acesso → Detecção → Planos",
    "📋 Órgãos: Executor(OM), Aprovador(ComImSup), Gestor(ComDN), Centralizador(CIM), Supervisor(ComOpNav), Doutrina(EMA)"
  ],

  mapaMental: {
    nome: "Segurança Orgânica (SegOrg)",
    filhos: [
      {
        nome: "Noções Fundamentais",
        filhos: [
          { nome: "Definição: Segmento da CI — medidas passivas" },
          { nome: "Comprometimento: acesso não autorizado" },
          { nome: "Vazamento: certeza de divulgação não autorizada" }
        ]
      },
      {
        nome: "Conceitos Básicos",
        filhos: [
          { nome: "Acesso" },
          { nome: "Áreas Sensíveis" },
          { nome: "Áreas Sigilosas" },
          { nome: "Credenciamento (CREDSEG)" },
          { nome: "Necessidade de Conhecer" },
          { nome: "Compartimentação" }
        ]
      },
      {
        nome: "Medidas Preventivas (APS)",
        filhos: [
          { nome: "Autodisciplina" },
          { nome: "Proteção da Identidade" },
          { nome: "Segregação" }
        ]
      },
      {
        nome: "Grupos de Atividades (PDICA)",
        filhos: [
          {
            nome: "Pessoal",
            filhos: [
              { nome: "Processo Seletivo (VDB)" },
              { nome: "Desempenho (Cred + Educ + Ctrl)" },
              { nome: "Desligamento (Entrevista + Ctrl pós)" }
            ]
          },
          {
            nome: "Documentação/Material (PTMAD)",
            filhos: [
              { nome: "Produção" },
              { nome: "Tramitação" },
              { nome: "Manuseio" },
              { nome: "Arquivamento" },
              { nome: "Destruição" }
            ]
          },
          {
            nome: "Informação Digital (SID)",
            filhos: [
              { nome: "Requisitos: SAID" },
              { nome: "Ameaças: IIMF" },
              { nome: "Ataques: Acid/Intenc/Ext/Int" },
              { nome: "Medidas: Física/Lógica/Tráfego/Cripto" }
            ]
          },
          {
            nome: "Comunicações",
            filhos: [
              { nome: "Transmissão" },
              { nome: "Conteúdo → Física + Criptológica" },
              { nome: "INTCOM (oposto)" }
            ]
          },
          {
            nome: "Áreas e Instalações",
            filhos: [
              { nome: "Demarcação" },
              { nome: "Barreiras" },
              { nome: "Controle de Acesso" },
              { nome: "Detecção de Intrusão" },
              { nome: "Planos de Prevenção" }
            ]
          }
        ]
      },
      {
        nome: "Planejamento (PSO)",
        filhos: [
          { nome: "Executor = OM" },
          { nome: "Aprovador = ComImSup" },
          { nome: "Gestor = ComDN" },
          { nome: "Centralizador = CIM" },
          { nome: "Supervisor = ComOpNav" },
          { nome: "Doutrina = EMA" },
          { nome: "Avaliação: CAVSO" }
        ]
      }
    ]
  },

  flashcards: [
    { f: "O que é Segurança Orgânica?", v: "Segmento da CI com medidas passivas para prevenir/obstruir ações adversas contra a MB.", dica: "CI + passivas", mem: "🔐 SegOrg = ESCUDO da Marinha" },
    { f: "O que é Comprometimento?", v: "Acesso a dado/conhecimento sigiloso por pessoa NÃO autorizada.", dica: "Acesso indevido", mem: "😱 Alguém viu o que NÃO devia" },
    { f: "O que é Vazamento?", v: "CERTEZA da divulgação não autorizada de conhecimento/dado sigiloso.", dica: "Certeza", mem: "💧 Vazou = TEM CERTEZA" },
    { f: "Cite as 3 Medidas Preventivas", v: "Autodisciplina, Proteção da Identidade e Segregação.", dica: "APS", mem: "🅰️🅿️🅂 — APS" },
    { f: "O que é Acesso?", v: "Possibilidade/oportunidade de obter conhecimento, dado, material ou valor.", dica: "Oportunidade", mem: "🚪 Porta aberta" },
    { f: "O que são Áreas Sensíveis?", v: "Áreas vitais para o funcionamento da Organização.", dica: "Vitais", mem: "❤️ Coração da OM" },
    { f: "O que são Áreas Sigilosas?", v: "Áreas sensíveis que abrigam material sigiloso.", dica: "Sensível + sigilo", mem: "🔒 Sensível com cadeado" },
    { f: "O que é Compartimentação?", v: "Medidas para restringir acesso a quem tem Necessidade de Conhecer.", dica: "Nec. Conhecer", mem: "📦 Caixinhas separadas" },
    { f: "Cite os 5 Grupos de Atividades da SegOrg", v: "Pessoal, Documentação/Material, Informação Digital, Comunicações, Áreas/Instalações.", dica: "PDICA", mem: "P-D-I-C-A" },
    { f: "O que é Mentalidade de Segurança?", v: "Alto nível de conscientização do pessoal em relação à SegOrg.", dica: "Conscientização", mem: "🧠 Cabeça ligada" },
    { f: "Cite as 3 Fases da Segurança do Pessoal", v: "Processo Seletivo, Desempenho da Função e Desligamento.", dica: "Entrada/meio/saída", mem: "🚪→🏢→🚪" },
    { f: "O que é VDB?", v: "Verificação de Dados Biográficos — processo da Segurança no Processo Seletivo.", dica: "Verificação", mem: "🔍 VDB = Vê-se os Dados" },
    { f: "O que é Função Sensível?", v: "Função que exige acesso a material sigiloso ou sensível.", dica: "Acesso sigiloso", mem: "🔑 Cargo com chave" },
    { f: "O que é Atividade Especial?", v: "Exercida por militares que recebem instrução/adestramento para ações especiais (FN OpEsp, mergulhadores de combate).", dica: "Ações especiais", mem: "🐸 FN + mergulhador" },
    { f: "3 medidas da Segurança no Desempenho da Função", v: "Credenciamento, Educação de Segurança e Controle.", dica: "CEC", mem: "C-E-C" },
    { f: "3 situações da Educação de Segurança", v: "Orientação Inicial, Atualização e Adestramento.", dica: "OAA", mem: "O-A-A" },
    { f: "2 medidas da Segurança no Desligamento", v: "Entrevista Final e Controle após Desligamento.", dica: "Saída", mem: "👋 Tchau + olho" },
    { f: "Cite os 5 tipos da Segurança da Documentação", v: "Produção, Tramitação, Manuseio, Arquivamento e Destruição.", dica: "PTMAD", mem: "P-T-M-A-D" },
    { f: "Cite os 4 Requisitos Básicos da SID", v: "Sigilo, Autenticidade, Integridade e Disponibilidade.", dica: "SAID", mem: "SAID — já foi dito" },
    { f: "Cite as 4 Ameaças à Informação Digital", v: "Interrupção, Interceptação, Modificação e Fabricação.", dica: "IIMF", mem: "I-I-M-F" },
    { f: "Ameaça que afeta Disponibilidade", v: "Interrupção", dica: "Impede acesso", mem: "🚫 Parou" },
    { f: "Ameaça que afeta Sigilo", v: "Interceptação", dica: "Alguém vê", mem: "👁️ Escuta" },
    { f: "Ameaça que afeta Integridade", v: "Modificação", dica: "Altera", mem: "✏️ Mexeu" },
    { f: "Ameaça que afeta Autenticidade", v: "Fabricação", dica: "Cria falso", mem: "🎭 Inventou" },
    { f: "Classificação dos Ataques à SID", v: "Acidentais, Intencionais, Externos e Internos.", dica: "AIEI", mem: "A-I-E-I" },
    { f: "Cite as 4 Medidas da SID", v: "Segurança Física, Lógica, do Tráfego e Criptológica.", dica: "FLTC", mem: "F-L-T-C" },
    { f: "2 grupos da Segurança das Comunicações", v: "Segurança de Transmissão e Segurança de Conteúdo.", dica: "TC", mem: "📡 T+C" },
    { f: "A Segurança de Conteúdo subdivide-se em?", v: "Segurança Física e Segurança Criptológica.", dica: "FC", mem: "F+C" },
    { f: "O que é INTCOM?", v: "Inteligência de Comunicações — interceptar/monitorar mensagens, análise de tráfego e criptoanálise.", dica: "Oposto à Seg Com", mem: "🕵️ Espião do rádio" },
    { f: "Cite as 5 Medidas de Segurança das Áreas e Instalações", v: "Demarcação, Implantação de Barreiras, Controle de Acesso, Detecção de Intrusão, Planos de Prevenção.", dica: "DBCDP", mem: "D-B-C-D-P" },
    { f: "Quem é o Órgão Executor da SegOrg?", v: "OM (Organização Militar).", dica: "Executa", mem: "OM faz" },
    { f: "Quem é o Órgão Aprovador?", v: "ComImSup (Comando Imediatamente Superior).", dica: "Aprova PSO", mem: "Chefe aprova" },
    { f: "Quem é o Órgão Gestor?", v: "ComDN (Comando de Distrito Naval).", dica: "Gere", mem: "ComDN gere" },
    { f: "Quem é o Órgão Centralizador?", v: "CIM (Centro de Inteligência da Marinha).", dica: "Centraliza", mem: "CIM centro" },
    { f: "Quem é o Órgão Supervisor?", v: "ComOpNav.", dica: "Supervisiona", mem: "Op-Nav olha" },
    { f: "Quem estabelece a Doutrina de SegOrg?", v: "EMA (Estado-Maior da Armada).", dica: "Doutrina", mem: "EMA pensa" },
    { f: "O que é CAVSO?", v: "Comissão de Assessoria e Verificação da SegOrg.", dica: "Inspeciona", mem: "🔎 CAVSO verifica" },
    { f: "Características do PSO", v: "Flexível, evitar medidas excessivas, coordenar com outras OM, estabelecer normas dos 5 segmentos, ser aprovado pelo ComImSup.", dica: "Flexível", mem: "📋 PSO = plano adaptável" }
  ],

  multiplaEscolha: [
    { q: "Segurança Orgânica é um segmento de qual área?", alts: ["Inteligência Ofensiva", "Contra Inteligência (CI)", "Operações Especiais", "Guerra Eletrônica", "Logística"], correta: 1, dica: "CI...", mem: "SegOrg vive dentro da CI" },
    { q: "Qual conceito representa a CERTEZA da divulgação não autorizada?", alts: ["Comprometimento", "Acesso", "Compartimentação", "Vazamento", "Credenciamento"], correta: 3, dica: "Certeza = ?", mem: "Vazou = tem certeza" },
    { q: "Qual NÃO é uma medida preventiva?", alts: ["Autodisciplina", "Proteção da Identidade", "Segregação", "Credenciamento", "Nenhuma das anteriores"], correta: 3, dica: "APS", mem: "APS — o resto é outra coisa" },
    { q: "Quantos são os grupos de atividades da SegOrg?", alts: ["3", "4", "5", "6", "7"], correta: 2, dica: "PDICA", mem: "P-D-I-C-A = 5" },
    { q: "Qual ameaça à SID afeta o SIGILO?", alts: ["Interrupção", "Interceptação", "Modificação", "Fabricação", "Negação"], correta: 1, dica: "Alguém vê", mem: "Intercepta = escuta = sigilo" },
    { q: "Qual ameaça afeta a DISPONIBILIDADE?", alts: ["Interrupção", "Interceptação", "Modificação", "Fabricação", "Invasão"], correta: 0, dica: "Impede acesso", mem: "Interrompeu = sem disp." },
    { q: "Qual ameaça afeta a INTEGRIDADE?", alts: ["Interrupção", "Interceptação", "Modificação", "Fabricação", "Cópia"], correta: 2, dica: "Altera", mem: "Modificou = integridade" },
    { q: "Qual ameaça afeta a AUTENTICIDADE?", alts: ["Interrupção", "Interceptação", "Modificação", "Fabricação", "Roubo"], correta: 3, dica: "Inventa falso", mem: "Fabricou = falso = autenticidade" },
    { q: "Quem é o Órgão Centralizador da SegOrg na MB?", alts: ["EMA", "ComOpNav", "CIM", "ComDN", "DGMM"], correta: 2, dica: "C de Centro", mem: "CIM centraliza" },
    { q: "Quem aprova o PSO de uma OM?", alts: ["EMA", "ComImSup", "CIM", "ComDN", "ComOpNav"], correta: 1, dica: "Chefe direto", mem: "ComImSup aprova" },
    { q: "Quantos tipos compõem a Segurança da Documentação?", alts: ["3", "4", "5", "6", "7"], correta: 2, dica: "PTMAD", mem: "P-T-M-A-D = 5" },
    { q: "Qual NÃO é requisito básico da SID?", alts: ["Sigilo", "Autenticidade", "Integridade", "Disponibilidade", "Velocidade"], correta: 4, dica: "SAID", mem: "Velocidade não é requisito" }
  ],

  certoErrado: [
    { q: "Segurança Orgânica é um segmento da Contra Inteligência.", r: true, dica: "CI", mem: "SegOrg = CI" },
    { q: "Vazamento é a possibilidade de divulgação não autorizada.", r: false, dica: "Certeza, não possibilidade", mem: "Vazamento = CERTEZA" },
    { q: "Comprometimento é o acesso a dado sigiloso por pessoa NÃO autorizada.", r: true, dica: "Não autorizada", mem: "Compr. = não autorizada viu" },
    { q: "Existem 4 grupos de atividades da SegOrg.", r: false, dica: "São 5", mem: "PDICA = 5 grupos" },
    { q: "A Autodisciplina é uma medida preventiva.", r: true, dica: "APS", mem: "Autodisciplina entra no APS" },
    { q: "A ameaça de Interceptação afeta a Disponibilidade.", r: false, dica: "Afeta Sigilo", mem: "Intercepta = Sigilo" },
    { q: "A Segurança do Conteúdo subdivide-se em Física e Criptológica.", r: true, dica: "FC", mem: "Conteúdo = F+C" },
    { q: "O EMA é o órgão Centralizador da SegOrg.", r: false, dica: "EMA = Doutrina", mem: "EMA = Doutrina | CIM = Centralizador" },
    { q: "INTCOM se opõe à Segurança das Comunicações.", r: true, dica: "Oposto", mem: "INTCOM = espião" },
    { q: "Áreas Sigilosas são áreas sensíveis que abrigam material sigiloso.", r: true, dica: "Sensível + sigilo", mem: "Sigilosa = sensível + material sigiloso" }
  ],

  completeLacunas: [
    { q: "SegOrg é o segmento da _____ que preconiza medidas passivas.", r: "Contra Inteligência", dica: "CI", mem: "CI = Contra Inteligência" },
    { q: "As 3 medidas preventivas são: Autodisciplina, _____ e Segregação.", r: "Proteção da Identidade", dica: "Identidade", mem: "APS" },
    { q: "_____ é a certeza da divulgação não autorizada.", r: "Vazamento", dica: "Certeza", mem: "Vazou = certeza" },
    { q: "Os 4 requisitos básicos da SID são Sigilo, _____, Integridade e Disponibilidade.", r: "Autenticidade", dica: "SAID", mem: "S-A-I-D" },
    { q: "O órgão aprovador do PSO é o _____.", r: "ComImSup", dica: "Chefe direto", mem: "Aprovador = ComImSup" },
    { q: "A verificação do SegOrg em OM é feita pela _____.", r: "CAVSO", dica: "Comissão", mem: "CAVSO = Comissão de Verificação" }
  ],

  definicoes: [
    { termo: "Acesso", def: "Possibilidade/oportunidade de obter conhecimento, dado sigiloso, material ou valor.", res: "Possibilidade de obter info/material.", dica: "Oportunidade", mem: "🚪 Oportunidade de entrar" },
    { termo: "Comprometimento", def: "Acesso a dado/conhecimento sigiloso por pessoa não autorizada.", res: "Acesso indevido.", dica: "Não autorizada", mem: "😱 Indevido" },
    { termo: "Vazamento", def: "Certeza da divulgação não autorizada de conhecimento/dado sigiloso.", res: "Certeza da divulgação.", dica: "Certeza", mem: "💧 Vazou" },
    { termo: "Compartimentação", def: "Medidas que restringem acesso a quem tem Necessidade de Conhecer.", res: "Restrição por Nec. Conhecer.", dica: "NC", mem: "📦 Caixinhas" },
    { termo: "Credenciamento", def: "Autorização concedida por autoridade competente para acesso a dado sigiloso.", res: "Autorização p/ acesso.", dica: "Autorização", mem: "🎫 Crachá" },
    { termo: "Mentalidade de Segurança", def: "Alto nível de conscientização do pessoal em relação à SegOrg.", res: "Conscientização do pessoal.", dica: "Cabeça", mem: "🧠 Cultura" }
  ],

  correlacione: [
    {
      esquerda: ["1. Interrupção", "2. Interceptação", "3. Modificação", "4. Fabricação"],
      direita: ["Autenticidade", "Sigilo", "Disponibilidade", "Integridade", "-"],
      gabarito: [3, 2, 4, 1],
      dica: "Cada ameaça → um requisito",
      mem: "I-I-M-F → D-S-I-A"
    },
    {
      esquerda: ["1. Executor", "2. Aprovador", "3. Centralizador", "4. Supervisor"],
      direita: ["ComImSup", "CIM", "OM", "ComOpNav", "-"],
      gabarito: [3, 1, 2, 4],
      dica: "Órgãos",
      mem: "OM-ComImSup-CIM-ComOpNav"
    },
    {
      esquerda: ["1. Autodisciplina", "2. Proteção Identidade", "3. Segregação"],
      direita: ["Limitar matéria sigilosa", "Sigilo sobre função", "Comportamento individual", "-"],
      gabarito: [3, 2, 1],
      dica: "APS",
      mem: "Cada medida → sua descrição"
    }
  ],

  cite: [
    { q: "Cite as 3 Medidas Preventivas.", r: "Autodisciplina, Proteção da Identidade e Segregação.", res: "APS", dica: "APS", mem: "A-P-S" },
    { q: "Cite os 5 Grupos de Atividades da SegOrg.", r: "Pessoal, Documentação/Material, Informação Digital, Comunicações, Áreas/Instalações.", res: "PDICA", dica: "PDICA", mem: "P-D-I-C-A" },
    { q: "Cite as 3 fases da Segurança do Pessoal.", r: "Processo Seletivo, Desempenho da Função e Desligamento.", res: "Seleção, Desempenho, Desligamento", dica: "Entrada/meio/saída", mem: "🚪→🏢→🚪" },
    { q: "Cite os 4 Requisitos Básicos da SID.", r: "Sigilo, Autenticidade, Integridade e Disponibilidade.", res: "SAID", dica: "SAID", mem: "S-A-I-D" },
    { q: "Cite as 4 Ameaças à Informação Digital.", r: "Interrupção, Interceptação, Modificação e Fabricação.", res: "IIMF", dica: "IIMF", mem: "I-I-M-F" },
    { q: "Cite os 5 tipos da Segurança da Documentação.", r: "Produção, Tramitação, Manuseio, Arquivamento e Destruição.", res: "PTMAD", dica: "PTMAD", mem: "P-T-M-A-D" },
    { q: "Cite as 5 Medidas de Segurança das Áreas e Instalações.", r: "Demarcação, Implantação de Barreiras, Controle de Acesso, Detecção de Intrusão e Monitoração de Alarme, Planos de Prevenção.", res: "DBCDP", dica: "DBCDP", mem: "D-B-C-D-P" }
  ],

  liste: [
    { q: "Liste as situações em que é realizada a VDB.", r: "1) Ingresso na MB; 2) Cargo/função sensível; 3) Atividade especial; 4) Órgãos de Inteligência.", res: "Ingresso, Cargo, Ativ Especial, OgI", dica: "4 situações", mem: "I-C-A-O" },
    { q: "Liste as 3 situações da Educação de Segurança.", r: "1) Orientação Inicial; 2) Atualização; 3) Adestramento.", res: "OAA", dica: "OAA", mem: "O-A-A" },
    { q: "Liste os 4 tipos de Medidas da SID.", r: "1) Segurança Física; 2) Segurança Lógica; 3) Segurança do Tráfego; 4) Segurança Criptológica.", res: "FLTC", dica: "FLTC", mem: "F-L-T-C" },
    { q: "Liste as medidas de Segurança de Transmissão.", r: "Restrição de acesso aos locais; Escolha de meios/canais; Uso de recursos eletrônicos; Indicativos apropriados; Autenticação.", res: "5 medidas", dica: "Transmissão", mem: "R-E-R-I-A" }
  ],

  vOuF: [
    {
      enunciado: "Sobre SegOrg, julgue os itens:",
      itens: [
        { t: "SegOrg é segmento da CI.", r: true, dica: "CI", mem: "V — SegOrg = CI" },
        { t: "Vazamento é possibilidade.", r: false, dica: "Certeza", mem: "F — Vazamento é certeza" },
        { t: "Existem 5 grupos de atividades.", r: true, dica: "PDICA", mem: "V — 5 grupos" },
        { t: "CIM é o Órgão Supervisor.", r: false, dica: "Centralizador", mem: "F — CIM é Centralizador" }
      ]
    },
    {
      enunciado: "Sobre SID, julgue:",
      itens: [
        { t: "Sigilo é requisito básico.", r: true, dica: "SAID", mem: "V" },
        { t: "Interceptação afeta integridade.", r: false, dica: "Sigilo", mem: "F — afeta Sigilo" },
        { t: "Ataques podem ser acidentais.", r: true, dica: "AIEI", mem: "V" },
        { t: "Segurança Criptológica é medida da SID.", r: true, dica: "FLTC", mem: "V" }
      ]
    }
  ],

  complete: [
    { q: "Complete: 'Segurança Orgânica é o segmento da ___ que preconiza medidas passivas.'", r: "Contra Inteligência", res: "CI", dica: "CI", mem: "CI" },
    { q: "Complete: 'As 3 medidas preventivas são Autodisciplina, Proteção da Identidade e ___.'", r: "Segregação", res: "Segregação", dica: "S", mem: "APS" },
    { q: "Complete: 'Os 5 grupos são Pessoal, Documentação/Material, Informação Digital, Comunicações e ___.'", r: "Áreas e Instalações", res: "Áreas/Instalações", dica: "A&I", mem: "PDICA" },
    { q: "Complete: 'O órgão responsável pela doutrina é o ___.'", r: "EMA", res: "EMA", dica: "Doutrina", mem: "EMA" }
  ],

  questoesPadrao: [
    { n: 1, q: "Definir Segurança Orgânica.", r: "É o segmento da Contra Inteligência que preconiza a adoção de um conjunto de medidas destinadas a prevenir e obstruir ameaças, de qualquer natureza, dirigidas a pessoas, dados, Conhecimentos, materiais, áreas e instalações da MB." },
    { n: 2, q: "Definir Comprometimento.", r: "É o acesso a dado ou Conhecimento sigiloso por pessoa não autorizada, decorrente de perda de segurança." },
    { n: 3, q: "Definir Vazamento.", r: "É a certeza da divulgação não autorizada de Conhecimento ou dado sigiloso." },
    { n: 4, q: "Cite as Medidas Preventivas.", r: "Autodisciplina; Proteção da Identidade; e Segregação." },
    { n: 5, q: "Defina Acesso.", r: "É a possibilidade ou oportunidade de uma pessoa obter Conhecimento ou dado sigiloso, bem como material ou valor." },
    { n: 6, q: "O que são Áreas Sensíveis?", r: "São as áreas vitais para o pleno funcionamento da Organização em função do material existente ou das atividades ali desenvolvidas." },
    { n: 7, q: "Definir Áreas Sigilosas.", r: "São áreas sensíveis que abrigam material sigiloso." },
    { n: 8, q: "O que é Compartimentação?", r: "É o resultado eficaz de todas as medidas que visam restringir o acesso a dados, Conhecimentos, áreas e instalações sigilosas às pessoas que não possuam a necessidade de conhecer." },
    { n: 9, q: "Cite os Grupos de Atividades de SegOrg.", r: "Segurança do Pessoal; Segurança da Documentação e do Material; Segurança da Informação Digital (SID); Segurança das Comunicações; Segurança das Áreas e Instalações." },
    { n: 10, q: "Defina Mentalidade de Segurança.", r: "É um alto nível de conscientização do pessoal em relação à SegOrg." },
    { n: 11, q: "Cite as fases da Segurança do Pessoal.", r: "Segurança no Processo Seletivo; Segurança no Desempenho da Função; e Segurança no Desligamento." },
    { n: 12, q: "Cite as situações em que é realizada a VDB.", r: "Na seleção para ingresso na MB; cargo ou função sensível; atividade especial; e Órgãos de Inteligência." },
    { n: 13, q: "Cite as medidas de Segurança no Desempenho da Função.", r: "Credenciamento de Segurança; Educação de Segurança; e Controle de Segurança no Desempenho da Função." },
    { n: 14, q: "Cite as situações da Educação de Segurança.", r: "Orientação Inicial; Atualização; e Adestramento." },
    { n: 15, q: "Cite as medidas de Segurança no Desligamento.", r: "Entrevista Final; e Controle após o Desligamento." },
    { n: 16, q: "Cite os 5 tipos da Segurança da Documentação.", r: "Segurança na Produção; Segurança na Tramitação; Segurança no Manuseio; Segurança no Arquivamento; e Segurança na Destruição." },
    { n: 17, q: "Cite os Requisitos Básicos da SID.", r: "Sigilo; Autenticidade; Integridade; e Disponibilidade." },
    { n: 18, q: "Cite as Ameaças à Informação Digital.", r: "Ameaça de Interrupção; Ameaça de Interceptação; Ameaça de Modificação; e Ameaça de Fabricação." },
    { n: 19, q: "Classifique os Ataques às Informações Digitais.", r: "Acidentais; Intencionais; Externos; e Internos." },
    { n: 20, q: "Cite as Medidas da SID.", r: "Segurança Física; Segurança Lógica; Segurança do Tráfego; e Segurança Criptológica." },
    { n: 21, q: "Cite as Medidas de Segurança das Comunicações.", r: "Segurança de Transmissão; e Segurança de Conteúdo (Física e Criptológica)." },
    { n: 22, q: "Defina INTCOM.", r: "Compreende a capacidade de interceptar e monitorar mensagens, análise das transmissões e do tráfego, bem como a criptoanálise de mensagens." },
    { n: 23, q: "Cite as Medidas de Segurança das Áreas e Instalações.", r: "Demarcação de Áreas; Implantação de Barreiras; Controle de Acesso; Detecção de Intrusão e Monitoração de Alarme; e Elaboração de Planos de Prevenção." },
    { n: 24, q: "Cite os Órgãos de SegOrg e suas atribuições.", r: "Executor (OM); Aprovador (ComImSup); OM Líder (GptFN/BtlOpRib); Gestor (ComDN); Centralizador (CIM); Supervisor (ComOpNav); Doutrina (EMA)." },
    { n: 25, q: "Cite as características do PSO.", r: "Ser flexível; evitar medidas excessivas; coordenar com outras OM; estabelecer normas dos 5 segmentos; ser aprovado pelo ComImSup." }
  ]
};

/* ============================================================
   COMPONENTES
   ============================================================ */

function TopBar({ aba, setAba }) {
  const abas = [
    ["inicio", "🏠 Início"],
    ["super", "⚡ Super Resumo"],
    ["resumo", "📖 Resumo"],
    ["mapa", "🧠 Mapa Mental"],
    ["flash", "🃏 Flashcards"],
    ["consulta", "🔎 Consulta"],
    ["padrao", "📋 Questões Padrão"],
    ["me", "🅰️ Múltipla Escolha"],
    ["ce", "✅ Certo ou Errado"],
    ["lacuna", "🧩 Complete Lacunas"],
    ["def", "📘 Definições"],
    ["corr", "🔗 Correlacione"],
    ["cite", "📝 Cite"],
    ["liste", "📑 Liste"],
    ["vf", "🔤 V ou F"],
    ["compl", "✍️ Complete"]
  ];
  return (
    <nav className="topbar">
      <div className="brand">⚓ SegOrg MB</div>
      <div className="tabs">
        {abas.map(([k, l]) => (
          <button key={k} className={"tab" + (aba === k ? " active" : "")} onClick={() => setAba(k)}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Inicio() {
  return (
    <div className="page">
      <h1>⚓ SegOrg MB — Estudo Interativo</h1>
      <p>Aplicativo de estudos baseado na apostila e questionário de <b>Segurança Orgânica da Marinha do Brasil</b>.</p>
      <div className="grid">
        <div className="card"><h3>⚡ Super Resumo</h3><p>Tópicos essenciais para revisão rápida.</p></div>
        <div className="card"><h3>📖 Resumo Completo</h3><p>Conteúdo em blocos organizados.</p></div>
        <div className="card"><h3>🧠 Mapa Mental</h3><p>Visualização interativa expansível.</p></div>
        <div className="card"><h3>🃏 Flashcards</h3><p>Frente/verso com dicas de memorização.</p></div>
        <div className="card"><h3>📝 Exercícios</h3><p>Múltipla escolha, C/E, V/F, Cite, Liste, Definições, Complete, Correlacione.</p></div>
        <div className="card"><h3>🔎 Consulta</h3><p>Busca por palavra no material.</p></div>
      </div>
      <div className="tip">💡 <b>Dica:</b> siga a ordem Super Resumo → Resumo → Mapa Mental → Flashcards → Exercícios.</div>
    </div>
  );
}

function SuperResumo() {
  return (
    <div className="page">
      <h1>⚡ Super Resumo</h1>
      {CONTEUDO.superResumo.map((t, i) => (
        <div key={i} className="item">{t}</div>
      ))}
    </div>
  );
}

function Resumo() {
  return (
    <div className="page">
      <h1>📖 Resumo Completo</h1>
      {CONTEUDO.blocos.map((b, i) => (
        <div key={i} className="bloco">
          <h3>{b.titulo}</h3>
          <p>{b.texto}</p>
        </div>
      ))}
    </div>
  );
}

function MapaNode({ node, nivel }) {
  const [open, setOpen] = useState(nivel < 1);
  const tem = node.filhos && node.filhos.length > 0;
  return (
    <div className={"mn lvl" + nivel}>
      <div className="mn-line" onClick={() => tem && setOpen(!open)}>
        <span className="mn-btn">{tem ? (open ? "▼" : "▶") : "•"}</span>
        <span className="mn-name">{node.nome}</span>
      </div>
      {open && tem && (
        <div className="mn-children">
          {node.filhos.map((f, i) => <MapaNode key={i} node={f} nivel={nivel + 1} />)}
        </div>
      )}
    </div>
  );
}

function MapaMental() {
  return (
    <div className="page">
      <h1>🧠 Mapa Mental Interativo</h1>
      <p className="sub">Clique nos nós para expandir/recolher.</p>
      <div className="mapa">
        <MapaNode node={CONTEUDO.mapaMental} nivel={0} />
      </div>
    </div>
  );
}

function Consulta() {
  const [q, setQ] = useState("");
  const termo = q.trim().toLowerCase();
  const resultados = useMemo(() => {
    if (!termo) return [];
    return CONTEUDO.blocos.filter(b =>
      b.titulo.toLowerCase().includes(termo) || b.texto.toLowerCase().includes(termo)
    );
  }, [termo]);
  const marcar = (txt) => {
    if (!termo) return txt;
    const re = new RegExp("(" + termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return txt.split(re).map((p, i) =>
      p.toLowerCase() === termo ? React.createElement("mark", {key: i}, p) : React.createElement("span", {key: i}, p)
    );
  };
  return (
    <div className="page">
      <h1>🔎 Consulta</h1>
      <input className="busca" placeholder="Digite uma palavra..." value={q} onChange={e => setQ(e.target.value)} />
      {termo && <p className="sub">{resultados.length} resultado(s) para "{termo}".</p>}
      {resultados.map((b, i) => (
        <div key={i} className="bloco">
          <h3>{marcar(b.titulo)}</h3>
          <p>{marcar(b.texto)}</p>
        </div>
      ))}
    </div>
  );
}

function QuestoesPadrao() {
  const [aberto, setAberto] = useState({});
  return (
    <div className="page">
      <h1>📋 Questões Padrão</h1>
      <p className="sub">Questões originais do material — {CONTEUDO.questoesPadrao.length} questões.</p>
      {CONTEUDO.questoesPadrao.map((x, i) => (
        <div key={i} className="bloco">
          <h4>{x.n}. {x.q}</h4>
          <button className="btn" onClick={() => setAberto({ ...aberto, [i]: !aberto[i] })}>
            {aberto[i] ? "Ocultar" : "Mostrar"} resposta
          </button>
          {aberto[i] && <p className="resp">{x.r}</p>}
        </div>
      ))}
    </div>
  );
}

function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [virado, setVirado] = useState(false);
  const [naoSabia, setNaoSabia] = useState([]);
  const [mostrarDica, setMostrarDica] = useState(false);
  const [revisando, setRevisando] = useState(false);

  const lista = revisando ? naoSabia.map(i => CONTEUDO.flashcards[i]) : CONTEUDO.flashcards;
  const card = lista[idx];

  if (!card) return <div className="page"><h1>🃏 Flashcards</h1><p>Nenhum card para revisar.</p></div>;

  const proxima = () => {
    setVirado(false);
    setMostrarDica(false);
    if (idx < lista.length - 1) setIdx(idx + 1);
  };
  const marcar = (sabia) => {
    if (!sabia && !revisando) {
      const realIdx = CONTEUDO.flashcards.indexOf(card);
      if (!naoSabia.includes(realIdx)) setNaoSabia([...naoSabia, realIdx]);
    }
    proxima();
  };

  return (
    <div className="page">
      <h1>🃏 Flashcards {revisando && "(Revisão)"}</h1>
      <div className="contador">Card {idx + 1} de {lista.length}</div>
      <div className={"flash" + (virado ? " virado" : "")} onClick={() => setVirado(!virado)}>
        {!virado ? <div className="frente">{card.f}</div> : (
          <div className="verso">
            <p>{card.v}</p>
            <div className="mem">💡 Resumo: {card.v.substring(0, 80)}...</div>
            <div className="mem">🧠 Memorização: {card.mem}</div>
          </div>
        )}
      </div>
      <div className="btns">
        <button className="btn" onClick={() => { setIdx(Math.max(0, idx - 1)); setVirado(false); setMostrarDica(false); }}>⬅️ Anterior</button>
        <button className="btn" onClick={() => setMostrarDica(!mostrarDica)}>💡 Dica</button>
        <button className="btn" onClick={() => setVirado(!virado)}>🔄 Virar</button>
      </div>
      {mostrarDica && <div className="dica">💡 {card.dica}</div>}
      {virado && (
        <div className="btns">
          <button className="btn ok" onClick={() => marcar(true)}>✅ Sabia</button>
          <button className="btn no" onClick={() => marcar(false)}>❌ Não sabia</button>
        </div>
      )}
      {!revisando && naoSabia.length > 0 && idx === lista.length - 1 && (
        <button className="btn refazer" onClick={() => { setRevisando(true); setIdx(0); setVirado(false); }}>
          🔁 Rever "Não Sabia" ({naoSabia.length})
        </button>
      )}
    </div>
  );
}

function MultiplaEscolha() {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [refazendo, setRefazendo] = useState(false);
  const [lista, setLista] = useState(CONTEUDO.multiplaEscolha.map((_, i) => i));

  const realIdx = lista[idx];
  const q = CONTEUDO.multiplaEscolha[realIdx];
  if (!q) return <div className="page"><h1>🅰️ Múltipla Escolha</h1><p>Sem questões.</p></div>;

  const confirmar = () => setConfirm({ ...confirm, [realIdx]: true });
  const refazerErradas = () => {
    const erradas = lista.filter(i => resps[i] !== undefined && resps[i] !== CONTEUDO.multiplaEscolha[i].correta);
    if (erradas.length > 0) {
      setLista(erradas); setIdx(0); setResps({}); setConfirm({}); setRefazendo(true);
    }
  };

  return (
    <div className="page">
      <h1>🅰️ Múltipla Escolha {refazendo && "(Refazendo)"}</h1>
      <div className="contador">Questão {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>{q.q}</h4>
        {q.alts.map((a, i) => (
          <div key={i}
            className={"alt" + (resps[realIdx] === i ? " sel" : "") +
              (confirm[realIdx] ? (i === q.correta ? " ok" : (resps[realIdx] === i ? " err" : "")) : "")}
            onClick={() => !confirm[realIdx] && setResps({ ...resps, [realIdx]: i })}>
            {String.fromCharCode(65 + i)}) {a}
          </div>
        ))}
        <div className="btns">
          <button className="btn" onClick={() => { if (idx > 0) setIdx(idx - 1); }}>⬅️ Anterior</button>
          <button className="btn" onClick={() => setDicas({ ...dicas, [realIdx]: !dicas[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" disabled={resps[realIdx] === undefined} onClick={confirmar}>✅ Confirmar</button>}
          <button className="btn" onClick={() => { if (idx < lista.length - 1) setIdx(idx + 1); }}>➡️ Próxima</button>
        </div>
        {dicas[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            {resps[realIdx] === q.correta ? "✅ Correto!" : `❌ Errado. Gabarito: ${String.fromCharCode(65 + q.correta)}) ${q.alts[q.correta]}`}
            <div className="mem">🧠 Memorização: {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && <button className="btn refazer" onClick={refazerErradas}>🔁 Refazer erradas</button>}
    </div>
  );
}

function CertoErrado() {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [just, setJust] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [marcadas, setMarcadas] = useState({});
  const [lista, setLista] = useState(CONTEUDO.certoErrado.map((_, i) => i));

  const realIdx = lista[idx];
  const q = CONTEUDO.certoErrado[realIdx];
  if (!q) return <div className="page"><h1>✅ C/E</h1></div>;

  const refazer = () => {
    const alvo = lista.filter(i => marcadas[i] || (resps[i] !== undefined && resps[i] !== CONTEUDO.certoErrado[i].r));
    if (alvo.length > 0) { setLista(alvo); setIdx(0); setResps({}); setConfirm({}); }
  };

  return (
    <div className="page">
      <h1>✅ Certo ou Errado</h1>
      <div className="contador">Questão {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>{q.q}</h4>
        <div className="btns">
          <button className={"btn" + (resps[realIdx] === true ? " sel" : "")} disabled={confirm[realIdx]} onClick={() => setResps({ ...resps, [realIdx]: true })}>✔️ Certo</button>
          <button className={"btn" + (resps[realIdx] === false ? " sel" : "")} disabled={confirm[realIdx]} onClick={() => setResps({ ...resps, [realIdx]: false })}>❌ Errado</button>
        </div>
        {resps[realIdx] === false && (
          <textarea className="just" placeholder="Justifique por que está errado..." value={just[realIdx] || ""} onChange={e => setJust({ ...just, [realIdx]: e.target.value })} disabled={confirm[realIdx]} />
        )}
        <label className="chk"><input type="checkbox" checked={!!marcadas[realIdx]} onChange={e => setMarcadas({ ...marcadas, [realIdx]: e.target.checked })} /> Marcar para refazer</label>
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️ Anterior</button>
          <button className="btn" onClick={() => setDicas({ ...dicas, [realIdx]: !dicas[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" disabled={resps[realIdx] === undefined} onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️ Próxima</button>
        </div>
        {dicas[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            {resps[realIdx] === q.r ? "✅ Correto!" : `❌ Errado. Gabarito: ${q.r ? "Certo" : "Errado"}`}
            <div className="mem">🧠 {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && <button className="btn refazer" onClick={refazer}>🔁 Refazer marcadas/erradas</button>}
    </div>
  );
}

function CompleteLacunas() {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [marcadas, setMarcadas] = useState({});
  const [lista, setLista] = useState(CONTEUDO.completeLacunas.map((_, i) => i));

  const realIdx = lista[idx];
  const q = CONTEUDO.completeLacunas[realIdx];
  if (!q) return <div className="page"><h1>🧩 Lacunas</h1></div>;

  const acerto = (confirm[realIdx] && (resps[realIdx] || "").trim().toLowerCase() === q.r.toLowerCase());

  return (
    <div className="page">
      <h1>🧩 Complete as Lacunas</h1>
      <div className="contador">Questão {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>{q.q}</h4>
        <input className="input" value={resps[realIdx] || ""} onChange={e => setResps({ ...resps, [realIdx]: e.target.value })} disabled={confirm[realIdx]} placeholder="Sua resposta..." />
        <label className="chk"><input type="checkbox" checked={!!marcadas[realIdx]} onChange={e => setMarcadas({ ...marcadas, [realIdx]: e.target.checked })} /> Marcar</label>
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️</button>
          <button className="btn" onClick={() => setDicas({ ...dicas, [realIdx]: !dicas[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️</button>
        </div>
        {dicas[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            {acerto ? "✅ Correto!" : `❌ Gabarito: ${q.r}`}
            <div className="mem">🧠 {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && (
        <button className="btn refazer" onClick={() => {
          const alvo = lista.filter(i => marcadas[i]);
          if (alvo.length) { setLista(alvo); setIdx(0); setResps({}); setConfirm({}); }
        }}>🔁 Refazer marcadas</button>
      )}
    </div>
  );
}

function Definicoes() {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [marcadas, setMarcadas] = useState({});
  const [lista, setLista] = useState(CONTEUDO.definicoes.map((_, i) => i));

  const realIdx = lista[idx];
  const q = CONTEUDO.definicoes[realIdx];
  if (!q) return <div className="page"><h1>📘 Definições</h1></div>;

  return (
    <div className="page">
      <h1>📘 Definições</h1>
      <div className="contador">Termo {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>Defina: <b>{q.termo}</b></h4>
        <textarea className="just" rows="4" value={resps[realIdx] || ""} onChange={e => setResps({ ...resps, [realIdx]: e.target.value })} disabled={confirm[realIdx]} placeholder="Escreva a definição..." />
        <label className="chk"><input type="checkbox" checked={!!marcadas[realIdx]} onChange={e => setMarcadas({ ...marcadas, [realIdx]: e.target.checked })} /> Marcar</label>
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️</button>
          <button className="btn" onClick={() => setDicas({ ...dicas, [realIdx]: !dicas[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️</button>
        </div>
        {dicas[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            <div><b>📖 Gabarito:</b> {q.def}</div>
            <div><b>📝 Resumido:</b> {q.res}</div>
            <div className="mem">🧠 Memorização: {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && (
        <button className="btn refazer" onClick={() => {
          const alvo = lista.filter(i => marcadas[i]);
          if (alvo.length) { setLista(alvo); setIdx(0); setResps({}); setConfirm({}); }
        }}>🔁 Refazer marcadas</button>
      )}
    </div>
  );
}

function Correlacione() {
  const [idx, setIdx] = useState(0);
  const [selE, setSelE] = useState(null);
  const [mapa, setMapa] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dica, setDica] = useState({});
  const [marcadas, setMarcadas] = useState({});
  const [lista, setLista] = useState(CONTEUDO.correlacione.map((_, i) => i));

  const realIdx = lista[idx];
  const q = CONTEUDO.correlacione[realIdx];
  if (!q) return <div className="page"><h1>🔗 Correlacione</h1></div>;

  const mapaAtual = mapa[realIdx] || {};

  const clickDir = (i) => {
    if (selE === null || confirm[realIdx]) return;
    setMapa({ ...mapa, [realIdx]: { ...mapaAtual, [selE]: i } });
    setSelE(null);
  };

  const mostrarNum = (i) => {
    const esq = Object.keys(mapaAtual).find(k => mapaAtual[k] === i);
    if (esq !== undefined) return parseInt(esq) + 1;
    return "-";
  };

  return (
    <div className="page">
      <h1>🔗 Correlacione</h1>
      <div className="contador">Conjunto {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <p>Clique num item da esquerda e depois no correspondente à direita.</p>
        <div className="corr">
          <div className="col">
            {q.esquerda.map((e, i) => (
              <div key={i} className={"corr-item" + (selE === i ? " sel" : "")} onClick={() => !confirm[realIdx] && setSelE(i)}>
                {e}
              </div>
            ))}
          </div>
          <div className="col">
            {q.direita.map((d, i) => (
              <div key={i} className="corr-item" onClick={() => clickDir(i)}>
                <span className="num">{mostrarNum(i)}</span> {d}
              </div>
            ))}
          </div>
        </div>
        <label className="chk"><input type="checkbox" checked={!!marcadas[realIdx]} onChange={e => setMarcadas({ ...marcadas, [realIdx]: e.target.checked })} /> Marcar</label>
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️</button>
          <button className="btn" onClick={() => setDica({ ...dica, [realIdx]: !dica[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️</button>
        </div>
        {dica[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            <div><b>Gabarito:</b></div>
            {q.esquerda.map((e, i) => (
              <div key={i}>{e} → {q.direita[q.gabarito[i] - 1] || "-"}</div>
            ))}
            <div className="mem">🧠 {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && (
        <button className="btn refazer" onClick={() => {
          const alvo = lista.filter(i => marcadas[i]);
          if (alvo.length) { setLista(alvo); setIdx(0); setMapa({}); setConfirm({}); }
        }}>🔁 Refazer marcados</button>
      )}
    </div>
  );
}

function CiteListe({ dados, titulo }) {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [marcadas, setMarcadas] = useState({});
  const [lista, setLista] = useState(dados.map((_, i) => i));

  const realIdx = lista[idx];
  const q = dados[realIdx];
  if (!q) return <div className="page"><h1>{titulo}</h1></div>;

  return (
    <div className="page">
      <h1>{titulo}</h1>
      <div className="contador">Questão {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>{q.q}</h4>
        <textarea className="just" rows="5" value={resps[realIdx] || ""} onChange={e => setResps({ ...resps, [realIdx]: e.target.value })} disabled={confirm[realIdx]} placeholder="Sua resposta..." />
        <label className="chk"><input type="checkbox" checked={!!marcadas[realIdx]} onChange={e => setMarcadas({ ...marcadas, [realIdx]: e.target.checked })} /> Marcar</label>
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️</button>
          <button className="btn" onClick={() => setDicas({ ...dicas, [realIdx]: !dicas[realIdx] })}>💡 Dica</button>
          {!confirm[realIdx] && <button className="btn ok" onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️</button>
        </div>
        {dicas[realIdx] && <div className="dica">💡 {q.dica}</div>}
        {confirm[realIdx] && (
          <div className="feedback">
            <div><b>📖 Gabarito:</b> {q.r}</div>
            <div><b>📝 Resumido:</b> {q.res}</div>
            <div className="mem">🧠 Memorização: {q.mem}</div>
          </div>
        )}
      </div>
      {idx === lista.length - 1 && (
        <button className="btn refazer" onClick={() => {
          const alvo = lista.filter(i => marcadas[i]);
          if (alvo.length) { setLista(alvo); setIdx(0); setResps({}); setConfirm({}); }
        }}>🔁 Refazer marcadas</button>
      )}
    </div>
  );
}

function VouF() {
  const [idx, setIdx] = useState(0);
  const [resps, setResps] = useState({});
  const [confirm, setConfirm] = useState({});
  const [dicas, setDicas] = useState({});
  const [lista, setLista] = useState(CONTEUDO.vOuF.map((_, i) => i));

  const realIdx = lista[idx];
  const g = CONTEUDO.vOuF[realIdx];
  if (!g) return <div className="page"><h1>🔤 V ou F</h1></div>;

  const respsGrupo = resps[realIdx] || {};
  const confirmG = confirm[realIdx];

  const refazerErradas = () => {
    const erradas = lista.filter(gi => {
      const r = resps[gi] || {};
      return CONTEUDO.vOuF[gi].itens.some((it, i) => r[i] !== undefined && r[i] !== it.r);
    });
    if (erradas.length) { setLista(erradas); setIdx(0); setResps({}); setConfirm({}); }
  };

  return (
    <div className="page">
      <h1>🔤 V ou F</h1>
      <div className="contador">Grupo {idx + 1} de {lista.length}</div>
      <div className="bloco">
        <h4>{g.enunciado}</h4>
        {g.itens.map((it, i) => (
          <div key={i} className="vf-item">
            <span>{it.t}</span>
            <div className="btns">
              <button className={"btn small" + (respsGrupo[i] === true ? " sel" : "")} disabled={confirmG} onClick={() => setResps({ ...resps, [realIdx]: { ...respsGrupo, [i]: true } })}>V</button>
              <button className={"btn small" + (respsGrupo[i] === false ? " sel" : "")} disabled={confirmG} onClick={() => setResps({ ...resps, [realIdx]: { ...respsGrupo, [i]: false } })}>F</button>
              <button className="btn small" onClick={() => setDicas({ ...dicas, [realIdx + "_" + i]: !dicas[realIdx + "_" + i] })}>💡</button>
            </div>
            {dicas[realIdx + "_" + i] && <div className="dica">💡 {it.dica}</div>}
            {confirmG && (
              <div className={"feedback small " + (respsGrupo[i] === it.r ? "ok" : "err")}>
                Gabarito: {it.r ? "V" : "F"} — 🧠 {it.mem}
              </div>
            )}
          </div>
        ))}
        <div className="btns">
          <button className="btn" onClick={() => idx > 0 && setIdx(idx - 1)}>⬅️</button>
          {!confirmG && <button className="btn ok" onClick={() => setConfirm({ ...confirm, [realIdx]: true })}>✅ Confirmar</button>}
          <button className="btn" onClick={() => idx < lista.length - 1 && setIdx(idx + 1)}>➡️</button>
        </div>
      </div>
      {idx === lista.length - 1 && <button className="btn refazer" onClick={refazerErradas}>🔁 Refazer erradas</button>}
    </div>
  );
}

export default function App() {
  const [aba, setAba] = useState(() => { try { return localStorage.getItem("aba") || "inicio"; } catch(e) { return "inicio"; } });
  useEffect(() => { try { localStorage.setItem("aba", aba); } catch(e) {} }, [aba]);

  return (
    <div className="app">
      <TopBar aba={aba} setAba={setAba} />
      <main>
        {aba === "inicio" && <Inicio />}
        {aba === "super" && <SuperResumo />}
        {aba === "resumo" && <Resumo />}
        {aba === "mapa" && <MapaMental />}
        {aba === "flash" && <Flashcards />}
        {aba === "consulta" && <Consulta />}
        {aba === "padrao" && <QuestoesPadrao />}
        {aba === "me" && <MultiplaEscolha />}
        {aba === "ce" && <CertoErrado />}
        {aba === "lacuna" && <CompleteLacunas />}
        {aba === "def" && <Definicoes />}
        {aba === "corr" && <Correlacione />}
        {aba === "cite" && <CiteListe dados={CONTEUDO.cite} titulo="📝 Cite" />}
        {aba === "liste" && <CiteListe dados={CONTEUDO.liste} titulo="📑 Liste" />}
        {aba === "vf" && <VouF />}
        {aba === "compl" && <CiteListe dados={CONTEUDO.complete} titulo="✍️ Complete" />}
      </main>
    </div>
  );
}
