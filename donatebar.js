
        // Events will be sent when someone followers
        // Please use event listeners to run functions.
        document.addEventListener('goalLoad', function(obj) {
        // obj.detail will contain information about the current goal
        // this will fire only once when the widget loads
        console.log(obj.detail);
        $('#title').html(obj.detail.title);
        $('#goal-current').text(obj.detail.amount.current);
        $('#goal-total').text(obj.detail.amount.target);
        $('#goal-end-date').text(obj.detail.to_go.ends_at);
        });
        document.addEventListener('goalEvent', function(obj) {
        // obj.detail will contain information about the goal
        console.log(obj.detail);
        $('#goal-current').text(obj.detail.amount.current);
        });document.addEventListener('goalLoad', function(obj) {
  $('#title').html(obj.detail.titel);
  $('#goal-total').text(obj.detail.amount.target);
  $('#goal-end-date').text(obj.detail.to_go.ends_at);
  $('#goal-current').text(obj.detail.amount.current);
  var total = $('#goal-total').html(),
      current = $('#goal-current').html();
 	$('#total-bar').css('width', current / total * 100 + '%').css('width', '-=8px');
  $('#goal-total').text(obj.detail.amount.target/ total * 100 + '%');
  $('#goal-current').text((obj.detail.amount.current / total * 100).toFixed(2) + '%');
});

document.addEventListener('goalEvent', function(obj) {
  $('#goal-total').text(obj.detail.amount.target);
  $('#goal-current').text(obj.detail.amount.current);
  var total = $('#goal-total').html(),
      current = $('#goal-current').html();
	$('#total-bar').css('width', current / total * 100 + '%').css('width', '-=8px');
  $('#goal-total').text(obj.detail.amount.target/ total * 100 + '%');
  $('#goal-current').text((obj.detail.amount.current/ total * 100).toFixed(2) + '%');
});

