console.log("rodando o java script");



const systemName = "Sistema de Controle de Manutenção";

//let activeEquipaments = 48;

let maintenanceEquipaments = 5;

//let preventiveMaintenance = 10;

console.log("Nome do Sistema:" + systemName);

console.info("Em Manutenção :" + maintenanceEquipaments);


const equipaments = [
    {
        id:1,
        name: "Compressor",
        local : "Oficina",
        status : true ,
        patrimoy : "12-PP"
    },
    {
        id:2,
        name: "Torno",
        local : "Oficina",
        status : true ,
        patrimoy : "1-PP"
    },
    {
        id:3,
        name: "Gerador",
        local : "Casa de Maquinas",
        status : false ,
        patrimoy : "64-PP"
    }
];




const activeTotal = document.getElementById(activesTotal);

const preventiveTotal = document.getElementById(preventivesTotal);



console.log(activeTotal);

console.log(preventiveTotal);