QueweryTest = TestCase('QueweryTest');

QueweryTest.prototype.testIdSelector = function()
{
    jstestdriver.jQuery(document.body).html('<div id="myid"></div>');

    assertEquals(Quewery('#myid').length, 1);
};

QueweryTest.prototype.testQsa = function()
{
    jstestdriver.jQuery(document.body).html('<div id="myid"></div>');

    assertEquals(Quewery('body > #myid').length, 1);
};

QueweryTest.prototype.testNoConflict = function()
{
    jstestdriver.jQuery(document.body).html('<div id="myid"></div>');
    assertEquals(Quewery('#myid').length, 1);

    // set a pre-existing Quewery variable in testBootstrap.js
    var myQuewery = Quewery.noConflict();
    assertEquals(Quewery, 'myCustomString');
    assertEquals(myQuewery('#myid').length, 1);
};
