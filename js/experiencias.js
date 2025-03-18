
document.addEventListener("DOMContentLoaded", function () {
    var html = '';
    for(var i = 0; i < 4; i++) {
        var par = i%2;
        html += `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
                <div class="timeline-date" data-i18n="experience.jobs.${i}.period"></div>
                <div class="content ${par ? 'top': 'bottom'}">
                <span class="timeline-company" data-i18n="experience.jobs.${i}.company"></span>
                <h3 data-i18n="experience.jobs.${i}.role"></h3>
                <p data-i18n="experience.jobs.${i}.details"></p>
            </div>
        </div>`;
    }

    const container = document.getElementById("experience-container");
    container.innerHTML = html;
})