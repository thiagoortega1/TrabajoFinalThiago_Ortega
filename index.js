document.addEventListener("DOMContentLoaded", function() {
    
    const logros = [
        "8 Balones de Oro",
        "4 Champions League",
        "2 Copa América",
        "1 Mundial de Clubes",
        "1 Copa del Mundo FIFA",
        "800+ goles en su carrera"
    ];

    
    const logrosContainer = document.querySelector("#logros ul");

    
    logrosContainer.innerHTML = "";

    
    for (let i = 0; i < logros.length; i++) {
        const listItem = document.createElement("li"); 
        listItem.innerHTML = `<strong>${logros[i]}</strong>`; 
        logrosContainer.appendChild(listItem); 
    }

    
    const mensajeLogros = document.createElement("p");
    mensajeLogros.innerHTML = `Lionel Messi ha alcanzado los siguientes logros a lo largo de su carrera.`;
    document.querySelector("#logros").insertBefore(mensajeLogros, logrosContainer);

    
    const galleryImages = document.querySelectorAll("#galeria .gallery img");

    galleryImages.forEach(function(image, index) {
        image.addEventListener("click", function() {
            alert(`Imagen ${index + 1} de la galería clickeada.`);
        });
    });

    
    const estadisticas = {
        edad: 37,
        golesEnClubes: 737,
        golesEnSeleccion: 112,
        partidosJugados: 1077,
        partidosTitular: 800,
        clubActual: "Inter Miami",
        titulosGanados: 2
    };

    const estadisticasContainer = document.querySelector("#estadisticas .stats");

    
    estadisticasContainer.innerHTML = "";

    
    for (let key in estadisticas) {
        const statDiv = document.createElement("div");
        const statTitle = document.createElement("h3");
        const statValue = document.createElement("p");
        statTitle.innerText = key.replace(/([A-Z])/g, ' $1').toUpperCase(); 
        statValue.innerText = estadisticas[key];
        statDiv.appendChild(statTitle);
        statDiv.appendChild(statValue);
        estadisticasContainer.appendChild(statDiv);
    }

    
    function mostrarBiografia() {
        const biografiaContainer = document.querySelector("#biografia p");
        biografiaContainer.innerHTML = `
            <strong>Lionel Messi</strong> nació en Rosario, Argentina, en 1987. Desde joven mostró un talento excepcional para el fútbol y, con el paso de los años, se convirtió en uno de los mejores jugadores de la historia. Comenzó su carrera profesional en el <strong>FC Barcelona</strong> y más tarde continuó su trayectoria en el <strong>París Saint-Germain</strong> y el <strong>Inter Miami</strong>.
        `;
    }

    
    mostrarBiografia();
});

document.addEventListener("DOMContentLoaded", function() {
    
    const showInfanciaBtn = document.getElementById("showInfanciaBtn");
    const popup = document.getElementById("infanciaPopup");
    const closePopup = document.getElementById("closePopup");

    
    showInfanciaBtn.addEventListener("click", function() {
        popup.style.display = "block"; 
    });

    
    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const showSeleccionBtn = document.getElementById("showSeleccionBtn");
    const popup = document.getElementById("sSeleccionPopup");
    const closePopup = document.getElementById("closePopup");

    
    showSeleccionBtn.addEventListener("click", function() {
        popup.style.display = "block"; 
    });

    
    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"; 
        }
    });
});