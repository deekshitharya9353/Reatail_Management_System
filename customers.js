let customers = [];
let customerId = 1;

function addCustomer(){

    let name =
    document.getElementById("customerName").value;

    let phone =
    document.getElementById("customerPhone").value;

    let email =
    document.getElementById("customerEmail").value;

    if(name === "" || phone === "" || email === ""){
        alert("Please fill all fields");
        return;
    }

    customers.push({
        id: customerId++,
        name: name,
        phone: phone,
        email: email
    });

    displayCustomers();

    document.getElementById("customerName").value="";
    document.getElementById("customerPhone").value="";
    document.getElementById("customerEmail").value="";
}

function displayCustomers(){

    let tbody =
    document.getElementById("customerBody");

    tbody.innerHTML="";

    customers.forEach((customer,index)=>{

        tbody.innerHTML += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteCustomer(${index})">
                Delete
                </button>
            </td>
        </tr>`;
    });
}

function deleteCustomer(index){

    customers.splice(index,1);

    displayCustomers();
}

function searchCustomer(){

    let filter =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll("#customerBody tr");

    rows.forEach(row=>{

        let name =
        row.cells[1].textContent.toLowerCase();

        if(name.includes(filter))
            row.style.display="";
        else
            row.style.display="none";
    });
}