export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  category: string;
  coverImage: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "a-falencia-das-marcas-famosas",
    title: "A falência das marcas famosas",
    excerpt:
      "São muitas as empresas cujas marcas, tradicionais e renomadas no mercado, não foram capazes de manter suas titulares economicamente saudáveis. O que acontece com essas marcas?",
    date: "26 de março de 2026",
    dateISO: "2026-03-26",
    category: "Propriedade Intelectual",
    coverImage: "https://segundodesign.com/mrocha/wp-content/uploads/2026/03/A-falencia-das-marcas-famosas.jpeg",
    content: `
São muitas as empresas cujas marcas, tradicionais e renomadas no mercado, não foram capazes de manter suas titulares economicamente saudáveis.

Quando uma empresa vai à falência, o destino de sua marca nem sempre é o esquecimento. Marcas fortes são ativos valiosos — e podem ser vendidas, licenciadas ou adquiridas por concorrentes como parte do processo de recuperação judicial ou falência.

**O que acontece com uma marca quando a empresa fale?**

A marca registrada é um ativo da empresa e, como tal, faz parte do patrimônio a ser liquidado. Ela pode ser:

- **Vendida** para terceiros que queiram aproveitar o reconhecimento do mercado
- **Licenciada** para outros empresários utilizarem
- **Abandonada**, se não houver interesse do mercado

O caso do Mappin, Mesbla e Varig no Brasil são exemplos clássicos de marcas que sobreviveram às suas empresas originais — algumas revividas, outras apenas com valor histórico.

**Por que proteger sua marca desde o início?**

Independentemente do tamanho da empresa, o registro de marca protege você de duas formas: garante exclusividade de uso e cria um ativo valioso que pode ser negociado, vendido ou licenciado.

Na Moura Rocha, ajudamos empresas a estruturar e proteger seus ativos intangíveis — incluindo marcas, softwares e metodologias — de forma estratégica e alinhada ao crescimento do negócio.
    `,
  },
  {
    slug: "boletos-falsos-e-ligacoes-ameacadoras",
    title: "Boletos falsos e ligações ameaçadoras",
    excerpt:
      "As denúncias recebidas pelo INPI de boletos falsos em nome do instituto cresceram significativamente. Saiba como identificar golpes e proteger sua empresa.",
    date: "26 de março de 2026",
    dateISO: "2026-03-26",
    category: "Direito Digital",
    coverImage: "https://segundodesign.com/mrocha/wp-content/uploads/2026/03/Boletos-falsos-e-ligacoes-ameacadoras.jpg",
    content: `
As denúncias recebidas pelo Instituto Nacional da Propriedade Industrial (INPI) de boletos falsos cresceram significativamente nos últimos anos.

Empresas que solicitam registro de marca ou patent frequentemente recebem correspondências e ligações de terceiros que se passam pelo INPI, cobrando taxas inexistentes ou oferecendo serviços desnecessários.

**Como identificar comunicações fraudulentas:**

- O INPI **nunca envia boletos por e-mail** sem que você tenha solicitado o serviço diretamente no portal oficial
- O instituto **não realiza ligações** solicitando pagamentos ou dados bancários
- Todos os pagamentos ao INPI são feitos via GRU (Guia de Recolhimento da União) no site oficial: inpi.gov.br

**O que fazer se receber um boleto suspeito:**

1. Não efetue o pagamento
2. Acesse o portal do INPI e verifique o status real do seu processo
3. Registre um Boletim de Ocorrência (BO) na Polícia Civil ou Federal
4. Informe o INPI sobre o ocorrido através dos canais oficiais

**Proteja sua empresa com assessoria especializada:**

Contar com um escritório especializado em propriedade intelectual garante que todas as interações com órgãos públicos sejam mediadas por profissionais que conhecem os processos corretos — eliminando o risco de cair em golpes.

A Moura Rocha acompanha processos de registro de marca no INPI e mantém você informado sobre cada etapa, sem surpresas ou cobranças indevidas.
    `,
  },
  {
    slug: "disney-e-pixar-vencem-processo-por-plagio-contra-empresas-chinesas",
    title: "Disney e Pixar vencem processo por plágio contra empresas chinesas",
    excerpt:
      "Empresas entraram com ação alegando similaridades da animação local 'The Autobots' com 'Carros' e 'Carros 2'. Tribunal de Xangai deu razão aos estúdios americanos.",
    date: "26 de março de 2026",
    dateISO: "2026-03-26",
    category: "Propriedade Intelectual",
    coverImage: "https://segundodesign.com/mrocha/wp-content/uploads/2026/03/Disney-e-Pixar-vencem-processo-por-plagio-contra-empresas-chinesas.jpg",
    content: `
Um tribunal de Xangai deu razão à Disney e Pixar em ação movida contra empresas chinesas por plágio da franquia "Carros".

As empresas rés produziram e distribuíram a animação "The Autobots", que apresentava personagens e elementos visuais extremamente similares aos dos filmes "Carros" e "Carros 2". Os estúdios americanos argumentaram violação de direitos autorais e propriedade intelectual.

**A decisão e suas implicações:**

O tribunal reconheceu as semelhanças e determinou indenização às empresas americanas, além da cessação imediata da distribuição do filme chinês. O caso foi amplamente noticiado como um marco no enforcement de propriedade intelectual na China.

**Lições para empresas brasileiras:**

1. **Proteja suas criações internacionalmente**: O Protocolo de Madri permite registrar marcas em mais de 120 países com um único processo
2. **Monitore o mercado**: A vigilância ativa do portfólio de PI é essencial para identificar infrações cedo
3. **Documente tudo**: Contratos, timestamps de criação e registros formais são essenciais para comprovar autoria em disputas

**O valor da proteção preventiva:**

O caso Disney/Pixar reforça a importância de proteger ativos intelectuais antes que violações ocorram. Após identificada uma infração, o caminho jurídico é possível — mas demorado e custoso.

A Moura Rocha estrutura programas de proteção preventiva de propriedade intelectual para empresas brasileiras, combinando registros formais, contratos e monitoramento contínuo.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
