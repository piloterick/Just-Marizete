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
        // ✅ Descrizione completa (per pagina prodotto)
        fullDescription: `
            <h3>🌿 Descrizione</h3>
            <p>Relax Attivatore è un olio essenziale premium formulato per creare il perfetto equilibrio tra serenità e voglia di fare. Ideale per momenti di stress o quando hai bisogno di ritrovare la calma interiore.</p>
            
            <h3>✨ Benefici</h3>
            <ul>
                <li>Favorisce il rilassamento naturale</li>
                <li>Aiuta a ridurre lo stress quotidiano</li>
                <li>Migliora la qualità del sonno</li>
                <li>Crea un'atmosfera di benessere</li>
            </ul>
            
            <h3>📋 Modo d'uso</h3>
            <p>Versare 5-10 gocce nel diffusore di aromi oppure diluire in olio vettore per massaggi rilassanti. Può essere aggiunto all'acqua del bagno per un'esperienza spa.</p>
            
            <h3>🧴 Ingredienti</h3>
            <p>Lavandula Angustifolia Oil, Citrus Bergamia Oil, Chamomilla Recutita Oil, Tocopherol.</p>
        `,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Tono e Armonia è un olio essenziale che dona equilibrio e vitalità. Goccia dopo goccia, aiuta a ritrovare il giusto tono in modo armonico, perfetto per iniziare la giornata con energia positiva.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Riequilibra corpo e mente</li>
        <li>Favorisce l'armonia interiore</li>
        <li>Dona energia naturale</li>
        <li>Migliora la concentrazione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare alcune gocce sui polsi o dietro le orecchie. Ideale anche per diffusione ambientale durante le attività quotidiane.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Citrus Limon Oil, Rosmarinus Officinalis Oil, Mentha Piperita Oil, Eucalyptus Globulus Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio 31 è il prodotto iconico Just, una miscela unica di 31 oli essenziali puri che racchiude in ogni goccia un benessere unico e originale. Un alleato versatile per tutta la famiglia.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione balsamica e rinfrescante</li>
        <li>Versatile per molteplici utilizzi</li>
        <li>Favorisce il benessere respiratorio</li>
        <li>Effetto tonificante e rigenerante</li>
        <li>Ideale per massaggi defatiganti</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Per diffusione ambientale, inalazione, massaggi o aggiunto all'acqua del bagno. Diluire in olio vettore per uso topico. Può essere usato anche per purificare l'aria degli ambienti.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Miscela di 31 oli essenziali puri tra cui: Mentha Piperita, Eucalyptus, Lavandula, Rosmarinus, Thymus, e altri pregiati oli vegetali.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Eucalipto è un olio essenziale dalla purezza balsamica ideale per la stagione fredda. Le sue proprietà rinfrescanti e purificanti lo rendono un alleato prezioso per il benessere delle vie respiratorie.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione balsamica intensa</li>
        <li>Libera le vie respiratorie</li>
        <li>Purifica l'aria degli ambienti</li>
        <li>Effetto rinfrescante e tonificante</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 5-10 gocce nel diffusore o in acqua calda per suffumigi. Per massaggi, diluire in olio vettore e applicare su petto e schiena.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Eucalyptus Globulus Oil, Eucalyptus Radiata Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Limone è un frizzante alleato per sentirsi "in ricarica". Il suo aroma agrumato e vivace dona energia e buonumore, purificando l'aria con note fresche e solari.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto energizzante e rivitalizzante</li>
        <li>Purifica e rinfresca l'aria</li>
        <li>Favorisce la concentrazione</li>
        <li>Dona buonumore e positività</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Diffondere nell'ambiente per purificare l'aria. Aggiungere alcune gocce ai detergenti per un effetto sgrassante naturale.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Citrus Limon Peel Oil.</p>
    
    <h3>⚠️ Avvertenze</h3>
    <p>Fotosensibilizzante: evitare l'esposizione al sole dopo l'applicazione sulla pelle.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Arancio aiuta a ritrovare tono e positività con le sue dolci note fruttate. Un aroma avvolgente e rilassante che crea un'atmosfera di serenità e benessere.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Favorisce il rilassamento</li>
        <li>Dona tono e positività</li>
        <li>Crea un'atmosfera accogliente</li>
        <li>Combatte lo stress</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Ideale per diffusione ambientale, soprattutto nelle ore serali. Può essere aggiunto all'acqua del bagno per un momento di relax.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Citrus Aurantium Dulcis Peel Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Menta offre più freschezza ed energia grazie alla combinazione di 3 tipi di menta. Un concentrato di vitalità per mente e corpo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto rinfrescante immediato</li>
        <li>Stimola energia e concentrazione</li>
        <li>Allevia la stanchezza mentale</li>
        <li>Favorisce la digestione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Inalare direttamente per un effetto rivitalizzante. Diluire in olio vettore per massaggi rinfrescanti su tempie e nuca.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Mentha Piperita Oil, Mentha Arvensis Oil, Mentha Spicata Oil.</p>
    
    <h3>⚠️ Avvertenze</h3>
    <p>Non applicare vicino agli occhi. Evitare nei bambini sotto i 6 anni.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Lavanda è pura lavanda francese che profuma di serenità. Un classico dell'aromaterapia per favorire il relax e un sonno ristoratore.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Favorisce il rilassamento profondo</li>
        <li>Migliora la qualità del sonno</li>
        <li>Calma ansia e stress</li>
        <li>Lenisce la pelle irritata</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare alcune gocce sul cuscino prima di dormire. Diffondere in camera da letto o aggiungere all'acqua del bagno serale.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Lavandula Angustifolia Oil (Lavanda Francese).</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Tea Tree è il tocco purificante per tutta la famiglia. Conosciuto per le sue proprietà antibatteriche naturali, è un must-have in ogni casa.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Potente azione purificante</li>
        <li>Antibatterico naturale</li>
        <li>Ideale per la pelle impura</li>
        <li>Purifica l'aria degli ambienti</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare puro su piccole imperfezioni cutanee. Diffondere per purificare l'aria. Aggiungere allo shampoo per il cuoio capelluto.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Melaleuca Alternifolia Leaf Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Essenziale Geranio offre il giusto equilibrio con note fiorite intense e preziose. Un aroma femminile e raffinato che armonizza mente e corpo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Riequilibra le emozioni</li>
        <li>Tonifica e rassoda la pelle</li>
        <li>Aroma floreale raffinato</li>
        <li>Favorisce l'armonia interiore</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Diffondere per creare un'atmosfera armoniosa. Diluire in olio vettore per trattamenti viso e corpo.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Pelargonium Graveolens Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Gel Bodyfresh è la soluzione ideale per sentirsi sempre a posto, anche col caldo. Una texture leggera e rinfrescante che dona immediato sollievo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto rinfrescante immediato</li>
        <li>Texture leggera non appiccicosa</li>
        <li>Ideale per l'estate</li>
        <li>Dona sensazione di freschezza duratura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle pulita massaggiando delicatamente. Ideale dopo l'attività fisica o nelle giornate calde.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Aloe Barbadensis Leaf Juice, Menthol, Glycerin, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Gel Ventonik è lenitiva e rinfrescante, formulata per donare gambe più leggere. Ideale per chi soffre di pesantezza e affaticamento agli arti inferiori.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Allevia la sensazione di gambe pesanti</li>
        <li>Effetto rinfrescante immediato</li>
        <li>Favorisce la microcircolazione</li>
        <li>Dona leggerezza e comfort</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle gambe con movimenti dal basso verso l'alto. Ideale la sera o dopo lunghe giornate in piedi.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Vitis Vinifera Extract, Aesculus Hippocastanum Extract, Ruscus Aculeatus Extract, Menthol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Gel Consolida è il pronto soccorso cosmetico per mantenersi attivi. Formulata con estratto di consolida, tradizionalmente usata per il benessere di muscoli e articolazioni.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione lenitiva rapida</li>
        <li>Ideale dopo l'attività sportiva</li>
        <li>Favorisce il recupero muscolare</li>
        <li>Formula naturale</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone interessate massaggiando fino a completo assorbimento. Ripetere al bisogno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Symphytum Officinale Root Extract, Arnica Montana Extract, Glycerin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Ginepro dona calore balsamico, d'inverno e non solo. Ideale per massaggi riscaldanti che alleviano tensioni muscolari.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto riscaldante</li>
        <li>Allevia le tensioni muscolari</li>
        <li>Aroma balsamico</li>
        <li>Ideale per massaggi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Massaggiare sulle zone da trattare fino a completo assorbimento. Per un effetto più intenso, coprire con un panno caldo.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Juniperus Communis Fruit Oil, Capsicum Frutescens Extract, Camphor.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Lavanda offre calma e sollievo per la pelle e l'olfatto. L'aroma rilassante della lavanda si unisce a una formula delicata e lenitiva.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto calmante e rilassante</li>
        <li>Lenisce la pelle irritata</li>
        <li>Aroma di lavanda naturale</li>
        <li>Ideale per il relax serale</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle massaggiando delicatamente. Perfetta prima di dormire per un sonno sereno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Lavandula Angustifolia Oil, Glycerin, Aloe Barbadensis Leaf Juice.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Timo offre note balsamiche da respirare a fondo. Ideale durante la stagione fredda per favorire il benessere delle vie respiratorie.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione balsamica intensa</li>
        <li>Favorisce la respirazione</li>
        <li>Ideale per la stagione fredda</li>
        <li>Formula naturale</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare su petto e schiena massaggiando. Ideale prima di dormire o al bisogno durante il giorno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Thymus Vulgaris Oil, Eucalyptus Globulus Oil, Menthol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Mani Camomilla offre protezione "effetto guanto" per mani morbidissime. Formula intensiva che ripara e protegge le mani stressate.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione intensa</li>
        <li>Ripara le mani secche e screpolate</li>
        <li>Effetto lenitivo della camomilla</li>
        <li>Mani morbide a lungo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle mani al bisogno, massaggiando bene anche sulle cuticole. Ideale dopo ogni lavaggio.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Chamomilla Recutita Extract, Glycerin, Butyrospermum Parkii Butter, Allantoin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Calendula dona alla pelle forza e protezione in ogni stagione. La calendula è nota per le sue proprietà lenitive e rigeneranti.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Lenisce la pelle irritata</li>
        <li>Favorisce la rigenerazione cutanea</li>
        <li>Protegge dalle aggressioni esterne</li>
        <li>Adatta a tutta la famiglia</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle pulita massaggiando delicatamente. Ideale per pelli sensibili e delicate.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Calendula Officinalis Extract, Glycerin, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Tea Tree offre protezione ed equilibrio contro le alterazioni cutanee. La potenza purificante del tea tree in una crema delicata.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione purificante</li>
        <li>Riequilibra la pelle impura</li>
        <li>Antibatterico naturale</li>
        <li>Non secca la pelle</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare localmente sulle zone da trattare. Può essere usata quotidianamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Melaleuca Alternifolia Leaf Oil, Glycerin, Aloe Barbadensis Leaf Juice.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Attiva dona più benessere alla pelle fragile. Una formula specifica per pelli sensibili che necessitano di cure extra.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Nutre la pelle fragile</li>
        <li>Rafforza la barriera cutanea</li>
        <li>Lenisce e protegge</li>
        <li>Texture delicata</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone interessate massaggiando con delicatezza. Usare quotidianamente per risultati ottimali.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Panthenol, Allantoin, Bisabolol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Gel Arnica e Artiglio Del Diavolo è l'alleata cosmetica per una fluida mobilità. Due potenti estratti naturali per il benessere di muscoli e articolazioni.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Allevia tensioni muscolari</li>
        <li>Favorisce la mobilità articolare</li>
        <li>Effetto lenitivo rapido</li>
        <li>Ideale per sportivi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Massaggiare sulle zone interessate 2-3 volte al giorno. Ideale prima e dopo l'attività fisica.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Arnica Montana Extract, Harpagophytum Procumbens Extract, Menthol, Camphor.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Essenza Bagno Melissa offre massimo relax attraverso l'acqua calda. La melissa è nota per le sue proprietà calmanti e rilassanti.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rilassamento profondo</li>
        <li>Calma la mente</li>
        <li>Prepara al sonno</li>
        <li>Aroma delicato e avvolgente</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda della vasca. Immergersi per 15-20 minuti.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Melissa Officinalis Extract, Glycerin, Parfum.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Essenza Bagno Echinacea è perfetta per un bagno caldo che favorisce una sensazione di nuova forza. L'echinacea è nota per le sue proprietà immunostimolanti.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Dona nuova energia</li>
        <li>Supporta le difese naturali</li>
        <li>Effetto tonificante</li>
        <li>Ideale nei cambi di stagione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda della vasca. Immergersi per 15-20 minuti respirando profondamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Echinacea Purpurea Extract, Glycerin, Parfum.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Essenza Bagno Timo trasforma l'acqua calda in un'esperienza intensamente balsamica. Ideale durante la stagione fredda.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Azione balsamica intensa</li>
        <li>Libera le vie respiratorie</li>
        <li>Riscalda e tonifica</li>
        <li>Purifica l'organismo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda. Respirare profondamente i vapori balsamici durante il bagno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Thymus Vulgaris Extract, Eucalyptus Globulus Oil, Glycerin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Essenza Bagno Sandalo offre attraverso l'acqua l'armonia dei sensi. Il sandalo è noto per le sue proprietà rilassanti e meditative.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Armonizza i sensi</li>
        <li>Rilassamento profondo</li>
        <li>Aroma caldo e avvolgente</li>
        <li>Favorisce la meditazione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda della vasca. Creare un'atmosfera rilassante con luci soffuse.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Santalum Album Oil, Glycerin, Parfum.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Essenza Bagno Ginepro offre dall'acqua calda un effetto depurativo e ritemprante. Il ginepro è noto per le sue proprietà detossinanti.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto depurativo</li>
        <li>Ritemprante e tonificante</li>
        <li>Favorisce l'eliminazione delle tossine</li>
        <li>Aroma fresco e balsamico</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda. Ideale dopo attività sportiva o periodi di stress.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Juniperus Communis Fruit Oil, Glycerin, Parfum.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Bagno Estratto Rilassante offre un'immersione che dona profondo relax. Una formula studiata per sciogliere le tensioni e ritrovare la serenità.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rilassamento totale</li>
        <li>Scioglie le tensioni</li>
        <li>Prepara al sonno ristoratore</li>
        <li>Calma mente e corpo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda. Immergersi per almeno 20 minuti, preferibilmente la sera.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Lavandula Angustifolia Oil, Melissa Officinalis Extract, Chamomilla Recutita Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Bagno Estratto Equilibrante offre un'immersione che favorisce un nuovo equilibrio. Ideale per ritrovare armonia tra corpo e mente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Riequilibra corpo e mente</li>
        <li>Favorisce l'armonia interiore</li>
        <li>Riduce lo stress</li>
        <li>Dona serenità</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda. Immergersi respirando profondamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Rosa Damascena Oil, Pelargonium Graveolens Oil, Glycerin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Bagno Estratto Tonificante offre un'immersione dall'effetto stimolante sulla pelle. Ideale per iniziare la giornata con energia.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto tonificante</li>
        <li>Stimola la circolazione</li>
        <li>Dona energia e vitalità</li>
        <li>Risveglia i sensi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua del bagno mattutino. Ideale anche come doccia tonificante.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Rosmarinus Officinalis Oil, Citrus Limon Oil, Mentha Piperita Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Bagno Estratto Purificante offre un'immersione "detox" che lascia la pelle più pura. Una formula che favorisce l'eliminazione delle impurità.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto detox</li>
        <li>Purifica la pelle</li>
        <li>Elimina le impurità</li>
        <li>Dona luminosità</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare 2-3 tappi nell'acqua calda. Ideale una volta a settimana per un trattamento detox.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Juniperus Communis Oil, Citrus Limon Oil, Melaleuca Alternifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Doccia Gel Latte Miele Riso offre una dolce detersione per la pelle di tutta la famiglia. Formula delicata e nutriente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Detersione delicata</li>
        <li>Nutre la pelle</li>
        <li>Adatto a tutta la famiglia</li>
        <li>Aroma dolce e avvolgente</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle bagnata, massaggiare e risciacquare. Adatto all'uso quotidiano.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Mel Extract, Oryza Sativa Bran Oil, Glycerin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Doccia Schiuma Erbe offre una detersione "effetto panna" arricchita di erbe di montagna. Una schiuma morbida e avvolgente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Schiuma ricca e cremosa</li>
        <li>Profumo di erbe alpine</li>
        <li>Detersione delicata</li>
        <li>Lascia la pelle morbida</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare una noce di prodotto sulla spugna o direttamente sulla pelle. Massaggiare e risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Glycerin, estratti di erbe alpine.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Scrub Detox Vivisal è una strategia detossinante per una pelle più luminosa e levigata. Formula esfoliante con sali minerali.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Esfoliazione profonda</li>
        <li>Effetto detox</li>
        <li>Pelle luminosa e levigata</li>
        <li>Stimola il rinnovamento cellulare</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle umida con movimenti circolari. Insistere su gomiti, ginocchia e talloni. Risciacquare abbondantemente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Maris Sal, Aqua, Glycerin, Citrus Limon Oil, Rosmarinus Officinalis Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Bagno Vivisal non è solo sali da bagno, ma alleati detox. Un trattamento rigenerante che purifica corpo e mente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto detossinante</li>
        <li>Rilassa i muscoli</li>
        <li>Purifica la pelle</li>
        <li>Ricco di minerali</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Sciogliere 2-3 cucchiai nell'acqua calda del bagno. Immergersi per 20-30 minuti.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Maris Sal, Sodium Bicarbonate, Eucalyptus Globulus Oil, Lavandula Angustifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Doccia Lamelloderm offre una detersione ultra delicata per la pelle più sensibile. Formula lamellare che rispetta la barriera cutanea.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Detersione ultra delicata</li>
        <li>Rispetta la barriera cutanea</li>
        <li>Ideale per pelli sensibili</li>
        <li>Non irrita</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulla pelle bagnata, detergere delicatamente e risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Cocoyl Isethionate, Glycerin, Panthenol, Bisabolol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Lamelloderm Repair ha una speciale formula lamellare per la pelle più sensibile. Ripara e protegge la barriera cutanea.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Ripara la barriera cutanea</li>
        <li>Idratazione profonda</li>
        <li>Calma le irritazioni</li>
        <li>Protezione duratura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone sensibili o irritate, mattina e sera.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Ceramide Complex, Glycerin, Panthenol, Bisabolol, Allantoin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Pedicream offre ai piedi un'emollienza impareggiabile. Una crema ricca che ammorbidisce la pelle secca e indurita, donando comfort immediato.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Ammorbidisce la pelle indurita</li>
        <li>Nutre in profondità</li>
        <li>Previene screpolature</li>
        <li>Dona comfort immediato</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui piedi puliti e asciutti, massaggiando bene talloni e zone secche. Ideale la sera prima di dormire.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Urea, Glycerin, Butyrospermum Parkii Butter, Menthol, Tea Tree Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Pedisal trasforma il pediluvio in un vero toccasana. Sali minerali arricchiti con oli essenziali per piedi stanchi e affaticati.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rilassa i piedi stanchi</li>
        <li>Effetto rinfrescante</li>
        <li>Ammorbidisce la pelle</li>
        <li>Elimina i cattivi odori</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Sciogliere 2 cucchiai in acqua tiepida. Immergere i piedi per 15-20 minuti. Asciugare bene.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Maris Sal, Sodium Bicarbonate, Mentha Piperita Oil, Rosmarinus Officinalis Oil, Lavandula Angustifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Pedibon è lo spray per piedi freschi, profumati e in forma. Una soluzione pratica per il benessere quotidiano dei piedi.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rinfresca istantaneamente</li>
        <li>Combatte i cattivi odori</li>
        <li>Azione deodorante duratura</li>
        <li>Pratico formato spray</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare sui piedi puliti e asciutti, anche tra le dita. Può essere usato anche nelle scarpe.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Alcohol Denat., Aqua, Menthol, Melaleuca Alternifolia Oil, Salvia Officinalis Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Viso Malva offre intenso nutrimento e protezione, anche in caso di couperose. La malva è nota per le sue proprietà lenitive e decongestionanti.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Nutre intensamente</li>
        <li>Lenisce rossori e irritazioni</li>
        <li>Ideale per pelli con couperose</li>
        <li>Protegge dalle aggressioni esterne</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare mattina e sera sul viso pulito, massaggiando delicatamente fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Malva Sylvestris Extract, Glycerin, Butyrospermum Parkii Butter, Bisabolol, Allantoin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Malva offre dolcezza idratante per tutta la famiglia. Una formula delicata che nutre e protegge la pelle di grandi e piccini.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Idratazione delicata</li>
        <li>Adatto a tutta la famiglia</li>
        <li>Lenisce la pelle sensibile</li>
        <li>Texture leggera e assorbimento rapido</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare su tutto il corpo dopo il bagno o la doccia, massaggiando fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Malva Sylvestris Extract, Glycerin, Prunus Amygdalus Dulcis Oil, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Deo Roll-On Malva offre alta efficacia contro l'eccessiva sudorazione. Formula delicata arricchita con estratto di malva.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Controlla la sudorazione</li>
        <li>Delicato sulla pelle</li>
        <li>Senza alcol</li>
        <li>Protezione duratura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle ascelle pulite e asciutte. Lasciare asciugare prima di vestirsi.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Aluminum Chlorohydrate, Malva Sylvestris Extract, Glycerin, Allantoin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Baby Crema offre protezione dermoaffine contro le irritazioni. Formula specifica per la pelle delicatissima dei neonati e dei bambini.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protegge dal pannolino</li>
        <li>Previene le irritazioni</li>
        <li>Formula ultra delicata</li>
        <li>Testata dermatologicamente</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare ad ogni cambio pannolino sulla pelle pulita e asciutta, creando uno strato protettivo.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Zinc Oxide, Calendula Officinalis Extract, Chamomilla Recutita Extract, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Baby Bagno Doccia è formulato per il bagnetto e la doccia dei più piccoli. Detersione delicatissima che rispetta la pelle dei bambini.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Detersione ultra delicata</li>
        <li>Non brucia gli occhi</li>
        <li>pH fisiologico</li>
        <li>Senza parabeni</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare nell'acqua del bagnetto o applicare direttamente sulla pelle bagnata. Risciacquare delicatamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Cocamidopropyl Betaine, Glycerin, Calendula Officinalis Extract, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Lozione Anti-Insetti protegge tutta la famiglia contro zanzare e zecche. Formula efficace con ingredienti di origine naturale.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione contro zanzare</li>
        <li>Efficace contro le zecche</li>
        <li>Adatto a tutta la famiglia</li>
        <li>Profumo gradevole</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare sulle parti esposte del corpo prima dell'esposizione. Riapplicare ogni 2-3 ore o dopo il bagno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Citriodiol, Eucalyptus Citriodora Oil, Cymbopogon Nardus Oil, Lavandula Angustifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Fango Termale è ispirata alla fangoterapia, per sentirsi meglio in tante occasioni. I benefici del fango termale in una crema pratica.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto termale</li>
        <li>Allevia tensioni muscolari</li>
        <li>Favorisce la mobilità articolare</li>
        <li>Azione riscaldante</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone interessate massaggiando fino a completo assorbimento. Può essere coperta con un panno caldo per intensificare l'effetto.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Thermal Mud Extract, Capsicum Frutescens Extract, Camphor, Menthol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Labbra mantiene le labbra protette e morbide ogni giorno. Formula nutriente che ripara e previene le screpolature.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protegge dal freddo e dal vento</li>
        <li>Ripara le labbra screpolate</li>
        <li>Idratazione duratura</li>
        <li>Texture non appiccicosa</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle labbra ogni volta che se ne sente il bisogno. Ideale prima dell'esposizione al freddo o al sole.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Ricinus Communis Oil, Cera Alba, Butyrospermum Parkii Butter, Tocopheryl Acetate, Calendula Officinalis Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Riparatore dona "effetto nuova pelle" in caso di cicatrici e smagliature. Formula concentrata che favorisce la rigenerazione cutanea.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Attenua cicatrici</li>
        <li>Riduce le smagliature</li>
        <li>Favorisce la rigenerazione</li>
        <li>Migliora l'elasticità cutanea</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare 2-3 gocce sulle zone interessate massaggiando fino a completo assorbimento. Usare mattina e sera per almeno 3 mesi.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Rosa Moschata Oil, Triticum Vulgare Germ Oil, Tocopheryl Acetate, Lavandula Angustifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Lozione Astringente dona purezza ed equilibrio per le pelli impure. Azione purificante che riequilibra la produzione di sebo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Purifica la pelle</li>
        <li>Riequilibra il sebo</li>
        <li>Stringe i pori dilatati</li>
        <li>Previene le imperfezioni</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare con un dischetto di cotone sul viso pulito, evitando il contorno occhi. Usare mattina e sera.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Alcohol Denat., Hamamelis Virginiana Extract, Salvia Officinalis Extract, Zinc PCA.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Gel Lavamani garantisce igiene e sicurezza per le mani ovunque. Formula antibatterica che non secca la pelle.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Igienizza senza acqua</li>
        <li>Azione antibatterica</li>
        <li>Non secca le mani</li>
        <li>Pratico da portare</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare una noce di prodotto sulle mani asciutte e strofinare fino a completa asciugatura.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Alcohol Denat., Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Melaleuca Alternifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Eucasol offre purezza balsamica che invita a un bel respiro. Soluzione concentrata per diffusione ambientale e suffumigi.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Libera le vie respiratorie</li>
        <li>Purifica l'ambiente</li>
        <li>Effetto balsamico intenso</li>
        <li>Ideale per suffumigi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Per suffumigi: versare alcune gocce in acqua calda e inalare i vapori. Per diffusione: aggiungere al diffusore ambientale.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Eucalyptus Globulus Oil, Mentha Piperita Oil, Pinus Sylvestris Oil, Thymus Vulgaris Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Spray Naso Libero aiuta a respirare meglio in modo naturale. Soluzione salina arricchita con estratti vegetali balsamici.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Libera il naso chiuso</li>
        <li>Idrata le mucose nasali</li>
        <li>Azione balsamica delicata</li>
        <li>Adatto all'uso frequente</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Nebulizzare 1-2 spruzzi per narice, 2-3 volte al giorno. Soffiare delicatamente il naso dopo l'applicazione.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Chloride, Eucalyptus Globulus Extract, Mentha Piperita Extract, Aloe Barbadensis Leaf Juice.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Schiarente agisce contro vari tipi di macchie cutanee, per una pelle più uniforme. Formula delicata con azione progressiva.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Attenua le macchie scure</li>
        <li>Uniforma l'incarnato</li>
        <li>Azione progressiva e delicata</li>
        <li>Previene nuove discromie</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone interessate mattina e sera dopo la detersione. Usare sempre protezione solare durante il giorno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Arbutin, Glycyrrhiza Glabra Root Extract, Niacinamide, Ascorbyl Glucoside.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Set Igiene Orale Giorno e Notte offre in due dentifrici la soluzione completa per il benessere della bocca. Formule specifiche per le diverse esigenze diurne e notturne.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione completa 24 ore</li>
        <li>Formula giorno: freschezza e protezione</li>
        <li>Formula notte: azione antibatterica prolungata</li>
        <li>Rinforza lo smalto</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Giorno: usare al mattino dopo la colazione. Notte: usare prima di dormire. Spazzolare per almeno 2 minuti.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Fluoride, Xylitol, Mentha Piperita Oil, Aloe Barbadensis Leaf Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Collutorio offre triplice azione per un'igiene orale completa. Rinfresca l'alito, protegge le gengive e combatte i batteri.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rinfresca l'alito a lungo</li>
        <li>Protegge le gengive</li>
        <li>Azione antibatterica</li>
        <li>Senza alcol aggressivo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Sciacquare la bocca con 10-15 ml di prodotto per 30 secondi dopo lo spazzolamento. Non risciacquare con acqua.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Xylitol, Mentha Piperita Oil, Salvia Officinalis Extract, Sodium Fluoride.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Gel Intim è idratante ed equilibrante per la zona intima esterna femminile. Formula delicata che rispetta il pH fisiologico.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Idrata la zona intima</li>
        <li>Rispetta il pH fisiologico</li>
        <li>Lenisce irritazioni</li>
        <li>Formula senza profumo aggressivo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare esternamente sulla zona intima pulita, massaggiando delicatamente. Usare quotidianamente o al bisogno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Lactic Acid, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract, Calendula Officinalis Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Deo Intim offre igiene e protezione per la zona intima. Deodorante delicato che garantisce freschezza senza alterare l'equilibrio naturale.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Freschezza duratura</li>
        <li>Rispetta il pH intimo</li>
        <li>Senza alcol</li>
        <li>Delicato e non irritante</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Nebulizzare sulla zona intima esterna pulita e asciutta. Non usare internamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Salvia Officinalis Extract, Lactic Acid.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Mandorle dona al corpo una pelle morbida ed elastica. L'olio di mandorle dolci nutre in profondità lasciando la pelle setosa.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Nutre in profondità</li>
        <li>Migliora l'elasticità</li>
        <li>Pelle morbida e setosa</li>
        <li>Assorbimento rapido</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare su tutto il corpo dopo il bagno o la doccia, massaggiando fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Prunus Amygdalus Dulcis Oil, Glycerin, Tocopheryl Acetate, Parfum.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Deo Plus offre ogni volta che vuoi fresche note di Natura. Un deodorante corpo che combina efficacia e profumo naturale.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Freschezza naturale</li>
        <li>Protezione duratura</li>
        <li>Profumo gradevole</li>
        <li>Non macchia i vestiti</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare sulle zone desiderate a distanza di 15-20 cm. Può essere riapplicato durante la giornata.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Alcohol Denat., Aqua, Parfum, Menthol, Citrus Limon Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Balsamo Corpo dona sulla pelle un tocco fresco e benefico. Formula leggera che idrata e rinfresca lasciando una piacevole sensazione.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto rinfrescante</li>
        <li>Idrata senza ungere</li>
        <li>Texture leggera</li>
        <li>Profumo fresco e naturale</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare su tutto il corpo massaggiando leggermente. Ideale dopo l'attività sportiva o nelle giornate calde.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Menthol, Aloe Barbadensis Leaf Juice, Eucalyptus Globulus Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Olio Riattivante dona pelle elastica e luminosa dopo il massaggio. Una miscela di oli pregiati che nutre e tonifica.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Nutre intensamente</li>
        <li>Tonifica la pelle</li>
        <li>Favorisce l'elasticità</li>
        <li>Ideale per massaggi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Versare alcune gocce sulle mani e massaggiare su tutto il corpo con movimenti circolari. Ideale dopo il bagno sulla pelle umida.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Prunus Amygdalus Dulcis Oil, Simmondsia Chinensis Oil, Tocopheryl Acetate, Rosmarinus Officinalis Oil, Citrus Limon Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Cani e Gatti garantisce igiene e benessere per gli amici a 4 zampe. Formula delicata che rispetta il pH degli animali domestici.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Detersione delicata</li>
        <li>Pelo morbido e lucente</li>
        <li>Rispetta il pH degli animali</li>
        <li>Profumo naturale non invasivo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Bagnare il pelo, applicare lo shampoo massaggiando delicatamente. Risciacquare abbondantemente. Evitare occhi e orecchie.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Tea Tree Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Lozione Anticaduta offre l'equilibrio che rafforza, per la crescita di capelli sani. Trattamento intensivo che stimola i follicoli piliferi.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rinforza i capelli deboli</li>
        <li>Stimola la crescita</li>
        <li>Rivitalizza il cuoio capelluto</li>
        <li>Previene la caduta</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare quotidianamente sul cuoio capelluto asciutto, massaggiando con i polpastrelli. Non risciacquare. Usare per almeno 3 mesi.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Alcohol Denat., Serenoa Serrulata Extract, Caffeine, Biotin, Panax Ginseng Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Balsamo Disciplinante offre azione 2 in 1 per capelli più forti, docili e belli. Nutre e districa in un solo gesto.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Disciplina i capelli ribelli</li>
        <li>Nutre senza appesantire</li>
        <li>Facilita la pettinatura</li>
        <li>Effetto anti-crespo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Dopo lo shampoo, applicare sulle lunghezze e punte. Lasciare agire 2-3 minuti e risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Cetearyl Alcohol, Glycerin, Argania Spinosa Kernel Oil, Panthenol, Keratin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Spray Capelli Riparatore è un ristrutturante istantaneo per capelli sani e belli. Formato spray pratico per uso quotidiano.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Ripara le punte danneggiate</li>
        <li>Districa istantaneamente</li>
        <li>Protegge dal calore</li>
        <li>Non appesantisce</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare sui capelli umidi o asciutti a 20 cm di distanza. Non risciacquare. Pettinare normalmente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Hydrolyzed Keratin, Argania Spinosa Kernel Oil, Panthenol, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Addolcente offre detersione idratante per ogni tipo di capello. Formula delicata per l'uso quotidiano.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Deterge delicatamente</li>
        <li>Idrata senza appesantire</li>
        <li>Adatto all'uso frequente</li>
        <li>Per tutta la famiglia</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui capelli bagnati, massaggiare delicatamente e risciacquare abbondantemente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Panthenol, Aloe Barbadensis Leaf Juice.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Volumizzante offre detersione che dona volume ai capelli fini. Formula leggera che non appesantisce.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Dona volume dalla radice</li>
        <li>Non appesantisce</li>
        <li>Capelli corposi e leggeri</li>
        <li>Effetto duraturo</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui capelli bagnati, massaggiare il cuoio capelluto e risciacquare. Per più volume, asciugare a testa in giù.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Bambusa Vulgaris Extract, Panthenol, Hydrolyzed Wheat Protein.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Ravvivante offre detersione che valorizza i capelli bianchi, grigi e brizzolati. Formula anti-giallo per riflessi luminosi.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Elimina i riflessi gialli</li>
        <li>Ravviva il colore naturale</li>
        <li>Dona luminosità ai capelli grigi</li>
        <li>Nutre e idrata</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui capelli bagnati, massaggiare e lasciare agire 2-3 minuti. Risciacquare abbondantemente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, CI 60730 (Violet Pigment), Glycerin, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Rigenerante offre detersione nutriente per capelli fragili e danneggiati. Azione riparatrice dalla radice alle punte.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Ripara i capelli danneggiati</li>
        <li>Rinforza la struttura</li>
        <li>Nutre in profondità</li>
        <li>Previene le doppie punte</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui capelli bagnati, massaggiare delicatamente e risciacquare. Usare con il balsamo per risultati ottimali.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Hydrolyzed Keratin, Argania Spinosa Kernel Oil, Panthenol, Biotin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Antiforfora offre detersione specifica in caso di forfora secca. Azione purificante che riequilibra il cuoio capelluto.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Elimina la forfora secca</li>
        <li>Calma il prurito</li>
        <li>Riequilibra il cuoio capelluto</li>
        <li>Previene la ricomparsa</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul cuoio capelluto bagnato, massaggiare per 2-3 minuti e risciacquare. Usare 2-3 volte a settimana.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Piroctone Olamine, Zinc Pyrithione, Salicylic Acid, Melaleuca Alternifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Purificante offre detersione profonda per capelli grassi. Formula che riequilibra la produzione di sebo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Purifica in profondità</li>
        <li>Regola il sebo</li>
        <li>Capelli leggeri più a lungo</li>
        <li>Non secca le lunghezze</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul cuoio capelluto bagnato, massaggiare bene e risciacquare. Ripetere se necessario.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Urtica Dioica Extract, Rosmarinus Officinalis Extract, Salvia Officinalis Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shampoo Tea Tree offre detersione lenitiva quando il cuoio capelluto è sensibile. Il tea tree purifica delicatamente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Lenisce il cuoio capelluto sensibile</li>
        <li>Azione purificante delicata</li>
        <li>Calma irritazioni e pruriti</li>
        <li>Antibatterico naturale</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sui capelli bagnati, massaggiare delicatamente e risciacquare. Adatto all'uso frequente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Melaleuca Alternifolia Leaf Oil, Aloe Barbadensis Leaf Juice, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Fluido Seno Modellante Rassodante è studiato per un décolleté più tonico e rimodellato. Formula specifica per la delicata zona del seno.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rassoda il décolleté</li>
        <li>Tonifica la pelle</li>
        <li>Migliora l'elasticità</li>
        <li>Texture leggera non grassa</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare mattina e sera sul décolleté con movimenti circolari dal basso verso l'alto. Usare con costanza per almeno 2 mesi.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Centella Asiatica Extract, Equisetum Arvense Extract, Caffeine, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Fluido Corpo Modellante Anticellulite offre azione mirata sui punti critici, per una silhouette rimodellata. Trattamento intensivo anti-cellulite.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Contrasta la cellulite</li>
        <li>Rimodella la silhouette</li>
        <li>Drena i liquidi in eccesso</li>
        <li>Pelle più liscia e tonica</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sulle zone critiche (cosce, glutei, addome) con massaggio energico dal basso verso l'alto. Usare mattina e sera.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Caffeine, Carnitine, Centella Asiatica Extract, Fucus Vesiculosus Extract, Hedera Helix Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Gel Detergente Infiore è ideale per la quotidiana detersione della pelle del viso. Formula in gel che pulisce senza seccare.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Deterge delicatamente</li>
        <li>Rimuove impurità e trucco leggero</li>
        <li>Non secca la pelle</li>
        <li>Prepara la pelle ai trattamenti</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso umido mattina e sera, massaggiare delicatamente e risciacquare con acqua tiepida.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Coco-Glucoside, Glycerin, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Detergente Infiore è specifica per la detersione del viso con pelle secca ed esigente. Formula cremosa nutriente.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Deterge senza aggredire</li>
        <li>Nutre mentre pulisce</li>
        <li>Ideale per pelli secche</li>
        <li>Lascia la pelle morbida</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso asciutto, massaggiare e rimuovere con acqua tiepida o dischetto umido.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Cetearyl Alcohol, Glycerin, Prunus Amygdalus Dulcis Oil, Rosa Canina Fruit Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Struccante Micellare Infiore rimuove delicatamente il trucco da viso, occhi e labbra. Tecnologia micellare che cattura le impurità.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rimuove ogni tipo di trucco</li>
        <li>Delicato sul contorno occhi</li>
        <li>Non necessita risciacquo</li>
        <li>Lascia la pelle fresca</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Imbevere un dischetto di cotone e passare delicatamente su viso, occhi e labbra. Non risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Poloxamer 184, Glycerin, Rosa Damascena Flower Water, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Tonico Vitalizzante Infiore dona al viso un fresco tocco equilibrante e anti-fatica. Completa la routine di detersione.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Riequilibra il pH della pelle</li>
        <li>Rinfresca e tonifica</li>
        <li>Effetto anti-fatica</li>
        <li>Prepara ai trattamenti successivi</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare con un dischetto di cotone sul viso pulito, evitando il contorno occhi. Usare mattina e sera.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Hamamelis Virginiana Water, Glycerin, Aloe Barbadensis Leaf Juice, Niacinamide.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Peeling Infiore offre purezza specifica per la pelle del viso. Esfoliazione delicata che rimuove le cellule morte.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Esfolia delicatamente</li>
        <li>Rimuove cellule morte</li>
        <li>Pelle più luminosa</li>
        <li>Migliora l'assorbimento dei trattamenti</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso umido 1-2 volte a settimana. Massaggiare con movimenti circolari evitando il contorno occhi. Risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Cellulose, Glycerin, Aloe Barbadensis Leaf Juice, Lactic Acid.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Maschera Gel Rassodante Infiore è un'innovativa maschera anti-age per il viso. Effetto lifting immediato e pelle più tonica.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto rassodante immediato</li>
        <li>Azione anti-age</li>
        <li>Texture gel rinfrescante</li>
        <li>Dona luminosità</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare uno strato uniforme sul viso pulito. Lasciare in posa 15-20 minuti e risciacquare. Usare 1-2 volte a settimana.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Hydrolyzed Collagen, Aloe Barbadensis Leaf Juice, Retinyl Palmitate, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Idrogel Ultra-Idratante Infiore disseta intensamente la pelle del viso. Texture gel-acqua che idrata in profondità.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Idratazione profonda</li>
        <li>Texture leggera e fresca</li>
        <li>Assorbimento rapido</li>
        <li>Pelle rimpolpata</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare mattina e sera sul viso pulito, anche sotto il trucco. Massaggiare delicatamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Hyaluronic Acid, Glycerin, Aloe Barbadensis Leaf Juice, Panthenol, Niacinamide.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Contorno Occhi Infiore offre mirata azione anti-age per l'area del viso più delicata. Formula specifica per occhi e palpebre.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Riduce rughe e linee sottili</li>
        <li>Attenua occhiaie</li>
        <li>Riduce i gonfiori</li>
        <li>Idrata e protegge</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare piccole quantità intorno agli occhi mattina e sera, picchiettando delicatamente con i polpastrelli.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Caffeine, Hyaluronic Acid, Retinyl Palmitate, Vitamin K, Arnica Montana Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Siero Viso Ultra-Rigenerante Infiore offre effetto ultra-rigenerante per un viso dalla pelle radiosa. Concentrato attivo anti-age.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rigenera la pelle in profondità</li>
        <li>Effetto anti-rughe</li>
        <li>Dona luminosità</li>
        <li>Texture leggera e concentrata</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare 2-3 gocce sul viso pulito mattina e sera, prima della crema. Massaggiare fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Hyaluronic Acid, Retinol, Vitamin C, Niacinamide, Peptides, Squalane.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema 24H Rimpolpante Infiore mantiene il viso tonico, fresco e radioso durante le 24 ore. Trattamento completo giorno e notte.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Effetto rimpolpante</li>
        <li>Idratazione 24 ore</li>
        <li>Anti-rughe</li>
        <li>Pelle tonica e luminosa</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare mattina e sera sul viso pulito, massaggiando delicatamente fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Hyaluronic Acid, Collagen, Glycerin, Retinyl Palmitate, Tocopheryl Acetate, Centella Asiatica Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Giorno Rigenerante Infiore offre ogni giorno rinnovamento contro i segni del tempo. Protezione e trattamento anti-age.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protegge durante il giorno</li>
        <li>Azione anti-age</li>
        <li>Base ideale per il trucco</li>
        <li>Idratazione duratura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare al mattino sul viso pulito, dopo il siero. Massaggiare delicatamente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Hyaluronic Acid, Vitamin E, Niacinamide, Rosa Canina Fruit Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Notte Rigenerante Infiore supporta ogni sera la naturale rigenerazione cutanea notturna. Trattamento intensivo mentre dormi.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rigenera durante la notte</li>
        <li>Nutre in profondità</li>
        <li>Pelle riposata al risveglio</li>
        <li>Azione anti-age intensiva</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare la sera sul viso pulito, dopo il siero. Massaggiare delicatamente prima di dormire.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Retinol, Hyaluronic Acid, Argan Oil, Vitamin E, Ceramides.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Corpo Vellutante Infiore offre azione anti-age per la pelle del corpo. Trattamento che nutre e rassoda.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Nutre e rassoda</li>
        <li>Pelle vellutata</li>
        <li>Azione anti-age per il corpo</li>
        <li>Assorbimento rapido</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare su tutto il corpo dopo la doccia, massaggiando fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Butyrospermum Parkii Butter, Tocopheryl Acetate, Collagen, Elastin.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Solare 6 offre bassa protezione contro i danni del sole. Ideale per pelli già abbronzate o carnagioni scure.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione SPF 6</li>
        <li>Idrata durante l'esposizione</li>
        <li>Favorisce un'abbronzatura uniforme</li>
        <li>Resistente all'acqua</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare generosamente prima dell'esposizione al sole. Riapplicare ogni 2 ore e dopo il bagno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Octocrylene, Glycerin, Butyl Methoxydibenzoylmethane, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Gel Doposole offre freschezza, idratazione ed equilibrio per la pelle provata dal sole. Sollievo immediato dopo l'esposizione.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rinfresca istantaneamente</li>
        <li>Lenisce la pelle arrossata</li>
        <li>Idrata in profondità</li>
        <li>Prolunga l'abbronzatura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare generosamente dopo l'esposizione al sole su tutto il corpo. Conservare in frigorifero per un effetto extra-rinfrescante.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Aloe Barbadensis Leaf Juice, Glycerin, Menthol, Chamomilla Recutita Extract, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Spray Solare 15 offre media protezione contro i danni del sole, in pratico formato spray. Applicazione facile e veloce.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione SPF 15</li>
        <li>Formato spray pratico</li>
        <li>Assorbimento rapido</li>
        <li>Resistente all'acqua</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare uniformemente sulla pelle prima dell'esposizione. Riapplicare ogni 2 ore e dopo il bagno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Octocrylene, Butyl Methoxydibenzoylmethane, Glycerin, Aloe Barbadensis Leaf Juice, Vitamin E.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Solare 30 offre alta protezione contro i danni del sole. Ideale per pelli chiare e i primi giorni di esposizione.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Alta protezione SPF 30</li>
        <li>Protegge da UVA e UVB</li>
        <li>Idrata e nutre</li>
        <li>Resistente all'acqua</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare generosamente 20 minuti prima dell'esposizione. Riapplicare ogni 2 ore e dopo ogni bagno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Octocrylene, Butyl Methoxydibenzoylmethane, Titanium Dioxide, Glycerin, Aloe Barbadensis Leaf Juice.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Crema Viso Solare 30 offre alta protezione per viso e aree più esposte. Formula specifica per la pelle delicata del viso.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Alta protezione SPF 30</li>
        <li>Specifica per il viso</li>
        <li>Non comedogenica</li>
        <li>Base ideale per il trucco</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso e collo 20 minuti prima dell'esposizione. Riapplicare frequentemente.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Titanium Dioxide, Zinc Oxide, Glycerin, Hyaluronic Acid, Vitamin E.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Latte Solare 50 offre altissima protezione per l'inizio dell'esposizione. Ideale per pelli molto chiare, sensibili e bambini.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Protezione molto alta SPF 50</li>
        <li>Ideale per pelli sensibili</li>
        <li>Adatto ai bambini</li>
        <li>Resistente all'acqua</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare abbondantemente prima dell'esposizione. Riapplicare ogni 2 ore, dopo il bagno e dopo aver sudato.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Titanium Dioxide, Zinc Oxide, Octocrylene, Glycerin, Aloe Barbadensis Leaf Juice, Panthenol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>After Shave Gel è il tocco più gradito dalla pelle appena rasata. Lenisce, rinfresca e protegge dopo la rasatura.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Lenisce le irritazioni da rasatura</li>
        <li>Rinfresca istantaneamente</li>
        <li>Idrata senza ungere</li>
        <li>Profumo maschile delicato</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso subito dopo la rasatura, massaggiando delicatamente fino a completo assorbimento.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Alcohol Denat., Glycerin, Aloe Barbadensis Leaf Juice, Allantoin, Menthol, Bisabolol.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Shaving Gel garantisce una rasatura perfetta, nel rispetto della pelle. Gel trasparente che permette precisione massima.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rasatura precisa e confortevole</li>
        <li>Protegge dai tagli</li>
        <li>Ammorbidisce la barba</li>
        <li>Gel trasparente per massima precisione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare sul viso umido, massaggiare per ammorbidire la barba. Procedere con la rasatura e risciacquare.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Glycerin, Sodium Laureth Sulfate, Aloe Barbadensis Leaf Juice, Menthol, Chamomilla Recutita Extract.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Cura Legno pulisce, protegge e ravviva il legno. Formula completa per mobili, parquet e superfici in legno.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Pulisce senza aggredire</li>
        <li>Nutre e protegge il legno</li>
        <li>Ravviva il colore naturale</li>
        <li>Non lascia aloni</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare su un panno morbido e passare sulla superficie. Lucidare con panno asciutto. Non applicare direttamente sul legno.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Cera Alba, Citrus Limon Oil, Lavandula Angustifolia Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Smacchiatore Pretrattante è efficace in caso di macchie prima del lavaggio. Agisce su macchie difficili di vario tipo.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Rimuove macchie ostinate</li>
        <li>Efficace su unto, erba, vino</li>
        <li>Delicato sui tessuti</li>
        <li>Potenzia l'efficacia del lavaggio</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Applicare direttamente sulla macchia asciutta. Lasciare agire 5-10 minuti e procedere con il normale lavaggio.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Enzymes, Citric Acid.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Detergente Universale NR Plus è concentrato e versatile, per tutte le esigenze di igiene domestica. Un solo prodotto per tutta la casa.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Formula ultra concentrata</li>
        <li>Adatto a tutte le superfici</li>
        <li>Igienizza e profuma</li>
        <li>Economico grazie alla concentrazione</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Diluire in acqua secondo le indicazioni sulla confezione. Usare per pavimenti, superfici, bagni e cucine.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Aqua, Sodium Laureth Sulfate, Citric Acid, Eucalyptus Globulus Oil, Pinus Sylvestris Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Spray Ambientale elimina gli odori sgradevoli in casa. Non copre, ma neutralizza i cattivi odori lasciando un profumo fresco.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Neutralizza i cattivi odori</li>
        <li>Profuma delicatamente</li>
        <li>Azione duratura</li>
        <li>Ideale per ogni ambiente</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare nell'aria al centro della stanza. Evitare di spruzzare direttamente su tessuti delicati.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Alcohol Denat., Aqua, Parfum, Citrus Limon Oil, Lavandula Angustifolia Oil, Eucalyptus Globulus Oil.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>Spray Lavanda protegge e profuma armadi e cassetti con note di lavanda. Tradizionale alleato contro le tarme.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Profuma armadi e cassetti</li>
        <li>Protegge dalla tarma</li>
        <li>Aroma di lavanda naturale</li>
        <li>Profumazione duratura</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Spruzzare all'interno di armadi e cassetti. Ripetere ogni 2-3 settimane per mantenere l'efficacia.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Alcohol Denat., Aqua, Lavandula Angustifolia Oil, Lavandula Hybrida Oil, Linalool.</p>
`,
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
        fullDescription: `
    <h3>🌿 Descrizione</h3>
    <p>+Energy è l'integratore che ricarica il tuo benessere ogni giorno. Formula naturale per combattere stanchezza e affaticamento.</p>
    
    <h3>✨ Benefici</h3>
    <ul>
        <li>Combatte stanchezza e affaticamento</li>
        <li>Aumenta energia e vitalità</li>
        <li>Supporta le difese immunitarie</li>
        <li>Migliora concentrazione e focus</li>
    </ul>
    
    <h3>📋 Modo d'uso</h3>
    <p>Assumere 1 compressa al giorno con un bicchiere d'acqua, preferibilmente al mattino durante la colazione.</p>
    
    <h3>🧴 Ingredienti</h3>
    <p>Vitamina C, Vitamine del gruppo B (B1, B2, B6, B12), Magnesio, Ferro, Ginseng Extract, Guaranà Extract, Coenzima Q10.</p>
`,
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
    switch (sortBy) {
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


