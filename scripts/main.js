function generate() {
    var tenant = document.getElementById('tenant').value;
    var environment = document.getElementById('environment').value;
    var publisher = document.getElementById('publisher').value;
    var group = document.getElementById('group').value;
    var verison = document.getElementById('verison').value;
    var company = document.getElementById('company').value;
    var endpoint = document.getElementById('endpoint').value;

    var url = document.getElementById('URL');
    url.value = `https://api.businesscentral.dynamics.com/v2.0/${tenant}/${environment}/api/${publisher}/${group}/${verison}/companies(${company})/${endpoint}`;
    url.style.width = ((url.value.length + 1) * 8) + 'px';

}