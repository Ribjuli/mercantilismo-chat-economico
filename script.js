document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const bgMusic = document.getElementById('background-music');
    const toggleMusicBtn = document.getElementById('toggle-music');
    
    // Music control
    let isMusicPlaying = true;
    bgMusic.volume = 0.2;

    function updateMusicIcon() {
        toggleMusicBtn.innerHTML = `<i class="fas fa-volume-${isMusicPlaying ? 'up' : 'mute'}"></i>`;
    }

    toggleMusicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
        } else {
            bgMusic.play();
        }
        isMusicPlaying = !isMusicPlaying;
        updateMusicIcon();
    });

    const messages = [
        {
            sender: 'Thomas Mun',
            content: '¡Hola profesora! Julian RIbaric, Nannaput Gogfai y Vicente Dellamagiore de 4to 5ta ESCCP me pidieron si con los capos del mercantilismo le contábamos qué onda.',
            image: 'https://media.discordapp.net/attachments/1182709690195513455/1386430595558543592/assets2Ftask_01jycjc670f3qsn83krrw90pd82F1750621174_img_0.png',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Jean-Baptiste Colbert',
            content: 'Comencemos con la Balanza Comercial. Este concepto es fundamental en el mercantilismo y representa la diferencia entre las exportaciones e importaciones de un país. Para nosotros, una balanza comercial positiva significa prosperidad nacional.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Jean-Baptiste Colbert',
            content: 'En la Francia del siglo XVII, implementamos políticas estrictas para mantener una balanza comercial favorable. Esto incluía el control detallado de la calidad de los productos exportados y la restricción de importaciones de bienes de lujo.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Thomas Mun',
            content: 'La balanza comercial positiva era crucial porque creíamos que la riqueza de una nación se medía por su acumulación de metales preciosos. Por eso fomentábamos las exportaciones y limitábamos las importaciones.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'William Petty',
            content: 'El Proteccionismo Económico fue otra política fundamental. Implementamos aranceles altos, subsidios a la producción local y regulaciones comerciales estrictas para proteger nuestras industrias de la competencia extranjera.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Antoine de Montchrestien',
            content: 'Las famosas "Leyes de Navegación" son un ejemplo perfecto del proteccionismo. En Inglaterra, estas leyes exigían que las mercancías se transportaran en barcos ingleses con tripulación inglesa, fortaleciendo así la marina mercante nacional.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Jean-Baptiste Colbert',
            content: 'En Francia, desarrollamos el sistema de "manufacturas reales", fábricas estatales protegidas que producían bienes de lujo como los tapices de Gobelins y la porcelana de Sèvres, contribuyendo al prestigio nacional.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Thomas Mun',
            content: 'El Colonialismo fue el tercer pilar del mercantilismo. Las colonias eran esenciales como fuentes de materias primas y mercados cautivos para los productos metropolitanos.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'William Petty',
            content: 'El sistema colonial mercantilista establecía que las colonias solo podían comerciar con su metrópoli. Las colonias británicas en América, por ejemplo, debían vender sus materias primas exclusivamente a Gran Bretaña y comprar productos manufacturados británicos.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        },
        {
            sender: 'Jean-Baptiste Colbert',
            content: 'Este sistema colonial dio origen al comercio triangular: Europa enviaba productos manufacturados a África, África proporcionaba esclavos a América, y América enviaba materias primas como azúcar, tabaco y algodón a Europa.',
            avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
        }
    ];

    const teacherQuestions = [
        {
            question: '¡Muy interesante! Me gustaría saber más sobre estos conceptos del mercantilismo.',
            responses: [
                {
                    sender: 'Thomas Mun',
                    content: 'El mercantilismo también influyó significativamente en el desarrollo de las instituciones financieras modernas. Los bancos y las compañías comerciales por acciones surgieron para facilitar el comercio internacional y gestionar los flujos de metales preciosos.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Las políticas mercantilistas fueron cruciales para el desarrollo industrial. La protección de industrias nacionales y el control del comercio internacional sentaron las bases para la Revolución Industrial. En Francia, por ejemplo, las manufacturas reales sirvieron como centros de innovación tecnológica.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                }
            ]
        },
        {
            question: '¿Podrían explicarme más sobre cómo el mercantilismo afectó a las colonias y su desarrollo?',
            responses: [
                {
                    sender: 'William Petty',
                    content: 'El impacto en las colonias fue profundo y duradero. El sistema mercantilista creó una relación de dependencia económica que persistió incluso después de la independencia política. Las colonias fueron forzadas a especializarse en la producción de materias primas, lo que limitó su desarrollo industrial.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Además, el sistema colonial mercantilista estableció patrones de comercio internacional que aún influyen en la economía global. La especialización forzada de las colonias en materias primas creó desequilibrios económicos que algunos países aún están tratando de superar.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                }
            ]
        },
        {
            question: '¿Qué similitudes encuentran entre las políticas mercantilistas y algunas políticas económicas actuales?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Las políticas proteccionistas modernas tienen muchas similitudes con el mercantilismo. Por ejemplo, los aranceles comerciales, los subsidios a industrias nacionales y las restricciones a la inversión extranjera son herramientas que aún se utilizan hoy en día para proteger las economías nacionales.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                },
                {
                    sender: 'William Petty',
                    content: 'También vemos ecos del mercantilismo en las guerras comerciales contemporáneas y en la preocupación por las balanzas comerciales. Países como China han sido acusados de practicar políticas neomercantilistas al mantener artificialmente bajas sus monedas para impulsar las exportaciones.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                }
            ]
        },
        {
            question: '¿Cómo influyó el mercantilismo en el desarrollo de los sistemas monetarios?',
            responses: [
                {
                    sender: 'Thomas Mun',
                    content: 'El mercantilismo fue crucial en el desarrollo de los sistemas monetarios modernos. La acumulación de metales preciosos llevó a la creación de los primeros bancos centrales y al desarrollo de instrumentos financieros como las letras de cambio y los primeros billetes de banco.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'La necesidad de gestionar grandes cantidades de oro y plata también llevó al desarrollo de sistemas contables más sofisticados y a la creación de las primeras bolsas de valores. El Banco de Inglaterra, por ejemplo, fue fundado en 1694 en parte para gestionar la deuda pública y facilitar el comercio internacional.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                }
            ]
        },
        {
            question: '¿Qué impacto tuvo el mercantilismo en el desarrollo de la navegación y la tecnología marítima?',
            responses: [
                {
                    sender: 'Antoine de Montchrestien',
                    content: 'El mercantilismo impulsó enormemente el desarrollo naval. La necesidad de proteger las rutas comerciales y mantener el dominio marítimo llevó a importantes avances en la construcción de barcos, la navegación y la cartografía. Las potencias europeas competían por desarrollar barcos más rápidos y resistentes.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'También se desarrollaron nuevos instrumentos de navegación y técnicas de mapeo. La Compañía de las Indias Orientales, por ejemplo, financió numerosas expediciones que contribuyeron al conocimiento geográfico y al desarrollo de la navegación astronómica.',
                    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
                }
            ]
        }
    ];

    function createMessageElement(message, delay = 0) {
        return new Promise(resolve => {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.sender === 'Profesora' ? 'sent' : 'received'}`;

                const avatarImg = document.createElement('img');
                avatarImg.src = message.avatar;
                avatarImg.className = 'avatar';
                avatarImg.onerror = function() {
                    this.src = 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg';
                };

                const contentDiv = document.createElement('div');
                contentDiv.className = 'message-content';

                const nameDiv = document.createElement('div');
                nameDiv.className = 'name';
                nameDiv.textContent = message.sender;

                const textDiv = document.createElement('div');
                textDiv.textContent = message.content;

                contentDiv.appendChild(nameDiv);
                contentDiv.appendChild(textDiv);

                if (message.image) {
                    const img = document.createElement('img');
                    img.src = message.image;
                    img.className = 'message-image';
                    img.onerror = function() {
                        this.style.display = 'none';
                    };
                    contentDiv.appendChild(img);
                }

                const timestamp = document.createElement('div');
                timestamp.className = 'timestamp';
                timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                contentDiv.appendChild(timestamp);

                if (message.sender === 'Profesora') {
                    messageDiv.appendChild(contentDiv);
                    messageDiv.appendChild(avatarImg);
                } else {
                    messageDiv.appendChild(avatarImg);
                    messageDiv.appendChild(contentDiv);
                }

                messagesContainer.appendChild(messageDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                resolve();
            }, delay);
        });
    }

    function createTypingIndicator(sender) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message received typing-message';
        
        const avatarImg = document.createElement('img');
        avatarImg.src = sender.avatar;
        avatarImg.className = 'avatar';
        avatarImg.onerror = function() {
            this.src = 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg';
        };

        const indicatorDiv = document.createElement('div');
        indicatorDiv.className = 'typing-indicator';
        indicatorDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;

        typingDiv.appendChild(avatarImg);
        typingDiv.appendChild(indicatorDiv);
        return typingDiv;
    }

    async function showTypingIndicator(sender) {
        const typingIndicator = createTypingIndicator(sender);
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingIndicator;
    }

    let isResponding = false;

    async function displayMessages() {
        // Show only the first message from Thomas Mun
        const firstMessage = messages[0];
        const typingIndicator = await showTypingIndicator(firstMessage);
        await new Promise(resolve => setTimeout(resolve, 2000));
        typingIndicator.remove();
        await createMessageElement(firstMessage);
        
        // Enable the send button for teacher's first response
        messageInput.value = teacherQuestions[0].question;
        sendButton.disabled = false;
    }

    let currentQuestionIndex = 0;
    let currentMessageIndex = 1; // Start from second message since first is already shown

    sendButton.addEventListener('click', async () => {
        if (sendButton.disabled || isResponding) return;
        
        const currentQuestion = teacherQuestions[currentQuestionIndex];
        
        // Send teacher's question and disable input
        sendButton.disabled = true;
        await createMessageElement({
            sender: 'Profesora',
            content: currentQuestion.question,
            avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1386430572460638409/WhatsApp_Image_2025-06-22_at_16.36.17_921c517f.jpg'
        });

        // Clear the input after sending
        messageInput.value = '';

        // Add a delay before showing the typing indicator
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show next set of messages from the initial conversation
        isResponding = true;
        for (let i = 0; i < 3 && currentMessageIndex < messages.length; i++, currentMessageIndex++) {
            const message = messages[currentMessageIndex];
            const typingIndicator = await showTypingIndicator(message);
            await new Promise(resolve => setTimeout(resolve, 2000));
            typingIndicator.remove();
            await createMessageElement(message);
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        // If we've shown all initial messages, proceed with Q&A responses
        if (currentMessageIndex >= messages.length) {
            // Show responses with typing indicators
            for (let response of currentQuestion.responses) {
                const typingIndicator = await showTypingIndicator(response);
                await new Promise(resolve => setTimeout(resolve, 2000));
                typingIndicator.remove();
                await createMessageElement(response);
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            currentQuestionIndex++;
            
            if (currentQuestionIndex >= teacherQuestions.length) {
                messageInput.value = '¡Gracias por la explicación!';
                sendButton.disabled = true;
            } else {
                messageInput.value = teacherQuestions[currentQuestionIndex].question;
                sendButton.disabled = false;
            }
        } else {
            // Enable send button for next interaction
            messageInput.value = teacherQuestions[currentQuestionIndex].question;
            sendButton.disabled = false;
        }
        
        isResponding = false;
    });

    displayMessages();
});
