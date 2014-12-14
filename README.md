SwitchButton
==============

A small (inline) switch with textlabels that replaces a checkbox. Mainly written in CSS and brought together in a lightweight jQuery plugin. For an example visit <a href="http://svmdevelopment.github.io/SwitchButton/">the demo page</a>.


<strong>How to use:</strong>

Just include jQuery, the jQuery plugin and the CSS file.
Then apply the plugin to one or more checkboxes on your webpage:

<code>$("#myCheckbox").SwitchCheckbox();</code>

By using the checked-attribute in the input-tag of the checkbox you can set the position of the switch.


<strong>Options:</strong>

You can use the following options in this plugin:
<table>
<tr><th>Name</th><th>Type</th><th>Values</th><th>Default</th><th>Description</th></tr>
<tr><td><code>type</code></td><td>String</td><td><code>round</code> or something else</td><td><code>round</code></td><td>The style of your switch: either a small round (inline) switch or a bigger switch</td></tr>
<tr><td><code>onLabel</code></td><td>String</td><td>-</td><td><code>ON</code></td><td>The label highlighted when checked</td></tr>
<tr><td><code>offLabel</code></td><td>String</td><td>-</td><td><code>OFF</code></td><td>The label highlighted when unchecked</td></tr>
<tr><td><code>onComplete</code></td><td>Function</td><td>-</td><td>None</td><td>A function to be executed each times the switch is triggered</td></tr>
</table>
Example: <code>$("#myCheckbox").SwitchCheckbox({onLabel: 'YES', offLabel: 'NO', onComplete: callbackFunction });</code>
