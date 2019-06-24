(function () {
    'use strict';

    // CONFIGURAÇÃO BOOTSTRAP DATE RANGE PICKER (PÁGINA AGENDA) //

    const languageVal = $('#languageValue');
    let dateLocale = false;

    if (languageVal.length > 0) {
        if (languageVal.val() === 'pt') {
            dateLocale = {
                daysOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                today: "Hoje",
                clear: "Limpar",
                format: "DD-MM-YYYY",
                titleFormat: "MM yyyy",
                weekStart: 0,
                "separator": " - ",
                "applyLabel": "Aplicar",
                "cancelLabel": "Cancelar",
                "fromLabel": "De",
                "toLabel": "Até",
            };

        }
    }

    $('input.daterange').daterangepicker({
        locale: dateLocale,
        startDate: false
    });

    $('input.daterange').val('');
    $('input.daterange').attr("placeholder", "Selecione um período");
})();