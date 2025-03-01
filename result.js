document.addEventListener("DOMContentLoaded", function () {
    const resultContainer = document.getElementById("result-container");

    // Liste des destinations (ton tableau de destinations)
    const destinations = [
       
        {
            budget: "Bas",
            saison: "Hiver",
            interet: "Plage",
            destination: "Mexique",
            descriptionPart1:"🌴 Plages et détente : <br><br>Idéal pour les amateurs de plage qui souhaitent profiter de paysages magnifiques sans se ruiner, le Mexique offre des plages de sable blanc et des eaux turquoise parfaites pour se détendre. Quintana Roo, avec Cancún et Tulum, sont les régions les plus connues et touristiques. Si vous cherchez un endroit plus calme et moins fréquenté, dirigez-vous vers le Yucatán.",
            descriptionPart2:"🏞️ Activités et découvertes: <br><br>Le Mexique est réputé pour ses nombreuses activités. Partez en randonnée sur des volcans impressionnants tels que le Pico de Orizaba, La Malinche et l’Iztaccihuatl. La péninsule du Yucatán est l'une des meilleures zones pour la plongée, avec des spots exceptionnels. Vous pouvez également profiter d’activités comme le kayak, le parapente et bien d’autres. Ne manquez pas de visiter les sites archéologiques fascinants, les charmantes villes coloniales et les cénotes incroyables.Enfin, ne manquez pas de goûter à la cuisine locale, riche en saveurs authentiques.  ",
            descriptionPart3:"<br>",
            img: "images/mexique2.jpg",
            img2:"images/plagemex1.jpg" // Ajoute une deuxième image ici
            /* 2 https://www.pexels.com/fr-fr/photo/batiment-en-beton-gris-sous-le-ciel-bleu-3591074/  
            // https://www.pexels.com/fr-fr/photo/pyramide-grise-sur-terrain-en-herbe-pendant-la-journee-3290068/ */

        },
        {
            budget: "Moyen",
            saison: "Hiver",
            interet: "Plage",
            destination: "Maldives",
            descriptionPart1: "🌴 Un Paradis tropical : <br><br>Les Maldives, avec leurs plages de sable blanc, leurs eaux cristallines et leur biodiversité, offrent à chaque voyageur une expérience inoubliable. Il est essentiel de planifier votre séjour pendant la saison sèche, en hiver, afin d’éviter la période des moussons.",
            descriptionPart2:"✨ Expériences uniques :<br><br>Ne quittez pas les Maldives sans avoir observé le phénomène rare de la bioluminescence sur les plages. L’île de Mudhdhoo est l’un des meilleurs endroits pour assister à cet incroyable phénomène naturel. ",
            descriptionPart3: "📍 Nature et aventure :<br><br>L’atoll Ari est un des meilleurs sites pour les plongées sous-marines, où vous pourrez rencontrer des requins-baleines, des raies mantas, des tortues et des bancs de poissons multicolores. Les amateurs de sensations fortes pourront s’essayer le jet-ski, le windsurf, le kitesurf, ou encore des vols en hydravion pour admirer les atolls. ",
            img: "images/maldives2.jpg",
            img2: "images/maldives3.jpg",
            img3: "images/maldives.jpg"


        },
        //https://www.pexels.com/fr-fr/photo/vue-aerienne-d-une-belle-ile-resort-3601425/   maldives
        // 2 https://pixabay.com/fr/photos/%C3%AEle-de-veligandu-maldives-veligandu-1044366/ *//
        {
            budget: "Haut",
            saison: "Hiver",
            interet: "Plage",
            destination: "Martinique",
            descriptionPart1: "🌴 Paysages et plages exceptionnels: <br><br>La Martinique est un véritable paradis, offrant des paysages variés entre sable blanc et noir, forêt tropicale et reliefs volcaniques. À Sainte-Anne, les plages des Salines et de l’Anse Michel sont parfaites pour se détendre ou pratiquer des activités comme le surf, le kayak et la plongée.  ",
            descriptionPart2:" 🐠 Richesse sous-marine et expériences uniques :<br><br>Les fonds marins de la Martinique sont d’une grande richesse, attirant aussi bien les plongeurs débutants que professionnels. On y trouve des poissons multicolores, des coraux et des gorgones, notamment autour du rocher du Diamant, de la baie de Saint-Pierre, du cap Salomon et d’Anse-Noire. Pour une expérience différente, la plage de l’Anse-Couleuvre, au Prêcheur, se distingue par son sable noir volcanique. Pour les amateurs de randonnée, l’ascension de la Montagne Pelée offre également une expérience inoubliable avec des vues exceptionnelles. ",
            descriptionPart3:"<br>",
            img: "images/martinique.jpg",
            img2: "images/martinique2.jpg"
        },
        /* 2 https://unsplash.com/fr/photos/un-plan-deau-entoure-dune-colline-verdoyante-NcpCHR8Uy3Q   */
        {
            budget: "bas",
            saison: "Automne",
            interet: "Plage",
            destination: "ThaÏlande",
            descriptionPart1: "🌴 Culture et découverte: <br><br>La Thaïlande, connue par sa culture unique et ses plages paradisiaques. C’est une destination idéale pour mélanger détente et exploration. Bangkok, sa capitale dynamique, est incontournable pour découvrir la gastronomie, l’histoire du pays et des quartiers animés. ",
            descriptionPart2: "🏖️ Îles et plages incontournables :<br><br>Au sud, Krabi offre des plages protégées et des falaises spectaculaires, tandis que Koh Samui est connue par ses eaux cristallines et ses plages comme Mae Nam et Chaweng. Phuket, la plus grande île, donne accès aux Similan Islands, un paradis pour les plongeurs. La baie de Phang Nga et l’île de James Bond comptent parmi les sites les plus impressionnants et populaires.",
            descriptionPart3:"⛩️ Patrimoine et histoire :<br><br>Pour une immersion culturelle, les temples d’Ayutthaya et de Sukhothaï sont des visites essentielles, témoignant du riche passé du pays.",
            img: "images/thailande.jpg",
            img2: "images/plg.jpg",
            img3: "images/temple.jpg"


        },
        {
            budget: "Moyen",
            saison: "Automne",
            interet: "Plage",
            destination: "Grèce",
            descriptionPart1: "🌍 Histoire et culture: <br><br>Voyager en Grèce, c'est plonger au cœur de l’Antiquité entre sites historiques et paysages idylliques. Athènes, ville millénaire, abrite des trésors antiques comme l’Acropole et l’Agora.Conseil : visitez ces lieux tôt le matin ou en fin de journée pour éviter la chaleur et la foule.  ",
            descriptionPart2:"🏝️ Îles et plages paradisiaques: <br><br>Pour une escapade détente, Zakynthos est connue par ses falaises spectaculaires, ses grottes marines et ses plages d’un bleu éclatant. Santorin, avec ses maisons blanches et ses dômes bleus, offre un panorama unique sur la mer Égée. ",
            descriptionPart3:"🍽️ Gastronomie authentique: <br><br>Un voyage en Grèce ne serait pas complet sans goûter aux spécialités locales : moussaka, choriatiki, tzatziki et pâtisseries comme le kataifi, un délice sucré à découvrir absolument.",
            img: "images/grèce.jpg",
            img2: "images/grèce2.jpg",
            img3: "images/greece.jpg",
        },

        /* 1 https://pixabay.com/fr/photos/santorin-gr%C3%A8ce-immeubles-maisons-416136/       
        // 3 https://www.istockphoto.com/fr/photo/fermez-vous-vers-le-haut-dun-dessert-grec-succulent-kataifi-grec-avec-yaourt-au-gm1154041943-313645294     */
        {
            budget: "Haut",
            saison: "Automne",
            interet: "Plage",
            destination: "Bahamas",
            descriptionPart1: "🏝️ Plages paradisiaques et vie marine:<br><br>C’est un pays parfait pour les amoureux des plages,des  fonds coralliens et des animaux. Il faut juste être sûre de visiter ce pays pendant la saison seche, entre décembre et mai .La- bas, vous aurez la possibilité de nager avec des cochons, des raies et des requins inoffensifs, tous cela aux îles Exumas, à la plage Big Major Cay.Il existe aussi une plage impressionante avec du sable rose, à Harbour Island. ",
            descriptionPart2:"🤿 Plongée :<br><br>Les Bahamas offrent des expériences inoubliables pour les plongeurs. Explorez le trou bleu de Dean et l'épave du Comberbach, à Long Island. À San Salvador, ne manquez pas la spectaculaire barrière de corail, à seulement 20 minutes en avion de l’île. ",
            descriptionPart3:"🍽️Culture locale:<br><br>Cet archipel possède une culture métissée, alliant influences africaines, européennes et caribéennes. À Nassau, découvrez ses maisons colorées et l'animation de la capitale. Ne manquez pas Paradise Island, reliée à Nassau par un pont, et goûtez aux célèbres Johnny cakes ou  le conch frit  des spécialités locales à absolument savourer.",
            img:"images/bahama.jpg",
            img2:"images/cochon.jpg",
            img3:"images/nissau.jpg",

        },
        {
            budget: "Bas",
            saison: "Printemps",
            interet: "Plage",
            destination: "Madagascar",
            descriptionPart1: "🏝️ Madagascar, une île de rêve: <br><br>Une île paradisiaque entourée de plages sublimes, de paysages volcaniques et de petites îles spectaculaires comme Nosy Be, la plus grande et la plus touristique. Les meilleures plages de cette île sont la plage d'Andilana, réputée pour ses baies jumelles, et la plage d'Ambatoloaka. Nosy Komba, aussi appelée l'île des lémuriens, est une autre destination incontournable où vous pourrez observer ces animaux emblématiques. ",
            descriptionPart2:"🌊 Aventures nautiques et rencontres uniques: <br><br>Madagascar est le lieu idéal pour les amateurs de sports nautiques. Kayak, snorkeling, surf et plongée y sont incontournables. La baie de Sakalava est idéale pour le surf, là-bas les plongeurs auront la possibilité de nager avec des dauphins et des tortues. Sainte-Marie est l'un des meilleurs endroits pour observer les baleines et explorer des lagons aux eaux cristallines",
            descriptionPart3:"🌳 Paysages spectaculaires et nature sauvage: <br><br>L’Avenue des Baobabs est l’un des sites les plus emblématiques et photogéniques de Madagascar. Cette rangée d’environ 20 à 25 baobabs majestueux borde la route entre Morondava et Belon’i Tsiribihina, offrant un spectacle naturel impressionnant, surtout au coucher de soleil ",
            img:"images/madagscar.jpg",
            img2:"images/madagascar.jpg",
            img3:"images/mada.jpg",
        },
        {
            budget: "Moyen",
            saison: "Printemps",
            interet: "Plage",
            destination: "Cuba",
            descriptionPart1: "🏛️ Entre culture et plages paradisiaques: <br><br>Une île paradisiaque en pleine mer des Caraïbes, où toutes les rues vous rappelleront l’époque coloniale. À La Havane, ne manquez pas la Plaza de la Catedral et la vieille ville La Habana Vieja, avec ses bâtiments colorés et ses voitures américaines vintage. Pour une touche d’histoire, Santa Clara est idéale, et Trinidad, classée à l’UNESCO, vous plongera dans l’ambiance coloniale avec ses maisons pastel. Les amoureux de nature apprécieront les cascades de Topes de Collantes. ",
            descriptionPart2:"🏖️ Les plages et îles de rêve:<br><br>Cuba est connue ses plages magnifiques. Varadero, à proximité de La Havane, et Cayo Coco sont parfaits pour se détendre. Pour les passionnés de plongée, Isla de la Juventud et Cayo Largo sont des destinations incontournables. Enfin, explorez la Baie des Cochons, avec des sites uniques comme Punta Perdiz et la Cueva de los Peces. ",
            descriptionPart3:"🍽️ Saveurs locales à ne pas manquer :<br><br>Impossible de quitter Cuba sans goûter à sa gastronomie authentique. Découvrez le Moros y Cristianos, Une spécialité locale aux influences espagnoles et caribéennes. Pour un séjour optimal, privilégiez la saison sèche (décembre à avril). ",
            img:"images/havana.jpg",
            img2:"images/cubaplage.jpg",
            img3:"images/havanaa.jpg"
        },
        /*     1  https://unsplash.com/fr/photos/deux-voitures-garees-a-lexterieur-du-batiment-4MTSE39Oqro   
        // 
        // https://www.pexels.com/fr-fr/photo/ville-paysage-monument-rue-20828072/     */
        /* ATTENTION PEUT PAS ALLRT AUX USA*/
        {    
            budget: "Haut",
            saison: "Printemps",
            interet: "Plage",
            destination: "île Maurice",
            descriptionPart1: "🏝️ Plages paradisiaques et vie marine:<br><br>C’est un pays parfait pour les amoureux des plages,des  fonds coralliens et des animaux. Il faut juste être sûre de visiter ce pays pendant la saison seche, entre décembre et mai .La- bas, vous aurez la possibilité de nager avec des cochons, des raies et des requins inoffensifs, tous cela aux îles Exumas, à la plage Big Major Cay.Il existe aussi une plage impressionante avec du sable rose, à Harbour Island. ",
            descriptionPart2:"🤿 Plongée :<br><br>Les Bahamas offrent des expériences inoubliables pour les plongeurs. Explorez le trou bleu de Dean et l'épave du Comberbach, à Long Island. À San Salvador, ne manquez pas la spectaculaire barrière de corail, à seulement 20 minutes en avion de l’île. ",
            descriptionPart3:"🍽️Culture locale:<br><br>Cet archipel possède une culture métissée, alliant influences africaines, européennes et caribéennes. À Nassau, découvrez ses maisons colorées et l'animation de la capitale. Ne manquez pas Paradise Island, reliée à Nassau par un pont, et goûtez aux célèbres Johnny cakes ou  le conch frit  des spécialités locales à absolument savourer.",
            img:"images/maurice3.jpg",
            img2:"images/maurice2.jpg",
            img3:"images/maurice1.jpg",
        },

    

        {
            budget: "Bas",
            saison: "Eté",
            interet: "Plage",
            destination: "Malaisie",
            descriptionPart1:"🌿 Un mélange unique de nature et de culture :<br><br>Une destination avec une diversité religieuse et culturelle. C’est une destination idéale pour ceux qui recherchent à la fois la beauté naturelle et une culture vibrante. Entre ses plages paradisiaques, ses forêts tropicales et ses villes dynamiques, le pays offre une diversité d’expériences uniques. ",
            descriptionPart2:"🏝️ Plages idylliques et paysages naturels :<br><br>Les plages de Langkawi, Tioman et les îles Perhentian sont parfaites pour se détendre, avec leurs eaux cristallines et leurs paysages idylliques. Les amateurs de nature pourront explorer la jungle du parc national de Taman Negara ou randonner dans les Cameron Highlands, une région montagneuse aux magnifiques plantations de thé. ",
            descriptionPart3:"🌆 Villes animées et saveurs locales :<br><br>Kuala Lumpur, la capitale, vous charmera avec ses influences malaises, chinoises et indiennes. Pour la gastronomie, visitez le Jalan Alor, un marché nocturne de street food.Découvrez les célèbres Tours Petronas, flânez dans Chinatown et Little India, et dégustez de délicieux plats locaux à Jalan Alor. Les îles de Borneo et de Penang, avec leurs plages de sable blanc et leur faune diversifiée, complètent parfaitement cette expérience malaisienne. ",

            img:"images/malaisie2.jpg",
            img2:"images/mal.jpg",
            img3:"images/mal1.jpg", 
        },
        /* https://pixabay.com/fr/photos/malaisie-tropiques-montagnes-ciel-1864676/
        // plage en plus, https://unsplash.com/fr/photos/plan-deau-pres-darbres-a-feuilles-vertes-pendant-la-journee-j9-tggFinE4  
        // https://pixabay.com/fr/photos/kuala-lumpur-twin-tower-ville-1283140/             */

        {
            budget: "Moyen",
            saison: "Eté",
            interet: "Plage",
            destination: "Croatie",
            descriptionPart1:"🌊 Plages paradisiaques et histoire millénaire:<br><br>Bordée par l’Adriatique, la Croatie est connue pour ses plages cristallines, sa nature et son riche patrimoine historique. Bien que ses plages soient principalement de galets, les sandales aquatiques règlent le problème. Dubrovnik, avec ses monuments historiques et la rue Stradun, est incontournable. Pour une plage de sable, ne manquez pas Sveti Jakov à Dubrovnik. Un peu plus au sud, la plage urbaine Bacvice à Split est idéale pour les amateurs de sable , tandis que la plage de Sakarun, à Dugi Otok, offre un cadre plus tranquille, tout comme la plage cachée de Pasjača, nichée sous des falaises. ",
            descriptionPart2: "🏞️ Nature préservée et découverte culturelle :<br><br>Les passionnés de nature ne manqueront pas les incontournables Parcs Nationaux de Plitvice et de Krka. Ils se composent de dizaines de lacs réunis entre eux par des cascades, offrant un cadre exceptionnel pour la randonnée et l’exploration. Ces sites, véritables joyaux naturels, dévoilent la beauté sauvage et préservée de la Croatie. ",
            descriptionPart3:"🏙️ Découverte culturelle et gastronomique:<br><br>Zagreb, souvent éclipsée par les villes côtières, mérite une visite pour ses sites historiques, ses églises, musées et spécialités culinaires. Il est indispensable de découvrir les saveurs locales, avec des plats traditionnels comme les sarmas, un véritable délice. La Croatie est le lieu idéal pour allier détente, aventure et immersion culturelle.",
            img:"images/croatie.jpg",
            img2:"images/plagecr.jpg",
            img3:"images/dubronvnik.jpg", 

        },

/*    https://www.pexels.com/fr-fr/photo/vue-aerienne-d-une-ville-et-d-une-ile-3566139/       2 
// https://www.istockphoto.com/fr/photo/vue-fantastique-sur-le-parc-national-des-lacs-plitvice-croatie-lumineuse-gm475221432-64362017   
// https://www.istockphoto.com/fr/photo/dubrovnik-croatie-gm528149529-53397810       */
        
{
            budget: "Haut",
            saison: "Eté",
            interet: "Plage",
            destination: "Seychelles",
            descriptionPart1: "🌴 Un paradis naturel aux eaux cristallines: <br><br>Les Seychelles, joyau de l’océan Indien, sont connues pour leurs plages paradisiaques, leurs eaux cristallines et leur nature préservée. L’archipel se compose de trois îles principales : Mahé, Praslin et La Digue, offrant des paysages uniques parfaits pour la plongée, les sports nautiques et la randonnée. La meilleure période pour s’y rendre s’étend de mai à septembre, durant la saison sèche. ",
            descriptionPart2:"🏝️ Praslin et La Digue :<br><br>Praslin est traversée par une seule grande route reliant toute l’île. Anse Lazio est une plage incontournable avec ses rochers rosés et sa mer turquoise, idéale pour le snorkeling. Mais pour moin de touristes, Anse La Blague offre un cadre tout aussi magnifique. La Vallée de Mai, une forêt classée à l’UNESCO, abrite le célèbre « Coco de Mer », un trésor botanique unique au monde. C’est aussi sur cette île que se trouve l’une des plus belles plages du monde et la plus photographié. Une jolie plage de sable blanc, entourée de rochers et de coraux. Conseil : allez-y très tôt et prévoyez environ 10 € pour l’entrée. ",
            descriptionPart3:"🌊 Mahé et les îles environnantes :<br><br>Mahé, l’île principale, est un mélange de nature et d’urbanisme. Elle abrite la capitale Victoria et la superbe plage de Beau Vallon. Depuis Mahé, partez en excursion vers l’île Curieuse pour observer des tortues géantes en liberté ou visitez l’île Cousin, un sanctuaire d’oiseaux rares. Enfin, le parc marin de Sainte-Anne est idéal pour admirer poissons colorés, tortues et dauphins dans un décor aquatique époustouflant. Les Seychelles ne sont pas qu’une destination, c’est une expérience inoubliable entre détente, nature et aventure. ",
            img:"images/seych.jpg",
            img2:"images/seychelles.jpg",
            img3:"images/sey.jpg", 
        
        },
        /* https://unsplash.com/fr/photos/bateau-blanc-et-bleu-sur-la-mer-pres-des-palmiers-verts-pendant-la-journee-HoNnEDKIar4
https://www.istockphoto.com/fr/photo/baie-de-beau-vallon-sur-la-plage-de-l%C3%AEle-de-mah%C3%A9-aux-seychelles-gm501296920-81263465
https://www.istockphoto.com/fr/photo/anse-source-d-argent-plage-seychelles-photo-de-drone-a%C3%A9rien-de-paysage-tropical-gm1138033080-303674875

        */



//PAS DE HIVER

        {
            budget: "bas",
            saison: "Automne",
            interet: "Montagne",
            destination: "Macédoine du Nord",
            descriptionPart1: "Une terre de contrastes et d’histoire :<br><br>Enclavée au cœur des Balkans, la Macédoine du Nord est une destination encore méconnue, qui mêle paysages spectaculaires et richesse culturelle. Entre reliefs montagneux, gorges profondes et lacs d’un bleu éclatant, ce pays offre un cadre naturel exceptionnel. Son patrimoine architectural, marqué par l’influence ottomane et byzantine, en fait un véritable carrefour entre l’Orient et l’Occident. ",
            descriptionPart2:"🏞️ Nature et aventures en plein air :<br><br>Les amateurs de nature seront comblés par les vastes forêts et montagnes qui couvrent le territoire. Les parcs nationaux de Mavrovo, Pelister et Galicica regorgent de sentiers de randonnée, de lacs glaciaires et d’une faune sauvage impressionnante, du lynx aux aigles majestueux. Le canyon de Matka, avec son lac artificiel, est un paradis pour le kayak et l’escalade, tandis que le lac de Prespa offre un cadre idéal pour l’observation des oiseaux et la baignade. ",
            descriptionPart3:"🏛️ Patrimoine et traditions :<br><br>La Macédoine du Nord possède un héritage historique fascinant. À Skopje, la capitale, le pont de pierre et la forteresse de Kale témoignent de son passé, tandis que le vieux bazar invite à une immersion dans la culture locale. Le monastère de Sveti Naum, perché sur les rives du lac d’Ohrid, dévoile une architecture byzantine remarquable. Enfin, un voyage en Macédoine ne serait pas complet sans goûter aux spécialités locales comme l’ajvar, le tavče gravče et les vins fruités de la région de Tikveš.  ",
            img:"images.m/mac.jpg",
            img2:"images.m/nord.jpg",
            img3:"images.m/macédoine.jpg",         
        },
        /*   https://unsplash.com/fr/photos/maison-brune-au-bord-de-la-mer-luh7LSmn2vM    
        // https://unsplash.com/fr/photos/bateau-en-bois-brun-sur-le-plan-deau-pres-de-la-montagne-pendant-la-journee-WKAKAgbLFj8  
        // https://www.pexels.com/fr-fr/photo/coucher-de-soleil-a-couper-le-souffle-sur-le-lac-d-ohrid-en-macedoine-30151938/*/
        {
            budget: "Moyen",
            saison: "Automne",
            interet: "Montagne",
            destination: "Kosovo",
            descriptionPart1:"🌿Nature et histoire :<br><br>Encore méconnu, le Kosovo séduit par ses montagnes, ses lacs et son riche patrimoine. Les randonneurs trouveront leur bonheur dans les parcs nationaux des Monts Šar et de Bjeshkët e Nemuna, offrant des paysages alpins époustouflants. Ne manquez pas les chutes de Mirusha, une série de douze cascades magnifiques, ou encore le lac de Batlava, un lieu prisé des locaux.  ",
            descriptionPart2:" 🏛️ Un patrimoine fascinant :<br><br>Le Kosovo abrite des trésors historiques tels que les monastères de Peja et Visoki Decani, véritables joyaux architecturaux. À Pristina, ne manquer pas de vous promener sur le boulevard Mère Teresa, visitez la cathédrale du même nom et admirez la mosquée Sinan Pacha. Ne manquez pas le monument de l’indépendance,Newborn, symbole de l'indépendance. ",
            descriptionPart3:" 🍽️ Une cuisine aux saveurs balkaniques :<br><br>La gastronomie kosovare est très influencée par la gastronomie albanaise et turcs. Dégustez la flija, une crêpe en couches cuite lentement, le burek, feuilleté farci, ou encore le sarma, chou farci savoureux. En dessert,ne manquer pas de gouter  les baklava accompagné d’un café turc. ",
            img:"images.m/kosovo2.jpg",
            img2:"images.m/kosovo.jpg",
            img3:"images.m/kosovo3.jpg",     
            note:" ⚠️ Le Kosovo n’est pas reconnu par tous les pays, vérifiez les exigences de visa avant de voyager."   
        },

        /*     https://unsplash.com/fr/photos/batiment-en-beton-blanc-et-brun-sous-le-ciel-bleu-pendant-la-journee-bwSYcD0okkM    */
        {
            budget: "Haut",
            saison: "Automne",
            interet: "Montagne",
            destination: "Italie",
            descriptionPart1:"L’Italie, entre montagnes et mer :<br><br>L’Italie ne se limite pas à ses villes emblématiques comme Rome ou Venise. C’est aussi une terre de montagnes et de villages pittoresques, où l’histoire et la nature se mêlent harmonieusement. Des sommets enneigés des Dolomites aux criques secrètes de Sicile, le pays offre une diversité de paysages qui séduira aussi bien les amateurs de randonnée que les passionnés de culture.  ",
            descriptionPart2:"⛰️ Randonnée et nature préservée :<br><br>Les Dolomites abritent des merveilles naturelles comme le parc de Fanes-Sennes-Braies, célèbre pour ses lacs aux eaux turquoise, ou le parc d’Adamello Brenta, connu cascades et forêts profondes. Plus au sud, le Gran Sasso e Monti della Laga offre une vue imprenable sur les régions d’Abruzzes et de Latium, avec des sentiers idéaux pour l’observation de la faune sauvage. Pour un mélange de mer et randonnée, le parc national de l’Asinara, en Sardaigne, et la réserve du Zingaro, en Sicile, sont des endroits parfaits . ",
            descriptionPart3:"🍽️ Saveurs italiennes à ne pas manquer :<br><br>L’Italie séduit aussi par sa gastronomie, généreuse et variée. Des pâtes fraîches aux risottos, en passant par les fromages et charcuteries artisanales, chaque région a ses trésors culinaires. Sans oublier les pizzas, gelati et cafés italiens, incontournables pour une immersion gourmande. ",
            img:"images.m/italie.jpg",
            img2:"images.m/iltaly.jpg",
            img3:"images.m/italie2.jpg",
        },
        /* https://unsplash.com/fr/photos/reflet-des-montagnes-sur-leau-biHpvJA1omM
        https://unsplash.com/fr/photos/trois-bateaux-en-bois-bruns-sur-leau-du-lac-bleu-pris-de-jour-T7K4aEPoGGk
        https://pixabay.com/fr/photos/dolomites-italie-montagne-alpes-4342572/            */
        {
            budget: "Bas",
            saison: "Printemps",
            interet: "Montagne",
            destination: "Monténégro",
            descriptionPart1:" 🌿 Aventure et paysages spectaculaires :<br><br>Le Monténégro un pays qui saura séduire les amateurs de nature et de culture. Le parc national du Durmitor, classé à l’UNESCO, offre des panoramas à couper le souffle avec ses sommets majestueux et ses lacs cristallins, dont le célèbre Crno Jezero. Vous pourez, sur le canyon de la Tara, le plus profond d’Europe,faire des descentes en rafting et des tyroliennes spectaculaires ",
            descriptionPart2:"🏰 Un patrimoine riche entre mer et montagne :<br><br>Les Bouches de Kotor, inscrites à l’UNESCO, offrent un décor de carte postale entre montagnes et mer Adriatique. La vieille ville de Kotor, entourée de remparts, séduit par ses ruelles pavées et son charme médiéval, tandis que Perast et ses îlots pittoresques ajoutent à la magie du lieu. Sur la côte, Budva est un mélange de plages dorées et d'histoire, avec une cité ancienne animée.  ",
            descriptionPart3:"🐟 Nature et saveurs locales :<br><br>Plus au sud, le lac de Skadar, le plus grand des Balkans, abrite une faune exceptionnelle et des paysages parfaits pour une excursion en bateau. Entre nature et traditions, le Monténégro séduit aussi par sa gastronomie aux influences méditerranéennes et balkaniques.  ",
            img:"images.m/monténégro.jpg",
            img2:"images.m/mont2.jpg",
            img3:"images.m/mont.jpg",        
        },
        /*    https://unsplash.com/fr/photos/vue-aerienne-de-la-ville-pres-dun-plan-deau-pendant-la-journee-_nupO8tu6sg     */
        {
            budget: "Moyen",
            saison: "Printemps",
            interet: "Montagne",
            destination: "Slovaquie",
            descriptionPart1: "🏰 Capitale historique : <br><br>La Slovaquie est un trésor d’histoire et d'architecture, regorgeant de plus de 600 châteaux et situé au centre de l’Europe.Sa capitale slovaque, Bratislava, située à la frontière de l’Autriche et de la Hongrie, est une ville marquée par des influences culturelles multiples. Son Château, qui surplombe la ville et le Danube, offre une vue imprenable et témoigne de son passé médiéval. Une visite à Bratislava est incontournable pour découvrir son ambiance unique et son mélange architectural.",
            descriptionPart2:"🏔️ Montagnes et nature :<br><br>Si vous êtes amateur de montagne, la station de Štrbské Pleso dans le parc national des Tatras est un lieu parfait. Ce lac de montagne entouré de paysages spectaculaires est idéal pour les amoureux de la nature. Ski, randonnée et bien-être vous y attendent, offrant une véritable immersion dans la beauté des Tatras. ",
            descriptionPart3:"🏰 Châteaux et villes médiévales :<br><br>    La Slovaquie est parsemée de châteaux impressionnants et de villes médiévales. Le Château de Spiš, datant du XIIe siècle, est un incontournable même s'il est en ruines. La ville fortifiée de Bardejov plonge les visiteurs dans l’époque médiévale avec ses bâtiments bien conservés. Enfin, le Château romantique de Bojnice complète cette expérience historique et architecturale de la Slovaquie. ",
            img:"images.m/slo.jpg",
            img2:"images.m/slova.jpg",
            img3:"images.m/slov.jpg",
        },
        /*    https://pixabay.com/fr/photos/trbsk%C3%A9-pleso-hautes-tatras-slovaquie-3231856/
        https://pixabay.com/fr/photos/combattants-slovaquie-ch%C3%A2teau-1613939/   */
        
        {
            budget: "Haut",
            saison: "Printemps",
            interet: "Montagne",
            destination: "Ecosse",
            descriptionPart1: "🏰 Édimbourg, entre histoire et modernité :<br><br>Capitale écossaise au charme unique, Édimbourg séduit par ses contrastes. Flânez dans les ruelles médiévales de la vieille ville, visitez le majestueux château qui domine la ville ou explorez la nouvelle ville moderne avec ses musées et galeries d’art. ",
            descriptionPart2: "⛰️ Paysages spectaculaires et nature sauvage :<br><br>L’Écosse est une terre de nature grandiose. La vallée de Glencoe est un paradis pour les amateurs de randonnée, de ski et d’alpinisme. Sur l’île de Skye, les Fairy Pools, avec leurs cascades cristallines, offrent un cadre enchanteur pour une aventure hors du temps. ",
            descriptionPart3: "🌆 Glasgow et les mystères écossais :<br><br>Ville dynamique et culturelle, Glasgow abrite une scène artistique foisonnante, une riche gastronomie et des lieux incontournables comme la cathédrale Saint Mungo ou le Riverside Museum. Plus au nord, les cercles de pierres de Callanish, vieux de 3 000 ans, rappellent les mystères de Stonehenge et plongent les visiteurs dans les légendes écossaises. ",
            img:"images.m/e2.jpg",
            img2:"images.m/e1.jpg",
            img3:"images.m/e3.jpg",
        },
        /* https://unsplash.com/fr/photos/train-sur-le-pont-entoure-darbres-pendant-la-journee-XVoyX7l9ocY    
        // https://unsplash.com/fr/photos/herbe-verte-sur-la-montagne-sous-un-ciel-nuageux-blanc-Cd3Ek7rNXSk
        // https://pixabay.com/fr/photos/edinbourg-ch%C3%A2teau-fontana-366272/    */
    
        {
            budget: "Bas",
            saison: "Eté",
            interet: "Montagne",
            destination: "Bulgarie",
            descriptionPart1: "🏛️ Sofia, entre patrimoine et nature :<br><br>Bordée par la mer Noire , la bulgarie se situe à l’est de l’Europe.Découvrez la capitale bulgare,Sifia, avec la majestueuse cathédrale Saint-Alexandre-Nevski, symbole de l’architecture orthodoxe. À quelques kilomètres, le parc naturel Vitosha offre des sentiers de randonnée, des chutes d’eau et le sommet du mont Cherni Vrah, culminant à 2 290 m, parfait pour admirer Sofia d’en haut.  ",
            descriptionPart2: "🌊 Varna et la côte de la mer Noire :<br><br>Varna, station balnéaire et ville portuaire, est connue pour son mélange d’histoire et de modernité. Plus au sud, Sozopol, la plus ancienne ville de la côte bulgare, est populaire pour ses ruelles pittoresques et ses plages dorées. ",
            descriptionPart3: "⛰️ Montagnes et grands espaces :<br><br>Les Rhodopes et le parc national de Pirin, classé à l’UNESCO, sont des paradis pour les amateurs de randonnée et de sports d’hiver. Entre sommets majestueux, forêts de pins et lacs alpins, ces régions offrent des paysages à couper le souffle, avec des stations de ski renommées comme Pamporovo et Bansko. ",
            img:"images.m/bulgaria1.jpg",
            img2:"images.m/bulgaria.jpg",
            img3:"images.m/bulgaria2.jpg", 
               },
              /*  https://www.pexels.com/fr-fr/photo/paysage-montagnes-nature-nuages-5608331/        
              // https://pixabay.com/fr/photos/sofia-bulgarie-cath%C3%A9drale-nevski-4041209/   
        // https://www.pexels.com/fr-fr/photo/paysage-nature-lac-montagne-rocheuse-4172137/      */
        {
            budget: "Moyen",
            saison: "Eté",
            interet: "Montagne",
            destination: "Andorre",
            descriptionPart1: "🏔️ Un écrin de nature au cœur des Pyrénées :<br><br>Andorre, situé entre la France et l’Espagne, est un paradis pour les amoureux de la montagne. Avec ses paysages à couper le souffle, ses vallées verdoyantes et ses sommets enneigés, cette principauté est idéale pour une escapade nature. En hiver, Grandvalira et Vallnord offrent des pistes de ski exceptionnelles, tandis qu’en été, les sentiers de randonnée du parc naturel de la Vallée de Sorteny dévoilent une beauté sauvage. ",
            descriptionPart2: "🛍️ Shopping et détente en plein air :<br><br>Grâce à sa fiscalité avantageuse, Andorre est une destination prisée pour le shopping. L’avenue Meritxell à Andorre-la-Vieille regorge de boutiques de luxe, d’électronique et de cosmétiques à prix attractifs. Après une journée de shopping, rien de mieux qu’un moment de détente à Caldea, le plus grand centre thermal d’Europe du Sud, avec ses eaux chaudes naturelles et ses bains apaisants. ",
            descriptionPart3: "🏰 Un riche patrimoine entre tradition et modernité :<br><br>Malgré sa petite taille, Andorre possède un patrimoine fascinant. L’église Santa Coloma et la Casa de la Vall témoignent de son histoire médiévale, tandis que le village d’Ordino est connu pour son charme authentique. Entre traditions préservées et infrastructures modernes, Andorre est une destination surprenante, parfaite pour une escapade mêlant nature, culture et bien-être.",
            img:"images.m/andorre1.jpg",
            img2:"images.m/andorre2.jpg",
            img3:"images.m/andorre.jpg",       
         },
         /* https://unsplash.com/fr/photos/arbres-verts-pres-du-lac-sous-le-ciel-bleu-pendant-la-journee-S_UIxRYP2uk    
         // https://pixabay.com/fr/photos/montagnes-neige-andorre-arinsal-4445550/   
            https://pixabay.com/fr/photos/montagne-paysage-andorre-alpine-4295794/            */
{
            budget: "Haut",
            saison: "Eté",
            interet: "Montagne",
            destination: "Suisse",
            descriptionPart1: "Un joyau au cœur des Alpes :<br><br>Située en plein cœur de l’Europe, la Suisse séduit les touristes par ses paysages à couper le souffle. Entre montagnes majestueuses, lacs cristallins et villes historiques, le pays offre une diversité impressionnante.Pour les amateurs de ski, Zermatt et Grandvalira comptent parmi les meilleures stations. Si vous préférez explorer les lacs, empruntez les sentiers du lac d’Oeschinen ou détendez-vous au bord du lac Léman.La Suisse offre des expériences uniques en toute saison, mais l’été est l’une des meilleures saisons pour la visiter. ",
            descriptionPart2: "🏙️ Villes historiques et panoramas d’exception :<br><br>Les villes suisses sont un mélange d’histoire et modernité. Berne, avec sa vieille ville classée à l’UNESCO, vous plonge dans une atmosphère médiévale unique. Lucerne, avec son célèbre pont Kapellbrücke et ses vues spectaculaires sur le lac des Quatre-Cantons, est une ville de rêve. Lausanne, avec ses collines au-dessus du Léman, sst connue pour son architecture et ses vignobles. ",
            descriptionPart3: "🚞 Expériences uniques et nature grandiose :<br><br>En Suisse, chaque voyage est une aventure. Embarquez à bord du Glacier Express pour un périple à travers les Alpes, admirez les impressionnantes chutes du Rhin près de Schaffhouse et partez à l’assaut du Titlis pour une vue à couper le souffle.Le funiculaire Gelmerbahn, le plus raide d’Europe, est une activité parfaite pour les amateurs de sensations fortes.Alliant tradition, nature et modernité, la Suisse vous promet un voyage de rêve inoubliable. ",
            img:"images.m/lac.jpg",
            img2:"images.m/ville.jpg",
            img3:"images.m/train.jpg",     
        },
/*   https://pixabay.com/fr/photos/fleuve-berne-suisse-panorama-3740371/   
https://pixabay.com/fr/photos/lac-suisse-alpes-sommet-montagnes-4425606/*/

{
    budget: "Bas",
    saison: "Hiver",
    interet: "Montagne",
    destination: "Népal",
    descriptionPart1: "🏔️ Un écrin de nature au cœur des Pyrénées :<br><br>Andorre, situé entre la France et l’Espagne, est un paradis pour les amoureux de la montagne. Avec ses paysages à couper le souffle, ses vallées verdoyantes et ses sommets enneigés, cette principauté est idéale pour une escapade nature. En hiver, Grandvalira et Vallnord offrent des pistes de ski exceptionnelles, tandis qu’en été, les sentiers de randonnée du parc naturel de la Vallée de Sorteny dévoilent une beauté sauvage. ",
    descriptionPart2: "🛍️ Shopping et détente en plein air :<br><br>Grâce à sa fiscalité avantageuse, Andorre est une destination prisée pour le shopping. L’avenue Meritxell à Andorre-la-Vieille regorge de boutiques de luxe, d’électronique et de cosmétiques à prix attractifs. Après une journée de shopping, rien de mieux qu’un moment de détente à Caldea, le plus grand centre thermal d’Europe du Sud, avec ses eaux chaudes naturelles et ses bains apaisants. ",
    descriptionPart3: "🏰 Un riche patrimoine entre tradition et modernité :<br><br>Malgré sa petite taille, Andorre possède un patrimoine fascinant. L’église Santa Coloma et la Casa de la Vall témoignent de son histoire médiévale, tandis que le village d’Ordino est connu pour son charme authentique. Entre traditions préservées et infrastructures modernes, Andorre est une destination surprenante, parfaite pour une escapade mêlant nature, culture et bien-être.",
    img:"images.m/andorre1.jpg",
    img2:"images.m/andorre2.jpg",
    img3:"images.m/andorre.jpg",
    },
    {
    budget: "Moyen",
    saison: "Hiver",
    interet: "Montagne",
    destination: "Andorre",
    descriptionPart1: "🏔️ Un écrin de nature au cœur des Pyrénées :<br><br>Andorre, situé entre la France et l’Espagne, est un paradis pour les amoureux de la montagne. Avec ses paysages à couper le souffle, ses vallées verdoyantes et ses sommets enneigés, cette principauté est idéale pour une escapade nature. En hiver, Grandvalira et Vallnord offrent des pistes de ski exceptionnelles, tandis qu’en été, les sentiers de randonnée du parc naturel de la Vallée de Sorteny dévoilent une beauté sauvage. ",
    descriptionPart2: "🛍️ Shopping et détente en plein air :<br><br>Grâce à sa fiscalité avantageuse, Andorre est une destination prisée pour le shopping. L’avenue Meritxell à Andorre-la-Vieille regorge de boutiques de luxe, d’électronique et de cosmétiques à prix attractifs. Après une journée de shopping, rien de mieux qu’un moment de détente à Caldea, le plus grand centre thermal d’Europe du Sud, avec ses eaux chaudes naturelles et ses bains apaisants. ",
    descriptionPart3: "🏰 Un riche patrimoine entre tradition et modernité :<br><br>Malgré sa petite taille, Andorre possède un patrimoine fascinant. L’église Santa Coloma et la Casa de la Vall témoignent de son histoire médiévale, tandis que le village d’Ordino est connu pour son charme authentique. Entre traditions préservées et infrastructures modernes, Andorre est une destination surprenante, parfaite pour une escapade mêlant nature, culture et bien-être.",
    img:"images.m/andorre1.jpg",
    img2:"images.m/andorre2.jpg",
    img3:"images.m/andorre.jpg",
    },

    {
        budget: "Haut",
        saison: "Hiver",
        interet: "Montagne",
        destination: "Argentine",
        descriptionPart1: "",
        img:"images.c/viet1.jpg",
        img2:"images.c/viet3.jpg",
        img3:"images.c/foodviet.jpg",        
    },




//villes
        {
            budget: "bas",
            saison: "Automne",
            interet: "Culture/Histoire",
            destination: "Egypte",
            descriptionPart1: "🏺 Plongée au cœur de l’Histoire :<br><br>L’Égypte est un véritable trésor pour les passionnés d’histoire et de civilisations anciennes. Entre les mythiques pyramides de Gizeh, le fascinant temple de Karnac et les impressionnantes statues d’Abou Simbel, chaque monument raconte un chapitre grandiose du passé. La vallée des Rois, à Louxor, cache des tombeaux aux fresques magnifiquement préservées, transportant les visiteurs à l’époque des pharaons. Le Caire, quant à lui, mélange traditions et modernité avec son immense musée égyptien, son quartier islamique vibrant et le souk animé de Khan El Khalili. ",
            descriptionPart2: "🌊 Paradis de la mer Rouge :<br><br>L’Égypte, ce n’est pas que les pharaons ! Ses plages idylliques et ses eaux cristallines en font une destination parfaite pour se détendre ou partir à l’aventure, les stations balnéaires d’Hurghada, Marsa Alam et El-Gouna offrent des plages paradisiaques et des eaux turquoise parfaites pour la détente et les sports nautiques. La mer Rouge, avec ses récifs coralliens spectaculaires, est l'endroit idéale pour les amateurs de plongée et de snorkeling. Entre tortues, dauphins et poissons multicolores, l’exploration sous-marine y est inoubliable. ",
            descriptionPart3: "🏜️ Aventure entre désert et Nil :<br><br>Pour une expérience inoubliable, partez à la découverte du désert Blanc, un paysage unique où bivouaquer sous les étoiles est un moment magique. À Louxor, survolez la vallée en montgolfière ou embarquez pour une croisière sur le Nil, entre temples millénaires et villages nubiens colorés. Pour un voyage inoubliable en Égypte, privilégiez l’automne ou l’hiver pour éviter la chaleur accablante du désert ! ",
            img:"images.c/egypte.jpg",
            img2:"images.c/plage.jpg",
            img3:"images.c/cairee.jpg",            },
            /* https://pixabay.com/fr/photos/le-caire-mosqu%C3%A9e-egypte-islam-1980350/  
            // https://unsplash.com/fr/photos/photographie-en-contre-plongee-dun-batiment-en-beton-brun-sous-un-ciel-bleu-pendant-la-journee-a8ZSKCBE1xk    */
        {
            budget: "Moyen",
            saison: "Automne",
            interet: "Culture/Histoire",
            destination: "Corée du sud",
            descriptionPart1: "🌆 Tradition et Modernité :<br><br> Située en Asie de l’Est, la Corée du Sud est connue pour son contraste entre tradition et modernité. Séoul, avec ses quartiers animés comme Hongdae et Insadong, mêle gratte-ciels futuristes et palais historiques. Busan, ville côtière dynamique, offre plages, marchés et le charmant village coloré de Gamcheon. Plus paisible, Gyeongju plonge les visiteurs dans l’histoire avec ses temples et vestiges millénaires. ",
            descriptionPart2:"Des Paysages Variés et Une Culture Fascinante 🌿 :<br><br>Pour les amateurs de nature, l’île de Jeju est une destination idéale. Avec ses cascades et ses montagnes, la nature coréenne est spectaculaire. Pour les randonnées, le parc national de Seoraksan offre des panoramas à couper le souffle entre montagnes, forêts et temples nichés au cœur de la nature. La Corée est également connue pour sa culture riche : découvrez les hanok (maisons traditionnelles), les spectacles de danse et la K-pop. ",
            descriptionPart3:"Une Cuisine Unique et Conviviale 🍜 :<br><br>Voyager en Corée du Sud, c’est aussi découvrir une cuisine savoureuse et unique. Les saveurs coréennes sont inoubliables : bibimbap coloré, barbecue coréen à partager et kimchi épicé. La street food, avec ses tteokbokki et hotteok sucrés, ajoute une touche gourmande à chaque balade. ",
            img:"images.c/kor.jpg",
            img2:"images.c/busan.jpg",
            img3:"images.c/foodk.jpg",   
        },

        /* https://pixabay.com/fr/photos/cor%C3%A9e-arbre-gyeongbokgung-s%C3%A9oul-7366036/ 
        // https://pixabay.com/fr/photos/bibimbap-cor%C3%A9en-aliments-gochujang-4887417/     */
        {
        
            budget: "Haut",
            saison: "Automne",
            interet: "Culture/Histoire",
            destination: "Italie",
            descriptionPart1:"Histoire et culture :<br><br>L’Italie, c’est une plongée dans un passé grandiose où chaque rue raconte une histoire. De Rome et son majestueux Colisée à Florence et ses chefs-d’œuvre de la Renaissance, en passant par Venise et ses canaux romantiques, chaque ville est un trésor à découvrir. À Vérone, plongez dans la légende de Roméo et Juliette en visitant le célèbre balcon où l’amour semble encore flotter dans l’air. Entre ruines antiques, cathédrales et monuments, l’Italie est la destination idéale pour les amoureux d’histoire et de beauté. ",
            descriptionPart2:"🎭 Une culture vivante :<br><br>Loin d’être figée dans le passé, l’Italie est un pays vibrant où l’art, la mode et la musique se vivent au quotidien. Assistez à un opéra à Milan, flânez dans les ruelles colorées des Cinque Terre ou laissez-vous séduire par l’ambiance animée des marchés de Naples. Chaque région a ses traditions et son caractère, offrant une immersion unique dans un art de vivre à la fois raffiné et chaleureux. ",
            descriptionPart3: "🍕 Un paradis pour les gourmands :<br><br>Un voyage en Italie, c’est aussi une aventure culinaire inoubliable. Savourez une pizza napolitaine authentique, dégustez des pâtes fraîches faites maison et laissez-vous tenter par un espresso corsé ou une glace artisanale. Ici, la cuisine est un art, un plaisir et surtout un moment de partage qui fait partie intégrante de la culture locale. ",
            img:"images.c/venise.jpg",
            img2:"images.c/rome.jpg",
            img3:"images.c/pizza.jpg",
        },
        {
            budget: "Bas",
            saison: "Printemps",
            interet: "Culture/Histoire",
            destination: "Ouzbékistan",
            descriptionPart1: "🏛️ Voyage au cœur de l’histoire ;<br><br>L’Ouzbékistan, pays qui vous plonge dans l’histoire fascinante de la Route de la Soie, où des sites emblématiques comme la Place du Registan à Samarcande, le Mausolée de Gour Emir et l'Observatoire d'Oulough Beg vous transportent dans une époque lointaine. Les amateiC’est un pays parfait pour les amateurs d’histoir car il est riche en architecture et culture, vous y trouverez des médersas, mosquées et monuments historiques.Pour une expérience authentique, flâner dans leurs ruelles et découvrez chaque détail de leurs merveilles architecturales. ",
            descriptionPart2:"🏜️ Nature sauvage et paysages grandioses :<br><br>Pour ceux qui aiment la nature, l’Ouzbékistan dévoile des paysages spectaculaires. Vous pourrez admirer les majestueuses dunes du désert de Kyzylkoum, explorer les montagnes du Tian Shan aux sommets enneigés, idéales pour la randonnée, et enfin, explorer la vallée verdoyante de Fergana, un incontournable. Chaque recoin du pays promet une aventure inoubliable. ",
            descriptionPart3:"🎭 Traditions et artisanat :<br><br>Au-delà de ses monuments et paysages, l’Ouzbékistan est aussi un pays avec beaucoup des traditions. Les marchés animés d’Itchan Kala et des grandes villes offrent un aperçu du savoir-faire local : tapis colorés, céramiques peintes à la main et étoffes de soie brodées. Enfin , ne ratez surtout pas la cuisine riche et savoureuse. Plov, shashlik et soupes traditionnelles vous régaleront, tout en vous permettant de découvrir des plats qui ont traversé les siècles. ",
            img:"images.c/uzb.jpg",
            img2:"images.c/uzbé.jpg",
            img3:"images.c/cer.jpg",
        },
        /* https://www.istockphoto.com/fr/photo/lac-dans-les-montagnes-charvak-ouzb%C3%A9kistan-gm1038223434-277904978    
        //       https://pixabay.com/fr/photos/c%C3%A9ramique-bols-artisanat-d%C3%A9coration-198712/   
        // https://www.istockphoto.com/fr/photo/guri-amir-ou-gur-emir-est-un-mausol%C3%A9e-du-conqu%C3%A9rant-mongol-amir-temur-ou-tamerlan-%C3%A0-gm2159036744-579646414       */
        
        {
            budget: "Moyen",
            saison: "Printemps",
            interet: "Culture/Histoire",
            destination: "Cuba",
            descriptionPart1: "🏛️ Entre culture et plages paradisiaques: <br><br>Une île paradisiaque en pleine mer des Caraïbes, où toutes les rues vous rappelleront l’époque coloniale. À La Havane, ne manquez pas la Plaza de la Catedral et la vieille ville La Habana Vieja, avec ses bâtiments colorés et ses voitures américaines vintage. Pour une touche d’histoire, Santa Clara est idéale, et Trinidad, classée à l’UNESCO, vous plongera dans l’ambiance coloniale avec ses maisons pastel. Les amoureux de nature apprécieront les cascades de Topes de Collantes. ",
            descriptionPart2:"🏖️ Les plages et îles de rêve:<br><br>Cuba est connue ses plages magnifiques. Varadero, à proximité de La Havane, et Cayo Coco sont parfaits pour se détendre. Pour les passionnés de plongée, Isla de la Juventud et Cayo Largo sont des destinations incontournables. Enfin, explorez la Baie des Cochons, avec des sites uniques comme Punta Perdiz et la Cueva de los Peces. ",
            descriptionPart3:"🍽️ Saveurs locales à ne pas manquer :<br><br>Impossible de quitter Cuba sans goûter à sa gastronomie authentique. Découvrez le Moros y Cristianos, Une spécialité locale aux influences espagnoles et caribéennes. Pour un séjour optimal, privilégiez la saison sèche (décembre à avril). ",
            img:"images.c/havana.jpg",
            img2:"images.c/cubaplage.jpg",
            img3:"images.c/havanaa.jpg"
        },
        
        {
            budget: "Haut",
            saison: "Printemps",
            interet: "Culture/Histoire",
            destination: "Jordanie",
            descriptionPart1: "🏜️ Un trésor du Moyen-Orient aux paysages spectaculaires :<br><br>Situé au coeur du Moyen-Orient, c’est une destination fascinante qui mélange nature et histoirel.Ce pays offre une diversité de paysage à couper le souffle, comme les falaises sculptées du desert Wadi Rum et les eaux scintillantes de la mer Morte.Pour les amateurs de nature, les canyons du Wadi Mujib est un incontournable. ",
            descriptionPart2:"🏰 Un voyage à travers l’histoire :<br><br>La Jordanie est un berceau de civilisations millénaires, elle abrite des trésors historiques uniques. Pétra,une des Merveilles du Monde ,la cité rose taillée dans la roche, connu par ses temples majestueux et ses tombes monumentales. La ville antique de Jerash est une ville historique inconoturnable, avec ses théâtres et ses colonnades préservées. À Amman, la capitale , l’histoire se mêle à la modernité dans un décor où mosquées, souks animés et vestiges antiques se mélangent. ",
            descriptionPart3:"🌊 Aventure et détente au fil du voyage :<br><br>Que ce soit pour une expérience immersive chez les Bédouins du Wadi Rum, une baignade insolite dans la mer Morte ou une plongée au cœur des récifs coralliens d’Aqaba, la Jordanie a de quoi séduire tous les voyageurs. Entre excursions en 4x4 dans le désert, découvertes culturelles et moments de détente dans des paysages uniques, ce pays vous offre un voyage inoubliable. ",
            img:"images.c/jordanie.jpg",
            img2:"images.c/petraa.jpg",
            img3:"images.c/jordanielac.jpg",        
        },

        /* https://unsplash.com/fr/photos/batiment-brun-sur-le-desert-Ivwyqtw3PzU  
        // https://pixabay.com/fr/photos/jordan-wadi-musa-p%C3%A9tra-ville-5003580/  */
        {
            budget: "Bas",
            saison: "Eté",
            interet: "Culture/Histoire",
            destination: "Pérou",
            descriptionPart1: "🏔️ Sommets et forêts :<br><br>Le Pérou est un pays aux merveilles naturelles, entre déserts et montagnes. C’est une destination idéale pour les amateurs d’aventure. Perché au sommet des Andes, le Machu Picchu, l’une des sept merveilles du monde, est un lieu incontournable pour les passionnés de montagnes et d’histoire. Les amoureux de nature ne manqueront pas la vallée sacrée des Incas et la Cordillera Blanca, des sites spectaculaires à explorer.",
            descriptionPart2:"🏛️ Au cœur de l’histoire inca : <br><br>Une des plus grandes civilisations précolombiennes, ce pays contient beaucoup de trésors historiques. À Cusco, vous découvrirez une architecture coloniale fascinante. Pour une expérience mêlant patrimoine et paysages montagneux, visitez Arequipa, surnommée « la ville blanche ». Les passionnés d’archéologie ne manqueront pas Chan Chan, la plus grande cité en adobe du monde, ainsi que les mystérieuses lignes de Nazca, dont les figures tracées dans le désert continuent d’intriguer les voyageurs.  ",
            descriptionPart3:"🌊 Aventure et détente : <br><br>Le Pérou invite autant à l’exploration qu’à la détente. Les amateurs de sensations fortes pourront s’aventurer dans le canyon de Colca ou naviguer sur les rivières amazoniennes en bateau. En plein désert, l’oasis de Huacachina est idéale pour une balade en buggy sur les dunes dorées. Depuis Cusco, partez à la découverte du mont Vinicunca, surnommé la « montagne Arc-en-ciel », l’une des expériences les plus prisées du pays fairefaire. Et enfin, ne quittez pas sans avoir gouté à la cuisine péruvienne, réputée pour ses saveurs uniques. Ce voyage sera inoubliable ! ",
            img:"images.c/1.jpg",
            img2:"images.c/3.jpg",
            img3:"images.c/2.jpg",        
        },

        /* https://www.pexels.com/fr-fr/photo/photo-de-machu-picchu-2929906/    
        // https://unsplash.com/fr/photos/montagne-sous-les-nuages-gris-hjanvZlqoB8   
        // https://unsplash.com/fr/photos/photographie-aerienne-de-montagne-uvQmacxnfcE  */
        {
            budget: "Moyen",
            saison: "Eté",
            interet: "Culture/Histoire",
            destination: "Albanie",
            descriptionPart1:"🌄 Montagnes et plages :<br><br>En plein cœur des Balkans, l'Albanie est un véritable joyau naturel encore méconnu, offrant une diversité de paysages entre plages et montagnes. C’est une destination idéale pour les amateurs de randonnée et de nature, avec les majestueuses Alpes albanaises et leurs rivières cristallines. Ne ratez pas le parc national de Llogara, niché en pleine montagne avec ses forêts denses et sa vue imprenable sur le sud de l’Albanie. Pour une expérience mêlant montagne et plage, faites un détour par Himarë. ",
            descriptionPart2:"🏛️ Histoire et culture :<br><br>L'Albanie se distingue par un mélange unique de culture albanaise et d’influences méditerranéennes. Pour une immersion dans son histoire, ne manquez pas la ville de Berat, surnommée la « ville aux mille fenêtres », où vous pourrez admirer ses maisons traditionnelles et ses monuments emblématiques. Explorez des sites exceptionnels comme la cité antique de Butrint ou les montagnes de Krujë . Tirana et Durrës offrent quant à elles un équilibre entre modernité et patrimoine, avec des musées fascinants et des lieux historiques captivants.  ",
            descriptionPart3:"🌊 Nature et ambiance urbaine:<br><br>Si vous êtes amoureux de la nature, l’Albanie est faite pour vous. Les passionnés de rafting et de randonnée apprécieront le canyon d’Osum, un site spectaculaire aux piscines naturelles. Pour des plages idylliques, Ksamil et Dhërmi comptent parmi les plus belles du pays. Si vous préférez une ambiance plus urbaine, Vlora est la ville idéale, combinant plages, vie nocturne animée et patrimoine historique. Et bien sûr, ne manquez pas de goûter à la cuisine albanaise, savoureuse et variée, mêlant influences turques et italiennes. Une chose est sûre : ce voyage sera inoubliable !",
            img:"images.c/albm.jpg",
            img2:"images.c/berat.jpg",
            img3:"images.c/alba.jpg",       
         },
        /*   https://pixabay.com/fr/photos/berat-albanie-balkanique-mangalem-3707970/    
        //     https://unsplash.com/fr/photos/bateau-sur-la-mer-pres-de-rocky-mountain-pendant-la-journee-0hSua1F0-P0    
        // https://pixabay.com/fr/photos/nature-paysage-valbona-albanie-3723280/     x  */

        {
            budget: "Haut",
            saison: "Eté",
            interet: "Culture/Histoire",
            destination: "Pakistan",
            descriptionPart1: "🏙️ Villes et culture:<br><br>Le Pakistan est une destination où modernité et tradition se rencontrent. Karachi, la plus grande ville du pays, est connue pour ses marchés animés, ses plages comme Clifton Beach et ses monuments emblématiques tels que le mausolée Quaid-i-Azam et la grande mosquée Masjid-i-Tuba. Lahore, centre culturel du pays, est un mélange unique d'architecture moghole et coloniale, avec des sites incontournables comme le Fort de Lahore. Islamabad, capitale moderne entourée par les collines de Margalla, est idéale pour un mélange de nature et d'urbanisme. ",
            descriptionPart2:"🏔️ Paysages :<br><br>Le nord du Pakistan est parfait pour les amateurs de nature, avec ses montagnes et ses vallées à couper le souffle. Le Karakoram, abritant le sommet du K2, deuxième plus haut du monde, est un endroit parfait pour des randonnées inoubliables. Les vallées de Swat et Hunza offrent des paysages verdoyants, des glaciers impressionnants et des villages où l'hospitalité locale rend chaque visite mémorable. Plus au sud, la vallée de Neelum et ses rivières cristallines sont parfaites pour les amateurs de nature et de tranquillité. ",
            descriptionPart3:"🌍 Tradition et modernité :<br><br>Voyager au Pakistan, c'est plonger dans une culture riche. Vous trouverez des bazars colorés à Peshawar, un mélange de nature et d'urbanisme au Penjab et à Bahawalpur. Entre les paysages spectaculaires, les expériences culinaires épicées et la chaleur humaine incomparable, le Pakistan vous promet un voyage unique, où chaque instant est une découverte. ",
            img:"images.c/2p.jpg",
            img2:"images.c/1p.jpg",
            img3:"images.c/3p.jpg",        
        },
        /* https://unsplash.com/fr/photos/photographie-aerienne-dune-riviere-entouree-de-montagnes-8qCtP97jgoE   
        // https://unsplash.com/fr/photos/musee-a-4-poteaux-sous-lheure-doree-uc9GjDHj1yA  
        // https://unsplash.com/fr/photos/batiment-en-beton-brun-sous-le-ciel-bleu-pendant-la-journee-TXJEdxs5Hh4    */
        {
            budget: "Bas",
            saison: "Hiver",
            interet: "Culture/Histoire",
            destination: "Vietnam",
            descriptionPart1: "🏙️ Villes dynamiques et richesse culturelle :<br><br>Situé en Asie du Sud-Est, le Vietnam est une destination incontournable pour les amateurs de nature et de culture. Hanoï est connue pour ses rues animées, ses marchés colorés et ses temples historiques, comme le Temple de la Littérature. Ho Chi Minh-Ville offre un mélange unique d’urbanisme moderne et d’héritage colonial. Quant à Hué, ancienne capitale impériale, regorge de trésors architecturaux et de monuments historiques, comme la Cité impériale, qui vous transporte dans le passé du pays. ",
            descriptionPart2:"🏞️ Nature :<br><br>Le Vietnam est une destination idéale pour les amoureux de paysages spectaculaires. La baie d'Halong dévoile des formations rocheuses impressionnantes émergeant des eaux cristallines. Vous pourrez aussi admirer les rizières en terrasse de Sa Pa, véritables merveilles sculptées par l’homme. Ne manquez pas le Golden Bridge, un pont incontournable suspendu entre les montagnes. Et pour des plages de sable blanc, direction Nha Trang. ",
            descriptionPart3:"🌍 Traditions et gastronomie :<br><br>Voyager au Vietnam, c’est découvrir une culture chaleureuse et accueillante. À Hanoï et Saigon, flânez dans les marchés aux épices et aux fruits frais, et goûtez à la street food locale. Entre le pho, les rouleaux de printemps et les banh mi, chaque plat est une invitation à la découverte. Au Vietnam, chaque instant devient un souvenir inoubliable. ",
            img:"images.c/viet1.jpg",
            img2:"images.c/viet3.jpg",
            img3:"images.c/foodviet.jpg",        
        },

        /* https://unsplash.com/fr/photos/skyline-de-la-ville-pendant-la-nuit-wUk2U5Wirxg  
        // https://www.istockphoto.com/fr/photo/cuisine-vietnamienne-dispos%C3%A9-sur-la-table-gm881384324-245393748
        // https://unsplash.com/fr/photos/un-pont-qui-fait-traverser-les-gens-a-pied-m3E0S4LoIuQ */
        {
            budget: "Moyen",
            saison: "Hiver",
            interet: "Culture/Histoire",
            destination: "Guatemala",
            descriptionPart1: "🏙️ Villes et histoire :<br><br>Si vous recherchez une destination où l’histoire coloniale se mêle à une nature spectaculaire, le Guatemala est fait pour vous. Antigua, ancienne capitale classée à l’UNESCO, est réputée pour ses rues pavées, ses maisons colorées et ses volcans en toile de fond. Pour une immersion totale dans la culture guatémaltèque, rendez-vous à Chichicastenango, célèbre pour son marché traditionnel où artisanat, textiles et spécialités locales se mêlent . Enfin, ne manquez pas Flores, une charmante île nichée sur le lac Petén Itzá, point de départ idéal pour explorer les trésors mayas. ",
            descriptionPart2:"🌿 Paysages et nature :<br><br>Le Guatemala offre une diversité de paysages impressionnante. Le lac Atitlán, entouré de volcans et de villages authentiques, est parfait pour une croisière en lancha ou une randonnée. Les plus aventuriers pourront gravir le volcan Acatenango pour assister au spectacle unique du Volcan Fuego en éruption. Enfin, plongez dans les piscines naturelles de Semuc Champey, un paradis caché aux eaux turquoise. ",
            descriptionPart3:"🏺 Culture et sites mayas :<br><br>Pour une immersion dans l’histoire maya, visitez le site de Tikal. En plein cœur de la jungle, ses pyramides impressionnantes offrent une vue imprenable sur l’immensité verte du Petén. Pour une expérience encore plus authentique, le site de Yaxhá permet d’explorer d’anciennes cités mystérieuses en pleine nature. Entre ruines millénaires, traditions vivantes et paysages à couper le souffle, le Guatemala promet un voyage où chaque découverte est une aventure inoubliable. ",
            img:"images.c/guat1.jpg",
            img2:"images.c/guat2.jpg",
            img3:"images.c/tikal.jpg",
            },
            /* https://unsplash.com/fr/photos/vue-aerienne-darbres-verts-et-dun-lac-gLtJea5taXo   
            // https://unsplash.com/fr/photos/batiment-en-beton-brun-pres-de-la-montagne--97MyV1TOJk 
            // https://unsplash.com/fr/photos/champ-dherbe-verte-avec-des-arbres-sous-le-ciel-bleu-pendant-la-journee-M25dywqGkrg   */
            
            {
            budget: "Haut",
            saison: "Hiver",
            interet: "Culture/Histoire",
            destination: "Japon",
            descriptionPart1: " 🏯 Tradition et Modernité :<br><br>Si vous recherchez une destination mêlant tradition et modernité, le Japon est l’endroit parfait. Tokyo, capitale vibrante, vous plonge dans un monde où l'ultra-modernité côtoie le passé. Explorez Akihabara et Harajuku, des quartiers futuristes, puis plongez dans l’histoire avec les temples millénaires de Sensō-ji et Meiji Jingu. Kyoto, l’ancienne capitale, vous offre une immersion dans les traditions japonaises avec ses temples majestueux et ses jardins raffinés. Ne manquez pas Nara, où vous pourrez observer les célèbres cerfs en liberté et visiter le Todai-ji, qui abrite une immense statue de Bouddha. Enfin, Osaka, la ville gourmande, vous séduira avec son quartier animé de Dotonbori. ",
            descriptionPart2:"🌸 Paysages Naturels : <br><br>Les paysages naturels du Japon sont incontournables. Le mont Fuji, symbole national, est une destination de randonnée inoubliable, tout comme les montagnes d’Hokkaido. À Hakone, profitez d’une vue imprenable sur le Fuji-san tout en vous relaxant dans des sources chaudes (onsen). Au printemps, admirez les cerisiers en fleurs qui illuminent les parcs de Kyoto et Osaka. Pour un mélange de plages et de culture, explorez les îles d’Okinawa, véritables joyaux tropicaux. ",
            descriptionPart3:"🍣 Voyage Culinaire : <br><br>Le Japon est avant tout une destination gastronomique. À Tokyo, dégustez des sushis au marché de Tsukiji ou savourez un ramen dans les rues animées d'Ikebukuro. Osaka, réputée pour sa street food, est l’endroit idéal pour goûter au takoyaki (boulettes de poulpe) et à l’okonomiyaki (crêpe salée). Les amateurs de thé ne manqueront pas une visite à Uji, ville emblématique du matcha. Pour une immersion culturelle complète, participez à une cérémonie du thé et découvrez l’art raffiné de cette tradition japonaise. ",
            img:"images.c/tokyo1.jpg",
            img2:"images.c/paysagejapon.jpg",
            img3:"images.c/suchi.jpg",       
         },
         /*   https://www.pexels.com/fr-fr/photo/tour-eclairee-2614818/   */
        

//centreville
{
    budget: "bas",
    saison: "Automne",
    interet: "Centre-ville",
    destination: "Afrique du Sud",
    descriptionPart1: "🌆 Urbanité et nature :<br><br>L'Afrique du Sud mêle parfaitement nature et vie urbaine. À Johannesburg, découvrez des quartiers créatifs comme Maboneng et, pour plonger dans l’histoire, visitez le village de Soweto. Cape Town est connue pour le V&A Waterfront, ses rues animées et ses vues sur les montagnes. Durban est la ville idéale pour un mélange de plage et de culture : visitez la Golden Mile et le quartier de Florida Road. Entre les safaris dans le parc Kruger, les plages de la Garden Route et les montagnes du Drakensberg, l'Afrique du Sud offre une expérience complète pour les amoureux de la nature et des villes dynamiques.  ",
    descriptionPart2: "🦁 Safaris et faune :<br><br> L'Afrique du Sud est un véritable paradis pour les amoureux de la faune. Le parc national Kruger, l'un des plus grands d'Afrique, est idéal pour observer les Big Five (lion, éléphant, buffle, léopard et rhinocéros). Vous pourrez également visiter le parc Addo Elephant pour une rencontre exceptionnelle avec des éléphants en liberté. Si vous souhaitez découvrir la faune marine, la ville de Gansbaai offre une expérience unique avec ses requins blancs. Un voyage en Afrique du Sud sans safari serait incomplet ! ",
    descriptionPart3: "🌿 Nature :<br><br> Au-delà de ses villes, l’Afrique du Sud regorge de paysages naturels exceptionnels. Des safaris dans le parc Kruger aux plages de la Garden Route en passant par les montagnes du Drakensberg, ce pays est un véritable paradis pour les amateurs de nature et d'aventure. L’Afrique du Sud est idéale pour ceux qui recherchent une expérience complète entre culture, histoire et paysages spectaculaires. ",
    img:"images.v/afrique.jpg",
    img2:"images.v/safari.jpg",
    img3:"images.v/afr.jpg",       
},
        /*  https://unsplash.com/fr/photos/skyline-de-la-ville-sous-un-ciel-nuageux-pendant-la-nuit-kws8dJ9wfwc
        https://unsplash.com/fr/photos/skyline-de-la-ville-sous-un-ciel-nuageux-pendant-la-nuit-kws8dJ9wfwc 
        // https://pixabay.com/fr/photos/girafes-animaux-safari-faune-7238815/     */
{
    budget: "Moyen",
    saison: "Automne",
    interet: "Centre-ville",
    destination: "Corée du Sud",
    descriptionPart1: "🌆 Tradition et Modernité :<br><br> Située en Asie de l’Est, la Corée du Sud est connue pour son contraste entre tradition et modernité. Séoul, avec ses quartiers animés comme Hongdae et Insadong, mêle gratte-ciels futuristes et palais historiques. Busan, ville côtière dynamique, offre plages, marchés et le charmant village coloré de Gamcheon. Plus paisible, Gyeongju plonge les visiteurs dans l’histoire avec ses temples et vestiges millénaires. ",
    descriptionPart2:"Des Paysages Variés et Une Culture Fascinante 🌿 :<br><br>Pour les amateurs de nature, l’île de Jeju est une destination idéale. Avec ses cascades et ses montagnes, la nature coréenne est spectaculaire. Pour les randonnées, le parc national de Seoraksan offre des panoramas à couper le souffle entre montagnes, forêts et temples nichés au cœur de la nature. La Corée est également connue pour sa culture riche : découvrez les hanok (maisons traditionnelles), les spectacles de danse et la K-pop. ",
    descriptionPart3:"Une Cuisine Unique et Conviviale 🍜 :<br><br>Voyager en Corée du Sud, c’est aussi découvrir une cuisine savoureuse et unique. Les saveurs coréennes sont inoubliables : bibimbap coloré, barbecue coréen à partager et kimchi épicé. La street food, avec ses tteokbokki et hotteok sucrés, ajoute une touche gourmande à chaque balade. ",
    img:"images.v/kor.jpg",
    img2:"images.v/busan.jpg",
    img3:"images.v/foodk.jpg",
},
{
    budget: "Haut",
    saison: "Automne",
    interet: "Centre-ville",
    destination: "Malte",
    description: "ggggggggggggggggg",
    img:"images.v/kor.jpg",
    img2:"images.v/busan.jpg",
    img3:"images.v/foodk.jpg",
},
{
    budget: "Bas",
    saison: "Printemps",
    interet: "Centre-ville",
    destination: "Pérou",
    descriptionPart1: "🏔️ Sommets et forêts :<br><br>Le Pérou est un pays aux merveilles naturelles, entre déserts et montagnes. C’est une destination idéale pour les amateurs d’aventure. Perché au sommet des Andes, le Machu Picchu, l’une des sept merveilles du monde, est un lieu incontournable pour les passionnés de montagnes et d’histoire. Les amoureux de nature ne manqueront pas la vallée sacrée des Incas et la Cordillera Blanca, des sites spectaculaires à explorer.",
    descriptionPart2:"🏛️ Au cœur de l’histoire inca : <br><br>Une des plus grandes civilisations précolombiennes, ce pays contient beaucoup de trésors historiques. À Cusco, vous découvrirez une architecture coloniale fascinante. Pour une expérience mêlant patrimoine et paysages montagneux, visitez Arequipa, surnommée « la ville blanche ». Les passionnés d’archéologie ne manqueront pas Chan Chan, la plus grande cité en adobe du monde, ainsi que les mystérieuses lignes de Nazca, dont les figures tracées dans le désert continuent d’intriguer les voyageurs.  ",
    descriptionPart3:"🌊 Aventure et détente : <br><br>Le Pérou invite autant à l’exploration qu’à la détente. Les amateurs de sensations fortes pourront s’aventurer dans le canyon de Colca ou naviguer sur les rivières amazoniennes en bateau. En plein désert, l’oasis de Huacachina est idéale pour une balade en buggy sur les dunes dorées. Depuis Cusco, partez à la découverte du mont Vinicunca, surnommé la « montagne Arc-en-ciel », l’une des expériences les plus prisées du pays fairefaire. Et enfin, ne quittez pas sans avoir gouté à la cuisine péruvienne, réputée pour ses saveurs uniques. Ce voyage sera inoubliable ! ",
    img:"images.v/1.jpg",
    img2:"images.v/3.jpg",
    img3:"images.v/2.jpg",        },
{
    budget: "Moyen",
    saison: "Printemps",
    interet: "Centre-ville",
    destination: "Brésil",
    descriptionPart1 : "Le Brésil est une destination incontournable pour les voyageurs en quête d’aventure, de culture et de paysages. Si vous recherchez un mélange de paysages et d’urbanisme, allez à Rio de Janeiro, la ville du célèbre Christ Rédempteur. Perchée sur la colline du Corcovado, la statue vous offrira une vue exceptionnelle sur la baie de Guanabara et les plages mythiques de Copacabana. Ne manquez pas une balade dans le quartier de Santa Teresa, avec ses ruelles pittoresques. Les amateurs de fêtes brésiliennes y trouveront aussi leur bonheur avec le carnaval de Rio, un des plus grands au monde.",
    descriptionPart2: "🏖️ Villes urbaines :<br><br>Salvador, capitale de Bahia, est un incontournable pour découvrir la richesse culturelle du Brésil. Si vous aimez l’histoire et la musique, allez dans le quartier historique de Pelourinho, classé au patrimoine mondial de l'UNESCO, et laissez-vous envoûter par les rythmes du samba et de la bossa nova. L'architecture coloniale portugaise, les églises majestueuses et les marchés animent la ville. Ne manquez pas de goûter aux spécialités culinaires locales, comme la moqueca. Si vous êtes passionné par les grandes villes modernes, ne manquer pas São Paulo est la plus grande ville du Brésil et Brasilia, est une cité futuriste",
    descriptionPart3: "🌿 L'Amazonie  :<br><br>Pour les amoureux de la nature et des découvertes uniques, une expédition en Amazonie est une expérience inoubliable. Partez depuis Manaus, point de départ pour explorer la plus grande forêt tropicale du monde. En remontant l'Amazone, vous rencontrerez des tribus indigènes, observerez une faune spectaculaire. C’est l'occasion rêvée de se connecter avec un écosystème unique et de vivre une aventure hors du temps, loin de l’agitation des grandes villes. ",
    img:"images.v/brésil1.jpg",
    img2:"images.v/brésil2.jpg",
    img3:"images.v/brésil3.jpg",        
},
/* https://unsplash.com/fr/photos/photographie-aerienne-dun-paysage-urbain-pres-de-la-mer-7F65HDP0-E0  
// https://unsplash.com/fr/photos/telepheriques-au-dessus-du-champ-dherbe-verte-76L0Hup2Zyo  
// https://www.istockphoto.com/fr/photo/mata-atlantica-for%C3%AAt-atlantique-au-br%C3%A9sil-gm935746242-256021567 */
{
    budget: "Haut",
    saison: "Printemps",
    interet: "Centre-ville",
    destination: "UAE",
    descriptionPart1:"Les Émirats arabes unis sont mondialement connus pour leur architecture futuriste et leurs villes extravagantes, mais ils offrent aussi une richesse culturelle et naturelle insoupçonnée. Dubaï, la métropole emblématique, est connue avec le Burj Khalifa, la marina et les îles artificielles en forme de palmier. Ses immenses centres commerciaux, comme le Dubai Mall, combinent shopping de luxe et attractions comme un aquarium géant . Mais au-delà de son éclat, le vieux Dubaï dévoile un autre visage avec ses souks traditionnels et ses promenades en abra sur la Dubai Creek. ",  
    descriptionPart2:"🌆 Les villes incontournables :<br><br>Capitale des Émirats, Abu Dhabi se distingue par son atmosphère plus posée et culturelle. La majestueuse mosquée Sheikh Zayed, le Louvre Abu Dhabi et l’île de Saadiyat en font une destination à ne pas manquer. Yas Island propose des parcs d’attractions comme Ferrari World et Warner Bros. Charjah, l’émirat voisin, est le centre culturel du pays avec des musées dédiés à l’art islamique et au patrimoine arabe. Plus au sud, Al-Aïn, surnommée la ville jardin, est connue grâce à son oasis classée à l’UNESCO et ses montagnes environnantes. ",  
    descriptionPart3:"🏜️ Déserts et montagnes :<br><br> Les Émirats ne se résument pas à leurs gratte-ciels. Le désert du Rub al-Khali, le plus vaste au monde, offre des expériences uniques comme le safari en 4x4, les balades à dos de chameau et les nuits sous tente bédouine. Plus au nord, les montagnes Hajar, proches de Ras al-Khaimah, sont idéales pour la randonnée et les tyroliennes vertigineuses. Pour les amateurs d’activités nautiques, les fjords de Musandam, accessibles depuis Fujairah, dévoilent des paysages spectaculaires et des eaux cristallines, parfaites pour le snorkeling et la plongée. ",  
    img:"images.v/uae3.jpg",
    img2:"images.v/uae1.jpg",
    img3:"images.v/uae2.jpg",  
},

/* https://www.pexels.com/fr-fr/photo/batiments-de-la-ville-au-coucher-du-soleil-1470502/  
// https://pixabay.com/fr/photos/palais-h%C3%B4tel-palais-des-%C3%A9mirats-4863835/  
// https://www.pexels.com/fr-fr/photo/batiments-peints-en-blanc-sous-le-ciel-bleu-2427797/ */
{
    budget: "Bas",
    saison: "Eté",
    interet: "Centre-ville",
    destination: "Chine ",
    descriptionPart1: "La Chine est une destination idéale pour ceux qui recherchent un équilibre parfait entre modernité et paysages. Ce pays immense offre des expériences variées, des mégalopoles ultra-connectées aux villages traditionnels nichés dans des montagnes. Que vous soyez amateur d’architecture futuriste, de nature spectaculaire ou de gastronomie locale, la Chine vous promet un voyage inoubliable. ",
    descriptionPart2: "Si vous aimez les grandes villes et l’urbanisme impressionnant, Pékin et Shanghai sont incontournables. À Pékin, vous pourrez admirer la majestueuse Cité Interdite, flâner sur la place Tian’anmen et découvrir l’incroyable architecture du Temple du Ciel. Shanghai, quant à elle, séduit avec son quartier futuriste de Pudong, où des gratte-ciels vertigineux dominent la skyline. Hong Kong, avec son port scintillant et ses marchés nocturnes animés, offre une atmosphère vibrante entre modernité et culture locale. Pour les passionnés de nouvelles technologies, Shenzhen est un passage obligé avec ses centres high-tech et ses parcs d’attractions futuristes. ",
    descriptionPart3: "Pour ceux qui recherchent des paysages spectaculaires, la Chine regorge de merveilles naturelles. Les montagnes de Zhangjiajie, offrent des formations rocheuses enveloppées de brume. Visitez aussi les rizières en terrasses de Longji , surtout au lever du soleil. Une croisière sur la rivière Li vous fera découvrir des paysages, parfaits pour les amateurs de photographie et de nature. Pour une immersion dans un cadre naturel, le lac Kanas, au nord du Xinjiang, est une merveille aux eaux cristallines entourées de forêts. Enfin, le désert de Badain Jaran, avec ses dunes géantes et ses lacs cachés, est une expérience unique pour les aventuriers en quête d’exploration. N’oubliez pas de goûter à la cuisine chinoise, Le ravioli chinois, ou dumpling, est un plat traditionnel incontournable",
    img:"images.v/china1.jpg",
    img2:"images.v/china2.jpg",
    img3:"images.v/dumpling.jpg",
},
/* https://www.pexels.com/fr-fr/photo/photo-de-paysage-de-la-ville-de-nuit-745243/   
// https://www.pexels.com/fr-fr/photo/la-grande-muraille-de-chine-1423580/  
// https://unsplash.com/fr/photos/chien-a-poil-court-blanc-et-marron-dans-un-panier-tresse-marron-Z90khxupq5A   */
{
    budget: "Moyen",
    saison: "Eté",
    interet: "Centre-ville",
    destination: "Grèce",
    descriptionPart1: "🌍 Histoire et culture: <br><br>Voyager en Grèce, c'est plonger au cœur de l’Antiquité entre sites historiques et paysages idylliques. Athènes, ville millénaire, abrite des trésors antiques comme l’Acropole et l’Agora.Conseil : visitez ces lieux tôt le matin ou en fin de journée pour éviter la chaleur et la foule.  ",
    descriptionPart2:"🏝️ Îles et plages paradisiaques: <br><br>Pour une escapade détente, Zakynthos est connue par ses falaises spectaculaires, ses grottes marines et ses plages d’un bleu éclatant. Santorin, avec ses maisons blanches et ses dômes bleus, offre un panorama unique sur la mer Égée. ",
    descriptionPart3:"🍽️ Gastronomie authentique: <br><br>Un voyage en Grèce ne serait pas complet sans goûter aux spécialités locales : moussaka, choriatiki, tzatziki et pâtisseries comme le kataifi, un délice sucré à découvrir absolument.",
    img: "images.v/grèce.jpg",
    img2: "images.v/grèce2.jpg",
    img3: "images.v/greece.jpg",
},
{
    budget: "Haut",
    saison: "Eté",
    interet: "Centre-ville",
    destination: "Qatar",
    descriptionPart1: "Petit émirat du Golfe Persique, le Qatar est connu pour son mélange fascinant de traditions et de modernité. Entre gratte-ciels futuristes, souks animés et paysages désertiques, ce pays offre une expérience unique aux voyageurs. Si vous recherchez une ville où gratte-ciels futuristes et traditions cohabitent, Doha est une destination incontournable. La Corniche, avec sa vue imprenable sur la Skyline, est parfaite pour une balade au coucher du soleil. Pour une expérience unique, montez à bord d’un boutre traditionnel et admirez les lumières scintillantes de la ville depuis les eaux du golfe Persique. ",
    descriptionPart2: "Visitez les allées du Souq Waqif, où les parfums orientaux, épices et les tissus artisanaux vous émerveilleront. Pour une expérience plus luxueuse, direction The Pearl, une île artificielle aux allures de Côte d’Azur arabe, idéale pour le shopping et la gastronomie haut de gamme. Et pour en apprendre plus sur l’histoire, visitez le musée national du Qatar et le musée d’Art Islamique, des trésors architecturaux et culturels. Pour vous immerger dans la culture, visitez le village culturel de Katara , vous y trouverez des théâtres, des galeries et même des musées. ",
    descriptionPart3: "Pour une pause loin de la ville urbaine, explorez les mangroves d’Al Thakira en kayak et observez flamants roses et hérons dans un cadre enchanteur. Aventurez-vous aussi dans les dunes dorées du désert qatari et vivez l’expérience unique d’un safari en 4x4, à dos de chameau, ou en surfant sur le sable ",
    img: "images.v/qatar3.jpg",
    img2: "images.v/qatar3.jpg",
    img3: "images.v/qatar2.jpg",
},
     /*   https://pixabay.com/fr/photos/bateaux-golfe-qatar-doha-leau-6390724/    
     // https://pixabay.com/fr/photos/paysage-urbain-doha-qatar-ville-3566340/   
     // https://unsplash.com/fr/photos/vue-aerienne-des-batiments-de-la-ville-pendant-la-journee-_G4sucNrC6Q  */
{
    budget: "Bas",
    saison: "Hiver",
    interet: "Centre-ville",
    destination: "Pologne",
    descriptionPart1:"Si vous êtes passionné par l’architecture, la Pologne est une destination parfai epour vous. Wrocław, Capitale européenne de la culture, elle est traversée par de nombreuses rivières et canaux, ce qui lui vaut une place parmi les dix villes d’Europe comptant le plus grand nombre de ponts. La vieille ville d’Ostrów Tumski séduit avec ses maisons colorées et ses lanternes à gaz. Pour une découverte originale, visitez le Jardin japonais ou Hydropolis, un centre interactif dédié à l’eau. ",
    descriptionPart2:"Pour les amateurs d’histoire et d’architecture, Gdańsk est une destination fascinante. La célèbre rue Mariacka, bordée de maisons historiques et de boutiques d’ambre, est un incontournable. Ne manquez pas le Centre de la solidarité européenne, un bâtiment impressionnant en forme de coque de bateau rouillée, ou encore le parc Oliwa avec son « chemin de l’éternité », une allée de tilleuls taillés. Pour une photo incontournable, rendez-vous à la fontaine de Neptune, symbole emblématique de la ville. ",
    descriptionPart3: "🏰Varsovie et Cracovie :<br><br>Varsovie et Cracovie sont des villes incontournables, riches en histoire et en culture. À Cracovie, flânez sur la place du marché et découvrez la Basilique Sainte-Marie, le château de Wawel et le quartier artistique de Kazimierz. Aux alentours, les mines de sel de Wieliczka sont une visite à ne pas manquer. À Varsovie, plongez dans l’histoire au musée de l’Insurrection ou admirez le Château Royal sur la Voie Royale. Pour une pause nature, le parc Łazienki vous offre un cadre idyllique. Côté gastronomie, impossible de visiter la Pologne sans goûter aux pierogi, ces délicieux raviolis polonais qui existent sous différentes formes et cuissons. ",
    img: "images.v/pologne2.jpg",
    img2: "images.v/pologne3.jpg",
    img3: "images.v/pologne1.jpg",
},
 /* https://unsplash.com/fr/photos/personnes-marchant-le-long-du-sentier-MEQ5FsJe1eI   
 // https://unsplash.com/fr/photos/immeubles-de-grande-hauteur-pendant-la-nuit-xcPw1-5OHTk   
 // https://www.pexels.com/fr-fr/photo/trois-personnes-debout-a-l-avant-de-la-maison-59601/ */
{
    budget: "Moyen",
    saison: "Hiver",
    interet: "Centre-ville",
    destination: "Espagne",
    descriptionPart1: " Si vous êtes passionné par le mélange urbain et nature, l’Espagne est faite pour vous ! Barcelone, Séville et Grenade sont des étapes incontournables. À Barcelone, découvrez la Sagrada Familia et les maisons de Gaudí, chefs-d'œuvre du modernisme. Séville vous séduira avec son Alcazar et sa majestueuse cathédrale Notre-Dame du Siège, tandis que Grenade vous transportera à l’époque mauresque avec l’Alhambra, un palais somptueux classé au patrimoine mondial de l’UNESCO. Ces villes sont une véritable invitation à un voyage dans le temps, entre influences gothiques, arabes et baroques.",
    descriptionPart2: " Si vous rêvez de soleil et de farniente, direction le sud de l’Espagne ! Malaga, sur la Costa del Sol, est parfaite pour alterner entre plages de sable fin et visites culturelles, notamment le musée Picasso. À Ibiza, découvrez une île aux deux visages : paradis des fêtards la nuit et marchés traditionnels le jour. Valence, quant à elle, offre un cadre balnéaire agréable.",
    descriptionPart3: "Pour une immersion dans la culture espagnole, Madrid est un passage obligé. Explorez le musée du Prado, le Palais Royal et flânez sur la Plaza Mayor avant de savourer des tapas. Bilbao, avec son impressionnant musée Guggenheim, est devenue un haut lieu d’art contemporain. Enfin, Cordoue est connue pour son mélange d’influences avec la mosquée-cathédrale, chef-d'œuvre de l’architecture islamique transformé en église chrétienne. Entre musées, spectacles de flamenco et quartiers historiques, ces villes dévoilent toute la richesse culturelle de l’Espagne. ",
    img: "images.v/espa2.jpg",
    img2: "images.v/espagne1.jpg",
    img3: "images.v/espa3.jpg",
},

/* https://pixabay.com/fr/photos/ville-paysage-urbain-architecture-5164368/   
// https://pixabay.com/fr/photos/madrid-espagne-ville-imeuble-5010803/  
// https://pixabay.com/fr/photos/valence-espagne-calatrava-1049389/   */
{
    budget: "Haut",
    saison: "Hiver",
    interet: "Centre-ville",
    destination: "États-Unis",
    descriptionPart1:"Si vous recherchez un pays qui offre une ambiance urbaine luxueuse mais aussi des paysages, les États-Unis sont une destination de rêve. Visitez New York City avec les gratte-ciels de Manhattan et es sites incontournables tels que la Statue de la Liberté et le Times Square. Los Angeles pour les passionnés de cinéma et de plages, ne manquer pas le Universal Studios Hollywood. San Francisco vous invite à explorer ses collines escarpées et son architecture iconique, tandis que Miami, mélange de cultures latines et américaines, vous séduira avec ses plages. ",
    descriptionPart2:"Les États-Unis sont également un terrain de jeu parfait pour les amateurs de culture et d’histoire. À Washington D.C., plongez dans la politique et les monuments emblématiques, tandis qu’à Chicago, vous découvrirez une ville où l'architecture et l'histoire se rencontrent. La scène culinaire et musicale y est tout aussi impressionnante. Chaque coin du pays est une invitation à explorer des histoires et des sites uniques, des musées de renom aux quartiers historiques vibrants. ",
    descriptionPart3: "Pour les voyageurs en quête d’aventure et de paysages, les États-Unis n’ont que des merveilles à offrir. Ne manquer surtout pas Les chutes du Niagara, situées à la frontière entre les États-Unis et le Canada. Explorez les parcs nationaux comme ceux de la Californie ou les montagnes du Colorado. De l'immensité du Grand Canyon aux plages paradisiaques de Californie, chaque région des États-Unis propose un cadre naturel unique. Que vous soyez en quête de détente ou de découvertes, ces paysages impressionnants sont parfaits pour vous ressourcer et vivre des moments inoubliables.",
    img: "images.v/newyork.jpg",
    img2: "images.v/usa1.jpg",
    img3: "images.v/colorado.jpg",
},


/* https://www.pexels.com/fr-fr/photo/photographie-de-pont-pendant-la-nuit-1239162/ 
// https://www.pexels.com/fr-fr/photo/photographie-de-pont-pendant-la-nuit-1239162/  
// https://pixabay.com/fr/photos/new-york-skyline-ville-4678442/
// https://pixabay.com/fr/photos/telluride-colorado-ville-urbain-2575382/  */

    ];
   // Récupération des critères depuis localStorage 
   const budget = localStorage.getItem("budget")?.trim().toLowerCase();
   const saison = localStorage.getItem("saison")?.trim().toLowerCase();
   const interet = localStorage.getItem("interet")?.trim().toLowerCase();

   // Recherche de la destination correspondante
   const destinationTrouvee = destinations.find(
       (dest) =>
           dest.budget.toLowerCase() === budget &&
           dest.saison.toLowerCase() === saison &&
           dest.interet.toLowerCase() === interet
   );

   // Si la destination est trouvée
   if (destinationTrouvee) {
       resultContainer.innerHTML = `
           <div class="result-card">
               <div class="result-card-header">
                   <h1 class="destination-name hidden">${destinationTrouvee.destination}</h1>
               </div>
               <div class="result-card-body hidden">
                   <div class="result-content">
                   
                       <!-- Première ligne : Image à gauche, texte à droite -->
                       <div class="row">
                           ${destinationTrouvee.img ? `<img src="${destinationTrouvee.img}" alt="${destinationTrouvee.destination}" class="image-destination">` : ''}
                           <p class="text">${destinationTrouvee.descriptionPart1}</p>
                       </div>

                       <!-- Deuxième ligne : Texte à gauche, image à droite -->
                       <div class="row">
                           <p class="text">${destinationTrouvee.descriptionPart2}</p>
                           ${destinationTrouvee.img2 ? `<img src="${destinationTrouvee.img2}" alt="${destinationTrouvee.destination}" class="image-destination">` : ''}
                       </div>
                       <!-- Deuxième ligne : Texte à gauche, image à droite -->
                    <div class="row">
                        ${destinationTrouvee.img3 ? `<img src="${destinationTrouvee.img3}" alt="${destinationTrouvee.destination}" class="image-destination">` : ''}
                        <p class="text">${destinationTrouvee.descriptionPart3}</p>
                    </div>
                       
                   </div>
                   <button class="btn" onclick="location.href='quiz.html'">Refaire le quiz</button>
               </div>
               <p class="info-message">⚠️ Les vols ne sont pas inclus car ils peuvent varier.</p>

           </div>
           
       `;
       
       

       // Animation d'apparition après un délai
       setTimeout(() => {
           document.querySelector('.destination-name').classList.remove('hidden');
       }, 900);

       setTimeout(() => {
           document.querySelector('.result-card-body').classList.remove('hidden');
       }, 935);
   }
   
}
);