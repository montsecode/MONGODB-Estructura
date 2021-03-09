db.createCollection('proveidor');
db.createCollection('ulleres');
db.createCollection('client');


db.proveidor.insert( {
    nom: 'Cottet', 
    adreça:{
        carrer:'Pujades', 
        num: 8, 
        pis: 7, 
        porta: 5, 
        co: 08088, 
        pais: 'Spain'
    }, 
    dades_contacte:{
        telf: 93.555.666.666, 
        fax: 3333 , 
        nif: B0000000
    },
    marca_id: 'Vintage'
} );

db.proveidor.insert( {
    nom: 'Visionlab', 
    adreça:{
        carrer:'Cor', 
        num: 40, 
        pis: 4, 
        porta: 7, 
        cp: 08099, 
        pais: 'Spain'
    }, 
    contacte:{
        telf: 935558888, 
        fax: 2266, 
        nif: B9999999
    },
    marca_id: 'UlleresNewSun'
} );

db.ulleres.insert(  {
    marca: [ {marca_id: 'UlleresNewSun' } ], 
    graduacio_vidre: 8, 
    muntura_tipus: 'flotant', 
    color_muntura: 'blue', 
    color_vidre: 'verd', 
    preu: 150
} );

db.ulleres.insert(  {
    marca: [ {marca_id: 'Vintage'} ], 
    graduacio_vidre: 4, 
    muntura_tipus: 'pasta', 
    color_muntura:'vermell', 
    color_vidre: 'marro', 
    preu: 200
} );

db.client.insert( {
    nom: 'Montse', 
    adreça:{
        carrer:'AvgdaMar', 
        num:  2, 
        pis: 1, 
        porta: 1, 
        cp: 08088, 
        pais: 'Spain'
    },
    contacte:{ 
        telf: 666.666.666, 
        email: 'm@mil.com',
    }, 
    date: new Date(), 
    ref:01
    rec:02
} );

db.client.insert( {
    nom: 'Blas', 
    adreça:{
        carrer:'SeaSquare', 
        num:  9, 
        pis: 0, 
        porta: 1, 
        cp: 1020, 
        pais: 'Belgium'
    },
    contacte:{
        telf: +32.2.555.55.55, 
        email: 'b@mil.com'
    },
    date: new Date(), 
    ref: 02
    rec:01

} );


   

