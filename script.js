document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const bgMusic = document.getElementById('background-music');
    const toggleMusicBtn = document.getElementById('toggle-music');

    // Control de música
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

    const teacherQuestions = [
{
            question: 'Chicos, Julián, Nannaput y Vicente me contaron que estuvieron trabajando el pensamiento mercantilista. Me encantaría que ustedes mismos me expliquen de qué se trata. ¿Les parece si empezamos con el contexto en el que surgieron sus ideas?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: '¡Por supuesto, profe! El mercantilismo se desarrolló entre los siglos XVI y XVIII, en un momento de enormes transformaciones: el surgimiento de los Estados modernos, el crecimiento del comercio internacional, y monarcas absolutistas como Luis XIV que buscaban consolidar su poder. En ese contexto, se creía que la riqueza de un país se medía por la cantidad de oro y plata que poseía.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Con los descubrimientos de América y Asia, el comercio global explotó. Las potencias europeas empezaron a competir por colonias, rutas marítimas, y sobre todo por metales preciosos, que eran símbolo máximo de poder.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356',
                    image: 'https://media.discordapp.net/attachments/1182709690195513455/1388665641237479535/mercantilismo-ingles.png?ex=6861cf29&is=68607da9&hm=21da9b0a0fe688c0bc185b456ed6ad2e4686ba0a5631acaa6f413cf60c316b40&=&format=webp&quality=lossless&width=1437&height=1150'
                },
                {
                    sender: 'Antonio Serra',
                    content: 'Todavía no existía el capitalismo como lo conocemos hoy. El Estado tenía un rol central: debía intervenir activamente para fortalecer la economía. Nuestro objetivo era aumentar la riqueza nacional mediante el comercio exterior: más exportaciones, menos importaciones.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388659518187245719/assets2Ftask_01jywd660zfdc8sb54sm1h192m2F1751152596_img_0.png?ex=6861c975&is=686077f5&hm=267aff4fe65ee2851c021f037a04458b0f810cce4bf6e3ba79a73d4d081f5ddb&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Giovanni Botero',
                    content: 'Y no se trataba solo de economía. La riqueza permitía financiar ejércitos, sostener conquistas y afirmar el control interno. Por eso nuestras teorías eran también una estrategia política: economía y poder iban de la mano.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388660063899746334/assets2Ftask_01jywdawrje6q9jjm1dypd76992F1751152749_img_0.png?ex=6861c9f7&is=68607877&hm=d105d9486a21e10131dba45bc762d7148a71e55517dbd377b35b3df3a40741f8&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Y vale aclarar que el mercantilismo no se aplicaba igual en todos los países: en Francia se enfocaba en la producción industrial, en Inglaterra en el comercio marítimo, y en España y Portugal en la extracción de metales de América.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                }
            ]
        },
        {
            question: '¡Qué interesante! Y ya que hablamos de distintos enfoques, ¿cuál de ustedes se considera el principal exponente del mercantilismo?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Con permiso, creo que ese soy yo. Fui ministro de finanzas del Rey Luis XIV. Mi gestión marcó un antes y un después en la economía francesa. Implementé una política económica para fortalecer la industria nacional, limitar importaciones y fomentar exportaciones. Todo con un objetivo claro: que el oro se quedara en Francia.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                }
            ]
        },
        {
            question: '¿Y cómo lo lograste concretamente?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: '– Creé y financié manufacturas reales, fábricas estatales para competir con los productos extranjeros.\n– Impuse altos aranceles para proteger la industria nacional.\n– Mejoré la infraestructura: rutas, puertos, canales… todo para facilitar el comercio.\n– Y fomenté compañías comerciales que comerciaban con las colonias, asegurando mercados y materias primas.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Eso también lo hicimos en Inglaterra. Yo defendí estas ideas en mi obra La riqueza de Inglaterra por el comercio exterior. Sostuve que un país debe exportar más de lo que importa para acumular metales preciosos. Además, apoyé que el Estado intervenga para fomentar la navegación, proteger nuestras industrias y controlar el comercio colonial.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356'
                }
            ]
        },
        {
            question: 'Entonces, ustedes no pensaban que la economía fuera algo neutro, ¿no?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'En absoluto. La economía era una herramienta del poder del Estado. Intervenir no solo era válido: era necesario.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                }
            ]
        },
        {
            question: '¿Y cuáles eran las ideas principales que defendían?',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Dos postulados fundamentales del mercantilismo son:\n– La balanza comercial favorable\n– Y el proteccionismo económico',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Con la balanza comercial nos referimos a exportar más de lo que se importa. Eso trae más riqueza al país, porque los pagos de otros países llegaban en oro y plata. Una balanza positiva fortalece al Estado; una negativa, lo debilita.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356',
                    image: 'https://media.discordapp.net/attachments/1182709690195513455/1388663355119763486/assets2Ftask_01jywe15veeahahfp8r36jcksn2F1751153511_img_0.png?ex=6861cd07&is=68607b87&hm=1f3e867b0b15a81f5f58fb0a756d386b9420592a786f9f85739b8b1d117b30b6&=&format=webp&quality=lossless&width=1747&height=1165'
                },
                {
                    sender: 'Antonio Serra',
                    content: 'Y para lograr esa balanza, necesitábamos proteger la economía local. Por eso apoyábamos el proteccionismo:\n– Imponer aranceles a productos extranjeros\n– Prohibir o limitar ciertas importaciones\n– Apoyar a productores locales con subsidios\nTodo esto apuntaba a que lo nacional tuviera más ventaja, y no depender del extranjero.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388659518187245719/assets2Ftask_01jywd660zfdc8sb54sm1h192m2F1751152596_img_0.png?ex=6861c975&is=686077f5&hm=267aff4fe65ee2851c021f037a04458b0f810cce4bf6e3ba79a73d4d081f5ddb&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Y no termina ahí. Otros pilares del mercantilismo fueron:\n– El colonialismo, para acceder a materias primas y mercados cautivos\n– La mano de obra abundante, para producir más y más barato\n– Y el comercio marítimo, que garantizaba rutas seguras y mercados globales',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Giovanni Botero',
                    content: 'Todo estaba organizado: el comercio, la industria, los impuestos… El Estado no se quedaba mirando, dirigía activamente la economía.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388660063899746334/assets2Ftask_01jywdawrje6q9jjm1dypd76992F1751152749_img_0.png?ex=6861c9f7&is=68607877&hm=d105d9486a21e10131dba45bc762d7148a71e55517dbd377b35b3df3a40741f8&=&format=webp&quality=lossless&width=1274&height=1274'
                }
            ]
        },
        {
            question: '¡Qué claridad! Me queda una duda. ¿Qué piensan de William Petty? Lo vi en algunos textos pero no lo veo acá.',
            responses: [
                {
                    sender: 'Thomas Mun',
                    content: 'Buena pregunta. Petty fue un pionero de la estadística económica. No fue un mercantilista puro, pero sus estudios sobre población, impuestos y tierras influyeron mucho en nuestro tiempo.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Y hay otros pensadores que también merecen ser mencionados, aunque no llegaron a tener tanto impacto como el mío…\n– Luis Ortiz, en España, ya hablaba en el siglo XVI de fortalecer la industria local.\n– Gasparo Scaruffi, propuso reformas monetarias en Italia.\n– Josiah Child, en Inglaterra, defendió el control estatal del comercio.\n– Y Antoine de Montchrestien, uno de los primeros en hablar de "economía política".',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                }
            ]
        },
        {
            question: '¡Qué repaso tan completo! ¿Podrían cerrar con una reflexión general sobre el impacto de sus ideas?',
            responses: [
                {
                    sender: 'Giovanni Botero',
                    content: 'El mercantilismo no fue solo una teoría económica, sino una forma de organizar el poder. Su objetivo era fortalecer al país acumulando riqueza, controlando el comercio y haciendo que el Estado tuviera un rol activo.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388660063899746334/assets2Ftask_01jywdawrje6q9jjm1dypd76992F1751152749_img_0.png?ex=6861c9f7&is=68607877&hm=d105d9486a21e10131dba45bc762d7148a71e55517dbd377b35b3df3a40741f8&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Nosotros demostramos que el mercado no se regula solo. Si el Estado no interviene, se pierde riqueza, se desordena la economía y se debilita la soberanía.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Antonio Serra',
                    content: 'Incluso hoy, cuando un país impone aranceles o protege sectores estratégicos, está aplicando principios mercantilistas, aunque no lo diga así.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388659518187245719/assets2Ftask_01jywd660zfdc8sb54sm1h192m2F1751152596_img_0.png?ex=6861c975&is=686077f5&hm=267aff4fe65ee2851c021f037a04458b0f810cce4bf6e3ba79a73d4d081f5ddb&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Nuestro legado fue mostrar que la economía está ligada a intereses políticos y decisiones estatales. Sin dirección, la riqueza se concentra o se fuga.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356'
                },
                {
                    sender: 'Giovanni Botero',
                    content: 'Y que el comercio, además de ser intercambio, es también una forma de poder. Las flotas, rutas, tratados y colonias eran parte de esa disputa.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388660063899746334/assets2Ftask_01jywdawrje6q9jjm1dypd76992F1751152749_img_0.png?ex=6861c9f7&is=68607877&hm=d105d9486a21e10131dba45bc762d7148a71e55517dbd377b35b3df3a40741f8&=&format=webp&quality=lossless&width=1274&height=1274'
                },
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Hoy el mundo cambió, pero muchas de nuestras ideas siguen presentes. Sin mercantilismo no habría habido Estados modernos ni planificación económica.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Conocer estas ideas no es solo estudiar el pasado. Es entender el presente y pensar con más herramientas el futuro.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356'
                }
            ]
        },
        {
            question: '¡Excelente reflexión, chicos! Claros, organizados, creativos y con mucha profundidad. ¡Felicitaciones a Julián, Nannaput y Vicente por este gran trabajo!',
            responses: [
                {
                    sender: 'Jean-Baptiste Colbert',
                    content: 'Un honor, profe. Que viva el orden, el oro y las exportaciones.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388658211124416634/Gustave_Demoulin_-_Jean-Baptiste_Colbert_French_minister_of_finance_1898_-_MeisterDrucke-778571.png?ex=6861c83d&is=686076bd&hm=fdabea99372bb1a01794196233732de0d9b4765f7177715b8123bb798f540869&=&format=webp&quality=lossless&width=1199&height=1274',
                    image: 'https://media.discordapp.net/attachments/1182709690195513455/1388664706998210623/image.png?ex=6861ce4a&is=68607cca&hm=cae58f6690d64056affdb0c5604f21d0fba1775e779fd2a043b3a976ea2e692e&=&format=webp&quality=lossless&width=1286&height=1274'
                },
                {
                    sender: 'Thomas Mun',
                    content: 'Y recuerden: en economía, el que comercia… domina.',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388657493101772870/merc-3.png?ex=6861c792&is=68607612&hm=24259093e0794d6d80ee4f9ab39889c5e4c3347996b02d90de55cf9a238d5676&=&format=webp&quality=lossless&width=316&height=356'
                },
                {
                    sender: 'Antonio Serra',
                    content: 'Hasta la próxima clase. ¡Gracias por dejarnos contar nuestra visión!',
                    avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388659518187245719/assets2Ftask_01jywd660zfdc8sb54sm1h192m2F1751152596_img_0.png?ex=6861c975&is=686077f5&hm=267aff4fe65ee2851c021f037a04458b0f810cce4bf6e3ba79a73d4d081f5ddb&=&format=webp&quality=lossless&width=1274&height=1274'
                }
            ]
        }
    ];

    function createMessageElement(message, delay = 0) {
        return new Promise(resolve => {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.sender === 'Profe Ceci 👩‍🏫' || message.sender === 'Profesora' ? 'sent' : 'received'}`;

                const avatarImg = document.createElement('img');
                avatarImg.src = message.avatar;
                avatarImg.className = 'avatar';
                avatarImg.onerror = function() {
                    this.src = 'https://media.discordapp.net/attachments/1182709690195513455/1388673649552130048/image0.jpg?ex=6861d69e&is=6860851e&hm=e7ea95c9114697f262bccc462343c29cb30ca63e7101cda01d94402e738257ca&=&format=webp&width=1174&height=1175';
                };

                const contentDiv = document.createElement('div');
                contentDiv.className = 'message-content';

                const nameDiv = document.createElement('div');
                nameDiv.className = 'name';
                nameDiv.textContent = message.sender;

                const textDiv = document.createElement('div');
                textDiv.textContent = message.content;
                textDiv.style.whiteSpace = 'pre-line';

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

                if (message.sender === 'Profe Ceci 👩‍🏫' || message.sender === 'Profesora') {
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
            this.src = 'https://media.discordapp.net/attachments/1182709690195513455/1388673649552130048/image0.jpg?ex=6861d69e&is=6860851e&hm=e7ea95c9114697f262bccc462343c29cb30ca63e7101cda01d94402e738257ca&=&format=webp&width=1174&height=1175';
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
    let currentQuestionIndex = 0;

    async function displayMessages() {
        const firstQuestion = teacherQuestions[currentQuestionIndex];
        await createMessageElement({
            sender: 'Profe Ceci 👩‍🏫',
            content: firstQuestion.question,
            avatar: 'https://media.discordapp.net/attachments/1182709690195513455/1388673649552130048/image0.jpg?ex=6861d69e&is=6860851e&hm=e7ea95c9114697f262bccc462343c29cb30ca63e7101cda01d94402e738257ca&=&format=webp&width=1174&height=1175'
        });
        messageInput.value = '';
        sendButton.disabled = false;
    }

    sendButton.addEventListener('click', async () => {
        if (sendButton.disabled || isResponding || currentQuestionIndex >= teacherQuestions.length) return;

        const currentQuestion = teacherQuestions[currentQuestionIndex];
        isResponding = true;

        for (let response of currentQuestion.responses) {
            const typingIndicator = await showTypingIndicator(response);
            await new Promise(resolve => setTimeout(resolve, 2000));
            typingIndicator.remove();
            await createMessageElement(response);
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        isResponding = false;
        currentQuestionIndex++;

        if (currentQuestionIndex < teacherQuestions.length) {
            messageInput.value = teacherQuestions[currentQuestionIndex].question;
        } else {
            messageInput.value = '¡Gracias por la explicación!';
            sendButton.disabled = true;
        }
    });

    displayMessages();
});
