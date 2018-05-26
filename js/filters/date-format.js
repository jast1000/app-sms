Vue.filter('date-format', function (value) {
    return moment(value).format('DD/MM/YYYY h:mm:ss a');
});