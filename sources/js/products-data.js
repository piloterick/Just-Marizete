// =============================================
// JUST MARIZETE - DATABASE PRODOTTI
// =============================================
// Per aggiungere un prodotto: copia un oggetto,
// modifica i dati, e il gioco è fatto!
// =============================================

const products = [

    // =========================================
    // 🌿 LINEA BENESSERE
    // =========================================

    // --- OLI ESSENZIALI (10 prodotti) ---
    {
        id: 1,
        name: "Relax Attivatore",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 19.50,
        description: "Perfetto equilibrio tra serenità e voglia di fare",
        image: "./sources/images/Oli Essenziali/relax-attivatore.png",
        rating: 4.5,
        reviews: 24,
        badges: ["bestseller"]
    },
    {
        id: 2,
        name: "Tono e Armonia",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 16.00,
        description: "Goccia dopo goccia, il giusto tono in modo armonico",
        image: "./sources/images/Oli Essenziali/Tono-e-armonia.png",
        rating: 4,
        reviews: 18,
        badges: []
    },
    {
        id: 3,
        name: "Olio 31",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 38.00,
        description: "In ogni goccia, benessere unico e originale",
        image: "./sources/images/Oli Essenziali/olio-31.png",
        rating: 5,
        reviews: 156,
        badges: ["hot", "bestseller"]
    },
    {
        id: 4,
        name: "Olio Eucalipto",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 31.50,
        description: "Purezza balsamica ideale per la stagione fredda",
        image: "./sources/images/Oli Essenziali/Olio-eucalipto.png",
        rating: 4,
        reviews: 32,
        badges: []
    },
    {
        id: 5,
        name: "Olio Essenziale Limone",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 15.00,
        description: "Frizzante alleato per sentirsi 'in ricarica'",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Limone.png",
        rating: 4.5,
        reviews: 21,
        badges: []
    },
    {
        id: 6,
        name: "Olio Essenziale Arancio",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 15.00,
        description: "Per ritrovare tono e positività, con dolci note fruttate",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Arancio.png",
        rating: 4,
        reviews: 15,
        badges: []
    },
    {
        id: 7,
        name: "Olio Essenziale Menta",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 16.00,
        description: "Più freschezza ed energia con 3 tipi di menta",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Menta.png",
        rating: 5,
        reviews: 28,
        badges: []
    },
    {
        id: 8,
        name: "Olio Essenziale Lavanda",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 17.00,
        description: "Lavanda francese che profuma di serenità",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Lavanda.png",
        rating: 4.5,
        reviews: 45,
        badges: []
    },
    {
        id: 9,
        name: "Olio Essenziale Tea Tree",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 19.00,
        description: "Il tocco purificante per tutta la famiglia",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Teatree.png",
        rating: 4,
        reviews: 33,
        badges: ["new"]
    },
    {
        id: 10,
        name: "Olio Essenziale Geranio",
        category: "Oli Essenziali",
        subcategory: "oli-essenziali",
        line: "benessere",
        price: 20.00,
        description: "Il giusto equilibrio, con note fiorite intense e preziose",
        image: "./sources/images/Oli Essenziali/Olio-essenz-Geranio.png",
        rating: 4,
        reviews: 12,
        badges: []
    },

    // --- CREME DERMOATTIVE (11 prodotti) ---
    {
        id: 11,
        name: "Crema Gel Bodyfresh",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 19.00,
        description: "Per sentirsi sempre a posto, anche col caldo",
        image: "./sources/images/Creme Dermoattive/bodyfresh.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 12,
        name: "Crema Gel Ventonik",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 22.00,
        description: "Lenitiva e rinfrescante per gambe più leggere",
        image: "./sources/images/Creme Dermoattive/Ventonik.png",
        rating: 5,
        reviews: 67,
        badges: ["bestseller"]
    },
    {
        id: 13,
        name: "Crema Gel Consolida",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 23.00,
        description: "Pronto soccorso cosmetico per mantenersi attivi",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Consolida.png",
        rating: 4.5,
        reviews: 41,
        badges: []
    },
    {
        id: 14,
        name: "Crema Ginepro",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 22.00,
        description: "Calore balsamico, d'inverno e non solo",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Ginepro.png",
        rating: 4,
        reviews: 23,
        badges: []
    },
    {
        id: 15,
        name: "Crema Lavanda",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 23.00,
        description: "Calma e sollievo per la pelle e l'olfatto",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Lavanda.png",
        rating: 4,
        reviews: 18,
        badges: []
    },
    {
        id: 16,
        name: "Crema Timo",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 22.00,
        description: "Note balsamiche da respirare a fondo",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Timo.png",
        rating: 4,
        reviews: 14,
        badges: []
    },
    {
        id: 17,
        name: "Crema Mani Camomilla",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 20.00,
        description: "Protezione 'effetto guanto' per mani morbidissime",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Camomilla.png",
        rating: 5,
        reviews: 52,
        badges: []
    },
    {
        id: 18,
        name: "Crema Calendula",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 23.00,
        description: "Per la pelle, forza e protezione in ogni stagione",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Calendula.png",
        rating: 4.5,
        reviews: 29,
        badges: []
    },
    {
        id: 19,
        name: "Crema Tea Tree",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 22.00,
        description: "Protezione ed equilibrio contro le alterazioni cutanee",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Teatree.png",
        rating: 4,
        reviews: 21,
        badges: []
    },
    {
        id: 20,
        name: "Crema Attiva",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 22.00,
        description: "Più benessere alla pelle fragile",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-attiva.png",
        rating: 4,
        reviews: 16,
        badges: []
    },
    {
        id: 21,
        name: "Crema Gel Arnica e Artiglio Del Diavolo",
        category: "Creme Dermoattive",
        subcategory: "creme-dermoattive",
        line: "benessere",
        price: 24.00,
        description: "Alleata cosmetica per una fluida mobilità",
        image: "./sources/images/Creme Dermoattive/Crema-dermo-Arnica e artiglio.png",
        rating: 5,
        reviews: 89,
        badges: ["bestseller"]
    },

    // --- BAGNI ED ESSENZE (13 prodotti) ---
    {
        id: 22,
        name: "Essenza Bagno Melissa",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 24.00,
        description: "Massimo relax attraverso l'acqua calda",
        image: "./sources/images/Bagni Caldi ed Essenze/Essenza-Bagno-Melissa.png",
        rating: 4.5,
        reviews: 27,
        badges: []
    },
    {
        id: 23,
        name: "Essenza Bagno Echinacea",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 24.00,
        description: "Per un bagno caldo che favorisce una sensazione di nuova forza",
        image: "./sources/images/Bagni Caldi ed Essenze/Essenza-Bagno-Echinacea.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 24,
        name: "Essenza Bagno Timo",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 24.00,
        description: "L'acqua calda diventa intensamente balsamica",
        image: "./sources/images/Bagni Caldi ed Essenze/Essenza-Bagno-Timo.png",
        rating: 4,
        reviews: 22,
        badges: []
    },
    {
        id: 25,
        name: "Essenza Bagno Sandalo",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 24.00,
        description: "Attraverso l'acqua, l'armonia dei sensi",
        image: "./sources/images/Bagni Caldi ed Essenze/Essenza-Bagno-Sandalo.png",
        rating: 4.5,
        reviews: 31,
        badges: []
    },
    {
        id: 26,
        name: "Essenza Bagno Ginepro",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 24.00,
        description: "Dall'acqua calda, effetto depurativo e ritemprante",
        image: "./sources/images/Bagni Caldi ed Essenze/Essenza-Bagno-Ginepro.png",
        rating: 4,
        reviews: 18,
        badges: []
    },
    {
        id: 27,
        name: "Bagno Estratto Rilassante",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 23.00,
        description: "Per un'immersione che offre profondo relax",
        image: "./sources/images/Bagni Caldi ed Essenze/Bagno-estratto-rilassante.png",
        rating: 5,
        reviews: 45,
        badges: ["bestseller"]
    },
    {
        id: 28,
        name: "Bagno Estratto Equilibrante",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 23.00,
        description: "Per un'immersione che favorisce un nuovo equilibrio",
        image: "./sources/images/Bagni Caldi ed Essenze/Bagno-estratto-equilibrante.png",
        rating: 4,
        reviews: 23,
        badges: []
    },
    {
        id: 29,
        name: "Bagno Estratto Tonificante",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 23.00,
        description: "Per un'immersione dall'effetto stimolante sulla pelle",
        image: "./sources/images/Bagni Caldi ed Essenze/Bagno-estratto-tonificante.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 30,
        name: "Bagno Estratto Purificante",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 23.00,
        description: "Per un'immersione 'detox' che lascia la pelle più pura",
        image: "./sources/images/Bagni Caldi ed Essenze/Bagno-estratto-purificante.png",
        rating: 4.5,
        reviews: 28,
        badges: []
    },
    {
        id: 31,
        name: "Doccia Gel Latte Miele Riso",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 19.00,
        description: "Dolce detersione per la pelle di tutta la famiglia",
        image: "./sources/images/Bagni Caldi ed Essenze/Doccia-gel-latte-miele.png",
        rating: 4.5,
        reviews: 36,
        badges: []
    },
    {
        id: 32,
        name: "Doccia Schiuma Erbe",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 22.00,
        description: "Detersione 'effetto panna', arricchita di erbe di montagna",
        image: "./sources/images/Bagni Caldi ed Essenze/Doccia-schiuma-erbe.png",
        rating: 4,
        reviews: 21,
        badges: []
    },
    {
        id: 33,
        name: "Scrub Detox Vivisal",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 25.50,
        description: "Strategia detossinante per una pelle più luminosa e levigata",
        image: "./sources/images/Bagni Caldi ed Essenze/Scrub-detox-Vivisal.png",
        rating: 4.5,
        reviews: 33,
        badges: ["new"]
    },
    {
        id: 34,
        name: "Bagno Vivisal",
        category: "Bagni ed Essenze",
        subcategory: "bagni-essenze",
        line: "benessere",
        price: 30.50,
        description: "Non solo sali da bagno, ma alleati detox",
        image: "./sources/images/Bagni Caldi ed Essenze/Bagno-Vivisal.png",
        rating: 4,
        reviews: 17,
        badges: []
    },

    // --- LAMELLODERM (2 prodotti) ---
    {
        id: 35,
        name: "Doccia Lamelloderm",
        category: "Lamelloderm",
        subcategory: "lamelloderm",
        line: "benessere",
        price: 23.00,
        description: "Detersione ultra delicata per la pelle più sensibile",
        image: "./sources/images/Lamelloderm/Doccia-Lamelloderm.png",
        rating: 4.5,
        reviews: 28,
        badges: []
    },
    {
        id: 36,
        name: "Crema Lamelloderm Repair",
        category: "Lamelloderm",
        subcategory: "lamelloderm",
        line: "benessere",
        price: 33.50,
        description: "Speciale formula lamellare per la pelle più sensibile",
        image: "./sources/images/Lamelloderm/crema-lamelloderm-repair.png",
        rating: 5,
        reviews: 42,
        badges: ["bestseller"]
    },

    // --- PIEDI E GAMBE (3 prodotti) ---
    {
        id: 37,
        name: "Pedicream",
        category: "Piedi e Gambe",
        subcategory: "piedi-gambe",
        line: "benessere",
        price: 18.00,
        description: "Per i piedi, emollienza impareggiabile",
        image: "./sources/images/Piedi e Gambe/Pedicream.png",
        rating: 4.5,
        reviews: 39,
        badges: []
    },
    {
        id: 38,
        name: "Pedisal",
        category: "Piedi e Gambe",
        subcategory: "piedi-gambe",
        line: "benessere",
        price: 15.00,
        description: "Sali per un pediluvio che diventa toccasana",
        image: "./sources/images/Piedi e Gambe/Pedisal.png",
        rating: 4,
        reviews: 24,
        badges: []
    },
    {
        id: 39,
        name: "Pedibon",
        category: "Piedi e Gambe",
        subcategory: "piedi-gambe",
        line: "benessere",
        price: 18.00,
        description: "Spray per piedi freschi, profumati, in forma",
        image: "./sources/images/Piedi e Gambe/just-pedibon.png",
        rating: 4,
        reviews: 21,
        badges: []
    },

    // --- MALVA (3 prodotti) ---
    {
        id: 40,
        name: "Crema Viso Malva",
        category: "Malva",
        subcategory: "malva",
        line: "benessere",
        price: 32.00,
        description: "Intenso nutrimento e protezione, anche in caso di couperose",
        image: "./sources/images/Malva/Crema-viso-Malva.png",
        rating: 4.5,
        reviews: 47,
        badges: []
    },
    {
        id: 41,
        name: "Latte Malva",
        category: "Malva",
        subcategory: "malva",
        line: "benessere",
        price: 29.50,
        description: "Dolcezza idratante per tutta la famiglia",
        image: "./sources/images/Malva/Latte-corpo-Malva.png",
        rating: 4.5,
        reviews: 38,
        badges: []
    },
    {
        id: 42,
        name: "Deo Roll-On Malva",
        category: "Malva",
        subcategory: "malva",
        line: "benessere",
        price: 17.00,
        description: "Alta efficacia contro l'eccessiva sudorazione",
        image: "./sources/images/Malva/Deoroll-on-Malva.png",
        rating: 4,
        reviews: 26,
        badges: []
    },

    // --- BABY (2 prodotti) ---
    {
        id: 43,
        name: "Baby Crema",
        category: "Baby",
        subcategory: "baby",
        line: "benessere",
        price: 21.00,
        description: "Protezione dermoaffine contro le irritazioni",
        image: "./sources/images/Baby/just-baby-crema.png",
        rating: 5,
        reviews: 56,
        badges: ["bestseller"]
    },
    {
        id: 44,
        name: "Baby Bagno Doccia",
        category: "Baby",
        subcategory: "baby",
        line: "benessere",
        price: 24.00,
        description: "Per il bagnetto e la doccia dei più piccoli",
        image: "./sources/images/Baby/just-baby-bagno-doccia.png",
        rating: 4.5,
        reviews: 43,
        badges: []
    },

    // --- SPECIFICI (9 prodotti) ---
    {
        id: 45,
        name: "Lozione Anti-Insetti",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 23.00,
        description: "Per tutta la famiglia, contro zanzare e zecche",
        image: "./sources/images/Specifici/just-lozione-anti-insetti.png",
        rating: 4.5,
        reviews: 67,
        badges: ["bestseller"]
    },
    {
        id: 46,
        name: "Crema Fango Termale",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 41.00,
        description: "Ispirata alla fangoterapia, per sentirsi meglio in tante occasioni",
        image: "./sources/images/Specifici/crema-fango-termale.png",
        rating: 4.5,
        reviews: 34,
        badges: []
    },
    {
        id: 47,
        name: "Crema Labbra",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 15.00,
        description: "Per labbra protette e morbide ogni giorno",
        image: "./sources/images/Specifici/crema-labbra.png",
        rating: 4,
        reviews: 28,
        badges: []
    },
    {
        id: 48,
        name: "Olio Riparatore",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 23.00,
        description: "'Effetto nuova pelle' in caso di cicatrici e smagliature",
        image: "./sources/images/Specifici/Olio-riparatore.png",
        rating: 4.5,
        reviews: 41,
        badges: []
    },
    {
        id: 49,
        name: "Lozione Astringente",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 20.00,
        description: "Purezza ed equilibrio per le pelli impure",
        image: "./sources/images/Specifici/just-lozione-astringente.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 50,
        name: "Gel Lavamani",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 18.00,
        description: "Per le mani, igiene e sicurezza ovunque",
        image: "./sources/images/Specifici/Gel-lavamani.png",
        rating: 4.5,
        reviews: 52,
        badges: []
    },
    {
        id: 51,
        name: "Eucasol",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 17.00,
        description: "Purezza balsamica che invita a un bel respiro",
        image: "./sources/images/Specifici/Eucasol.png",
        rating: 4,
        reviews: 23,
        badges: []
    },
    {
        id: 52,
        name: "Spray Naso Libero",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 24.00,
        description: "Per respirare meglio in modo naturale",
        image: "./sources/images/Specifici/just-spary-naso-libero.png",
        rating: 4.5,
        reviews: 38,
        badges: []
    },
    {
        id: 53,
        name: "Crema Schiarente",
        category: "Specifici",
        subcategory: "specifici",
        line: "benessere",
        price: 26.00,
        description: "Contro vari tipi di macchie cutanee, per una pelle più uniforme",
        image: "./sources/images/Specifici/just-specifici-crema-schiarente.png",
        rating: 4,
        reviews: 17,
        badges: []
    },

    // --- IGIENE ORALE (2 prodotti) ---
    {
        id: 54,
        name: "Set Igiene Orale Giorno e Notte",
        category: "Igiene Orale",
        subcategory: "igiene-orale",
        line: "benessere",
        price: 20.00,
        description: "In due dentifrici, la soluzione completa per il benessere della bocca",
        image: "./sources/images/Igiene Orale/Set-dentifricio-ok.png",
        rating: 4.5,
        reviews: 31,
        badges: []
    },
    {
        id: 55,
        name: "Collutorio",
        category: "Igiene Orale",
        subcategory: "igiene-orale",
        line: "benessere",
        price: 18.00,
        description: "Triplice azione per un'igiene orale completa",
        image: "./sources/images/Igiene Orale/just-collutorio.png",
        rating: 4,
        reviews: 24,
        badges: []
    },

    // --- INTIM (2 prodotti) ---
    {
        id: 56,
        name: "Gel Intim",
        category: "Intim",
        subcategory: "intim",
        line: "benessere",
        price: 14.50,
        description: "Per le donne, idratante ed equilibrante per la zona intima esterna",
        image: "./sources/images/Intim/just-intim-gel-intim.png",
        rating: 4.5,
        reviews: 36,
        badges: []
    },
    {
        id: 57,
        name: "Deo Intim",
        category: "Intim",
        subcategory: "intim",
        line: "benessere",
        price: 26.00,
        description: "Igiene e protezione per la zona intima",
        image: "./sources/images/Intim/just-intim-deointim.png",
        rating: 4,
        reviews: 22,
        badges: []
    },

    // --- LOZIONI CORPO (4 prodotti) ---
    {
        id: 58,
        name: "Latte Mandorle",
        category: "Lozioni Corpo",
        subcategory: "lozioni-corpo",
        line: "benessere",
        price: 20.00,
        description: "Per un corpo dalla pelle morbida ed elastica",
        image: "./sources/images/Lozioni Corpo/just-latte-corpo-mandorle.png",
        rating: 4.5,
        reviews: 44,
        badges: []
    },
    {
        id: 59,
        name: "Deo Plus",
        category: "Lozioni Corpo",
        subcategory: "lozioni-corpo",
        line: "benessere",
        price: 17.00,
        description: "Ogni volta che vuoi, fresche note di Natura",
        image: "./sources/images/Lozioni Corpo/Deoplus.png",
        rating: 4,
        reviews: 27,
        badges: []
    },
    {
        id: 60,
        name: "Balsamo Corpo",
        category: "Lozioni Corpo",
        subcategory: "lozioni-corpo",
        line: "benessere",
        price: 22.00,
        description: "Sul corpo, un tocco fresco e benefico",
        image: "./sources/images/Lozioni Corpo/Balsamo-corpo.png",
        rating: 4,
        reviews: 21,
        badges: []
    },
    {
        id: 61,
        name: "Olio Riattivante",
        category: "Lozioni Corpo",
        subcategory: "lozioni-corpo",
        line: "benessere",
        price: 22.00,
        description: "Pelle elastica e luminosa dopo il massaggio",
        image: "./sources/images/Lozioni Corpo/Olio-riattivante.png",
        rating: 4.5,
        reviews: 33,
        badges: []
    },

    // --- AMICI ANIMALI (1 prodotto) ---
    {
        id: 62,
        name: "Shampoo Cani e Gatti",
        category: "Amici Animali",
        subcategory: "amici-animali",
        line: "benessere",
        price: 18.00,
        description: "Igiene e benessere per gli amici a 4 zampe",
        image: "./sources/images/Amici Animali/just-shampoo-cani-gatti.png",
        rating: 4.5,
        reviews: 29,
        badges: []
    },

    // =========================================
    // ✨ LINEA BELLEZZA
    // =========================================

    // --- CAPELLI (10 prodotti) ---
    {
        id: 63,
        name: "Lozione Anticaduta",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 32.50,
        description: "L'equilibrio che rafforza, per la crescita di capelli sani",
        image: "./sources/images/Capelli/Lozione-anticaduta.png",
        rating: 4.5,
        reviews: 52,
        badges: []
    },
    {
        id: 64,
        name: "Balsamo Disciplinante",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 22.00,
        description: "Azione 2 in 1 per capelli più forti, docili e belli",
        image: "./sources/images/Capelli/Balsamo-disciplinante.png",
        rating: 4,
        reviews: 28,
        badges: []
    },
    {
        id: 65,
        name: "Latte Spray Capelli Riparatore",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 26.00,
        description: "Ristrutturante istantaneo per capelli sani e belli",
        image: "./sources/images/Capelli/just-capelli-latte-spray-capelli.png",
        rating: 4.5,
        reviews: 37,
        badges: []
    },
    {
        id: 66,
        name: "Shampoo Addolcente",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 23.00,
        description: "Detersione idratante per ogni tipo di capello",
        image: "./sources/images/Capelli/Shampoo-addolcente.png",
        rating: 4,
        reviews: 31,
        badges: []
    },
    {
        id: 67,
        name: "Shampoo Volumizzante",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 26.00,
        description: "Detersione che dona volume ai capelli fini",
        image: "./sources/images/Capelli/just-capelli-shampoo-volumizzante.png",
        rating: 4.5,
        reviews: 25,
        badges: []
    },
    {
        id: 68,
        name: "Shampoo Ravvivante",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 24.00,
        description: "Detersione che valorizza i capelli bianchi, grigi e brizzolati",
        image: "./sources/images/Capelli/Shampoo-ravvivante.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 69,
        name: "Shampoo Rigenerante",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 25.00,
        description: "Detersione nutriente per capelli fragili e danneggiati",
        image: "./sources/images/Capelli/Shampoo-rigenerante.png",
        rating: 4.5,
        reviews: 34,
        badges: []
    },
    {
        id: 70,
        name: "Shampoo Antiforfora",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 23.00,
        description: "Detersione specifica in caso di forfora secca",
        image: "./sources/images/Capelli/Shampoo-antiforfora.png",
        rating: 4,
        reviews: 22,
        badges: []
    },
    {
        id: 71,
        name: "Shampoo Purificante",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 23.00,
        description: "Detersione profonda per capelli grassi",
        image: "./sources/images/Capelli/Shampoo-purificante.png",
        rating: 4,
        reviews: 18,
        badges: []
    },
    {
        id: 72,
        name: "Shampoo Tea Tree",
        category: "Capelli",
        subcategory: "capelli",
        line: "bellezza",
        price: 29.00,
        description: "Detersione lenitiva quando il cuoio capelluto è sensibile",
        image: "./sources/images/Capelli/shampoo-teatree.png",
        rating: 4.5,
        reviews: 41,
        badges: ["bestseller"]
    },

    // --- BODY REFORM (2 prodotti) ---
    {
        id: 73,
        name: "Fluido Seno Modellante Rassodante",
        category: "Body Reform",
        subcategory: "body-reform",
        line: "bellezza",
        price: 36.50,
        description: "Per un décolleté più tonico e rimodellato",
        image: "./sources/images/Body Reform/Fluido-seno-rassodante.png",
        rating: 4.5,
        reviews: 38,
        badges: []
    },
    {
        id: 74,
        name: "Fluido Corpo Modellante Anticellulite",
        category: "Body Reform",
        subcategory: "body-reform",
        line: "bellezza",
        price: 51.00,
        description: "Azione mirata sui punti critici, per una silhouette rimodellata",
        image: "./sources/images/Body Reform/Fluido-seno-modellante.png",
        rating: 5,
        reviews: 67,
        badges: ["bestseller"]
    },

    // --- INFIORE (13 prodotti) ---
    {
        id: 75,
        name: "Gel Detergente",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 30.50,
        description: "Per la quotidiana detersione della pelle del viso",
        image: "./sources/images/Infiore/just-infiore-viso-gel-detergente.png",
        rating: 4.5,
        reviews: 34,
        badges: []
    },
    {
        id: 76,
        name: "Crema Detergente",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 30.50,
        description: "Per la detersione del viso con pelle secca ed esigente",
        image: "./sources/images/Infiore/infiore-crema-detergente.png",
        rating: 4,
        reviews: 28,
        badges: []
    },
    {
        id: 77,
        name: "Struccante Micellare",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 24.00,
        description: "Per rimuovere delicatamente il trucco da viso, occhi e labbra",
        image: "./sources/images/Infiore/just-infiore-viso-struccante-micellare.png",
        rating: 4.5,
        reviews: 45,
        badges: []
    },
    {
        id: 78,
        name: "Tonico Vitalizzante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 22.00,
        description: "Per il viso, un fresco tocco equilibrante e anti-fatica",
        image: "./sources/images/Infiore/just-infiore-viso-tonico-vitalizzante.png",
        rating: 4,
        reviews: 23,
        badges: []
    },
    {
        id: 79,
        name: "Peeling",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 37.50,
        description: "Purezza specifica per la pelle del viso",
        image: "./sources/images/Infiore/Infiore-Peeling.png",
        rating: 4.5,
        reviews: 31,
        badges: []
    },
    {
        id: 80,
        name: "Maschera Gel Rassodante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 39.50,
        description: "Innovativa maschera anti-age per il viso",
        image: "./sources/images/Infiore/just-infiore-viso-maschera-gel-rassodante.png",
        rating: 5,
        reviews: 52,
        badges: []
    },
    {
        id: 81,
        name: "Idrogel Ultra-Idratante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 39.50,
        description: "Per dissetare intensamente la pelle del viso",
        image: "./sources/images/Infiore/just-infiore-viso-idrogel-ultra-idratante.png",
        rating: 4.5,
        reviews: 39,
        badges: []
    },
    {
        id: 82,
        name: "Crema Contorno Occhi",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 50.00,
        description: "Mirata azione anti-age per l'area del viso più delicata",
        image: "./sources/images/Infiore/just-infiore-viso-crema-contorno-occhi.png",
        rating: 5,
        reviews: 78,
        badges: ["bestseller"]
    },
    {
        id: 83,
        name: "Siero Viso Ultra-Rigenerante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 53.00,
        description: "Effetto ultra-rigenerante per un viso dalla pelle radiosa",
        image: "./sources/images/Infiore/just-infiore-viso-siero-viso-ultra-rigenerante.png",
        rating: 4.5,
        reviews: 45,
        badges: []
    },
    {
        id: 84,
        name: "Crema 24H Rimpolpante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 59.00,
        description: "Per un viso tonico, fresco e radioso durante le 24 ore",
        image: "./sources/images/Infiore/just-infiore-viso-italia-crema-24h-rimpolpante.png",
        rating: 5,
        reviews: 89,
        badges: ["hot"]
    },
    {
        id: 85,
        name: "Crema Giorno Rigenerante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 53.00,
        description: "Ogni giorno, rinnovamento contro i segni del tempo",
        image: "./sources/images/Infiore/infiore-crema-giorno-rigenerante.png",
        rating: 4.5,
        reviews: 41,
        badges: []
    },
    {
        id: 86,
        name: "Crema Notte Rigenerante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 53.00,
        description: "Ogni sera, in supporto alla naturale rigenerazione cutanea notturna",
        image: "./sources/images/Infiore/infiore-crema-notte-rigenerante.png",
        rating: 4.5,
        reviews: 38,
        badges: []
    },
    {
        id: 87,
        name: "Latte Corpo Vellutante",
        category: "Infiore",
        subcategory: "infiore",
        line: "bellezza",
        price: 29.00,
        description: "Azione anti-age per la pelle del corpo",
        image: "./sources/images/Infiore/just-infiore-latte-corpo-vellutante.png",
        rating: 4,
        reviews: 27,
        badges: []
    },

    // --- SOLARI (6 prodotti) ---
    {
        id: 88,
        name: "Latte Solare 6",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 19.50,
        description: "Bassa protezione contro i danni del sole",
        image: "./sources/images/Solari/just-solari-latte-solare-6.png",
        rating: 4,
        reviews: 18,
        badges: []
    },
    {
        id: 89,
        name: "Gel Doposole",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 31.50,
        description: "Freschezza, idratazione ed equilibrio per la pelle provata dal sole",
        image: "./sources/images/Solari/just-solari-gel-doposole.png",
        rating: 5,
        reviews: 56,
        badges: ["bestseller"]
    },
    {
        id: 90,
        name: "Latte Spray Solare 15",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 31.50,
        description: "Media protezione contro i danni del sole, in spray",
        image: "./sources/images/Solari/Latte-solare-spray-15.png",
        rating: 4,
        reviews: 24,
        badges: []
    },
    {
        id: 91,
        name: "Latte Solare 30",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 31.50,
        description: "Alta protezione contro i danni del sole",
        image: "./sources/images/Solari/Latte-solare-30.png",
        rating: 4.5,
        reviews: 38,
        badges: []
    },
    {
        id: 92,
        name: "Crema Viso Solare 30",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 28.50,
        description: "Alta protezione contro i danni del sole, per viso e aree più esposte",
        image: "./sources/images/Solari/Crema-viso-solare-30.png",
        rating: 4.5,
        reviews: 32,
        badges: []
    },
    {
        id: 93,
        name: "Latte Solare 50",
        category: "Solari",
        subcategory: "solari",
        line: "bellezza",
        price: 29.50,
        description: "Alta protezione contro i danni del sole, per l'inizio dell'esposizione",
        image: "./sources/images/Solari/latte-solare-50.png",
        rating: 5,
        reviews: 47,
        badges: []
    },

    // --- UOMO (2 prodotti) ---
    {
        id: 94,
        name: "After Shave Gel",
        category: "Uomo",
        subcategory: "uomo",
        line: "bellezza",
        price: 18.00,
        description: "Il tocco più gradito dalla pelle appena rasata",
        image: "./sources/images/Uomo/After-Shave.png",
        rating: 4.5,
        reviews: 34,
        badges: []
    },
    {
        id: 95,
        name: "Shaving Gel",
        category: "Uomo",
        subcategory: "uomo",
        line: "bellezza",
        price: 21.00,
        description: "Per una rasatura perfetta, nel rispetto della pelle",
        image: "./sources/images/Uomo/Shaving-Gel.png",
        rating: 4,
        reviews: 22,
        badges: []
    },

    // =========================================
    // 🏠 LINEA CASA
    // =========================================
    {
        id: 96,
        name: "Cura Legno",
        category: "Casa",
        subcategory: "prodotti-casa",
        line: "casa",
        price: 22.00,
        description: "Per pulire, proteggere e ravvivare il legno",
        image: "./sources/images/Casa/Cura-legno.png",
        rating: 4.5,
        reviews: 28,
        badges: []
    },
    {
        id: 97,
        name: "Smacchiatore Pretrattante Per Tessuti",
        category: "Casa",
        subcategory: "prodotti-casa",
        line: "casa",
        price: 13.00,
        description: "In caso di macchie, efficace prima del lavaggio",
        image: "./sources/images/Casa/Smacchiatore-pretrattante.png",
        rating: 4,
        reviews: 19,
        badges: []
    },
    {
        id: 98,
        name: "Detergente Universale NR Plus",
        category: "Casa",
        subcategory: "prodotti-casa",
        line: "casa",
        price: 22.00,
        description: "Concentrato e versatile, per tutte le esigenze di igiene domestica",
        image: "./sources/images/Casa/Detergente-universale.png",
        rating: 5,
        reviews: 67,
        badges: ["bestseller"]
    },
    {
        id: 99,
        name: "Spray Ambientale",
        category: "Casa",
        subcategory: "prodotti-casa",
        line: "casa",
        price: 21.00,
        description: "Per la casa, addio odori sgradevoli",
        image: "./sources/images/Casa/Spray-ambientale.png",
        rating: 4.5,
        reviews: 34,
        badges: []
    },
    {
        id: 100,
        name: "Spray Lavanda",
        category: "Casa",
        subcategory: "prodotti-casa",
        line: "casa",
        price: 31.50,
        description: "Note di lavanda per armadi e cassetti protetti e profumati",
        image: "./sources/images/Casa/just-casa-spray-lavanda.png",
        rating: 4,
        reviews: 23,
        badges: []
    },

    // =========================================
    // 💊 LINEA INTEGRATORI
    // =========================================
    {
        id: 101,
        name: "+Energy",
        category: "Integrazione Alimentare",
        subcategory: "integrazione-alimentare",
        line: "integratori",
        price: 34.50,
        description: "Ricarica il tuo benessere, ogni giorno",
        image: "./sources/images/Integrazione Alimentare/just-linea-integrazione-alimentare-piu-energy.png",
        rating: 4.5,
        reviews: 29,
        badges: ["new"]
    },

    
];

