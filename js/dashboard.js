console.log("rodando o java script");



const systemName = "Sistema de Controle de Manutenção";

let activeEquipments = 48;

let maintenanceEquipments = 5;

let preventiveMaintenance = 10;

console.log("Nome do Sistema:" + systemName);

console.info("Em Manutenção :" + maintenanceEquipments);


const equipments = [
    {
        id:1,
        name: "Compressor",
        location : "Oficina",
        status : "active",
        patrimoy : "12-PP"
    },
    {
        id:2,
        name: "Torno",
        location : "Oficina",
        status : "active",
        patrimoy : "1-PP"
    },
    {
        id:3,
        name: "Gerador",
        location : "Casa de Maquinas",
        status : "maintenance",
        patrimoy : "64-PP"
    }
];




const activeTotal = document.getElementById("activesTotal").textContent = activeEquipments;

const preventiveTotal = document.getElementById("preventivesTotal").textContent = preventiveMaintenance;

const maintenance = document.getElementById("maintenanceEquipmentsTotal");

const equipmentsTable = document.getElementById("equipmentsTable");

const searchInput = document.getElementById("searchInput");

const btnNewEquipament = document.getElementById("btnNewEquipment");

const modalElement = document.getElementById("equipmentModal");

const modal = new bootstrap.Modal(modalElement);

const btnSave = document.getElementById("btnSaveEquipment");



function dashboardRefresh() 
{
    const actives = equipments.filter(equipment => equipment.status === "active");

    const inMaintenance = equipments.filter(equipment => equipment.status === "maintenance").length;

    activeTotal.textContent = actives;
    maintenanceEquipmentsTotal.textContent = inMaintenance;

    console.log("Dashboard atualizado");
}

dashboardRefresh();


function equipmentsTableRender(list) 
{
    equipmentsTable.innerHTML = "";
    
    list.forEach(equipment => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${equipment.name}</td>
            <td>${equipment.location}</td>
            <td>${equipment.status}</td>
            <td><button class = "btn-danger" onclick = "equipmentDelete(${equipment.id})">Excluir</button>
            </td>
        `;

        equipmentsTable.appendChild(row);   
    });
}
equipmentsTableRender(equipments);


searchInput.addEventListener("input", function () {
    const term = searchInput.value.toLowerCase();

    const result = equipments.filter(equipment => equipment.name.toLocaleLowerCase().includes(term));

    equipmentsTableRender(result);
});


btnNewEquipament.addEventListener("click" , function () {
    modal.show();  
})

const equipmentName = document.getElementById("equipmentName");

btnSave.addEventListener("click",function ()
{
    if (equipmentName.value.trim() === "") {
        console.warn("Nome d equipamento não informado");
        alert("Informe o nome do equipamento.");
        return;
    }  
    
    const newEquipment = {
        id : equipments.length + 1,
        name: equipmentName.value,
        location : "Não Informador",
        status : "active",
        patrimoy: `${String(equipments.length + 1).padStart(3, "0")}-PP`
    }

    equipments.push(newEquipment);
    equipmentsTableRender(equipments);
    dashboardRefresh();

    modal.hide();
    equipmentName.value = "";
})

function equipmentDelete(id) 
{
    const index = equipments.findIndex(equipment => equipment.id === id);
    if (index === 1) 
    {
        console.error("Equipamento não encontrador:", id);
        return;    
    }   
    equipments.splice(index,1);
    equipmentsTableRender(equipments);
    dashboardRefresh();

    console.log("Equipamento removido",id);
}