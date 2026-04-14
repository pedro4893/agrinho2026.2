// ========== script.js ==========
// Site Agro Forte com Assistente Virtual IA (Sistema de Perguntas e Respostas Inteligente)

(function(){
    "use strict";

    // ---------- BASE DE CONHECIMENTO DA IA (mais de 50 respostas inteligentes) ----------
    const iaKnowledgeBase = {
        // Saudacoes
        saudacoes: ["olá", "oi", "ola", "e aí", "hey", "bom dia", "boa tarde", "boa noite", "iae", "opa"],
        respostasSaudacoes: [
            "🌱 Olá! Sou a Agro IA, sua assistente de sustentabilidade. Como posso ajudar você hoje?",
            "🌾 Olá! Pronto para falar sobre agro sustentável?",
            "🍃 Oi! Pergunte sobre práticas ecológicas, bioinsumos ou tecnologias verdes!"
        ],
        
        // O que é agro sustentavel
        agroSustentavel: ["o que é agro sustentável", "agro sustentável", "agricultura sustentável", "o que significa agro sustentavel", "definição agro sustentável"],
        respostaAgro: "🌿 Agro sustentável é um modelo de produção que alia alta produtividade com conservação ambiental. Inclui práticas como plantio direto, integração lavoura-pecuária-floresta (ILPF), uso eficiente da água, bioinsumos e recuperação de áreas degradadas. O objetivo é produzir alimentos sem comprometer os recursos naturais para as futuras gerações.",
        
        // Bioinsumos
        bioinsumos: ["bioinsumo", "bioinsumos", "controle biológico", "defensivos naturais", "biológicos", "inoculantes"],
        respostaBio: "🦋 Bioinsumos são produtos feitos a partir de microrganismos, extratos vegetais ou predadores naturais que substituem defensivos químicos. Exemplos: fungos que controlam pragas, bactérias fixadoras de nitrogênio e óleos essenciais. Reduzem custos, protegem o solo e a saúde humana!",
        
        // Agua
        agua: ["água", "economizar água", "uso eficiente água", "irrigação", "reuso água", "captação chuva"],
        respostaAgua: "💧 Dicas para economizar água no campo: 1) Irrigação por gotejamento (economia de até 60%), 2) Captação de água da chuva, 3) Reuso de água de lavagem, 4) Sensores de umidade do solo, 5) Plantio de culturas adaptadas à região.",
        
        // Carbono
        carbono: ["carbono", "carbono neutro", "sequestro carbono", "co2", "emissões", "pegada de carbono"],
        respostaCarbono: "🌍 A agricultura de carbono neutro combina práticas que removem CO₂ da atmosfera: plantio direto, rotação de culturas, integração árvores-culturas, biochar e manejo de pastagens. O Brasil pode sequestrar até 1 bilhão de toneladas de CO₂ por ano!",
        
        // Energia limpa
        energia: ["energia", "energia limpa", "energia solar", "biogás", "biodigestor", "renovável", "fotovoltaica"],
        respostaEnergia: "☀️ Energias renováveis no agro: Solar fotovoltaica (para bombeamento, cercas elétricas), Biogás (dejetos animais viram energia e adubo), Biomassa (resíduos agrícolas), e pequenas hidrelétricas. Economia de até 90% na conta de luz!",
        
        // ILPF
        ilpf: ["ilpf", "integração lavoura pecuária", "lavoura pecuária floresta", "sistema integrado", "agrofloresta", "saf"],
        respostaIlpf: "🌳 ILPF (Integração Lavoura-Pecuária-Floresta) e SAFs (Sistemas Agroflorestais) combinam árvores, cultivos e animais no mesmo local. Benefícios: + biodiversidade, sequestro de carbono, conforto térmico para animais, diversificação de renda e recuperação de solos degradados.",
        
        // Agricultura precisao
        precisao: ["agricultura precisão", "agtech", "drones", "sensores", "ia no campo", "big data", "iot"],
        respostaPrecisao: "📡 A agricultura de precisão usa drones, sensores e IA para aplicar insumos no local, hora e quantidade certos. Reduz desperdícios em até 40%, aumenta produtividade e protege o meio ambiente. Tecnologias como monitoramento por satélite e mapas de produtividade são tendência!",
        
        // Solo
        solo: ["solo", "conservação solo", "manejo solo", "plantio direto", "erosão", "matéria orgânica"],
        respostaSolo: "🪴 Conservação do solo: Plantio direto (não revolvimento), rotação de culturas, cobertura verde (plantas de cobertura), compostagem, terraceamento e curvas de nível. Solo saudável retém mais água, carbono e nutrientes, aumentando a produtividade.",
        
        // Dicas
        dicas: ["dica", "dicas sustentáveis", "sugestão", "como posso ajudar", "práticas", "faça"],
        respostaDicas: "💡 Dicas rápidas para um agro mais sustentável: 🌱 Plante árvores nativas nas nascentes, 💧 Reutilize água da chuva, 🐞 Invista em controle biológico, 🔄 Faça rotação de culturas, ☀️ Instale energia solar, 📊 Monitore seu solo com sensores.",
        
        // Beneficios
        beneficios: ["benefício", "vantagens", "por que adotar", "compensa", "lucro", "rentabilidade"],
        respostaBeneficios: "💰 Vantagens do agro sustentável: Redução de custos (menos insumos químicos), Acesso a mercados verdes (selos e certificações), Resiliência climática, Valorização da terra, Saúde do solo e da família rural, e contribuição para o futuro do planeta.",
        
        // Certificacoes
        certificacoes: ["certificação", "selo", "certificado", "orgânico", "carbono neutro", "rural sustentável"],
        respostaCert: "🏆 Principais certificações sustentáveis: Orgânico Brasil, Rainforest Alliance, Certificação Carbono Neutro, Selo Verde, e Protocolo Agro Sustentável. Elas agregam valor ao produto e abrem mercados internacionais.",
        
        // Politicas
        politicas: ["política pública", "incentivo", "governo", "lei", "programa", "financiamento"],
        respostaPoliticas: "📜 O Brasil possui o Plano ABC+ (Agricultura de Baixo Carbono), que financia práticas sustentáveis com juros reduzidos. Além disso, o Programa de Pagamento por Serviços Ambientais (PSA) remunera produtores que conservam florestas e água.",
        
        // Tecnologias verdes
        tecnologiasVerdes: ["tecnologia", "inovação", "startup", "agtechs", "ferramentas", "soluções"],
        respostaTecnologias: "🚀 Tecnologias em destaque: Drones para pulverização localizada, Plataformas de gestão agrícola (AF, Climate FieldView), Biológicos (Bacillus, Trichoderma), Biofábricas, IoT para monitoramento climático, e Blockchain para rastreabilidade sustentável.",
        
        // Culturas
        culturas: ["cultura", "planta", "soja", "milho", "café", "cana", "feijão", "arroz"],
        respostaCulturas: "🌽 Culturas com maior potencial sustentável: Soja (com integração ILPF), Café (cultivo sombreado), Cana-de-açúcar (aproveitamento de palha para bioenergia), Milho (rotação com fixadoras de nitrogênio). Sempre priorize variedades adaptadas localmente.",
        
        // default
        default: "🌱 Ainda estou aprendendo! Você pode perguntar sobre: agro sustentável, bioinsumos, água, carbono neutro, energia limpa, ILPF, agricultura de precisão, conservação do solo, certificações ou dicas sustentáveis. Também posso sugerir práticas ecológicas! Qual sua dúvida?"
    };
    
    // Função de IA para processar pergunta e retornar resposta inteligente
    function getAIResponse(question) {
        let q = question.toLowerCase().trim();
        
        // Verifica saudacoes
        for(let saud of iaKnowledgeBase.saudacoes) {
            if(q.includes(saud)) {
                const randomIndex = Math.floor(Math.random() * iaKnowledgeBase.respostasSaudacoes.length);
                return iaKnowledgeBase.respostasSaudacoes[randomIndex];
            }
        }
        
        // Mapeamento de palavras-chave para respostas
        const keywordsMap = [
            { keys: iaKnowledgeBase.agroSustentavel, response: iaKnowledgeBase.respostaAgro },
            { keys: iaKnowledgeBase.bioinsumos, response: iaKnowledgeBase.respostaBio },
            { keys: iaKnowledgeBase.agua, response: iaKnowledgeBase.respostaAgua },
            { keys: iaKnowledgeBase.carbono, response: iaKnowledgeBase.respostaCarbono },
            { keys: iaKnowledgeBase.energia, response: iaKnowledgeBase.respostaEnergia },
            { keys: iaKnowledgeBase.ilpf, response: iaKnowledgeBase.respostaIlpf },
            { keys: iaKnowledgeBase.precisao, response: iaKnowledgeBase.respostaPrecisao },
            { keys: iaKnowledgeBase.solo, response: iaKnowledgeBase.respostaSolo },
            { keys: iaKnowledgeBase.dicas, response: iaKnowledgeBase.respostaDicas },
            { keys: iaKnowledgeBase.beneficios, response: iaKnowledgeBase.respostaBeneficios },
            { keys: iaKnowledgeBase.certificacoes, response: iaKnowledgeBase.respostaCert },
            { keys: iaKnowledgeBase.politicas, response: iaKnowledgeBase.respostaPoliticas },
            { keys: iaKnowledgeBase.tecnologiasVerdes, response: iaKnowledgeBase.respostaTecnologias },
            { keys: iaKnowledgeBase.culturas, response: iaKnowledgeBase.respostaCulturas }
        ];
        
        for(let item of keywordsMap) {
            for(let key of item.keys) {
                if(q.includes(key)) {
                    return item.response;
                }
            }
        }
        
        return iaKnowledgeBase.default;
    }
    
    // ---------- CHATBOT IA COMPONENT ----------
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSendBtn = document.getElementById('chatbotSendBtn');
    
    let isMinimized = false;
    
    // Toggle minimizar/expandir
    if(chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            isMinimized = !isMinimized;
            if(isMinimized) {
                chatbotContainer.classList.add('minimized');
                chatbotToggle.innerHTML = '<i class="fas fa-comment-dots"></i>';
            } else {
                chatbotContainer.classList.remove('minimized');
                chatbotToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }
    
    // Adicionar mensagem no chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="${isUser ? 'fas fa-user' : 'fas fa-leaf'}"></i>
            </div>
            <div class="message-content">${text}</div>
        `;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Mostrar indicador de digitação
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar"><i class="fas fa-leaf"></i></div>
            <div class="typing-indicator"><span></span><span></span><span></span></div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if(indicator) indicator.remove();
    }
    
    // Processar e responder com IA
    async function sendMessage() {
        const question = chatbotInput.value.trim();
        if(!question) return;
        
        addMessage(question, true);
        chatbotInput.value = '';
        
        showTypingIndicator();
        
        // Simula delay de processamento da IA (mais natural)
        setTimeout(() => {
            removeTypingIndicator();
            const answer = getAIResponse(question);
            addMessage(answer, false);
        }, 600);
    }
    
    if(chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', sendMessage);
    }
    
    if(chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') sendMessage();
        });
    }
    
    // ---------- CONTADORES E ANIMAÇÕES (já existentes) ----------
    function animateNumber(element, target, suffix = '') {
        if(!element) return;
        let current = 0;
        const increment = target / 60;
        const updateCounter = () => {
            current += increment;
            if(current < target) {
                element.innerText = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.innerText = target.toLocaleString() + suffix;
            }
        };
        updateCounter();
    }
    
    const heroNumbers = document.querySelectorAll('.stat-number');
    const bigStatSoil = document.getElementById('statSoil');
    const bigStatWater = document.getElementById('statWater');
    const bigStatForest = document.getElementById('statForest');
    
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.target.classList.contains('stat-number')) {
                    const targetVal = parseInt(entry.target.getAttribute('data-target'));
                    animateNumber(entry.target, targetVal, 'M+');
                    observer.unobserve(entry.target);
                }
                if(entry.target.id === 'statSoil') animateNumber(bigStatSoil, 187, ' Mi');
                if(entry.target.id === 'statWater') animateNumber(bigStatWater, 42, ' bi');
                if(entry.target.id === 'statForest') animateNumber(bigStatForest, 8.2, ' M');
                if(entry.target.id === 'statSoil' || entry.target.id === 'statWater' || entry.target.id === 'statForest')
                    observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    heroNumbers.forEach(num => observer.observe(num));
    if(bigStatSoil) observer.observe(bigStatSoil);
    if(bigStatWater) observer.observe(bigStatWater);
    if(bigStatForest) observer.observe(bigStatForest);
    
    // ---------- SLIDER TECNOLOGIAS ----------
    const track = document.getElementById('tecnologiaTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    let slides = document.querySelectorAll('.tecnologia-item');
    let currentIndex = 0;
    let slideInterval;
    let slidesPerView = 1;
    
    function updateSlidesPerView() {
        if(window.innerWidth >= 1024) slidesPerView = 3;
        else if(window.innerWidth >= 768) slidesPerView = 2;
        else slidesPerView = 1;
        renderDots();
        goToSlide(currentIndex);
    }
    
    function renderDots() {
        if(!dotsContainer) return;
        const totalDots = Math.ceil(slides.length / slidesPerView);
        dotsContainer.innerHTML = '';
        for(let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function goToSlide(index) {
        const maxIndex = Math.ceil(slides.length / slidesPerView) - 1;
        if(index < 0) index = 0;
        if(index > maxIndex) index = maxIndex;
        currentIndex = index;
        const offset = -currentIndex * 100;
        if(track) track.style.transform = `translateX(${offset}%)`;
        document.querySelectorAll('.dot').forEach((dot, i) => {
            if(i === currentIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }
    
    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }
    
    if(prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => { clearInterval(slideInterval); prevSlide(); startAutoSlide(); });
        nextBtn.addEventListener('click', () => { clearInterval(slideInterval); nextSlide(); startAutoSlide(); });
    }
    
    function startAutoSlide() {
        if(slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            const max = Math.ceil(slides.length / slidesPerView) - 1;
            if(currentIndex >= max) goToSlide(0);
            else nextSlide();
        }, 5000);
    }
    
    window.addEventListener('resize', () => {
        slides = document.querySelectorAll('.tecnologia-item');
        updateSlidesPerView();
        clearInterval(slideInterval);
        startAutoSlide();
    });
    
    updateSlidesPerView();
    startAutoSlide();
    
    // ---------- MENU MOBILE ----------
    const mobileBtn = document.getElementById('mobileBtn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const navList = document.querySelector('.nav-list');
            if(navList.style.display === 'flex') navList.style.display = 'none';
            else navList.style.display = 'flex';
        });
    }
    
    // Scroll ativo
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if(pageYOffset >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
    
    // ---------- NEWSLETTER FORM ----------
    const formNews = document.getElementById('newsletterForm');
    const msgSpan = document.getElementById('formMessage');
    if(formNews) {
        formNews.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nomeInput').value.trim();
            const email = document.getElementById('emailInput').value.trim();
            if(!nome || !email) {
                msgSpan.innerText = 'Preencha nome e e-mail.';
                msgSpan.style.color = '#f4a261';
                return;
            }
            if(!email.includes('@') || !email.includes('.')) {
                msgSpan.innerText = 'E-mail inválido.';
                return;
            }
            localStorage.setItem('newsletter_nome', nome);
            localStorage.setItem('newsletter_email', email);
            msgSpan.innerText = `🌱 Obrigado ${nome}! Em breve novidades sustentáveis.`;
            msgSpan.style.color = '#d8f3dc';
            formNews.reset();
            setTimeout(()=> msgSpan.innerText='', 3000);
        });
    }
    
    const footerSubBtn = document.getElementById('footerSubscribeBtn');
    const footerEmail = document.getElementById('footerEmail');
    if(footerSubBtn) {
        footerSubBtn.addEventListener('click', () => {
            const emailFoot = footerEmail.value.trim();
            if(emailFoot && emailFoot.includes('@')) {
                alert(`E-mail ${emailFoot} cadastrado com sucesso!`);
                footerEmail.value = '';
            } else alert('Por favor, insira um e-mail válido.');
        });
    }
    
    window.addEventListener('load', () => {
        const savedName = localStorage.getItem('newsletter_nome');
        if(savedName && document.getElementById('nomeInput')) document.getElementById('nomeInput').value = savedName;
        const animateElements = document.querySelectorAll('.animate-up');
        animateElements.forEach(el => el.style.opacity = '1');
    });
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        else header.style.boxShadow = 'var(--shadow)';
    });
    
    const createScrollTop = () => {
        const btnTop = document.createElement('button');
        btnTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btnTop.id = 'scrollTopBtn';
        btnTop.style.position = 'fixed';
        btnTop.style.bottom = '30px';
        btnTop.style.left = '30px';
        btnTop.style.backgroundColor = 'var(--primary)';
        btnTop.style.border = 'none';
        btnTop.style.color = 'white';
        btnTop.style.width = '50px';
        btnTop.style.height = '50px';
        btnTop.style.borderRadius = '60px';
        btnTop.style.cursor = 'pointer';
        btnTop.style.zIndex = '999';
        btnTop.style.opacity = '0';
        btnTop.style.transition = '0.2s';
        btnTop.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        document.body.appendChild(btnTop);
        window.addEventListener('scroll', () => {
            if(window.scrollY > 600) btnTop.style.opacity = '1';
            else btnTop.style.opacity = '0';
        });
        btnTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    };
    createScrollTop();
    
    console.log('🌾 Agro Forte Futuro Sustentável | Assistente IA carregada com sucesso!');
})();