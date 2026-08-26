console.log("rodando o java script");



const systemName = "Sistema de Controle de Manutenção";

let activeEquipaments = 48;

let maintenanceEquipaments = 5;

let preventiveMaintenance = 10;

console.log("Nome do Sistema:" + systemName);

console.info("Em Manutenção :" + maintenanceEquipaments);


const equipaments = [
    {
        id:1,
        name: "Compressor",
        location : "Oficina",
        status : "Ativo",
        patrimoy : "12-PP"
    },
    {
        id:2,
        name: "Torno",
        location : "Oficina",
        status : "Ativo",
        patrimoy : "1-PP"
    },
    {
        id:3,
        name: "Gerador",
        location : "Casa de Maquinas",
        status : "Manutenção",
        patrimoy : "64-PP"
    }
];




const activeTotal = document.getElementById("activesTotal").textContent = activeEquipaments;

const preventiveTotal = document.getElementById("preventivesTotal").textContent = preventiveMaintenance;



async function renderEquipaments() 
{
    const tbody = document.getElementById("equipaments");
  

    for (const element of equipaments) 
    {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = element.name;

        const tdLocation = document.createElement("td");
        tdLocation.textContent = element.location;

        const tdStatus = document.createElement("td");
        tdStatus.textContent = element.status;

        tr.appendChild(tdName);
        tr.appendChild(tdLocation);
        tr.appendChild(tdStatus);

        tbody.appendChild(tr);
    }
    

}

async function iniciar() {
  await renderEquipaments();
}

iniciar();