<section>
    <h1><?= $data->alias; ?> <code><?= $data->name; ?></code></h1>
    <table>
        <?php foreach ($data->fields as $field): ?>
            <tr>
                <td><?= $field->name; ?></td>
                <td><?= $field->alias; ?></td>
                <td><?= $field->type; ?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <?php echo $this->ActionButton->ActionArea([
        $this->ActionButton->link('Rhino.arrow-left', __('Back'), ['action' => 'index']),
        $this->ActionButton->link('Rhino.arrow-right', __('Somewhere else'), 'https://www.example.com'),
    ]); ?>
</section>
