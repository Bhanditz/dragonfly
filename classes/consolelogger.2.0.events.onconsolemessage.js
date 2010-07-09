// Autogenerated by hob
window.cls || (window.cls = {});
cls.ConsoleLogger || (cls.ConsoleLogger = {});
cls.ConsoleLogger["2.0"] || (cls.ConsoleLogger["2.0"] = {});

cls.ConsoleLogger["2.0"].ConsoleMessage = function(arr)
{
  /** 
    * The window ID is shared across scope. Notably, it's the same as in the ecmascript debugger.
    * INTERNAL: The value is from Window::id
    */
  this.windowID = arr[0];
  /** 
    * 
    * The number of seconds since 1970-01-01T00:00:00Z.
    */
  this.time = arr[1];
  /** 
    * Description of the error. Sometimes this message only makes sense when
    * displayed in a monospace font.
    */
  this.description = arr[2];
  /** 
    * The URL of the entity (document, script, style file, etc) that caused the
    * message to be generated.
    */
  this.uri = arr[3];
  /** 
    * The context in which the message was generated; it is intended for human
    * consumption and provides additional information about the context for the
    * message.
    */
  this.context = arr[4];
  /** 
    * The component in Opera that generated the message
    * One of:
    * - "ecmascript"
    * - "java"
    * - "m2"
    * - "network"
    * - "xml"
    * - "html"
    * - "css"
    * - "xslt"
    * - "svg"
    * - "bittorrent"
    * - "voice"
    * - "widget"
    * - "selftest"
    */
  this.source = arr[5];
  /** 
    * One of:
    * - "debug"
    * - "verbose"
    * - "information"
    * - "error"
    * - "critical"
    */
  this.severity = arr[6];
};
