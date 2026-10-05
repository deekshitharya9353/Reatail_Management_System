let orders = [];
let orderId = 1001;

function addOrder(){

    let customer =
    document.getElementById("customerName").value;

    let product =
    document.getElementById("productName").value;

    let quantity =
    document.getElementById("quantity").value;

    let date =
    document.getElementById("orderDate").value;

    if(customer==="" || product===""
        || quantity==="" || date==="")
    {
        alert("Please fill all fields");
        return;
    }

    orders.push({
        id: orderId++,
        customer: customer,
        product: product,
        quantity: quantity,
        date: date
    });

    displayOrders();

    document.getElementById("customerName").value="";
    document.getElementById("productName").value="";
    document.getElementById("quantity").value="";
    document.getElementById("orderDate").value="";
}

function displayOrders(){

    let tbody =
    document.getElementById("orderBody");

    tbody.innerHTML="";

    orders.forEach((order,index)=>{

        tbody.innerHTML += `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.date}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteOrder(${index})">
                Delete
                </button>
            </td>
        </tr>`;
    });
}

function deleteOrder(index){

    orders.splice(index,1);

    displayOrders();
}

function searchOrder(){

    let filter =
    document.getElementById("searchCustomer")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll("#orderBody tr");

    rows.forEach(row=>{

        let customer =
        row.cells[1].textContent.toLowerCase();

        if(customer.includes(filter))
            row.style.display="";
        else
            row.style.display="none";
    });
}

function filterByDate(){

    let selectedDate =
    document.getElementById("filterDate").value;

    let rows =
    document.querySelectorAll("#orderBody tr");

    rows.forEach(row=>{

        let rowDate = row.cells[4].textContent;

        if(selectedDate === "" ||
           rowDate === selectedDate)
        {
            row.style.display="";
        }
        else
        {
            row.style.display="none";
        }
    });
}