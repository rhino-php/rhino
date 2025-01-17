<?php
declare(strict_types=1);

namespace Rhino\Model\Entity;

use Cake\ORM\Entity;

/**
 * Widget Entity
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property string|null $template
 * @property int|null $widget_category_id
 * @property int|null $position
 * @property \Cake\I18n\DateTime|null $created
 * @property \Cake\I18n\DateTime|null $modified
 */
class Widget extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array<string, bool>
     */
    protected array $_accessible = [
        'name' => true,
        'description' => true,
        'template' => true,
        'widget_category_id' => true,
        'position' => true,
        'created' => true,
        'modified' => true,
    ];
}
