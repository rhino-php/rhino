# Rhino plugin for CakePHP

## Quick Start:

```
composer require rhino-php/rhino
```





## Installation

You can install this plugin into your CakePHP application using [composer](https://getcomposer.org).
The recommended way to install composer packages is:

```
composer require rhino-php/rhino
```

(optional)
after the Plugin is installed and the Application is connected to the Database, you can run the following in the root of the Application:

```
cp -aR vendor/coullc/rhino/skeleton/. .
bin/cake migrations migrate -p Rhino
bin/cake migrations seed -p Rhino
```

Create the File `PagesController.php` and add the following:
```php
namespace App\Controller;

use Rhino\Controller\PagesController as BaseController;

class PagesController extends BaseController {
	public function layout(int $id) {
		// add Policy or other configuration
		parent::layout($id);
	}
}
```

Access the Layout options through `/pages`

!Important
To Use the Layoutmode you need to enable the `CakeHtmx` plugin.

---

## Development

See [rhino](https://github.com/Tyqo/rhino).
Clone Rhino, then Clone Rhino in the Plugins folder.

[mokup](https://xd.adobe.com/view/ee0ba304-8907-40aa-918f-b787c5dc5926-bb58/screen/a86c465f-e104-44b2-aea7-96f0ec6d08a2/specs/)

### Next Up: Layoutmode Enhancment

Currently there is only an HTML input field.
Depending on the Layoutelement the displayed input fields should update.

Also, after en Edit, the newly loaded element is not page aware.
