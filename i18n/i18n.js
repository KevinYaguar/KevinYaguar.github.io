import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    /*General */
                    proyects: 'Projects',
                    position: 'FullStack Developer',
                    description: "I'm +2 year experienced developer, with strong skills for communication and problem-solver. I'm really commited to the proyects I assume. I like teamwork using agile methologies. I enjoy facing new challenges, taking responsabilities and training myself continually to keep me updated.",
                    experience: 'Experiencie',
                    to: 'to',
                    seeMore: 'See More',
                    read: 'Read',
                    back: 'Back',
                    /*Experience at wisboo */
                    positionInWisboo:'Frontend Developer at Wisboo',
                    fromDateInWisboo: 'Sep-2022',
                    toDateInWisboo: 'Jun-2023',
                    jobDescriptionInWisboo: 'Development of Wisboo backoffice and store using React js working with Next js and Angular js. Migration planning from Angular js to Next js.',
                    /*Experience at Myhnt */
                    positionInMyhnt:'FullStack Developer at Myhnt',
                    fromDateInMyhnt: 'Feb-2021',
                    toDateInMyhnt: 'Sep-2022',
                    jobDescriptionInMyhnt: 'Development of myhntBank (fintech), UILS (application for loans) and QiraPagos WalletBackoffice frontend and backend using React, Node, JS, Typescript, JWT, Styled JSX, ReactRouter, Hooks, Sequelize, Express, CSS and HTML.',
                    /*Proyect Qira */
                    proyectDescriptionInQiraWallet: 'The country wallet. To everything that other virtual wallets offer you, add grains...',
                    proyectExperiencieInQiraWallet: "This is de first project I've been on. I was from the beginning of the project working with de TL, another dev,the PM and the CEO. We make de development of the app with React js and Typescript at the front and Node js and Typescript in the backend and manage the data base with SQL server. The project went into production and the corresponding maintenance was done while working on the other projects.",
                    /*Proyect Backoffice Myhnt */
                    proyectDescriptionInBOMyhnt: 'HNT Bank. 24 financial modules. In your cloud or as a service.',
                    proyectExperiencieInBOMyhnt: 'It was the main project of the company and for which we worked the most. We started using a template but the project started from scratch. The 24 financial modules were different list screens, dashboards, graphs and forms. We worked on the frontend and backend with React js, Node js and Typescript. The back functioned as a "handrail" since the database was consumed with microservices. In this project I learned to speed up the process of writing code not only by typing faster but also by thinking about how to better reuse components and solve problems in a more dynamic way. Teamwork was essential for this project.',
                    /*Proyect Backoffice Uils */
                    proyectDescriptionInBOUils: 'We are the first wallet for drivers. Manage your money in one account...',
                    proyectExperiencieInBOUils: "This project was very interesting because although we work with the same technologies that we had been working with here, we found ourselves in more direct contact with the client since one of the founders of the project was our first PM. This allowed more fluid conversations with clients and a better and greater scope of the objectives. By this time, the company had grown in number of developers, so it was interesting to accompany the new devs in onboarding the company and the code. For this we write documentation for the first readings of the code and we constantly work as a team so that we can all find ourselves both growing professionally and achieving the desired objectives.",
                    /*Proyect Backoffice Wisboo */
                    proyectDescriptionInBOWisboo: 'A platform with software solutions, education and expert help for content creators, entrepreneurs and professionals who want to consolidate their digital business.',
                    proyectExperiencieInBOWisboo: "The Wisboo's Backoffice was the first project I've worked with Angular js.  Although the plan was migration to Angular we worked in new features that were incorporated into the project and the production issues solutions. It was a challenge to work in a project already started years ago and with a framework i wasn't experiencied in but thw teamwork and being self-taught allowed progress in the solutions to get the goals.",
                    /*Proyect Profile Wisboo */
                    proyectDescriptionInProfileWisboo: 'A platform with software solutions, education and expert help for content creators, entrepreneurs and professionals who want to consolidate their digital business.',
                    proyectExperiencieInProfileWisboo: "The Profile was the main project for which I joined the company. Using Next js, the technology and the UI of the store were migrated to a profile where the presentation strategy of the clients' products was changed. I not only worked developing the code but also participated in the migration plan and organized two talks/workshops with the entire dev team to talk about why we used Next js, what solutions we brought with the framework and some rendering strategies that we could analyze.",
                }
            },
            es: {
                translation: {
                    /*General */
                    proyects: 'Proyectos',
                    position: 'Desarrollador FullStack',
                    description: "Soy un desarrollador de más de dos años de experiencia, especialista en la solución de problemas y el trabajo en equipo. Me comprometo en un 100% en los proyectos en los que participo. Me gusta trabajar en equipo con metodologías ágiles. Disfruto enfrentar nuevos desafíos y aprender continuamente para mantener mis skills técnicos actualizados.",
                    experience: 'Experiencia',
                    to: 'hasta',
                    seeMore: 'Ver Más',
                    read: 'Leer',
                    back: 'Volver',
                    /*Experience at wisboo */
                    positionInWisboo:'Desarrollador Frontend en Wisboo',
                    fromDateInWisboo: 'Sep-2022',
                    toDateInWisboo: 'Jun-2023',
                    jobDescriptionInWisboo: 'Desarrollo del frontend del backoffice y la tienda de Wisboo utilizando React js con Next js y Angular js. Participación del quipo de migración de Angular js a React js.',
                    /*Experience at Myhnt */
                    positionInMyhnt:'Desarrollador FullStack en Myhnt',
                    fromDateInMyhnt: 'Feb-2021',
                    toDateInMyhnt: 'Sep-2022',
                    jobDescriptionInMyhnt: 'Desarrollo del backoffice de myhntBank(fintech), UILS (app para préstamos financieros) y la billetera de QiraPagos trabajando en el frontend y backend utilizando React, Node, JS, Typescript, JWT, Styled JSX, React Router, Hooks, Sequelize, Express, CSS and HTML.',
                    /*Proyect Qira */
                    proyectDescriptionInQiraWallet: 'La billetera del campo. A todo lo que te ofrecen otras billeteras virtuales, sumale granos..',
                    proyectExperiencieInQiraWallet: 'Este es el primer proyecto en el que trabajé. Estuve desde el inicio del proyecto con el lider técnico y otro desarrollador más la PM y el CEO. Desarrollamos la aplicación trabajando con React js y Typescript en el frontend y Node js y Typescript en el backend más el manejo de base de datos con SQL server. El proyecto salió a producción y se hizo el mantenimiento corresponiente mientras se trabajaba en los otros proyectos.',
                    /*Proyect Backoffice Myhnt */
                    proyectDescriptionInBOMyhnt: 'HNT Bank. 24 financial modules. In your cloud or as a service.',
                    proyectExperiencieInBOMyhnt: 'Fue el proyecto principal de la compañia y por lo cual en el que más trabajamos. Comenzamos utilizando una plantilla pero el proyecto se inicio de cero. Los 24 modulos financieros eran distintas pantallas de listados, dashboards, gráficos y formularios. Se trabajó en el frontend y en el backend con React js, Node js y Typescript. El back funcionaba como "pasamanos" ya que se la base de datos se consumía con microservicios. En este proyecto aprendí a acelerar el proceso de escribir código no solo tipeando más rápido si no también pensando en cómo reutilizar mejor los componentes y resolver problemas de una manera más dinamica. El trabajo en equipo fue fundamental para este proyecto.',
                    /*Proyect Backoffice Uils */
                    proyectDescriptionInBOUils: 'Somos la primera billetera para conductores. Manejá tu plata en una sola cuenta...',
                    proyectExperiencieInBOUils: 'Este proyecto fue muy interesante ya que si bien trabajamos con las mismas tecnologías con las que veníamos trabajando aquí nos encontramos con un contacto más directo con el cliente ya que una de los founders del proyecto era nuestra primer PM. Esto permitía conversaciones más fluidas con los clientes y un mejor y mayor alcance de los objetivos. Para esta altura la compañía había crecido en cantidad de desarolladores/as por lo que fue interesante acompañar a los nuevos devs en el onboarding a la empresa y al código. Para ello escribimos documentación para las primeras lecturas del código y trabajamos en equipo constantemente para poder encontrarnos todos tanto creciendo profesionalmente como cumpliendo los objetivos deseados.',
                    /*Proyect Backoffice Wisboo */
                    proyectDescriptionInBOWisboo: 'Una plataforma con soluciones de software, educación y ayuda experta para creadores de contenido, emprendedores y profesionales que quieren consolidar su negocio digital..',
                    proyectExperiencieInBOWisboo: 'El Backoffice de Wisboo fue el primer proyecto en el que trabajé con Angular js. Si bien el plan era la migración a Angular trabajamos en las nuevas funcionalidades que se iban incorporando al proyecto más las soluciones de issues que aparecían en producción. Fue un desafío trabajar en un proyecto ya empezado hace años y con un framework con el cual no tenía experiencia pero el trabajo en equipo y el ser autodidácta permitió avanzar en las soluciones necesarias cumplir con los objetivos del team.',
                    /*Proyect Profile Wisboo */
                    proyectDescriptionInProfileWisboo: 'Una plataforma con soluciones de software, educación y ayuda experta para creadores de contenido, emprendedores y profesionales que quieren consolidar su negocio digital..',
                    proyectExperiencieInProfileWisboo: 'El Profile fue el proyecto principal por el que entré a la compañía. Utilizando Next js se migraba la tecnología y la UI del store a un perfil donde se cambiaba la estrategía de presentación de los productos de los clientes. No solo trabajé desarrollando el código sino también participé del plan de migración y organicé un dos charlas/workshops con todo el equipo de devs para hablar de por qué utilizabamos Next js, qué soluciones traíamos con el framework y algunas estrategias de randerizado que podíamos analizar.',
                }
            }
        }
    });

export default i18n;