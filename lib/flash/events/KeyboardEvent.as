package flash.events {
	
	
	import flash.ui.KeyLocation;
	
	
	/**
	 * @externs
	 * A KeyboardEvent object id dispatched in response to user input through a
	 * keyboard. There are two types of keyboard events:
	 * `KeyboardEvent.KEY_DOWN` and `KeyboardEvent.KEY_UP`
	 *
	 * Because mappings between keys and specific characters vary by device and
	 * operating system, use the TextEvent event type for processing character
	 * input.
	 *
	 * To listen globally for key events, listen on the Stage for the capture
	 * and target or bubble phase.
	 * 
	 */
	public class KeyboardEvent extends Event {
		
		
		/**
		 * The `KeyboardEvent.KEY_DOWN` constant defines the value of the
		 * `type` property of a `keyDown` event object.
		 *
		 * This event has the following properties:
		 */
		public static const KEY_DOWN:String = "keyDown";
		
		/**
		 * The `KeyboardEvent.KEY_UP` constant defines the value of the
		 * `type` property of a `keyUp` event object.
		 *
		 * This event has the following properties:
		 */
		public static const KEY_UP:String = "keyUp";
		
		
		/**
		 * Indicates whether the Alt key is active(`true`) or inactive
		 * (`false`) on Windows; indicates whether the Option key is
		 * active on Mac OS.
		 */
		public var altKey:Boolean;
		
		/**
		 * Contains the character code value of the key pressed or released. The
		 * character code values are English keyboard values. For example, if you
		 * press Shift+3, `charCode` is # on a Japanese keyboard, just as
		 * it is on an English keyboard.
		 *
		 * **Note: **When an input method editor(IME) is running,
		 * `charCode` does not report accurate character codes.
		 */
		public var charCode:int;
		
		/**
		 * On Windows and Linux, indicates whether the Ctrl key is active
		 * (`true`) or inactive(`false`); On Mac OS, indicates
		 * whether either the Ctrl key or the Command key is active.
		 */
		public var ctrlKey:Boolean;
		
		public var commandKey:Boolean;
		
		public var controlKey:Boolean;
		
		/**
		 * The key code value of the key pressed or released.
		 *
		 * **Note: **When an input method editor(IME) is running,
		 * `keyCode` does not report accurate key codes.
		 */
		public var keyCode:int;
		
		/**
		 * Indicates the location of the key on the keyboard. This is useful for
		 * differentiating keys that appear more than once on a keyboard. For
		 * example, you can differentiate between the left and right Shift keys by
		 * the value of this property: `KeyLocation.LEFT` for the left and
		 * `KeyLocation.RIGHT` for the right. Another example is
		 * differentiating between number keys pressed on the standard keyboard
		 * (`KeyLocation.STANDARD`) versus the numeric keypad
		 * (`KeyLocation.NUM_PAD`).
		 */
		public var keyLocation:uint;
		
		/**
		 * Indicates whether the Shift key modifier is active(`true`) or
		 * inactive(`false`).
		 */
		public var shiftKey:Boolean;
		
		
		/**
		 * Creates an Event object that contains specific information about keyboard
		 * events. Event objects are passed as parameters to event listeners.
		 * 
		 * @param type             The type of the event. Possible values are:
		 *                         `KeyboardEvent.KEY_DOWN` and
		 *                         `KeyboardEvent.KEY_UP`
		 * @param bubbles          Determines whether the Event object participates
		 *                         in the bubbling stage of the event flow.
		 * @param cancelable       Determines whether the Event object can be
		 *                         canceled.
		 * @param charCodeValue    The character code value of the key pressed or
		 *                         released. The character code values returned are
		 *                         English keyboard values. For example, if you press
		 *                         Shift+3, the `Keyboard.charCode()`
		 *                         property returns # on a Japanese keyboard, just as
		 *                         it does on an English keyboard.
		 * @param keyCodeValue     The key code value of the key pressed or released.
		 * @param keyLocationValue The location of the key on the keyboard.
		 * @param ctrlKeyValue     On Windows, indicates whether the Ctrl key is
		 *                         activated. On Mac, indicates whether either the
		 *                         Ctrl key or the Command key is activated.
		 * @param altKeyValue      Indicates whether the Alt key modifier is
		 *                         activated(Windows only).
		 * @param shiftKeyValue    Indicates whether the Shift key modifier is
		 *                         activated.
		 * @param commandKeyValue  Indicates whether the Command key modifier is
		 *                         activated.
		 */
		public function KeyboardEvent (type:String, bubbles:Boolean = false, cancelable:Boolean = false, charCodeValue:int = 0, keyCodeValue:int = 0, keyLocationValue:uint = 0, ctrlKeyValue:Boolean = false, altKeyValue:Boolean = false, shiftKeyValue:Boolean = false, controlKeyValue:Boolean = false, commandKeyValue:Boolean = false) { super (type); }
		
		
	}
	
	
}