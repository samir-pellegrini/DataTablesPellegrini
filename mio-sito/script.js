$(document).ready(function () {
    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "../index.php",
            "type": "POST"
        }, 
        "columns": [
            { "data": "id" },
            { "data": "birth_date" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "gender" },
            { "data": "hire_date" }
        ]
    });
});