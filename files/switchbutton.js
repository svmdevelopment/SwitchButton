/*/
 * 
 * Original by http://cssdeck.com/labs/a-simple-css-switch
 * Modified and brought to a jQuery Plugin by Stefan van Mierlo
 * 
 * MIT License
 * 
/*/

(function ($)
{

    $.fn.SwitchCheckbox = function (options)
    {

        var settings = $.extend({
            type: 'round',
            onLabel: 'ON',
            offLabel: 'OFF',
            onComplete: function () { }
        }, options);

        return $(this).filter('input[type="checkbox"]').each(function (e)
        {

            $(this).css('display', 'none');

            if ($(this).is(':checked'))
            {
                label = ['SwitchLabelOff', 'On', 'SwitchLabelOn'];
            } else
            {
                label = ['SwitchLabelOn', 'Off', 'SwitchLabelOff'];
            }

            if (settings.type == 'round')
            {
                $(this).after('<span class="' + label[0] + '">' + settings.onLabel + '</span><div class="Switch Round ' + label[1] + '"><div class="Toggle"></div></div><span class="' + label[2] + '">' + settings.offLabel + '</span>');
            } else
            {
                $(this).after('<div class="Switch ' + label[1] + '"><div class="Toggle"></div><span class="' + label[0] + ' Off">' + settings.onLabel + '</span><span class="' + label[2] + ' On">' + settings.offLabel + '</span></div>');
            }
				
			$(this).nextAll('.Switch').filter(':first').on('click',function ()
			{
				$(this).toggleClass('On').toggleClass('Off');
				$(this).prev('span').toggleClass('SwitchLabelOn').toggleClass('SwitchLabelOff');
				$(this).next('span').toggleClass('SwitchLabelOn').toggleClass('SwitchLabelOff');

				SwitchBox = $(this).prevAll('input[type="checkbox"]').filter(':last');
				SwitchBox.prop('checked', !SwitchBox.prop('checked'));

				if (typeof (settings.onComplete) === "function")
				{
					settings.onComplete.call(this);
				}
			});

        });
    };


})(jQuery);
