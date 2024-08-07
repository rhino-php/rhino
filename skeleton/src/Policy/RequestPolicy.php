<?php

namespace App\Policy;

use Authorization\Policy\RequestPolicyInterface;
use Cake\Http\ServerRequest;
use Authorization\IdentityInterface;
use Authorization\Policy\ResultInterface;

class RequestPolicy implements RequestPolicyInterface {
	/**
	 * Method to check if the request can be accessed
	 *
	 * @param \Authorization\IdentityInterface|null $identity Identity
	 * @param \Cake\Http\ServerRequest $request Server Request
	 * @return bool
	 */
	public function canAccess(?IdentityInterface $identity, ServerRequest $request): bool|ResultInterface {

		if ($request->getParam('plugin') === "Rhino" || $request->getParam('prefix') == 'RhinoApp') {
			if (empty($identity)) {
				if ($request->getParam('controller') !== "Users") {
					return false;
				}

				$action = $request->getParam('action');
				return $action === "login" || $action === "new";
			}

			return $identity->getOriginalData()->getSource() === "Rhino.Users";
		}

		return true;
	}
}
