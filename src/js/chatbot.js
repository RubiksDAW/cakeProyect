// js/chatbot.js

// Simulación de chatbot con IA
class Chatbot {
    constructor() {
        this.chatContainer = document.getElementById('chat-container');
        this.userInput = document.getElementById('user-input');
        this.sendBtn = document.getElementById('send-btn');
        
        // Respuestas predefinidas del chatbot
        this.botResponses = {
            'hola': '¡Hola! ¿En qué puedo ayudarte hoy? ¿Estás planeando algún evento especial?',
            'precio': 'Nuestros precios varían según el tamaño y complejidad del pastel. ¿Para cuántas personas sería?',
            'bodas': '¡Felicidades! Tenemos una amplia variedad de pasteles de boda. ¿Prefieres algo clásico o más moderno?',
            'cumpleaños': 'Los pasteles de cumpleaños son nuestra especialidad. ¿Para niño o adulto? ¿Algún tema o color preferido?',
            'vegano': 'Sí, tenemos opciones veganas. ¿Te interesa algún sabor en particular?',
            'sin gluten': 'Ofrecemos deliciosas alternativas sin gluten. ¿Qué tipo de postre buscas?',
            'entrega': 'Realizamos entregas en toda la ciudad. ¿Cuál es tu código postal?',
            'horario': 'Estamos abiertos de lunes a viernes de 8:00 a 20:00, sábados de 9:00 a 18:00 y domingos de 10:00 a 14:00.',
            'gracias': '¡De nada! Estamos aquí para ayudarte. ¿Necesitas algo más?'
        };
        
        this.init();
    }
    
    init() {
        this.sendBtn.addEventListener('click', () => this.processUserMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.processUserMessage();
            }
        });
    }
    
    // Función para agregar mensajes al chat
    addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = message;
        this.chatContainer.appendChild(messageDiv);
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
    
    // Función para procesar el mensaje del usuario
    processUserMessage() {
        const message = this.userInput.value.trim().toLowerCase();
        if (message === '') return;
        
        this.addMessage(message, true);
        this.userInput.value = '';
        
        // Simular tiempo de respuesta
        setTimeout(() => {
            let response = 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
            
            // Buscar palabras clave en el mensaje
            for (const [keyword, botResponse] of Object.entries(this.botResponses)) {
                if (message.includes(keyword)) {
                    response = botResponse;
                    break;
                }
            }
            
            this.addMessage(response, false);
        }, 1000);
    }
}

// js/script.js

// Funcionalidades generales del sitio
class DeliciasDulces {
    constructor() {
        this.init();
    }
    
    init() {
        this.initChatbot();
        this.initFormHandler();
        this.initSmoothScroll();
        this.initRecommendations();
    }
    
    initChatbot() {
        // Inicializar el chatbot
        if (document.getElementById('chat-container')) {
            new Chatbot();
        }
    }
    
    initFormHandler() {
        // Manejar el formulario de contacto
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(contactForm);
            });
        }
    }
    
    handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simular envío del formulario
        console.log('Datos del formulario:', data);
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        form.reset();
    }
    
    initSmoothScroll() {
        // Scroll suave para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    initRecommendations() {
        // Simulación de recomendaciones personalizadas
        setTimeout(() => {
            const recommendationTitle = document.querySelector('.section-title h2');
            if (recommendationTitle && recommendationTitle.textContent.includes('Recomendaciones')) {
                recommendationTitle.textContent = 'Recomendaciones Personalizadas para Ti';
                document.querySelector('.section-title p').textContent = 'Basado en conversaciones similares, creemos que te pueden interesar estos productos:';
            }
        }, 3000);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new DeliciasDulces();
});