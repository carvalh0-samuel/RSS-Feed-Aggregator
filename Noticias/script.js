// Lista dos portais e seus respectivos feeds RSS
const feeds = [
    { nome: 'G1', url: 'https://g1.globo.com/rss/g1/' },
    { nome: 'Folha de S.Paulo', url: 'https://feeds.folha.uol.com.br/emcimadahora/rss091.xml' },
    { nome: 'CNN Brasil', url: 'https://www.cnnbrasil.com.br/feed/'},
    { nome: 'Metrópoles', url: 'https://www.metropoles.com/feed' },
    { nome: 'Jovem Pan', url: 'https://jovempan.com.br/feed/' },
    { nome: 'Conexão Política', url: 'https://conexaopolitica.com.br/feed/' }
];

const container = document.getElementById('news-container');

async function carregarNoticias() {
    for (const feed of feeds) {
        
        const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
        
        try {
            const resposta = await fetch(rss2jsonUrl);
            const dados = await resposta.json();

            if (dados.status === 'ok') {
                // Pega as 4 notícias mais recentes de cada portal para não lotar a tela
                const noticias = dados.items.slice(0, 4);
                noticias.forEach(noticia => criarCardNoticia(noticia, feed.nome));
            }
        } catch (erro) {
            console.error(`Erro ao carregar o feed do portal ${feed.nome}:`, erro);
        }
    }
}

function extrairImagem(noticia) {
    
    if (noticia.thumbnail) return noticia.thumbnail;
    if (noticia.enclosure && noticia.enclosure.link) return noticia.enclosure.link;

    const textoHTML = noticia.content || noticia.description || '';
    const divTemp = document.createElement('div');
    divTemp.innerHTML = textoHTML;
    
    const imagemEscondida = divTemp.querySelector('img');
    
    if (imagemEscondida && imagemEscondida.src) {
        return imagemEscondida.src;
    }

    return 'https://via.placeholder.com/400x200?text=Sem+Imagem';
}

function criarCardNoticia(noticia, fonte) {
    const card = document.createElement('article');
    card.classList.add('card');

    const dataObj = new Date(noticia.pubDate.replace(' ', 'T') + 'Z');
    const dataPublicacao = dataObj.toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute:'2-digit'
    });

    const imagemUrl = extrairImagem(noticia);

    card.innerHTML = `
        <img src="${imagemUrl}" alt="Imagem ilustrativa da notícia" onerror="this.src='https://via.placeholder.com/400x200?text=Sem+Imagem'">
        <div class="card-content">
            <span class="fonte">${fonte}</span>
            <h3><a href="${noticia.link}" target="_blank" rel="noopener noreferrer">${noticia.title}</a></h3>
            <p class="data">${dataPublicacao}</p>
        </div>
    `;

    container.appendChild(card);
}

carregarNoticias();