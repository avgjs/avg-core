import ErrorHandler from './ErrorHandler';

import MoveByAction from './Actions/MoveByAction';
import MoveToAction from './Actions/MoveToAction';
import FadeToAction from './Actions/FadeToAction';
import ScaleByAction from './Actions/ScaleByAction';
import ScaleToAction from './Actions/ScaleToAction';
import RotateByAction from './Actions/RotateByAction';
import RotateToAction from './Actions/RotateToAction';
import DelayAction from './Actions/DelayAction';
import RemoveAction from './Actions/RemoveAction';
import VisibleAction from './Actions/VisibleAction';
import TintToAction from './Actions/TintToAction';

let Action = {
	MoveByAction: MoveByAction,
	MoveToAction: MoveToAction,
	FadeToAction: FadeToAction,
	ScaleByAction: ScaleByAction,
	ScaleToAction: ScaleToAction,
	RotateByAction: RotateByAction,
	RotateToAction: RotateToAction,
	DelayAction: DelayAction,
	RemoveAction: RemoveAction,
	VisibleAction: VisibleAction,
	TintToAction: TintToAction
}

export default Action;



