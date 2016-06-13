$(function(){
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'autoScrolling':false,
    'resize':false,
    'scrollOverflow':true,
    'slidesNavigation':true,
    'controlArrows':false,
    'css3':true,
    'scrollOverflow':true,
    anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
    menu: '#menu',
    'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple']
  })
})
