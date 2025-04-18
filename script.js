document.addEventListener("DOMContentLoaded", () => {
    const comboBox = document.getElementById("comboBox");
  
    fetch("options.txt")
      .then(response => response.text())
      .then(text => {
        const options = text.split('\n').filter(line => line.trim() !== '');
        comboBox.innerHTML = ''; // limpiar opciones anteriores
        options.forEach(option => {
          const opt = document.createElement("option");
          opt.value = option.trim();
          opt.textContent = option.trim();
          comboBox.appendChild(opt);
        });
      })
      .catch(error => {
        console.error("Error cargando opciones:", error);
        comboBox.innerHTML = '<option>Error cargando opciones</option>';
      });
  });
  