// =============================================
// FUNZIONI HELPER
// =============================================

/**
 * Filtra prodotti per linea (benessere, bellezza, casa, integratori)
 */
function getProductsByLine(line) {
    return products.filter(p => p.line === line);
}

/**
 * Filtra prodotti per sottocategoria
 */
function getProductsBySubcategory(subcategory) {
    return products.filter(p => p.subcategory === subcategory);
}

/**
 * Filtra prodotti per categoria
 */
function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

/**
 * Cerca prodotti per nome
 */
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

/**
 * Ordina prodotti
 */
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    switch(sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'reviews':
            return sorted.sort((a, b) => b.reviews - a.reviews);
        default:
            return sorted;
    }
}

/**
 * Ottieni prodotti bestseller
 */
function getBestsellers() {
    return products.filter(p => p.badges.includes('bestseller'));
}

/**
 * Ottieni nuovi prodotti
 */
function getNewProducts() {
    return products.filter(p => p.badges.includes('new'));
}

/**
 * Ottieni prodotto per ID
 */
function getProductById(id) {
    return products.find(p => p.id === id);
}

/**
 * Ottieni range prezzi
 */
function getPriceRange() {
    const prices = products.map(p => p.price);
    return {
        min: Math.min(...prices),
        max: Math.max(...prices)
    };
}

/**
 * Filtra per range prezzo
 */
function filterByPriceRange(productsArray, minPrice, maxPrice) {
    return productsArray.filter(p => p.price >= minPrice && p.price <= maxPrice);
}

// =============================================
// STATISTICHE
// =============================================
const stats = {
    totalProducts: products.length,
    lineaBenessere: getProductsByLine('benessere').length,
    lineaBellezza: getProductsByLine('bellezza').length,
    lineaCasa: getProductsByLine('casa').length,
    lineaIntegratori: getProductsByLine('integratori').length,
    bestsellers: getBestsellers().length,
    newProducts: getNewProducts().length
};

console.log('📦 Just Marizete - Prodotti caricati:', stats);


