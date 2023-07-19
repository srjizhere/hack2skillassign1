// app.js
const fetchData = async () => {
  try {
    const response = await fetch("https://wild-lime-gorilla-boot.cyclic.app/fetchdata");
    const data = await response.json();

    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.team_name}</td>
        <td>${item.full_name}</td>
        <td>${item.email}</td>
        <td>${item.number}</td>
        <td>${item.city}</td>
        <td>${item.url}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchDataBtn = document.getElementById("fetch-data-btn");
fetchDataBtn.addEventListener("click", fetchData); // Trigger fetchData function when the button is clicked


