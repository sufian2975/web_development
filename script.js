document.addEventListener("DOMContentLoaded", function () {
    // -----Trip 
    if (window.location.pathname.includes("trip.html")) {
        document.getElementById("add-trip").addEventListener("click", function () {
            let tripName = document.getElementById("trip-name").value;
            let startDate = document.getElementById("start-date").value;
            let endDate = document.getElementById("end-date").value;
            let duration = document.getElementById("duration").value;
            let people = document.getElementById("people").value;

            if (!tripName || !startDate || !endDate || !people) {
                alert("Fill all the fields!");
                return;
            }

            addTrip(tripName, startDate, endDate, duration, people);
            clearForm();
        });

        function addTrip(name, start, end, duration, people) {
            const tripList = document.getElementById("trip-table");
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const dateCell = document.createElement("td");
            dateCell.textContent = `${start} to ${end}`;
            row.appendChild(dateCell);

            const durationCell = document.createElement("td");
            durationCell.textContent = `${duration} day(s)`;
            row.appendChild(durationCell);

            const peopleCell = document.createElement("td");
            peopleCell.textContent = people;
            row.appendChild(peopleCell);

            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", function () {
                deleteTrip(row);
            });

            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            tripList.appendChild(row);
        }

        function deleteTrip(row) {
            row.remove();
        }

        function clearForm() {
            document.getElementById("trip-name").value = "";
            document.getElementById("start-date").value = "";
            document.getElementById("end-date").value = "";
            document.getElementById("duration").value = "";
            document.getElementById("people").value = "";
        }

        document.getElementById("end-date").addEventListener("change", function () {
            let startDate = new Date(document.getElementById("start-date").value);
            let endDate = new Date(document.getElementById("end-date").value);

            if (startDate && endDate) {
                let timeDiff = endDate - startDate;
                let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                document.getElementById("duration").value = dayDiff;
            }
        });
    }

    // -----expense 
    if (window.location.pathname.includes("expense.html")) {
        document.getElementById("budget-form").addEventListener("submit", function (e) {
            e.preventDefault();

            const expenseName = document.getElementById("name").value;
            const expenseAmount = parseFloat(document.getElementById("amount").value) || 0;
            const expenseCategory = document.getElementById("category").value;
            const expenseDate = document.getElementById("date").value;

            if (!expenseName || expenseAmount <= 0 || !expenseCategory || !expenseDate) {
                alert("Fill all the fields!");
                return;
            }

            addExpense(expenseName, expenseAmount, expenseCategory, expenseDate);
            clearForm();
        });

        function addExpense(name, amount, category, date) {
            const expenseList = document.getElementById("expense-table");
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const amountCell = document.createElement("td");
            amountCell.textContent = `${amount.toFixed(2)} BDT`;
            row.appendChild(amountCell);

            const categoryCell = document.createElement("td");
            categoryCell.textContent = category;
            row.appendChild(categoryCell);

            const dateCell = document.createElement("td");
            dateCell.textContent = date;
            row.appendChild(dateCell);

            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", function () {
                deleteExpense(row, amount);
            });

            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            expenseList.appendChild(row);
            updateTotal(amount);
        }

        function deleteExpense(row, amount) {
            row.remove();
            updateTotal(-amount);
        }

        function updateTotal(amount) {
            const totalAmount = document.getElementById("total");
            const currentTotal = parseFloat(totalAmount.textContent) || 0;
            totalAmount.textContent = (currentTotal + amount).toFixed(2);
        }

        function clearForm() {
            document.getElementById("name").value = "";
            document.getElementById("amount").value = "";
            document.getElementById("category").value = "";
            document.getElementById("date").value = "";
        }
    }


    // -----bucket 
    if (window.location.pathname.includes("bucket.html")) {
        document.getElementById("bucket-form").addEventListener("submit", function (e) {
            e.preventDefault();

            const tripName = document.getElementById("newTrip").value.trim();
            const tripTag = document.getElementById("category").value;


            if (!tripName || !tripTag) {
                alert("Fill all the fields!");
                return;
            }


            addTrip(tripName, tripTag);
            clearForm();
        });

        function addTrip(name, tag) {
            const bucketTable = document.getElementById("bucket-table");
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const tagCell = document.createElement("td");
            tagCell.textContent = tag;
            row.appendChild(tagCell);

            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", function () {
                deleteTrip(row);
            });

            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            bucketTable.appendChild(row);
        }

        function deleteTrip(row) {
            row.remove();
        }

        function clearForm() {
            document.getElementById("newTrip").value = "";
            document.getElementById("category").value = "";
        }
    }

    // map-------
    if (window.location.pathname.includes("map.html")) {
        var map = L.map('map').setView([22.3569, 91.7832], 10);


        var mapTile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        mapTile.addTo(map);

    } 
});