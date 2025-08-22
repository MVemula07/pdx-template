try {
  var currentTabIndex = sessionStorage.getItem('fhir-resource-tab-index');
} catch(exception) {
}

if (!currentTabIndex)
  currentTabIndex = '0';

$('#tabs').tabs({
  active: parseInt(currentTabIndex),
  activate: function(event, ui) {
    var active = ui.newTab.index();
    currentTabIndex = active;
    document.activeElement.blur();
    try {
      sessionStorage.setItem('fhir-resource-tab-index', currentTabIndex);
    } catch(exception) {
    }
  }
});
