(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{220:function(e,t,a){"use strict";a.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=a(6),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("Breadcrumb"),e._v(" "),a("h1",{attrs:{id:"titanium-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI")]),e._v(" "),a("ProxySummary"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The UI module is responsible for native user-interface components and interaction inside Titanium. The goal of the UI module is to provide a native experience along with native performance by compiling Javascript code into their native counterparts as part of the build process.")]),e._v(" "),a("h3",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design","aria-hidden":"true"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("p",[e._v("The UI module is broken down into 3 major area:")]),e._v(" "),a("h4",{attrs:{id:"views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[e._v("#")]),e._v(" Views")]),e._v(" "),a("p",[e._v("Views are containers that host visual elements such as controls or other views. Views can have their properties customized, such as their border color and radius, can fire events such as swipe events or touches, and can optionally contain a hierarchy or other views as children. In Titanium, most views are specialized to perform both a visual function and set of interaction behaviors such as Table View or Coverflow View. Views are always named with the suffix View.")]),e._v(" "),a("h4",{attrs:{id:"controls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controls","aria-hidden":"true"}},[e._v("#")]),e._v(" Controls")]),e._v(" "),a("p",[e._v("Controls, or sometimes referred as widgets, are visual elements such as sliders, buttons and switches. They provide a visual element which has a defined behavior and typical have special configuration and special events. Controls themselves are views and also inherit a views properties, functions and events.")]),e._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("Windows are typically top-level visual constructs that are the main part of your interface. An application will always have at least one window and windows can take different shapes and sizes, can have display and interaction properties such as fullscreen or modal and can be customized, such as changing their opacity or background color. Windows themselves are views and also inherit a views properties, functions and events. There are a few specialization of Windows such as a Tab Group which offer additional behavior beyond the basic Window.")]),e._v(" "),a("h3",{attrs:{id:"creating-titanium-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-titanium-objects","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Titanium Objects")]),e._v(" "),a("p",[e._v("Titanium uses the Factory Pattern for constructing objects and a general naming pattern for APIs. For example, to construct a Alert Dialog, you call the method "),a("code",[e._v("Ti.UI.createAlertDialog")]),e._v(". To create a TextArea, you call the method "),a("code",[e._v("Ti.UI.createTextArea.")]),e._v(" Once an object is created, it will be available until it goes out of scope.")]),e._v(" "),a("h3",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations","aria-hidden":"true"}},[e._v("#")]),e._v(" Optimizations")]),e._v(" "),a("p",[e._v("UI objects are optimized by Titanium to not be realized into the drawing context and placed into the device UI surface until needed. That means that you can create UI objects, set their properties and add them to their hierarchy without much worry about memory or performance. When the native drawing surface needs to render a specific view or control, Titanium will automatically create the view as needed. Additionally, Titanium is optimized to also release memory once the view is no longer needed, on screen or in low memory situations. However, it's a good idea to help Titanium along in certain cases where you are no longer using objects. For example, you should call close on a Window instance when you are no longer using it. You can safely call open on the window again to re-open it.")]),e._v(" "),a("h3",{attrs:{id:"global-context-and-threading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-context-and-threading","aria-hidden":"true"}},[e._v("#")]),e._v(" Global Context and Threading "),a("Badge",{attrs:{text:"STILL VALID?",type:"warn"}})],1),e._v(" "),a("p",[e._v("Be careful with the objects that are created in app.js but only used once. Since the app.js context is global and generally is not garbage collected until the application exits, you should think about the design of your application as it relates to this fact.")]),e._v(" "),a("p",[e._v("Window objects that are opened up with the url property to another JavaScript file provide a nice way to decompose your application into smaller units.")]),e._v(" "),a("p",[e._v("Additionally, Window objects created with a url value run in a separate JavaScript context and thread. While all UI processing is done on the main UI thread, other processing inside a Window or the app.js that does not have UI interaction will run in its own thread.")]),e._v(" "),a("p",[e._v("The other benefit of using the url property is that when the window is closed, resources allocated in the window's context can be immediately cleaned up, saving resources such as memory and CPU.")]),e._v(" "),a("p",[e._v('For more information, see the sections "Sub-contexts" and "Passing Data Between Contexts" on the Window reference page.')]),e._v(" "),a("h3",{attrs:{id:"portability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portability","aria-hidden":"true"}},[e._v("#")]),e._v(" Portability")]),e._v(" "),a("p",[e._v("Titanium components are designed to be portable across as many platforms as it supports. However, there are cases where a device either does not support a specific feature or capability or where it support additional functionality. For cases where the device OS supports capabilities that other platforms do not, we attempt to place those capabilities in a separate namespace, such as Titanium.UI.iPhone. However, in cases where the control is in a common namespace and support additional features, we continue to place that functionality directly on the object.")]),e._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[e._v("Event listeners must be defined before their respective events are likely to be fired, otherwise they are not guaranteed to be called. The open and focus Window event listeners, for instance, must be defined before the window is opened.")]),e._v(" "),a("p",[e._v("Evaluating events as late as possible while bearing the above consideration in mind, however, can significantly improve application responsiveness. For example, an event listener for a click event may be defined after the parent window has been opened.")]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);o.options.__file="ui.md";t.default=o.exports}}]);