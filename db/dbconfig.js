module.exports={ 
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'password',
    DB:'testing1',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        accquire:30000,
        idle:10000
    }
};