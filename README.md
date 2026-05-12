# 📰 Painel de Notícias (RSS Feed Aggregator)

Um agregador de notícias simples, dinâmico e responsivo desenvolvido inteiramente no Front-end. O projeto consome feeds RSS de grandes portais de jornalismo do Brasil em tempo real e exibe as informações em um formato de painel (cards).

## 🚀 Funcionalidades

*   **Consumo Multicontas:** Integração simultânea com múltiplos feeds RSS (G1, Folha de S.Paulo, Metrópoles, Jovem Pan, Conexão Política, CNN Brasil).
*   **Bypass de CORS:** Utilização da API pública `rss2json` para converter os arquivos XML originais em JSON e evitar bloqueios de segurança nativos do navegador.
*   **Tratamento de Dados:** Correção automática do fuso horário (UTC para horário local) das datas de publicação.
*   **Web Scraping Leve:** Lógica inteligente nativa para vasculhar o HTML recebido e extrair imagens escondidas no corpo da notícia, garantindo que os cards tenham apelo visual mesmo quando o portal não envia uma miniatura explícita.
*   **Interface Responsiva:** Layout moderno construído com CSS Grid, adaptando-se perfeitamente a telas de computadores e smartphones.

## 🛠️ Tecnologias Utilizadas

*   **HTML5** (Semântica e estruturação)
*   **CSS3** (Grid Layout, Flexbox e animações de hover)
*   **Vanilla JavaScript** (ES6+, Fetch API, Async/Await e manipulação de DOM)

## ⚙️ Como executar o projeto

Como o projeto é construído 100% no lado do cliente (Front-end) e não exige um servidor ou banco de dados local, a execução é direta.
