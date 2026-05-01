// BASE DE DATOS DE LANZAMIENTOS (SINGLES)
const singles = [
    {
        img: "images/We rise as one.webp",
        title: "We rise as one",
        tracks: [
            { name: "We rise as one", url: "https://soundcloud.com/reflexionmusicalmx-music/we-rise-as-one?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kyLAJmShtPgqFTl1qZk8pYP-jWBFG6xJs",
            spotify: "https://open.spotify.com/album/1hx8kcmgYi0CMT25xiNyUz?si=l1oh9MgqTRqvVBETnPfLAw",
            amazon: "https://music.amazon.com.mx/albums/B0FZXWR7N7",
            apple: "https://music.apple.com/es/album/we-rise-as-one-single/1851049433",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/we-rise-as-one"
        }
    },
    {
        img: "images/Gracias 2025.webp",
        title: "Gracias 2025",
        tracks: [
            { name: "Gracias 2025", url: "https://soundcloud.com/reflexionmusicalmx-music/gracias-2025?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_l_KUB_Wa8uMY1p1Sd-DoF71MrNJqvyIXk",
            spotify: "https://open.spotify.com/album/3UUtgG1Lvn1zmTpY94PCmN?si=xylJPSN9QBywlTXl5wAfxg",
            amazon: "https://music.amazon.com.mx/albums/B0GGXJ3XG3",
            apple: "https://music.apple.com/es/album/gracias-2025-single/1869178508",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/gracias-2025"
        }
    },
    {
        img: "images/Adultos TRASTORNADOS.webp",
        title: "Adultos TRASTORNADOS",
        tracks: [
            { name: "Adultos TRASTORNADOS", url: "https://soundcloud.com/reflexionmusicalmx-music/adultos-trastornados?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_k1huRyG7m9Zmd9ZUUgtTYbZpf2hqMDdNM",
            spotify: "https://open.spotify.com/album/64O12821a5VeL4CDsvFkhq?si=N_vPDU_9T1-girApegfDAg",
            amazon: "https://music.amazon.com.mx/albums/B0GNPGPNWP",
            apple: "https://music.apple.com/es/album/adultos-trastornados-single/1877753106",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/adultos-trastornados"
        }
    },
    {
        img: "images/Codigo rojo.webp",
        title: "Esto no empezó hoy",
        tracks: [
            { name: "Esto no empezó hoy (Narrado)", url: "https://soundcloud.com/reflexionmusicalmx-music/esto-no-empezo-hoy-narrado?in=reflexionmusicalmx-music/sets/esto-no-empezo-hoy&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Esto no empezó hoy (Rap)", url: "https://soundcloud.com/reflexionmusicalmx-music/esto-no-empezo-hoy-rap?in=reflexionmusicalmx-music/sets/esto-no-empezo-hoy&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lrXeL1b_pWMQU5tSLv8CyouYZrDfkj1o0",
            spotify: "https://open.spotify.com/album/0x1QYc6n54qlEAdsjo6sFu?si=Rrb6qFW4Tu-liIfSVU8Iig",
            amazon: "https://music.amazon.com.mx/albums/B0GQ588HLX",
            apple: "https://music.apple.com/es/album/esto-no-empez%C3%B3-hoy-single/1880118370",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/esto-no-empezo-hoy"
        }
    },
    {
        img: "images/La fuerza de todos.webp",
        title: "La fuerza de todos",
        tracks: [
            { name: "La fuerza de todos (Rap)", url: "https://soundcloud.com/reflexionmusicalmx-music/la-fuerza-de-todos-rap?in=reflexionmusicalmx-music/sets/la-fuerza-de-todos-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "La fuerza de todos (Acústico)", url: "https://soundcloud.com/reflexionmusicalmx-music/la-fuerza-de-todos-acustico?in=reflexionmusicalmx-music/sets/la-fuerza-de-todos-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mAVvrpFVf6aFPjow3z-a3rxnZC6IHlLro",
            spotify: "https://open.spotify.com/album/5alJBFihx9EwKaQpX8cKPa?si=HpwcBOIYRHiM4Wwc1Lt0LA",
            amazon: "https://music.amazon.com.mx/albums/B0GQ6SGM4C",
            apple: "https://music.apple.com/es/album/la-fuerza-de-todos-single/1880182072",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/la-fuerza-de-todos-1"
        }
    },
    {
        img: "images/Regresar a casa.webp",
        title: "Regresar a casa",
        tracks: [
            { name: "VOLVER A CASA (Rap)", url: "https://soundcloud.com/reflexionmusicalmx-music/volver-a-casa-rap?in=reflexionmusicalmx-music/sets/regresar-a-casa-2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "VOLVER A CASA (Balada)", url: "https://soundcloud.com/reflexionmusicalmx-music/volver-a-casa-balada?in=reflexionmusicalmx-music/sets/regresar-a-casa-2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kNqvtfEhlByZLZFQjKdD5JXx-yyWLK7XE",
            spotify: "https://open.spotify.com/album/1Z3BWmi0DGxjMgslqZqokZ?si=BRAQZ80KT7OluuE7NI36SQ",
            amazon: "https://music.amazon.com.mx/albums/B0GQ5YYPTY",
            apple: "https://music.apple.com/es/album/regresar-a-casa-single/1880183940",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/regresar-a-casa-2"
        }
    },
    {
        img: "images/Tres colores, un compromiso.webp",
        title: "Tres colores, un compromiso",
        tracks: [
            { name: "Tres Colores, Un Compromiso", url: "https://music.youtube.com/watch?v=CHiMyTyndHg&si=owyjoNwnmr2Mwb-i" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nXLlYBO_bLe8jo9vqm2rw1JPGwIxTw9uM",
            spotify: "https://open.spotify.com/album/1MJdvRWqcBXJrADcCuD4Ia?si=gV2aTyeCTW61CGityRKZLA",
            amazon: "https://music.amazon.com.mx/albums/B0GQD9LB1H",
            apple: "https://music.apple.com/es/album/tres-colores-un-compromiso-single/1880483551",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/tres-colores-un-compromiso"
        }
    },
    {
        img: "images/Del dolor al odio.webp",
        title: "Del dolor al odio",
        tracks: [
            { name: "Del dolor al Odio (Acústico)", url: "https://soundcloud.com/reflexionmusicalmx-music/del-dolor-al-odio-acustico?in=reflexionmusicalmx-music/sets/del-dolor-al-odio-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Del Dolor al Odio II (Rap)", url: "https://soundcloud.com/reflexionmusicalmx-music/del-dolor-al-odio-ii-rap?in=reflexionmusicalmx-music/sets/del-dolor-al-odio-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Del Dolor Al Odio III (Rap)", url: "https://soundcloud.com/reflexionmusicalmx-music/del-dolor-al-odio-iii-rap?in=reflexionmusicalmx-music/sets/del-dolor-al-odio-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Del Dolor Al Odio", url: "https://soundcloud.com/reflexionmusicalmx-music/del-dolor-al-odio?in=reflexionmusicalmx-music/sets/del-dolor-al-odio-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lt7XMszm6gl_8v0BWGOrIA2MnNbmELfn0",
            spotify: "https://open.spotify.com/album/7m7tt0KcHFbmg1JPDu2B2S?si=MFQRyAQ3RouFK3ICw_AW8A",
            amazon: "https://music.amazon.es/albums/B0GS3NCY9D",
            apple: "https://music.apple.com/pe/album/del-dolor-al-odio-ep/1884126596",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/del-dolor-al-odio-1"
        }
    },
    {
        img: "images/Antes de las armas.webp",
        title: "Antes de las armas",
        tracks: [
            { name: "Antes de las armas", url: "https://soundcloud.com/reflexionmusicalmx-music/antes-de-las-armas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kydOEDIwMtIG24XfwEVvC5qRewXzTaEh0",
            spotify: "https://open.spotify.com/album/4GGDQzH729FJvFz0f9bD9j?si=hiRR5JNsQZ-G6yAF9mh28A",
            amazon: "https://music.amazon.es/albums/B0GTDHLTNB",
            apple: "https://music.apple.com/pe/album/antes-de-las-armas-single/1886860585",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/antes-de-las-armas"
        }
    }
];

// BASE DE DATOS DE ÁLBUMES
const albums = [
    {
        img: "images/Voces de Cambio 1.webp",
        title: "Voces de Cambio 1",
        tracks: [
            { name: "Ciudad en silencio", url: "https://soundcloud.com/reflexionmusicalmx-music/ciudad-en-silencio?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Raíces de fuego", url: "https://soundcloud.com/reflexionmusicalmx-music/raices-de-fuego?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sabes lo que haces", url: "https://soundcloud.com/reflexionmusicalmx-music/sabes-lo-que-haces?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ecos del olvido", url: "https://soundcloud.com/reflexionmusicalmx-music/ecos-del-olvido?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sociedad cómplice", url: "https://soundcloud.com/reflexionmusicalmx-music/sociedad-complice?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Normal es veneno", url: "https://soundcloud.com/reflexionmusicalmx-music/normal-es-veneno?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El engaño del bien", url: "https://soundcloud.com/reflexionmusicalmx-music/el-engano-del-bien?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "¿Injusticia o consecuencia?", url: "https://soundcloud.com/reflexionmusicalmx-music/injusticia-o-consecuencia?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ciclos y deudas", url: "https://soundcloud.com/reflexionmusicalmx-music/ciclos-y-deudas?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Veneno en la sangre", url: "https://soundcloud.com/reflexionmusicalmx-music/veneno-en-la-sangre?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Herencia de hierro", url: "https://soundcloud.com/reflexionmusicalmx-music/herencia-de-hierro?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Resistencia pequeña", url: "https://soundcloud.com/reflexionmusicalmx-music/resistencia-pequena?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El cambio esta en ti", url: "https://soundcloud.com/reflexionmusicalmx-music/el-cambio-esta-en-ti?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "No hay tirano eterno", url: "https://soundcloud.com/reflexionmusicalmx-music/no-hay-tirano-eterno?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hijos del olvido", url: "https://soundcloud.com/reflexionmusicalmx-music/hijos-del-olvido?in=reflexionmusicalmx-music/sets/voces-de-cambio&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kDigM39j6m-rN6Kuf42_rGx5FNLp1IKKQ",
            spotify: "https://open.spotify.com/album/2UAHh2wV6ntXOvb4F4VVhg?si=Ec-XVA8XTCqihw-9HEHMlg",
            amazon: "https://music.amazon.com.mx/albums/B0FS3YS4NX",
            apple: "https://music.apple.com/es/album/voces-de-cambio/1841491477",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/voces-de-cambio"
        }
    },
    {
        img: "images/Voces de Cambio 2.webp",
        title: "Voces de Cambio 2",
        tracks: [
            { name: "México despierta", url: "https://soundcloud.com/reflexionmusicalmx-music/mexico-despierta?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Reflexión Musical MX", url: "https://soundcloud.com/reflexionmusicalmx-music/reflexion-musical-mx?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Memoria viva", url: "https://soundcloud.com/reflexionmusicalmx-music/memoria-viva?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sombras y luz", url: "https://soundcloud.com/reflexionmusicalmx-music/sombras-y-luz?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Semillas para mañana", url: "https://soundcloud.com/reflexionmusicalmx-music/semillas-para-manana?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Lo que te espera", url: "https://soundcloud.com/reflexionmusicalmx-music/lo-que-te-espera?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El eco de los ancestros", url: "https://soundcloud.com/reflexionmusicalmx-music/el-eco-de-los-ancestros?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Orgullo Mexicano", url: "https://soundcloud.com/reflexionmusicalmx-music/orgullo-mexicano?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "En la unión esta la fuerza", url: "https://soundcloud.com/reflexionmusicalmx-music/en-la-union-esta-la-fuerza?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "No mas excusas", url: "https://soundcloud.com/reflexionmusicalmx-music/no-mas-excusas?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sé chingón", url: "https://soundcloud.com/reflexionmusicalmx-music/se-chingon?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "México eres tú", url: "https://soundcloud.com/reflexionmusicalmx-music/mexico-eres-tu?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "México lindo", url: "https://soundcloud.com/reflexionmusicalmx-music/mexico-lindo?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El cambio esta en ti V2", url: "https://soundcloud.com/reflexionmusicalmx-music/el-cambio-esta-en-ti-v2?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Himno a México", url: "https://soundcloud.com/reflexionmusicalmx-music/himno-a-mexico?in=reflexionmusicalmx-music/sets/voces-de-cambio-v2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lbF4Fqr8ou3iExKf4vfky7PZitsEQJ3qE",
            spotify: "https://open.spotify.com/album/20FVaU0J8cPCszEj1tgsr6?si=S9WmVWrtTtGCwSAgsyzrDg",
            amazon: "https://music.amazon.com.mx/albums/B0FT7PQGKF",
            apple: "https://music.apple.com/es/album/voces-de-cambio-v2/1841491477",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/voces-de-cambio-v2"
        }
    },
    {
        img: "images/Estado contra estado.webp",
        title: "Estado contra Estado",
        tracks: [
            { name: "Tierra de fuego y aguacate", url: "https://soundcloud.com/reflexionmusicalmx-music/tierra-de-fuego-y-aguacate?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Pacto original", url: "https://soundcloud.com/reflexionmusicalmx-music/pacto-original?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Dos caminos", url: "https://soundcloud.com/reflexionmusicalmx-music/dos-caminos?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Importado desde U.S.A", url: "https://soundcloud.com/reflexionmusicalmx-music/importado-desde-u-s-a?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Burocracia blindada", url: "https://soundcloud.com/reflexionmusicalmx-music/burocracia-blindada?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "No me callo", url: "https://soundcloud.com/reflexionmusicalmx-music/no-me-callo?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Con sombrero o sin sombrero", url: "https://soundcloud.com/reflexionmusicalmx-music/con-sombrero-o-sin-sombrero?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Octubre negro", url: "https://soundcloud.com/reflexionmusicalmx-music/octubre-negro?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El pueblo también falla", url: "https://soundcloud.com/reflexionmusicalmx-music/el-pueblo-tambien-falla?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Narcoseries y narcocorridos", url: "https://soundcloud.com/reflexionmusicalmx-music/narcoseries-y-narcocorridos?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Revolucion mental", url: "https://soundcloud.com/reflexionmusicalmx-music/revolucion-mental?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Estado contra Estado", url: "https://soundcloud.com/reflexionmusicalmx-music/estado-contra-estado?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Himno a la Revolución Mental (Mariachi)", url: "https://soundcloud.com/reflexionmusicalmx-music/himno-a-la-revolucion-mental-1?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Himno a la Revolución Mental (Dance)", url: "https://soundcloud.com/reflexionmusicalmx-music/himno-a-la-revolucion-mental?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "México despierta V2", url: "https://soundcloud.com/reflexionmusicalmx-music/mexico-despierta-v2?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Memoria de fuego", url: "https://soundcloud.com/reflexionmusicalmx-music/memoria-de-fuego?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Los nadie", url: "https://soundcloud.com/reflexionmusicalmx-music/los-nadie?in=reflexionmusicalmx-music/sets/estado-contra-estado&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nlsQfZZHP2bR8HfV6_N5uSvGHuFr4lEow",
            spotify: "https://open.spotify.com/album/3L2ZAYytRTzDIChcwRkLdY?si=uGLv11StT1ykGm-CJ9-_Jw",
            amazon: "https://music.amazon.com.mx/albums/B0FVJB8H74",
            apple: "https://music.apple.com/es/album/estado-contra-estado/1841491477",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/estado-contra-estado"
        }
    },
    {
        img: "images/Luz entre las Sombras.webp",
        title: "Luz entre las sombras",
        tracks: [
            { name: "Altar de los recuerdos", url: "https://soundcloud.com/reflexionmusicalmx-music/altar-de-los-recuerdos?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hasta que volvamos a correr", url: "https://soundcloud.com/reflexionmusicalmx-music/hasta-que-volvamos-a-correr?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "28 de Octubre", url: "https://soundcloud.com/reflexionmusicalmx-music/28-de-octubre?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Pequeña luz", url: "https://soundcloud.com/reflexionmusicalmx-music/pequena-luz?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "A los que se fueron antes", url: "https://soundcloud.com/reflexionmusicalmx-music/a-los-que-se-fueron-antes?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hermano del alma", url: "https://soundcloud.com/reflexionmusicalmx-music/hermano-del-alma?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Silencio en la cama", url: "https://soundcloud.com/reflexionmusicalmx-music/silencio-en-la-cama?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Lo que me enseñaste", url: "https://soundcloud.com/reflexionmusicalmx-music/lo-que-me-ensenaste?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Siempre en mi corazón", url: "https://soundcloud.com/reflexionmusicalmx-music/siempre-en-mi-corazon?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Recuerdo tu voz", url: "https://soundcloud.com/reflexionmusicalmx-music/recuerdo-tu-voz?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Los que abrieron el camino", url: "https://soundcloud.com/reflexionmusicalmx-music/los-que-abrieron-el-camino?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Voces que no callaron", url: "https://soundcloud.com/reflexionmusicalmx-music/voces-que-no-callaron?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Perdóname", url: "https://soundcloud.com/reflexionmusicalmx-music/perdoname?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sin huella ni tumba", url: "https://soundcloud.com/reflexionmusicalmx-music/sin-huella-ni-tumba?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Los que no regresan", url: "https://soundcloud.com/reflexionmusicalmx-music/los-que-no-regresan?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Después del silencio", url: "https://soundcloud.com/reflexionmusicalmx-music/despues-del-silencio?in=reflexionmusicalmx-music/sets/luz-entre-las-sombras&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mmneexiID3nIV0Vez7QaWoE0i0PwM6S_4",
            spotify: "https://open.spotify.com/album/62pJjPSFwZf4MuHT45izrV?si=0DRH5AomRryVSIeNBzyQ0g",
            amazon: "https://music.amazon.com.mx/albums/B0FX1YYCBH",
            apple: "https://music.apple.com/es/album/luz-entre-las-sombras/1847216698",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/luz-entre-las-sombras"
        }
    },
    {
        img: "images/Tiempo y vida.webp",
        title: "Tiempo y Vida",
        tracks: [
            { name: "Altar de vida", url: "https://soundcloud.com/reflexionmusicalmx-music/altar-de-vida?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Quédate", url: "https://soundcloud.com/reflexionmusicalmx-music/quedate?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Renacer", url: "https://soundcloud.com/reflexionmusicalmx-music/renacer?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Citlalli", url: "https://soundcloud.com/reflexionmusicalmx-music/citlalli?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Alizée", url: "https://soundcloud.com/reflexionmusicalmx-music/alizee?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Mientras compartamos el sol", url: "https://soundcloud.com/reflexionmusicalmx-music/mientras-compartamos-el-sol?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Amigos del alma", url: "https://soundcloud.com/reflexionmusicalmx-music/amigos-del-alma?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Aún despierto contigo", url: "https://soundcloud.com/reflexionmusicalmx-music/aun-despierto-contigo?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "A tu lado, mamá", url: "https://soundcloud.com/reflexionmusicalmx-music/a-tu-lado-mama?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Padre, mi raíz", url: "https://soundcloud.com/reflexionmusicalmx-music/padre-mi-raiz?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Abuela, mi Luz", url: "https://soundcloud.com/reflexionmusicalmx-music/abuela-mi-luz?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Abuelo, mi camino", url: "https://soundcloud.com/reflexionmusicalmx-music/abuelo-mi-camino?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Voces que siguen luchando", url: "https://soundcloud.com/reflexionmusicalmx-music/voces-que-siguen-luchando?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hasta encontrarlos", url: "https://soundcloud.com/reflexionmusicalmx-music/hasta-encontrarlos?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Aún hay lugar", url: "https://soundcloud.com/reflexionmusicalmx-music/aun-hay-lugar?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Perdón y Gracias", url: "https://soundcloud.com/reflexionmusicalmx-music/perdon-y-gracias?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Tiempo y vida", url: "https://soundcloud.com/reflexionmusicalmx-music/tiempo-y-vida?in=reflexionmusicalmx-music/sets/tiempo-y-vida-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mp8-UwTfhLNjECvuY7vjR8-0v3mmPr8rE",
            spotify: "https://open.spotify.com/album/4OyMdNR6Ff9PX5KXJDs36E?si=OOhJll_gSo2UtOyU_6Pe3A",
            amazon: "https://music.amazon.com.mx/albums/B0G16FLG5T",
            apple: "https://music.apple.com/es/album/tiempo-y-vida/1851277742",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/tiempo-y-vida-1"
        }
    },
    {
        img: "images/CHACALES OPORTUNISTAS.webp",
        title: "Chacales oportunistas",
        tracks: [
            { name: "INTRODUCCIÓN", url: "https://soundcloud.com/reflexionmusicalmx-music/introduccion-chacales?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Chacales oportunistas", url: "https://soundcloud.com/reflexionmusicalmx-music/chacales-oportunistas?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El oro verde", url: "https://soundcloud.com/reflexionmusicalmx-music/el-oro-verde?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Los que cuidaban la tierra", url: "https://soundcloud.com/reflexionmusicalmx-music/los-que-cuidaban-la-tierra?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Huracanes con uniforme", url: "https://soundcloud.com/reflexionmusicalmx-music/huracanes-con-uniforme?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Lodo y promesas", url: "https://soundcloud.com/reflexionmusicalmx-music/lodo-y-promesas?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "La ley de fracaso", url: "https://soundcloud.com/reflexionmusicalmx-music/la-ley-de-fracaso?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Firma y olvida", url: "https://soundcloud.com/reflexionmusicalmx-music/firma-y-olvida?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Las madres no duermen", url: "https://soundcloud.com/reflexionmusicalmx-music/las-madres-no-duermen?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sin huella ni tumba II", url: "https://soundcloud.com/reflexionmusicalmx-music/sin-huella-ni-tumba-ii?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Epílogo", url: "https://soundcloud.com/reflexionmusicalmx-music/epilogo-chacales-oportunistas?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Carlos Manzo, Luz En Uruapan", url: "https://soundcloud.com/reflexionmusicalmx-music/carlos-manzo-luz-en-uruapan?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Chacales oportunistas V2", url: "https://soundcloud.com/reflexionmusicalmx-music/chacales-oportunistas-v2?in=reflexionmusicalmx-music/sets/chacales-oportunistas&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mHwHl-hoc9G9E6GHULqSQgO2itU2bBH_A",
            spotify: "https://open.spotify.com/album/5XWwchDBL4G0kACbGBebet?si=zD2zM6GtTcC1vJ7Z04T0sw",
            amazon: "https://music.amazon.com.mx/albums/B0G36KTQDS",
            apple: "https://music.apple.com/es/album/chacales-oportunistas/1854564785",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/chacales-oportunistas"
        }
    },
    {
        img: "images/Tejido vital.webp",
        title: "Tejido Vital",
        tracks: [
            { name: "El Precio de la Mentira", url: "https://soundcloud.com/reflexionmusicalmx-music/el-precio-de-la-mentira?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Cobardes", url: "https://soundcloud.com/reflexionmusicalmx-music/cobardes?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "En la trinchera", url: "https://soundcloud.com/reflexionmusicalmx-music/en-la-trinchera?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "La primera trinchera", url: "https://soundcloud.com/reflexionmusicalmx-music/la-primera-trinchera?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ni Ella sin Él ni El sin Ella", url: "https://soundcloud.com/reflexionmusicalmx-music/ni-ella-sin-el-ni-el-sin-ella?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Empoderar no es guerra", url: "https://soundcloud.com/reflexionmusicalmx-music/empoderar-no-es-guerra?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Amor en tiempos de ideologías", url: "https://soundcloud.com/reflexionmusicalmx-music/amor-en-tiempos-de-ideologias?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Honra a tu pareja", url: "https://soundcloud.com/reflexionmusicalmx-music/honra-a-tu-pareja?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Juramento de dos", url: "https://soundcloud.com/reflexionmusicalmx-music/juramento-de-dos?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Complemento eterno", url: "https://soundcloud.com/reflexionmusicalmx-music/complemento-eterno?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Cuida y educa", url: "https://soundcloud.com/reflexionmusicalmx-music/cuida-y-educa?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Cuida y educa II", url: "https://soundcloud.com/reflexionmusicalmx-music/cuida-y-educa-ii?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Herencia que no se rompe", url: "https://soundcloud.com/reflexionmusicalmx-music/herencia-que-no-se-rompe?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Enséñales", url: "https://soundcloud.com/reflexionmusicalmx-music/ensenales?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ciudadanos del mundo", url: "https://soundcloud.com/reflexionmusicalmx-music/ciudadanos-del-mundo?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ni Ella sin Él... (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/ni-ella-sin-el-ni-el-sin-1?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Ciudadanos del mundo II (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/ciudadanos-del-mundo-remix?in=reflexionmusicalmx-music/sets/tejido-vital&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kUdxSJ5oZ8bZjO_p6TmdjaI_5tV0inJKs",
            spotify: "https://open.spotify.com/album/2gSDQitygEjoVweX6PnqpK?si=0C-q47pmRJuUSIZ4OS2kQw",
            amazon: "https://music.amazon.com.mx/albums/B0G3BCX2MK",
            apple: "https://music.apple.com/es/album/tejido-vital/1854794772",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/tejido-vital"
        }
    },
    {
        img: "images/Revolucion mental.webp",
        title: "Revolución Mental",
        tracks: [
            { name: "Prólogo a Revolución Mental", url: "https://soundcloud.com/reflexionmusicalmx-music/prologo-a-revolucion-mental?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Revolución Mental II", url: "https://soundcloud.com/reflexionmusicalmx-music/revolucion-mental-ii?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Manual para un pueblo dormido", url: "https://soundcloud.com/reflexionmusicalmx-music/manual-para-un-pueblo-dormido?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Neuronas en huelga", url: "https://soundcloud.com/reflexionmusicalmx-music/neuronas-en-huelga?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "La caja idiota", url: "https://soundcloud.com/reflexionmusicalmx-music/la-caja-idiota?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Mi enemigo", url: "https://soundcloud.com/reflexionmusicalmx-music/mi-enemigo?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "México bipolar", url: "https://soundcloud.com/reflexionmusicalmx-music/mexico-bipolar?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Sin Mesías", url: "https://soundcloud.com/reflexionmusicalmx-music/sin-mesias?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Despierta carbón", url: "https://soundcloud.com/reflexionmusicalmx-music/despierta-carbon?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Reinicio", url: "https://soundcloud.com/reflexionmusicalmx-music/reinicio?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Espejo", url: "https://soundcloud.com/reflexionmusicalmx-music/espejo?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Conciencia colectiva", url: "https://soundcloud.com/reflexionmusicalmx-music/conciencia-colectiva?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Nuevo código", url: "https://soundcloud.com/reflexionmusicalmx-music/nuevo-codigo?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Epílogo a Revolución Mental", url: "https://soundcloud.com/reflexionmusicalmx-music/epilogo-a-revolucion-mental?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Revolución mental", url: "https://soundcloud.com/reflexionmusicalmx-music/revolucion-mental?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Revolución Mental II (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/revolucion-mental-ii-remix?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Revolución Mental (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/revolucion-mental-remix?in=reflexionmusicalmx-music/sets/revolucion-mental-4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_nnIdZwheNvoqdMGQwSzFUo_6W3Vxr4nbU",
            spotify: "https://open.spotify.com/album/5ZiW2nNJnJX9ZeuBpZW6DS?si=bHkMqhAGShSYicHuKgnFQg",
            amazon: "https://music.amazon.com.mx/albums/B0G4NF14XV",
            apple: "https://music.apple.com/es/album/revoluci%C3%B3n-mental/1857713061",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/revolucion-mental-4"
        }
    },
    {
        img: "images/Eres lo que escuchas.webp",
        title: "Eres lo que Escuchas",
        tracks: [
            { name: "Prologo Antes de darle Play", url: "https://soundcloud.com/reflexionmusicalmx-music/prologo-antes-de-darle-play?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Eres lo que escuchas", url: "https://soundcloud.com/reflexionmusicalmx-music/eres-lo-que-escuchas?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Empieza mal", url: "https://soundcloud.com/reflexionmusicalmx-music/empieza-mal?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Solo sigue", url: "https://soundcloud.com/reflexionmusicalmx-music/solo-sigue?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Déjalos ganar", url: "https://soundcloud.com/reflexionmusicalmx-music/dejalos-ganar?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Espejo", url: "https://soundcloud.com/reflexionmusicalmx-music/espejo-1?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Cráter", url: "https://soundcloud.com/reflexionmusicalmx-music/crater?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Luz que no se apaga", url: "https://soundcloud.com/reflexionmusicalmx-music/luz-que-no-se-apaga?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Lo que soy", url: "https://soundcloud.com/reflexionmusicalmx-music/lo-que-soy?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Mierdatón", url: "https://soundcloud.com/reflexionmusicalmx-music/mierdaton?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Anestesia barata", url: "https://soundcloud.com/reflexionmusicalmx-music/anestesia-barata?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hombre de verdad", url: "https://soundcloud.com/reflexionmusicalmx-music/hombre-de-verdad?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hombre que despierta", url: "https://soundcloud.com/reflexionmusicalmx-music/hombre-que-despierta?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "¿Qué es la moda?", url: "https://soundcloud.com/reflexionmusicalmx-music/qu-es-la-moda?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Payasos con coronas de humo", url: "https://soundcloud.com/reflexionmusicalmx-music/payasos-con-coronas-de-humo?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "El peso del silencio", url: "https://soundcloud.com/reflexionmusicalmx-music/el-peso-del-silencio?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Camino sobre el agua", url: "https://soundcloud.com/reflexionmusicalmx-music/camino-sobre-el-agua?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Simple", url: "https://soundcloud.com/reflexionmusicalmx-music/simple?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Mente y corazón", url: "https://soundcloud.com/reflexionmusicalmx-music/mente-y-corazon?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Combate interno", url: "https://soundcloud.com/reflexionmusicalmx-music/combate-interno?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Mundo imperfecto", url: "https://soundcloud.com/reflexionmusicalmx-music/mundo-imperfecto?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Bucle", url: "https://soundcloud.com/reflexionmusicalmx-music/bucle?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Las venas abiertas", url: "https://soundcloud.com/reflexionmusicalmx-music/las-venas-abiertas?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "No todos son iguales", url: "https://soundcloud.com/reflexionmusicalmx-music/no-todos-son-iguales?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Paraíso de sangre", url: "https://soundcloud.com/reflexionmusicalmx-music/paraiso-de-sangre?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Hijos del olvido", url: "https://soundcloud.com/reflexionmusicalmx-music/hijos-del-olvido-1?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Empieza mal (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/empieza-mal-remix?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Del dolor al odio", url: "https://soundcloud.com/reflexionmusicalmx-music/del-dolor-al-odio?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "¿A qué costo?", url: "https://soundcloud.com/reflexionmusicalmx-music/a-qu-costo?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Eres lo que escuchas (Remix)", url: "https://soundcloud.com/reflexionmusicalmx-music/eres-lo-que-escuchas-remix?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "Epílogo", url: "https://soundcloud.com/reflexionmusicalmx-music/epilogo-a-eres-lo-que-escuchas?in=reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_mRcy2Ln9I292iseBRcoyBCjedzlTS4X9I",
            spotify: "https://open.spotify.com/album/20FnT6FbnltmFm9PiRSSkt?si=OD37ewXkRzyxJLLibBXmvQ",
            amazon: "https://music.amazon.com.mx/albums/B0GD2PZZ1T",
            apple: "https://music.apple.com/es/album/eres-lo-que-escuchas/1865017257",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/eres-lo-que-escuchas-1"
        }
    },
    {
        img: "images/Amor en tiempos de ideologias cancerigenas.webp",
        title: "Amor en tiempos de ideologías cancerígenas",
        tracks: [
            { name: "ANTES DE AMAR", url: "https://soundcloud.com/reflexionmusicalmx-music/antes-de-amar-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AMOR EN TIEMPOS DE IDEOLOGÍAS...", url: "https://soundcloud.com/reflexionmusicalmx-music/amor-en-tiempos-de-1?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "SILENCIO EN LA CAMA", url: "https://soundcloud.com/reflexionmusicalmx-music/silencio-en-la-cama-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AUN DESPIERTO CONTIGO", url: "https://soundcloud.com/reflexionmusicalmx-music/aun-despierto-contigo-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "PERDÓNAME", url: "https://soundcloud.com/reflexionmusicalmx-music/perdoname-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "PERDÓN Y GRACIAS", url: "https://soundcloud.com/reflexionmusicalmx-music/perdon-y-gracias-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "JURAMENTO DE DOS", url: "https://soundcloud.com/reflexionmusicalmx-music/juramento-de-dos-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "JURAMENTO DE 2", url: "https://soundcloud.com/reflexionmusicalmx-music/juramento-de-2-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "HONRA A TU PAREJA", url: "https://soundcloud.com/reflexionmusicalmx-music/honra-a-tu-pareja-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "COMPLEMENTO ETERNO", url: "https://soundcloud.com/reflexionmusicalmx-music/complemento-eterno-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AMOR CONSCIENTE", url: "https://soundcloud.com/reflexionmusicalmx-music/amor-consciente-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AFIRMACIÓN", url: "https://soundcloud.com/reflexionmusicalmx-music/afirmacion-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "TIEMPO DE CALIDAD", url: "https://soundcloud.com/reflexionmusicalmx-music/tiempo-de-calidad-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "ACTOS DE SERVICIO", url: "https://soundcloud.com/reflexionmusicalmx-music/actos-de-servicio-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "REGALOS", url: "https://soundcloud.com/reflexionmusicalmx-music/regalos-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "CONTACTO FÍSICO", url: "https://soundcloud.com/reflexionmusicalmx-music/contacto-fisico-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AMOR MADURO", url: "https://soundcloud.com/reflexionmusicalmx-music/amor-maduro-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "MARTE I", url: "https://soundcloud.com/reflexionmusicalmx-music/marte-i-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "MARTE II", url: "https://soundcloud.com/reflexionmusicalmx-music/marte-ii-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "VENUS I", url: "https://soundcloud.com/reflexionmusicalmx-music/venus-i-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "VENUS II", url: "https://soundcloud.com/reflexionmusicalmx-music/venus-ii-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "APRENDER A ORBITAR", url: "https://soundcloud.com/reflexionmusicalmx-music/aprender-a-orbitar-cumbia?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "PERDONENME (Bachata)", url: "https://soundcloud.com/reflexionmusicalmx-music/perdonenme-bachata?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "PERDON Y GRACIAS (Salsa)", url: "https://soundcloud.com/reflexionmusicalmx-music/perdon-y-gracias-salsa?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "AMOR EN TIEMPOS DE 2", url: "https://soundcloud.com/reflexionmusicalmx-music/amor-en-tiempos-de-2?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
            { name: "COMPLEMENTO ETERNO (Vallenato)", url: "https://soundcloud.com/reflexionmusicalmx-music/complemento-eterno-vallenato?in=reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
        ],
        links: {
            youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kP7_3VPWPlsoggwsXy0gQ6ZFFmv9drSIA",
            spotify: "https://open.spotify.com/album/5bouzliTlE1sm3qaIyEO8E?si=cs4bQlYESxiFc4mzFpsX6A",
            amazon: "https://music.amazon.com.mx/albums/B0GM2D1VFK",
            apple: "https://music.apple.com/es/album/amor-en-tiempos-de-ideolog%C3%ADas-cancer%C3%ADgenas/1875409405",
            soundcloud: "https://soundcloud.com/reflexionmusicalmx-music/sets/amor-en-tiempos-de-ideologias"
        }
    }
];
