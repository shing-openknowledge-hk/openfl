package openfl.events;

#if (display || !flash)
import openfl.display.InteractiveObject;

@:jsRequire("openfl/events/MouseEvent", "default")

/**
 * A MouseEvent object is dispatched into the event flow whenever mouse events
 * occur. A mouse event is usually generated by a user input device, such as a
 * mouse or a trackball, that uses a pointer.
 *
 * When nested nodes are involved, mouse events target the deepest possible
 * nested node that is visible in the display list. This node is called the
 * _target node_. To have a target node's ancestor receive notification
 * of a mouse event, use `EventDispatcher.addEventListener()` on
 * the ancestor node with the `type` parameter set to the specific
 * mouse event you want to detect.
 *
 */
extern class MouseEvent extends Event
{
	/**
	 * Defines the value of the `type` property of a
	 * `click` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var CLICK = "click";

	#if flash
	@:noCompletion @:dox(hide) @:require(flash11_2) public static var CONTEXT_MENU:String;
	#end

	/**
	 * Defines the value of the `type` property of a
	 * `doubleClick` event object. The `doubleClickEnabled`
	 * property must be `true` for an object to generate the
	 * `doubleClick` event.
	 *
	 * This event has the following properties:
	 */
	public static inline var DOUBLE_CLICK = "doubleClick";

	/**
	 * Defines the value of the `type` property of a
	 * `middleClick` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MIDDLE_CLICK = "middleClick";

	/**
	 * Defines the value of the `type` property of a
	 * `middleMouseDown` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MIDDLE_MOUSE_DOWN = "middleMouseDown";

	/**
	 * Defines the value of the `type` property of a
	 * `middleMouseUp` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MIDDLE_MOUSE_UP = "middleMouseUp";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseDown` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_DOWN = "mouseDown";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseMove` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_MOVE = "mouseMove";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseOut` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_OUT = "mouseOut";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseOver` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_OVER = "mouseOver";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseUp` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_UP = "mouseUp";

	/**
	 * Defines the value of the `type` property of a
	 * `mouseWheel` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var MOUSE_WHEEL = "mouseWheel";

	/**
	 * Defines the value of the `type` property of a
	 * `releaseOutside` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var RELEASE_OUTSIDE = "releaseOutside";

	/**
	 * Defines the value of the `type` property of a
	 * `rightClick` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var RIGHT_CLICK = "rightClick";

	/**
	 * Defines the value of the `type` property of a
	 * `rightMouseDown` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var RIGHT_MOUSE_DOWN = "rightMouseDown";

	/**
	 * Defines the value of the `type` property of a
	 * `rightMouseUp` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var RIGHT_MOUSE_UP = "rightMouseUp";

	/**
	 * Defines the value of the `type` property of a
	 * `rollOut` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var ROLL_OUT = "rollOut";

	/**
	 * Defines the value of the `type` property of a
	 * `rollOver` event object.
	 *
	 * This event has the following properties:
	 */
	public static inline var ROLL_OVER = "rollOver";

	/**
	 * Indicates whether the Alt key is active(`true`) or inactive
	 * (`false`). Supported for Windows only. On other operating
	 * systems, this property is always set to `false`.
	 */
	public var altKey:Bool;

	/**
	 * Indicates whether the primary mouse button is pressed(`true`)
	 * or not(`false`).
	 */
	public var buttonDown:Bool;

	public var clickCount:Int;
	public var commandKey:Bool;

	/**
	 * On Windows or Linux, indicates whether the Ctrl key is active
	 * (`true`) or inactive(`false`). On Macintosh,
	 * indicates whether either the Control key or the Command key is activated.
	 */
	public var ctrlKey:Bool;

	/**
	 * Indicates how many lines should be scrolled for each unit the user rotates
	 * the mouse wheel. A positive delta value indicates an upward scroll; a
	 * negative value indicates a downward scroll. Typical values are 1 to 3, but
	 * faster rotation may produce larger values. This setting depends on the
	 * device and operating system and is usually configurable by the user. This
	 * property applies only to the `MouseEvent.mouseWheel` event.
	 */
	public var delta:Int;

	public var isRelatedObjectInaccessible:Bool;

	/**
	 * The horizontal coordinate at which the event occurred relative to the
	 * containing sprite.
	 */
	public var localX:Float;

	/**
	 * The vertical coordinate at which the event occurred relative to the
	 * containing sprite.
	 */
	public var localY:Float;

	#if flash
	@:noCompletion @:dox(hide) @:require(flash11_2) public var movementX:Float;
	#end
	#if flash
	@:noCompletion @:dox(hide) @:require(flash11_2) public var movementY:Float;
	#end

	/**
	 * A reference to a display list object that is related to the event. For
	 * example, when a `mouseOut` event occurs,
	 * `relatedObject` represents the display list object to which the
	 * pointing device now points. This property applies to the
	 * `mouseOut`, `mouseOver`, `rollOut`, and
	 * `rollOver` events.
	 *
	 * The value of this property can be `null` in two
	 * circumstances: if there no related object, or there is a related object,
	 * but it is in a security sandbox to which you don't have access. Use the
	 * `isRelatedObjectInaccessible()` property to determine which of
	 * these reasons applies.
	 */
	public var relatedObject:InteractiveObject;

	/**
	 * Indicates whether the Shift key is active(`true`) or inactive
	 * (`false`).
	 */
	public var shiftKey:Bool;

	/**
	 * The horizontal coordinate at which the event occurred in global Stage
	 * coordinates. This property is calculated when the `localX`
	 * property is set.
	 */
	public var stageX:Float;

	/**
	 * The vertical coordinate at which the event occurred in global Stage
	 * coordinates. This property is calculated when the `localY`
	 * property is set.
	 */
	public var stageY:Float;

	/**
	 * Creates an Event object that contains information about mouse events.
	 * Event objects are passed as parameters to event listeners.
	 *
	 * @param type          The type of the event. Possible values are:
	 *                      `MouseEvent.CLICK`,
	 *                      `MouseEvent.DOUBLE_CLICK`,
	 *                      `MouseEvent.MOUSE_DOWN`,
	 *                      `MouseEvent.MOUSE_MOVE`,
	 *                      `MouseEvent.MOUSE_OUT`,
	 *                      `MouseEvent.MOUSE_OVER`,
	 *                      `MouseEvent.MOUSE_UP`,
	 *                      `MouseEvent.MIDDLE_CLICK`,
	 *                      `MouseEvent.MIDDLE_MOUSE_DOWN`,
	 *                      `MouseEvent.MIDDLE_MOUSE_UP`,
	 *                      `MouseEvent.RIGHT_CLICK`,
	 *                      `MouseEvent.RIGHT_MOUSE_DOWN`,
	 *                      `MouseEvent.RIGHT_MOUSE_UP`,
	 *                      `MouseEvent.MOUSE_WHEEL`,
	 *                      `MouseEvent.ROLL_OUT`, and
	 *                      `MouseEvent.ROLL_OVER`.
	 * @param bubbles       Determines whether the Event object participates in
	 *                      the bubbling phase of the event flow.
	 * @param cancelable    Determines whether the Event object can be canceled.
	 * @param localX        The horizontal coordinate at which the event occurred
	 *                      relative to the containing sprite.
	 * @param localY        The vertical coordinate at which the event occurred
	 *                      relative to the containing sprite.
	 * @param relatedObject The complementary InteractiveObject instance that is
	 *                      affected by the event. For example, when a
	 *                      `mouseOut` event occurs,
	 *                      `relatedObject` represents the display
	 *                      list object to which the pointing device now points.
	 * @param ctrlKey       On Windows or Linux, indicates whether the Ctrl key
	 *                      is activated. On Mac, indicates whether either the
	 *                      Ctrl key or the Command key is activated.
	 * @param altKey        Indicates whether the Alt key is activated(Windows
	 *                      or Linux only).
	 * @param shiftKey      Indicates whether the Shift key is activated.
	 * @param buttonDown    Indicates whether the primary mouse button is
	 *                      pressed.
	 * @param delta         Indicates how many lines should be scrolled for each
	 *                      unit the user rotates the mouse wheel. A positive
	 *                      delta value indicates an upward scroll; a negative
	 *                      value indicates a downward scroll. Typical values are
	 *                      1 to 3, but faster rotation may produce larger
	 *                      values. This parameter is used only for the
	 *                      `MouseEvent.mouseWheel` event.
	 */
	public function new(type:String, bubbles:Bool = true, cancelable:Bool = false, localX:Float = 0, localY:Float = 0, relatedObject:InteractiveObject = null,
		ctrlKey:Bool = false, altKey:Bool = false, shiftKey:Bool = false, buttonDown:Bool = false, delta:Int = 0, commandKey:Bool = false, clickCount:Int = 0);

	/**
	 * Instructs Flash Player or Adobe AIR to render after processing of this
	 * event completes, if the display list has been modified.
	 *
	 */
	public function updateAfterEvent():Void;
}
#else
typedef MouseEvent = flash.events.MouseEvent;
#end