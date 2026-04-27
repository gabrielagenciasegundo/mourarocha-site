export interface Pilar {
  title: string;
  description: string;
}

export interface Servico {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Solucao {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: string[];
  coverImage: string;
  pilares: Pilar[];
  servicos: Servico[];
  processo: { step: string; title: string; description: string }[];
  faqs: FAQ[];
}

export const solucoes: Solucao[] = [
  {
    slug: "franchising",
    title: "Franchising",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Expansão segura, do contrato ao compliance.",
    intro: [
      "Atuamos na estruturação e expansão de franquias, garantindo segurança jurídica em todas as etapas do seu modelo de negócio.",
      "Da formatação jurídica à elaboração de contratos e compliance, asseguramos crescimento organizado — protegendo tanto o franqueador quanto a rede.",
    ],
    coverImage: "/images/solucoes/franchising.webp",
    pilares: [
      {
        title: "Estruturação Jurídica",
        description: "Formatamos o modelo jurídico da sua franquia com clareza e solidez, da COF ao contrato de franquia.",
      },
      {
        title: "Compliance e Governança",
        description: "Implantamos políticas, controles e fluxos internos que fortalecem a cultura de conformidade e reduzem riscos operacionais.",
      },
      {
        title: "Expansão Segura",
        description: "Atuamos em todas as etapas da expansão da rede, garantindo segurança jurídica para franqueador e franqueados.",
      },
    ],
    servicos: [
      { title: "Criação e revisão da COF", description: "Elaboramos a Circular de Oferta de Franquia em conformidade com a Lei 13.966/19." },
      { title: "Contratos de franquia", description: "Redigimos e revisamos contratos que protegem a rede e os direitos do franqueador." },
      { title: "Compliance para redes", description: "Estruturamos políticas internas e programas de conformidade para toda a rede." },
      { title: "Gestão de marcas na franquia", description: "Protegemos e gerenciamos os ativos de marca que sustentam o modelo de franquia." },
      { title: "Suporte em disputas", description: "Atuamos tecnicamente em conflitos entre franqueador e franqueados, com foco em solução eficiente." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos a estrutura atual do negócio, os contratos existentes e os pontos de atenção jurídica para a expansão." },
      { step: "02", title: "Estruturação", description: "Elaboramos ou atualizamos a documentação jurídica, políticas internas e o modelo contratual da rede." },
      { step: "03", title: "Sustentação", description: "Acompanhamos a evolução da rede com suporte contínuo e atualizações conforme a legislação de franchising evolui." },
    ],
    faqs: [
      { question: "O que é a COF e quando é obrigatória?", answer: "A Circular de Oferta de Franquia é o documento que o franqueador deve fornecer ao candidato a franqueado antes de qualquer pagamento. É obrigatória por lei e deve ser entregue com 10 dias de antecedência à assinatura do contrato." },
      { question: "Como protejo minha marca em uma rede de franquias?", answer: "O registro da marca no INPI é o primeiro passo. Após isso, estruturamos termos de licença de marca e políticas de uso que protegem a identidade visual e reputação da rede." },
      { question: "Posso iniciar a franquia antes de ter a COF pronta?", answer: "Legalmente não. Operar sem a COF atualizada expõe o franqueador a sanções e nulidade dos contratos. A Moura Rocha agiliza esse processo para que você expanda com segurança." },
      { question: "Vocês atendem quem já tem uma rede e quer revisá-la juridicamente?", answer: "Sim. Fazemos um diagnóstico completo da rede existente, identificamos irregularidades e reestruturamos o modelo para garantir conformidade e segurança." },
    ],
  },
  {
    slug: "direito-civil-aplicado-ao-digital",
    title: "Direito Empresarial Aplicado ao Digital",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Imagem, contratos e reputação protegidos no ambiente digital.",
    intro: [
      "Imagem, voz, conteúdo, campanhas, entregáveis e direitos de uso. O ambiente digital criou novos ativos — e novos riscos que poucas empresas estão preparadas para enfrentar.",
      "Ajudamos empresas, agências e criadores a estruturar relações contratuais sólidas, proteger reputação e evitar conflitos que podem comprometer campanhas, parcerias e crescimento.",
    ],
    coverImage: "/images/solucoes/direito-digital.webp",
    pilares: [
      {
        title: "Contratos Digitais",
        description: "Elaboramos contratos claros para relações com influenciadores, agências, criadores de conteúdo e plataformas digitais.",
      },
      {
        title: "Proteção de Imagem e Reputação",
        description: "Estruturamos acordos de uso de imagem, voz e likeness que protegem sua empresa e seus colaboradores.",
      },
      {
        title: "Gestão de Conflitos Digitais",
        description: "Atuamos em disputas envolvendo remoção de conteúdo, violação de marca e conflitos contratuais no digital.",
      },
    ],
    servicos: [
      { title: "Contratos com influenciadores e creators", description: "Elaboramos contratos que definem entregáveis, direitos de uso, exclusividade e cláusulas de proteção de marca." },
      { title: "Acordos de uso de imagem e voz", description: "Estruturamos cessões e licenças de imagem alinhadas à Lei de Direitos Autorais e ao marco civil." },
      { title: "Termos de serviço e privacidade", description: "Criamos documentos que regulam a relação com usuários e protegem a empresa em casos de disputa." },
      { title: "Contratos com agências e parceiros", description: "Definimos escopo, propriedade intelectual das criações, prazos e penalidades com clareza." },
      { title: "Gestão de crises e remoção de conteúdo", description: "Atuamos rapidamente em situações de vazamento, uso indevido de imagem ou publicações prejudiciais." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos os contratos, relações e ativos digitais da empresa para identificar vulnerabilidades jurídicas." },
      { step: "02", title: "Estruturação", description: "Elaboramos ou atualizamos contratos, políticas e documentos que protegem o negócio no ambiente digital." },
      { step: "03", title: "Suporte Contínuo", description: "Acompanhamos novas parcerias, campanhas e situações de crise com agilidade e clareza jurídica." },
    ],
    faqs: [
      { question: "Preciso de contrato para trabalhar com influenciadores?", answer: "Sim. Um contrato bem elaborado define entregáveis, prazo, exclusividade, direitos de uso do conteúdo, cláusulas de conduta e penalidades. Sem ele, disputas frequentes ficam sem respaldo jurídico." },
      { question: "Como funciona a proteção de imagem de sócios e funcionários?", answer: "Recomendamos acordos de cessão de imagem que definem como, onde e por quanto tempo a imagem pode ser usada — protegendo tanto a empresa quanto a pessoa." },
      { question: "O que fazer quando alguém usa a marca da minha empresa sem autorização?", answer: "A Moura Rocha notifica extrajudicialmente e, se necessário, aciona medidas judiciais urgentes para remoção do conteúdo e reparação de danos." },
      { question: "Minha agência entregou algo diferente do combinado. O que fazer?", answer: "Dependendo do contrato firmado, é possível exigir cumprimento, rescisão com devolução de valores ou indenização. Analisamos o caso e apresentamos o caminho mais eficiente." },
    ],
  },
  {
    slug: "protecao-de-dados-ia-e-privacidade-lgpd",
    title: "Proteção de Dados, IA e Privacidade (LGPD)",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Use dados e IA com segurança, responsabilidade e conformidade.",
    intro: [
      "O uso de dados e ferramentas de inteligência artificial cresce todos os dias — e com ele, a responsabilidade da sua empresa perante a lei e seus clientes.",
      "Orientamos negócios digitais a usar dados e IA com segurança: desde o consentimento e políticas internas até o uso correto de ferramentas que processam informações sensíveis. Uma abordagem prática, moderna e alinhada ao que o mercado exige.",
    ],
    coverImage: "/images/solucoes/protecao-dados.webp",
    pilares: [
      {
        title: "Conformidade com a LGPD",
        description: "Estruturamos políticas, termos e processos internos para que sua empresa opere em conformidade com a Lei Geral de Proteção de Dados.",
      },
      {
        title: "Governança de IA",
        description: "Orientamos sobre o uso responsável de inteligência artificial, conforme as regulamentações emergentes e boas práticas do setor.",
      },
      {
        title: "Resposta a Incidentes",
        description: "Preparamos planos de resposta a vazamentos e incidentes de segurança, minimizando riscos regulatórios e reputacionais.",
      },
    ],
    servicos: [
      { title: "Mapeamento de dados (ROPA)", description: "Identificamos todos os dados tratados pela empresa, suas finalidades, bases legais e fluxos internos." },
      { title: "Política de privacidade e termos de uso", description: "Elaboramos documentos claros e juridicamente sólidos que protegem a empresa e informam os usuários." },
      { title: "Gestão de consentimento", description: "Estruturamos mecanismos de coleta e gestão de consentimento em conformidade com a LGPD." },
      { title: "DPO as a Service", description: "Fornecemos o serviço de Encarregado de Proteção de Dados para empresas que não possuem profissional dedicado." },
      { title: "Análise de ferramentas de IA", description: "Avaliamos se as ferramentas de IA utilizadas pela empresa respeitam a privacidade dos usuários e a legislação vigente." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos todos os dados tratados, ferramentas utilizadas e gaps de conformidade com a LGPD." },
      { step: "02", title: "Adequação", description: "Implementamos políticas, controles técnicos e documentos que colocam a empresa em conformidade." },
      { step: "03", title: "Sustentação", description: "Monitoramos mudanças regulatórias e atualizamos as políticas da empresa conforme a lei evolui." },
    ],
    faqs: [
      { question: "Minha empresa precisa se adequar à LGPD mesmo sendo pequena?", answer: "Sim. A LGPD se aplica a qualquer empresa que trate dados pessoais, independentemente do tamanho. O não cumprimento pode gerar multas de até 2% do faturamento, limitadas a R$ 50 milhões por infração." },
      { question: "O que é uma base legal e por que é importante?", answer: "A base legal justifica juridicamente por que sua empresa trata determinado dado. Sem ela definida, o tratamento é ilegal. As mais comuns são consentimento, execução de contrato e legítimo interesse." },
      { question: "Posso usar ferramentas de IA que processam dados de clientes?", answer: "Sim, mas com cautela. É preciso avaliar se a ferramenta garante privacidade, o que é feito com os dados inseridos e se há conformidade com a LGPD. A Moura Rocha faz essa análise para você." },
      { question: "O que acontece em caso de vazamento de dados?", answer: "A LGPD exige comunicação à ANPD e aos titulares afetados em prazo razoável. Nossa equipe prepara planos de resposta e apoia a comunicação em caso de incidentes." },
    ],
  },
  {
    slug: "direito-societario-para-startups",
    title: "Direito Societário",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Estruturas que acompanham a velocidade da sua empresa.",
    intro: [
      "Acordo de sócios, captable, entrada e saída de founders, expansão, seed, série A, reorganização societária — a estrutura jurídica da sua empresa precisa acompanhar seu crescimento.",
      "Criamos estruturas societárias sólidas e flexíveis para startups e empresas em crescimento, protegendo sócios e garantindo segurança em cada fase da jornada.",
    ],
    coverImage: "/images/solucoes/direito-societario.webp",
    pilares: [
      {
        title: "Estruturação Societária",
        description: "Desenhamos a estrutura jurídica ideal para o momento da empresa, desde a constituição até reorganizações complexas.",
      },
      {
        title: "Proteção dos Founders",
        description: "Elaboramos acordos de sócios que protegem os fundadores e previnem conflitos em momentos críticos como captações e saídas.",
      },
      {
        title: "M&A e Captações",
        description: "Atuamos em rodadas de investimento, due diligence e processos de fusão e aquisição com segurança e agilidade.",
      },
    ],
    servicos: [
      { title: "Constituição e abertura de empresa", description: "Orientamos sobre o melhor formato jurídico e fazemos a abertura da empresa com segurança." },
      { title: "Acordo de sócios", description: "Elaboramos acordos que regulam o relacionamento entre sócios, proteções, saída e resolução de conflitos." },
      { title: "Captable e rodadas de investimento", description: "Estruturamos o cap table e suportamos juridicamente rodadas seed, série A e follow-ons." },
      { title: "Reorganização societária", description: "Reestruturamos a empresa para captações, expansão ou sucessão com eficiência jurídica e tributária." },
      { title: "Due diligence", description: "Realizamos análise jurídica completa antes de investimentos, fusões ou aquisições." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Analisamos a estrutura atual da empresa, os acordos existentes e os objetivos dos sócios para a próxima fase." },
      { step: "02", title: "Estruturação", description: "Elaboramos ou revisamos documentos societários, acordos e contratos que suportam o crescimento da empresa." },
      { step: "03", title: "Suporte Continuo", description: "Acompanhamos novas rodadas, mudanças na estrutura e eventuais disputas societárias com suporte estratégico." },
    ],
    faqs: [
      { question: "Quando devo fazer um acordo de sócios?", answer: "Idealmente antes de iniciar operações. Mas empresas que já estão rodando sem acordo também se beneficiam imensamente de criá-lo — especialmente antes de captações ou entrada de novos sócios." },
      { question: "O que é vesting e por que importa para startups?", answer: "Vesting é o mecanismo que condiciona a titularidade das cotas de um sócio ao seu tempo e contribuição à empresa. Protege a startup caso um founder saia prematuramente." },
      { question: "Qual a diferença entre Ltda e S.A. para startups?", answer: "A S.A. é mais adequada para captações com investidores institucionais e emissão de ações. A Ltda é mais simples e econômica para estágios iniciais. Analisamos o perfil da empresa para recomendar o melhor formato." },
      { question: "Vocês apoiam due diligence antes de uma captação?", answer: "Sim. Fazemos a revisão jurídica completa da empresa para que você entre na negociação com segurança e sem surpresas que possam comprometer o deal." },
    ],
  },
  {
    slug: "direito-trabalhista-para-times-hibridos-e-tech",
    title: "Direito Trabalhista para Times Híbridos e Tech",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Estrutura de pessoas que suporta crescimento sem passivos.",
    intro: [
      "A nova economia exige modelos de trabalho que combinam CLT, PJ, freelancers, squads, creators e times terceirizados. Isso é normal no digital — mas também é um campo cheio de riscos jurídicos quando não estruturado corretamente.",
      "Organizamos toda a sua estrutura de pessoas para evitar passivos trabalhistas, conflitos e falhas contratuais que podem travar o crescimento da empresa.",
    ],
    coverImage: "/images/solucoes/direito-trabalhista.webp",
    pilares: [
      {
        title: "Governança Trabalhista",
        description: "Implantamos políticas, controles e fluxos internos que fortalecem a cultura de conformidade e reduzem riscos no dia a dia.",
      },
      {
        title: "Gestão de Riscos",
        description: "Com auditorias e mapeamento preventivo, identificamos vulnerabilidades e criamos planos de ação para evitar futuras autuações.",
      },
      {
        title: "Defesa Estratégica",
        description: "Atuamos em disputas com clareza e foco em resultados, utilizando dados para decisões mais assertivas.",
      },
    ],
    servicos: [
      { title: "Auditoria de riscos trabalhistas", description: "Analisamos contratos, políticas e rotinas internas para identificar e corrigir pontos que podem gerar passivos." },
      { title: "Contratos e políticas internas", description: "Criamos e ajustamos documentos que protegem a empresa e trazem clareza às relações de trabalho." },
      { title: "Gestão de jornada e benefícios", description: "Adequamos controles de ponto, banco de horas, home office e remuneração variável conforme as exigências legais." },
      { title: "Negociações sindicais", description: "Apoiamos empresas em acordos e convenções coletivas, buscando equilíbrio entre segurança jurídica e viabilidade financeira." },
      { title: "Contencioso estratégico", description: "Atuamos de forma técnica e transparente em processos trabalhistas, priorizando acordos eficientes e defesa sólida." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos documentos, contratos e práticas internas para entender o cenário real da empresa e seus principais pontos de atenção." },
      { step: "02", title: "Ação", description: "Desenvolvemos medidas corretivas, atualizamos políticas e implementamos controles que asseguram conformidade e eficiência." },
      { step: "03", title: "Sustentação", description: "Acompanhamos a evolução do negócio, oferecendo suporte contínuo e atualizações conforme a legislação trabalhista se transforma." },
    ],
    faqs: [
      { question: "Qual a diferença entre contratar CLT e PJ?", answer: "A contratação CLT garante direitos trabalhistas ao empregado, enquanto o PJ é uma relação entre empresas. O risco surge quando o PJ trabalha com exclusividade, subordinação e pessoalidade — caracterizando vínculo empregatício disfarçado." },
      { question: "Como evitar reconhecimento de vínculo com freelancers?", answer: "Com contratos bem estruturados, projetos claramente definidos, ausência de subordinação direta e diversidade de clientes do profissional. A Moura Rocha estrutura essa relação jurdicamente." },
      { question: "Home office exige um contrato específico?", answer: "Sim. A reforma trabalhista e o teletrabalho exigem acordo escrito que especifique as condições de trabalho remoto, responsabilidade por equipamentos e controle de jornada." },
      { question: "O que fazer com uma ação trabalhista em andamento?", answer: "Nossa equipe analisa o processo, estratégia de defesa e viabilidade de acordo. Priorizamos soluções rápidas e econômicas sem comprometer a posição da empresa em casos futuros." },
    ],
  },
  {
    slug: "propriedade-intelectual-e-protecao-de-criacoes",
    title: "Propriedade Intelectual e Proteção de Criações",
    eyebrow: "// SOLUÇÕES",
    subtitle: "Se é seu, precisa ser blindado.",
    intro: [
      "A inovação é o ativo mais valioso de qualquer empresa digital — e, sem proteção, é também o mais vulnerável. Marca, identidade visual, software, algoritmos, metodologias, campanhas e conteúdos: tudo que gera valor precisa ser oficialmente seu.",
      "Estruturamos a proteção de forma estratégica, garantindo que sua empresa possa crescer, captar investimento, licenciar e escalar sem o risco de ter suas ideias copiadas.",
    ],
    coverImage: "/images/solucoes/propriedade-intelectual.webp",
    pilares: [
      {
        title: "Registro e Proteção",
        description: "Registramos marcas, softwares e criações no INPI e demais órgãos, garantindo titularidade formal dos seus ativos.",
      },
      {
        title: "Gestão Estratégica de Ativos",
        description: "Mapeamos e estruturamos o portfólio de propriedade intelectual da empresa alinhado aos objetivos de negócio.",
      },
      {
        title: "Defesa e Enforcement",
        description: "Agimos contra infratores com notificações, medidas cautelares e ações judiciais para proteger seus direitos.",
      },
    ],
    servicos: [
      { title: "Registro de marcas (Brasil e exterior)", description: "Registramos sua marca no INPI e no Protocolo de Madri para proteção internacional." },
      { title: "Registro de software e algoritmos", description: "Protegemos formalmente seus programas de computador e ativos digitais junto ao INPI." },
      { title: "Licenciamento de propriedade intelectual", description: "Elaboramos contratos de licença que permitem monetizar seus ativos sem perder o controle." },
      { title: "Proteção de metodologias e trade secrets", description: "Estruturamos contratos de confidencialidade e medidas internas para proteger seus segredos de negócio." },
      { title: "Enforcement contra infratores", description: "Notificamos e acionamos juridicamente quem usar indevidamente seus ativos intelectuais." },
    ],
    processo: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos todos os ativos intelectuais da empresa — marcas, softwares, criações — e identificamos o que está protegido e o que está vulnerável." },
      { step: "02", title: "Proteção", description: "Executamos os registros necessários e estruturamos contratos de licença, confidencialidade e uso que blindam seu negócio." },
      { step: "03", title: "Gestão Contínua", description: "Monitoramos seu portfólio de PI, renovamos registros e agimos contra infrações com agilidade." },
    ],
    faqs: [
      { question: "Por que registrar minha marca se já uso há anos?", answer: "O uso não gera titularidade formal no Brasil. Sem registro, outra empresa pode depositar sua marca e ter direito de uso. O registro garante exclusividade e permite agir juridicamente contra cópias." },
      { question: "Como protejo o software que desenvolvi?", answer: "O software pode ser registrado no INPI como programa de computador. Além disso, contratos de confidencialidade e termos de uso protegem o código-fonte e a metodologia." },
      { question: "O que é o Protocolo de Madri?", answer: "É o sistema internacional de registro de marcas que permite proteger sua marca em mais de 120 países com um único pedido. A Moura Rocha conduz todo o processo." },
      { question: "Alguém copiou minha marca ou produto. O que faço?", answer: "A primeira medida é uma notificação extrajudicial formal. Se não resolvida, acionamos medidas judiciais urgentes para cessação do uso e indenização por danos causados." },
    ],
  },
];

export function getSolucaoBySlug(slug: string): Solucao | undefined {
  return solucoes.find((s) => s.slug === slug);
}
