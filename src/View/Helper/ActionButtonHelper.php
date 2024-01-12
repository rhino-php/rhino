<?php
declare(strict_types=1);

/* src/View/Helpelr/ActionButtonHelper.php */

namespace Rhino\View\Helper;

use Cake\View\Helper;

class ActionButtonHelper extends Helper {


    /**
     * Other Helpers
     */
    protected array $helpers = [
        'Rhino', 
        'Form', 
        'Html', 
        'Icon'
    ]; 


    public function ActionArea(array $actions) : string {
        return $this->_View->element('action-area', compact('actions'));
    }

    /**
     * Generate a link styled as a button with icon 
     *
     * @param string|null $iconName     Optional: The name of the icon to use (@see https://feathericons.com/, prepend with `Rhino.xxx`
     * @param string|null $labelText    Optional: The text to use for the label
     * @param string|array $url         The link's target: Either an Array (@see CakePHP) or a string: URL
     * @param array $options             Params passed to `Cake\View\Helper\HtmlHelper::link()`
     */
    public function link(string|null $iconName = null, string|null $labelText = null, string|array $url, array $options = []) : string {
        $options = array_merge([
            'escape' => false,
            'title' => $labelText,
            'class' => 'button'
        ], $options);

        $label = '';
        if (!empty($iconName)) {
            $label .= $this->Icon->svg($iconName);
        }
        if (!empty($labelText)) {
            $label .= ' ' . $this->Html->tag('span', $labelText);
        }

        return $this->Html->link($label, $url, $options);
    }



    /**
     * Generate a "post link" styled as a button with icon. A "post link" is
     * technically a button wrapped by a <form> Element, so that the target of
     * the link will be called with a POST request (and will not be triggered by
     * f.e. web crawlers etc.)
     *
     * @param string|null $iconName     Optional: The name of the icon to use (@see https://feathericons.com/, prepend with `Rhino.xxx`
     * @param string|null $labelText    Optional: The text to use for the label
     * @param string|array $url         The link's target: Either an Array (@see CakePHP) or a string: URL
     * @param array $options             Params passed to `Rhino\View\Helper\RhinoHelper::post()`
     */
    public function postLink(string|null $iconName = null, string|null $labelText = null, string|array $url, array $options = []) : string {
        $options = array_merge([
            'escape' => false,
            'title' => $labelText,
            'class' => 'button'
        ], $options);

        $label = '';
        if (!empty($iconName)) {
            $label .= $this->Icon->svg($iconName);
        }
        if (!empty($labelText)) {
            $label .= ' ' . $this->Html->tag('span', $labelText);
        }

        return $this->Rhino->post($label, $url, $options);
    }


    /**
     * Generate a button with icon. 
     *
     * @param string|null $iconName     Optional: The name of the icon to use (@see https://feathericons.com/, prepend with `Rhino.xxx`
     * @param string|null $labelText    Optional: The text to use for the label
     * @param array $options             Params passed to `Cake\View\Helper\FormHelper::button()`
     */
    public function button(string|null $iconName = null, string|null $labelText = null, array $options = []) : string {
        $options = array_merge([
            'escape' => false,
            'title' => $labelText,
            'class' => 'button'
        ], $options);

        $label = '';
        if (!empty($iconName)) {
            $label .= $this->Icon->svg($iconName);
        }
        if (!empty($labelText)) {
            $label .= ' ' . $this->Html->tag('span', $labelText);
        }

        return $this->Form->button($label, $options);
    }
}
