function generate() {
    var apiType = document.getElementById('API_Type').value;

    switch (apiType) {
        case 'APISaasSandbox':
            generateSaasSandbox();
            break;

        case 'APISaasProduction':
            generateSaasProduction();
            break;

        case 'APIOnPrem':
            generateOnPrem();
            break;

        default:
            break;
    }
}

function generateSaasSandbox() {
    addInput('base', 'Base URL:');
    addInput('tenant', 'Tenant:');
    addInput('environment', 'Environment:', 'Sandbox');
    addInput('publisher', 'Publisher:');
    addInput('group', 'Group:');
    addInput('verison', 'Verison:');
    addInput('company', 'Company:');
    addInput('endpoint', 'Endpoint:');
    addInput('url', 'API Url:');

    var url = ''

    // base.value = 'https://api.businesscentral.dynamics.com/v2.0';

    var url = document.getElementById('url_input');
    url.value = `${getInputValue('base')}/${getInputValue('tenant')}/${getInputValue('environment')}/api/${getInputValue('publisher')}/${getInputValue('group')}/${getInputValue('verison')}/companies(${getInputValue('company')})/${getInputValue('endpoint')}`;
    url.style.width = ((url.value.length + 1) * 8) + 'px';
}

function generateSaasProduction() {
    addInput('base', 'Base URL:');
    addInput('tenant', 'Tenant:');
    addInput('environment', 'Environment:', 'Production');
    addInput('publisher', 'Publisher:');
    addInput('group', 'Group:');
    addInput('verison', 'Verison:');
    addInput('company', 'Company:');
    addInput('endpoint', 'Endpoint:');
    addInput('url', 'API Url:');

    // base.value = 'https://api.businesscentral.dynamics.com/v2.0';
    // environment.value = 'Production';

    var url = document.getElementById('url_input');
    url.value = `${getInputValue('base')}/${getInputValue('tenant')}/${getInputValue('environment')}/api/${getInputValue('publisher')}/${getInputValue('group')}/${getInputValue('verison')}/companies(${getInputValue('company')})/${getInputValue('endpoint')}`;
    url.style.width = ((url.value.length + 1) * 8) + 'px';
}

function generateOnPrem() {
    addInput('baseUrl', 'Base URL:', 'https://');
    addInput('port', 'Port:');
    addInput('serverInstance', 'Server Instance:');
    addInput('publisher', 'Publisher:');
    addInput('group', 'Group:');
    addInput('version', 'Version:');
    addInput('company', 'Company:');
    addInput('endpoint', 'Endpoint:');
    addInput('url', 'API Url:');

    // base.value = 'https://';

    var url = document.getElementById('url_input');
    url.value = `${getInputValue('baseUrl')}:${getInputValue('port')}/${getInputValue('serverInstance')}/api/${getInputValue('publisher')}/${getInputValue('group')}/${getInputValue('version')}/companies(${getInputValue('company')})/${getInputValue('endpoint')}`;
    url.style.width = ((url.value.length + 1) * 8) + 'px';
}

function addInput(id, label, value = '') {
    if (document.getElementById(id)) return;

    var div = document.createElement('div');
    div.id = id;

    div.innerHTML =
        `<label id="${id}_label" for="${id}_input">${label} </label>` +
        `<input type="text" id="${id}_input" value="${value}" onchange="generate();"></br>`;

    document.getElementById('content').append(div);
}

function getInputValue(id) {
    return document.getElementById(id + '_input').value;
}

function clearAllFields() {
    document.getElementById('content').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', generate, false);