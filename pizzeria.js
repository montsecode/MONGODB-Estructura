

db.createCollection('client');
db.createCollection('comanda');
db.createCollection('productes');
db.createCollection('botiga');
db.createCollection('empleats');

db.client.insert( {
    nom: 'Montse',
    cognom: 'Pons', 
    cp: 07222,
    contacte:{ 
        telf: 666.000.000, 
        email: 'm@mail.com',
    },
    ubicacio:{
        localitat:{
            loc_id: 88,
            nom: 'Girona'
        },
        provincia: {
            pro_id: 99,  
            nom: 'Girona'
        }
    }

} );

db.client.insert( {
    nom: 'Marta',
    cognom: 'Palau', 
    cp: 08001,
    contacte:{ 
        telf: 935936666, 
        email: 'palau@mail.com',
    },
    ubicacio:{
        localitat:{
            loc_id: 999,
            nom: 'Barcelona'
        },
        provincia: {
            pro_id: 27,  
            nom: 'Barcelona'
        }
    }
        
} );

db.comanda.insert( {
    _id: 8855,
    dataHora: new Date("YYYY-mm-ddTHH:MM:ss"), 
    tipusComanda: {
        domicili: true
    },
    preu: 20,
    producte_id: 'PIZ',
    botiga_id: 'B7'
} );

db.comanda.insert( {
    _id: 9999,
    dataHora: new Date("YYYY-mm-ddTHH:MM:ss"), 
    tipusComanda: {
        domicili: false
    },
    preu: 48,
    product_id: 'HAMB',
    botiga_id: 'B9'
} );


db.producte.insert( {
    _id: 'PIZ',
    nom: 'Primavera',
    preu: 25,
    tipus:{
        categoriaPizza:{
            cat_id: 'PIZZAFORMATGE',
            nom_cat: 'Lactics'
        }
    },

} );

db.producte.insert( {
    _id: 'HAMB',
    nom: 'Cheese',
    preu: 20,
    tipus:{
        categoriaHamburg:{
            cat_id: 'HAMBURGUESACARN',
            nom_cat: 'Formatgeambcarn'
        }
    },

} );

db.botiga.insert( {
    _id: 'B8',
    adreça: {
        cp: 08099,
        localitat: 'Barcelona',
        provincia: 'Barcelona'
    },
    empl_id: 'E8'
} );

db.botiga.insert( {
    _id: 'B9',
    adreça: {
        cp: 07091,   
        localidad: 'Girona',
        province: 'Girona'
    },
    empl_id: 'E2',
    
} );

db.empl.insert( {
    _id: 'E2',
    dades:{
        nom: 'Pau',   
        cognom: 'Mateu',
        nif: '33333888',
        telf: 666699989
    },
    tipus: 'Cuiner'
} );

db.empl.insert( {
    _id: 'E1',
    dedes:{
        nom: 'Pere',   
        cognom: 'Mila',
        nif: '77888999',
        telf: 699111222
    },
    tipus: 'Repartidor'
} );
