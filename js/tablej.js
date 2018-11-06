 $(document).ready(function () {
   var table = $('#example1').DataTable({
    "data": testdata1.data,
    select:"single",
    "columns": [
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": '',
            "render": function () {
                return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
            },
            width:"15px"
        },
        { "data": "Select" },
        { "data": "CRN" },
        { "data": "Subj" },
        { "data": "Crse" },
        { "data": "Title" }
    ],
    "order": [[1, 'asc']]
});



// Add event listener for opening and closing details
$('#example1 tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var tdi = tr.find("i.fa");
    var row = table.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
        tdi.first().removeClass('fa-minus-square');
        tdi.first().addClass('fa-plus-square');
    }
    else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
        tdi.first().removeClass('fa-plus-square');
        tdi.first().addClass('fa-minus-square');
    }
});

table.on("user-select", function (e, dt, type, cell, originalEvent) {
    if ($(cell.node()).hasClass("details-control")) {
        e.preventDefault();
    }
});
});
