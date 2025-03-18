



document.addEventListener("DOMContentLoaded", function () {
    var html = '';
    for(var i = 0; i < 4; i++) {
      html += `
        <div class="col-md-6">
            <div class="card bg-dark text-white p-3 mb-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-university fa-3x me-3 text-primary"></i>
                    <div>
                        <h4 data-i18n="education.list.${i}.course">MBA em Arquitetura de Soluções</h4>
                        <p class="text-muted" data-i18n="education.list.${i}.institution">FIAP (Período de realização)</p>
                        <p data-i18n="education.list.${i}.details">Foco em arquitetura, escalabilidade, microserviços, cloud computing e DevOps, capacitando para soluções robustas alinhadas ao mercado.</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }

    const container = document.getElementById("education-container");
    container.innerHTML = html;
});