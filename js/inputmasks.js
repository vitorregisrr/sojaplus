(function () {
    'use strict';

    $('input.daterange').daterangepicker({
        locale: {
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
        },
        startDate: false

    });

    $('input.daterange').val('');
    $('input.daterange').attr("placeholder","Selecione um período");
})();